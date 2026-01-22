import {v} from "convex/values";
import {  action } from "../_generated/server";
import {createClerkClient} from "@clerk/backend";

const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY || "",
});

export const validateOrganization = action({
    args: {
        organizationId: v.string(),
    },
    handler: async (ctx, args) => {
        try {
            await clerkClient.organizations.getOrganization({
                organizationId: args.organizationId,
            });
            return {valid: true};
        } catch (error) {
            return {valid: false, reason: "organization_not_found"};
        }
    }
})