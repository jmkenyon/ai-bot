import {v} from "convex/values";
import { mutation } from "../_generated/server";

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const create = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        organizationId: v.string(),
        metadata: v.optional(
            v.object({
              userAgent: v.string(),
              platform: v.string(),
              language: v.string(),
              timezone: v.string(),
              screenResolution: v.string(),
              viewPortSize: v.string(),
              currentUrl: v.string(),
              referrer: v.string(),
            }) 
          ),
    },
    handler: async (ctx, args) => {
        const expiresAt = Date.now() + SESSION_DURATION;
        const contactSessionId = await ctx.db.insert("contactSessions", {
            name: args.name,
            email: args.email,
            organizationId: args.organizationId,
            expiresAt,
            metadata: args.metadata,
        });
        return contactSessionId;
    }
})

export const validate = mutation({
    args: {
        contactSessionId: v.id("contactSessions"),

    },
    handler: async (ctx, args) => {
        const contactSession = await ctx.db.get(args.contactSessionId);
        if (!contactSession) {
            return {valid: false, reason: "not_found"};
        }
        if (contactSession.expiresAt < Date.now()) {
            return {valid: false, reason: "expired"};
        }
        return {valid: true, contactSession};
    }
})