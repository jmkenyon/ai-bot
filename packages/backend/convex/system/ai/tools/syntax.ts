import { openai } from "@ai-sdk/openai";
import { createTool } from "@convex-dev/agent";
import { generateText } from "ai";
import z from "zod";

export const syntaxCheck = createTool({
    description:
      "ALWAYS call this first when a user pastes a conversion rule.",
    args: z.object({
      rule: z.string().describe("The conversion rule to syntax check."),
    }),
    handler: async (ctx, args) => {
      const issues: string[] = [];
      const rule = args.rule.trim();
  
      // 1. Check balanced parentheses
      let parenDepth = 0;
      let bracketDepth = 0;
      for (const ch of rule) {
        if (ch === '(') parenDepth++;
        if (ch === ')') parenDepth--;
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
        if (parenDepth < 0) issues.push("Unexpected closing parenthesis ')'");
        if (bracketDepth < 0) issues.push("Unexpected closing bracket ']'");
      }
      if (parenDepth !== 0) {
        issues.push(`Unbalanced parentheses: ${parenDepth > 0 ? `${parenDepth} unclosed '('` : `${Math.abs(parenDepth)} extra ')'`}`);
      }
      if (bracketDepth !== 0) {
        issues.push(`Unbalanced brackets: ${bracketDepth > 0 ? `${bracketDepth} unclosed '['` : `${Math.abs(bracketDepth)} extra ']'`}`);
      }
  
      // 2. Check target syntax: #tag[events]= or FID:type[events]=
      const targetMatch = rule.match(/^(#\d+|\d+:\d+)\[([A-Z]*)\]=(.*)/s);
      if (!targetMatch) {
        issues.push("Rule target must match #tag[events]= or FID:type[events]=");
      } else {
        const [, , events, body] = targetMatch;
        if (!events) issues.push("Event codes are empty inside brackets");
        if (!body) issues.push("Rule body after '=' is empty");
      }
  
      // 3. Check Conditional has 3 arguments
      const conditionalMatch = rule.match(/Conditional\(/);
      if (conditionalMatch) {
        // Count top-level commas inside Conditional(...)
        const startIdx = rule.indexOf('Conditional(') + 'Conditional('.length;
        let depth = 1;
        let commas = 0;
        for (let i = startIdx; i < rule.length && depth > 0; i++) {
          if (rule[i] === '(') depth++;
          if (rule[i] === ')') depth--;
          if (rule[i] === ',' && depth === 1) commas++;
        }
        if (commas !== 2) {
          issues.push(`Conditional() requires exactly 3 arguments (condition, trueBranch, falseBranch) — found ${commas + 1} argument(s)`);
        }
      }
  
      // 4. Check FIDs have type suffixes
      const fidRefs = rule.match(/\b(\d{4,5})(?=[,\)\"])/g);
      if (fidRefs) {
        for (const fid of fidRefs) {
          // Check it's not preceded by : (already has suffix)
          const idx = rule.indexOf(fid);
          if (idx > 0 && rule[idx - 1] !== ':' && !/^#/.test(rule.substring(idx - 1))) {
            // Verify there's no :N suffix
            const after = rule.substring(idx + fid.length, idx + fid.length + 2);
            if (!after.startsWith(':')) {
              issues.push(`FID ${fid} may be missing a type suffix (e.g. ${fid}:6)`);
            }
          }
        }
      }
  
      if (issues.length === 0) {
        return "Syntax is structurally valid. No issues found.";
      }
  
      return `Found ${issues.length} issue(s):\n${issues.map((i, idx) => `${idx + 1}. ${i}`).join('\n')}`;
    },
  });