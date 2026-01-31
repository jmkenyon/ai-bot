import { ConvexError, v } from "convex/values";
import { action, mutation, query, QueryCtx } from "../_generated/server";
import {
  contentHashFromArrayBuffer,
  Entry,
  EntryId,
  guessMimeTypeFromContents,
  guessMimeTypeFromExtension,
  RAG,
  vEntryId,
} from "@convex-dev/rag";
import { extractTextContent } from "../lib/extractTextContent";
import rag from "../system/ai/rag";
import { Id } from "../_generated/dataModel";
import { paginationOptsValidator } from "convex/server";

function guessMimeType(filename: string, bytes: ArrayBuffer): string {
  return (
    guessMimeTypeFromExtension(filename) ||
    guessMimeTypeFromContents(bytes) ||
    "application/octet-stream"
  );
}

function chunkText(text: string, maxChars = 3000): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    chunks.push(text.slice(start, start + maxChars));
    start += maxChars;
  }

  return chunks;
}

export const deleteFile = mutation({
  args: {
    entryId: vEntryId,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "User not authenticated",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "User does not belong to an organization",
      });
    }

    const namespace = await rag.getNamespace(ctx, { namespace: orgId });

    if (!namespace) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Namespace not found",
      });
    }
    const entry = await rag.getEntry(ctx, {
      entryId: args.entryId,
    });

    if (!entry) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Entry not found",
      });
    }
    if (entry.metadata?.uploadedBy !== orgId) {
      throw new ConvexError({
        code: "FORBIDDEN",
        message: "You do not have permission to delete this file",
      });
    }

    if (entry.metadata?.storageId) {
      try {
        await ctx.storage.delete(entry.metadata.storageId as Id<"_storage">);
      } catch (err) {
        console.warn("Storage file already deleted:", entry.metadata.storageId);
      }
    }

    await rag.deleteAsync(ctx, {
      entryId: args.entryId,
    });
  },
});

export const addFile = action({
  args: {
    filename: v.string(),
    mimeType: v.string(),
    bytes: v.bytes(),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "User not authenticated",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "User does not belong to an organization",
      });
    }

    const MAX_FILE_BYTES = 5_000_000; // 5MB

    if (args.bytes.byteLength > MAX_FILE_BYTES) {
      throw new ConvexError({
        code: "FILE_TOO_LARGE",
        message: "File too large. Max size is 5MB.",
      });
    }

    const { bytes, filename, category } = args;

    const mimeType = args.mimeType || guessMimeType(filename, bytes);
    const blob = new Blob([bytes], { type: mimeType });

    const storageId = await ctx.storage.store(blob);

    const text = await extractTextContent(ctx, {
      storageId,
      filename,
      mimeType,
      bytes,
    });

    const { entryId, created } = await rag.add(ctx, {
      namespace: orgId,
      text,
      key: filename,
      title: filename,
      metadata: {
        storageId,
        uploadedBy: orgId,
        filename,
        category: category || null,
      } as EntryMetadata,
      contentHash: await contentHashFromArrayBuffer(bytes),
    });
    if (!created) {
      // Retrieve the existing entry to get its storage URL
      const existingEntry = await rag.getEntry(ctx, { entryId });
      const existingStorageId = (
        existingEntry?.metadata as EntryMetadata | undefined
      )?.storageId;
      return {
        url: existingStorageId
          ? await ctx.storage.getUrl(existingStorageId)
          : null,
      };
    }
    return {
      url: await ctx.storage.getUrl(storageId),
    };
  },
});

export const list = query({
  args: {
    category: v.optional(v.string()),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "User not authenticated",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "User does not belong to an organization",
      });
    }

    const namespace = await rag.getNamespace(ctx, { namespace: orgId });

    if (!namespace) {
      return { page: [], isDone: true, continueCursor: "" };
    }

    const results = await rag.list(ctx, {
      namespaceId: namespace.namespaceId,
      paginationOpts: args.paginationOpts,
    });

    const files = (
      await Promise.all(
        results.page.map((entry) =>
          convertEntrytoPublicFile(ctx, entry).catch(() => null)
        )
      )
    ).filter(Boolean) as PublicFile[];

    const filteredFiles = args.category
      ? files.filter((file) => file.category === args.category)
      : files;

    return {
      page: filteredFiles,
      isDone: results.isDone,
      continueCursor: results.continueCursor,
    };
  },
});

export type PublicFile = {
  id: EntryId;
  name: string;
  type: string;
  size: string;
  status: "ready" | "processing" | "error";
  url: string | null;
  category?: string;
};

type EntryMetadata = {
  storageId: Id<"_storage">;
  filename: string;
  uploadedBy: string;
  category: string | null;
};

async function convertEntrytoPublicFile(
  ctx: QueryCtx,
  entry: Entry
): Promise<PublicFile> {
  const metadata = entry.metadata as EntryMetadata | undefined;

  const storageId = metadata?.storageId;

  let fileSize = "unknown";
  if (storageId) {
    const storageMetadata = await ctx.db.system.get(storageId);
    if (!storageMetadata) {
      // Hide orphaned entries forever
      throw new Error("Orphaned entry");
    }
    fileSize = formatFileSize(storageMetadata.size);
  }

  const filename = entry.key || "unknown";

  const extension = filename.split(".").pop()?.toLowerCase() || "txt";

  let status: "ready" | "processing" | "error" = "error";

  if (entry.status === "ready") {
    status = "ready";
  } else if (entry.status === "pending") {
    status = "processing";
  } else {
    status = "error";
  }

  const url = storageId ? await ctx.storage.getUrl(storageId) : null;

  return {
    id: entry.entryId,
    name: filename,
    type: extension,
    size: fileSize,
    status,
    url,
    category: metadata?.category || undefined,
  };
}

function formatFileSize(bytes: number): string {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
}
