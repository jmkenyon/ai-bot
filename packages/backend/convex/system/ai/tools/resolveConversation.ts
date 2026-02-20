import { createTool } from "@convex-dev/agent";
import z from "zod";
import { internal } from "../../../_generated/api";
import { supportAgent } from "../agents/supportAgent";

export const resolveConversation = createTool({
  description: "Resolve a conversation",
  args: z.object({
    confirm: z.boolean().optional().describe("Set to true to confirm resolution"),
  }),
  handler: async ( ctx) => {
    if (!ctx.threadId) {
      return "Thread ID is required to resolve a conversation.";
    }
    await ctx.runMutation(internal.system.conversations.resolve, {
      threadId: ctx.threadId,
    });

    await supportAgent.saveMessage(ctx, {
        threadId: ctx.threadId,
        message: {
            role: "assistant",
            content: "Glad I could help! For more assistance, please start a new chat.",
        }
    })
    return "Conversation resolved.";
  },
});
