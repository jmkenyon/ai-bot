import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  conversations: defineTable({
    threadId: v.string(),
    organizationId: v.string(),
    contactSessionId: v.string(),
    status: v.union(
      v.literal("open"),
      v.literal("escalated"),
      v.literal("closed")
    ),
  })
    .index("by_organizationId", ["organizationId"])
    .index("by_contactSessionId", ["contactSessionId"])
    .index("by_thread_id", ["threadId"])
    .index("by_status_and_organization_id", ["status", "organizationId"]),

  contactSessions: defineTable({
    name: v.string(),
    email: v.string(),
    organizationId: v.string(),
    expiresAt: v.number(),
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
  })
    .index("by_organizationId", {
      fields: ["organizationId"],
    })
    .index("by_expiresAt", {
      fields: ["expiresAt"],
    }),
  users: defineTable({
    name: v.string(),
  }),
});
