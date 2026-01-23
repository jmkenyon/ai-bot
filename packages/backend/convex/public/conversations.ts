import { mutation, query } from "../_generated/server";
import { components } from "../_generated/api";
import { ConvexError, v } from "convex/values";
import { supportAgent } from "../system/ai/agents/supportAgent";
import { saveMessage } from "@convex-dev/agent";

export const getOne = query({
  args: {
    conversationId: v.id("conversations"),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId);
    if (!session || session.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Contact session not found",
      });
    }
    const conversation = await ctx.db.get(args.conversationId);

    if (!conversation) return null;

    if (conversation.contactSessionId !== session._id) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Conversation does not belong to contact session",
      });
    }

    return {
      _id: conversation._id,
      threadId: conversation.threadId,
      status: conversation.status,
    };
  },
});

export const create = mutation({
  args: {
    organizationId: v.string(),
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId);
    if (!session || session.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Contact session not found",
      });
    }

    const { threadId } = await supportAgent.createThread(ctx, {
      userId: args.organizationId,
    });

    await saveMessage(ctx, components.agent, {
      threadId,
      message: {
        role: "assistant",
        content: "Hello, how can I help you today?",
      }
    })

    const conversationId = await ctx.db.insert("conversations", {
      threadId,
      organizationId: args.organizationId,
      contactSessionId: session._id,
      status: "open",
    });
    return conversationId;
  },
});
