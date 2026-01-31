import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import type { StorageActionWriter } from "convex/server";
import { assert } from "convex-helpers";
import { Id } from "../_generated/dataModel";

const AI_MODELS = {
  image: openai.languageModel("gpt-4o-mini"),
  pdf: openai.languageModel("gpt-4o"),
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

const SYSTEM_PROMPTS = {
  image:
    "You are an AI assistant that extracts and describes text content from images. Provide a concise summary of the text found in the image.",
  pdf: `
    Extract the document text faithfully.
    
    Rules:
    - Do NOT summarize.
    - Do NOT explain.
    - Do NOT add commentary.
    - Preserve headings if present.
    - If the document is long, extract as much as fits.
    
    Output plain text only.
    `.trim(),
  html: "You are an AI assistant that extracts and summarizes text content from HTML web pages. Provide a concise summary of the main points on the page.",
};

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
  const { storageId, filename, bytes, mimeType } = args;

  const url = await ctx.storage.getUrl(storageId);
  assert(url, "Failed to get storage URL");

  if (SUPPORTED_IMAGE_TYPES.some((type) => type === mimeType)) {
    return extractImageText(url);
  }

  if (mimeType.toLowerCase().includes("pdf")) {
    return extractPdfText(url, mimeType, filename);
  }

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
  const arrayBuffer =
    bytes || (await (await ctx.storage.get(storageId))?.arrayBuffer());

  if (!arrayBuffer) {
    throw new Error("Failed to read file contents");
  }
  const text = new TextDecoder().decode(arrayBuffer);

  if (mimeType.toLocaleLowerCase() !== "text/plain") {
    const result = await generateText({
      model: AI_MODELS.html,
      system: SYSTEM_PROMPTS.html,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text,
            },
            {
              type: "text",
              text: "Extract the text and print it in a markdown format without explaining that you'll do so.",
            },
          ],
        },
      ],
    });
    return result.text;
  }
  return text;
}

async function extractPdfText(
  url: string,
  mimeType: string,
  filename: string
): Promise<string> {
  const result = await generateText({
    model: AI_MODELS.pdf,
    system: SYSTEM_PROMPTS.pdf,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "file",
            data: new URL(url),
            mediaType: mimeType,
            filename,
          },
          {
            type: "text",
            text: "Please extract the text from the PDF and print it without explaing that you'll do so.",
          },
        ],
      },
    ],
  });
  return result.text;
}

async function extractImageText(url: string): Promise<string> {
  const result = await generateText({
    model: AI_MODELS.image,
    system: SYSTEM_PROMPTS.image,
    messages: [
      {
        role: "user",
        content: [{ type: "image", image: new URL(url) }],
      },
    ],
  });
  return result.text;
}
