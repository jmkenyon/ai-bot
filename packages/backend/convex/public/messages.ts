import { ConvexError, v } from "convex/values";
import { action, query } from "../_generated/server";
import { internal } from "../_generated/api";
import { supportAgent } from "../system/ai/agents/supportAgent";
import { paginationOptsValidator } from "convex/server";
import { resolveConversation } from "../system/ai/tools/resolveConversation";
import { search } from "../system/ai/tools/search";

export const create = action({
  args: {
    prompt: v.string(),
    threadId: v.string(),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.runQuery(
      internal.system.contactSessions.getOne,
      { contactSessionId: args.contactSessionId }
    );
    if (!contactSession || contactSession.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Contact session not found or expired",
      });
    }
    const conversation = await ctx.runQuery(
      internal.system.conversations.getByThreadId,
      { threadId: args.threadId }
    );
    if (!conversation) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Conversation not found",
      });
    }
    if (conversation.contactSessionId !== args.contactSessionId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Conversation does not belong to contact session",
      });
    }

    if (conversation.status === "closed") {
      throw new ConvexError({
        code: "FAILED_PRECONDITION",
        message: "Conversation is closed",
      });
    }

    // Refresh contact session to extend its validity
    await ctx.runMutation(internal.system.contactSessions.refresh, {
      contactSessionId: args.contactSessionId,
    });

    await supportAgent.generateText(
      ctx,
      {
        threadId: args.threadId,
      },
      {
        prompt: args.prompt,
        tools: {
          resolveConversation,
          search,
        },
      } as any
    );
  },
});

export const getMany = query({
  args: {
    threadId: v.string(),
    paginationOpts: paginationOptsValidator,
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.db.get(args.contactSessionId);

    if (!contactSession || contactSession.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Contact session not found or expired",
      });
    }

    const conversation = await ctx.db
      .query("conversations")
      .withIndex("by_thread_id", (q) => q.eq("threadId", args.threadId))
      .unique();

    if (
      !conversation ||
      conversation.contactSessionId !== args.contactSessionId
    ) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Conversation not found or does not belong to contact session",
      });
    }
    const paginated = await supportAgent.listMessages(ctx, {
      threadId: args.threadId,
      paginationOpts: args.paginationOpts,
    });
    return paginated;
  },
});
