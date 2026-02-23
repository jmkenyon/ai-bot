// convex/fids.ts
// Query functions for FID lookups - used by the AI agent
// These replace any AI guessing with deterministic database lookups

import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Look up a FID by its number
 * e.g. lookupByFidNumber({ fidNumber: 20008 })
 * Returns: { fieldName: "CUSTOMER", dataType: "STRING", description: "Customer" }
 */
export const lookupByFidNumber = query({
  args: { fidNumber: v.number() },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("fidMappings")
      .withIndex("by_fid_number", (q) => q.eq("fidNumber", args.fidNumber))
      .first();

    if (!result) {
      return { error: `FID ${args.fidNumber} does not exist in the mapping file. Do not guess.` };
    }

    return {
      fieldName: result.fieldName,
      fidNumber: result.fidNumber,
      dataType: result.dataType,
      description: result.description,
    };
  },
});

/**
 * Look up a FID by its field name
 * e.g. lookupByFieldName({ fieldName: "EXCHANGE" })
 * Returns: { fidNumber: 20400, dataType: "STRING", description: "Exchange" }
 */
export const lookupByFieldName = query({
  args: { fieldName: v.string() },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("fidMappings")
      .withIndex("by_field_name", (q) =>
        q.eq("fieldName", args.fieldName.toUpperCase())
      )
      .first();

    if (!result) {
      return { error: `Field "${args.fieldName}" does not exist in the mapping file. Do not guess.` };
    }

    return {
      fieldName: result.fieldName,
      fidNumber: result.fidNumber,
      dataType: result.dataType,
      description: result.description,
    };
  },
});

/**
 * Search FIDs by description keyword
 * e.g. searchByDescription({ keyword: "exchange" })
 * Returns all FIDs whose description contains the keyword
 */
export const searchByDescription = query({
  args: { keyword: v.string() },
  handler: async (ctx, args) => {
    const all = await ctx.db.query("fidMappings").collect();
    const keyword = args.keyword.toLowerCase();

    return all
      .filter(
        (fid) =>
          fid.description.toLowerCase().includes(keyword) ||
          fid.fieldName.toLowerCase().includes(keyword)
      )
      .slice(0, 20) // limit results
      .map((fid) => ({
        fieldName: fid.fieldName,
        fidNumber: fid.fidNumber,
        dataType: fid.dataType,
        description: fid.description,
      }));
  },
});

/**
 * Validate that a list of FID numbers all exist
 * Use this before generating any rule to verify every FID referenced is real
 * e.g. validateFids({ fidNumbers: [20008, 20759, 20400] })
 */
export const validateFids = query({
  args: { fidNumbers: v.array(v.number()) },
  handler: async (ctx, args) => {
    const results = [];

    for (const fidNumber of args.fidNumbers) {
      const found = await ctx.db
        .query("fidMappings")
        .withIndex("by_fid_number", (q) => q.eq("fidNumber", fidNumber))
        .first();

      results.push({
        fidNumber,
        valid: !!found,
        fieldName: found?.fieldName ?? null,
        dataType: found?.dataType ?? null,
        description: found?.description ?? null,
      });
    }

    const invalid = results.filter((r) => !r.valid);

    return {
      allValid: invalid.length === 0,
      results,
      invalid: invalid.map((r) => r.fidNumber),
      message:
        invalid.length > 0
          ? `WARNING: These FIDs do not exist and must not be used: ${invalid.map((r) => r.fidNumber).join(", ")}`
          : "All FIDs validated successfully.",
    };
  },
});