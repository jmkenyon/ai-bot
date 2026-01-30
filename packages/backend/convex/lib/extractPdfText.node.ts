"use node";

import pdf from "pdf-parse";
import type { StorageActionWriter } from "convex/server";
import { Id } from "../_generated/dataModel";

export async function extractPdfTextNode(
  ctx: { storage: StorageActionWriter },
  storageId: Id<"_storage">,
  bytes?: ArrayBuffer
): Promise<string> {
  const buffer =
    bytes || (await (await ctx.storage.get(storageId))?.arrayBuffer());

  if (!buffer) {
    throw new Error("Failed to read PDF");
  }

  const data = await pdf(Buffer.from(buffer));
  return data.text || "";
}