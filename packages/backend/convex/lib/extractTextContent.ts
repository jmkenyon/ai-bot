import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import type { StorageActionWriter } from "convex/server";
import { assert } from "convex-helpers";
import { Id } from "../_generated/dataModel";

import { PDFParse } from "pdf-parse";

const AI_MODELS = {
  image: openai.languageModel("gpt-4o-mini"),
  html: openai.languageModel("gpt-4o"),
} as const;

const SUPPORTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "image/webp",
] as const;

export type ExtractTextContentArgs = {
  storageId: Id<"_storage">;
  filename: string;
  mimeType: string;
  bytes: ArrayBuffer;
};

export async function extractTextContent(
  ctx: { storage: StorageActionWriter },
  args: ExtractTextContentArgs
): Promise<string> {
  const { storageId, bytes, mimeType } = args;

  const url = await ctx.storage.getUrl(storageId);
  assert(url, "Failed to get storage URL");

  // Images → OCR via GPT (OK)
  if (SUPPORTED_IMAGE_TYPES.includes(mimeType as any)) {
    return extractImageText(url);
  }

  // PDFs → NO LLM (large-safe)
  if (mimeType.toLowerCase().includes("pdf")) {
    const buffer =
      bytes || (await (await ctx.storage.get(storageId))?.arrayBuffer());

    if (!buffer) {
      throw new Error("Failed to read PDF");
    }

    const parser = new PDFParse({
      data: Buffer.from(buffer),
    });

    const result = await parser.getText();
    await parser.destroy();

    return result.text || "";
  }
  // Text / HTML
  if (mimeType.toLowerCase().includes("text")) {
    return extractTextFileContext(ctx, storageId, bytes, mimeType);
  }

  throw new Error(`Unsupported mime type: ${mimeType}`);
}

async function extractTextFileContext(
  ctx: { storage: StorageActionWriter },
  storageId: Id<"_storage">,
  bytes: ArrayBuffer | undefined,
  mimeType: string
): Promise<string> {
  const buffer =
    bytes || (await (await ctx.storage.get(storageId))?.arrayBuffer());

  if (!buffer) {
    throw new Error("Failed to read file contents");
  }

  const text = new TextDecoder().decode(buffer);

  // Plain text → return directly
  if (mimeType.toLowerCase() === "text/plain") {
    return text;
  }

  // HTML → light cleanup via GPT (safe, small)
  const result = await generateText({
    model: AI_MODELS.html,
    system:
      "Extract readable text from the input. Do not summarize. Do not add commentary.",
    messages: [
      {
        role: "user",
        content: [{ type: "text", text }],
      },
    ],
  });

  return result.text;
}

async function extractImageText(url: string): Promise<string> {
  const result = await generateText({
    model: AI_MODELS.image,
    system:
      "Extract all readable text from the image. Do not summarize or explain.",
    messages: [
      {
        role: "user",
        content: [{ type: "image", image: new URL(url) }],
      },
    ],
  });

  return result.text;
}
