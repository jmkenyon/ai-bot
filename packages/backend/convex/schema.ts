import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
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
