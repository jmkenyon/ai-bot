import { openai } from "@ai-sdk/openai";
import { createTool } from "@convex-dev/agent";
import { generateText } from "ai";
import z from "zod";


export const syntaxCheck = createTool({
    description: "ALWAYS call this first when a user pastes a conversion rule. A pasted rule contains patterns like #123[NR]= or FID:type= or starts with a FID number. Do not call search until syntaxCheck has been called first.",
    args: z.object({
      rule: z.string().describe("The conversion rule to syntax check."),
    }),
    handler: async (ctx, args) => {
      const response = await generateText({
        messages: [
          {
            role: "system",
            content: `You are a conversion rule syntax checker for the EMS Trading System.
  Analyse the pasted rule and check for:
  - Missing or mismatched parentheses and brackets — count them explicitly
  - Missing closing bracket on event codes e.g. [NRC instead of [NRC]
  - Conditional() missing its true or false branch
  - And() or Or() closing paren in wrong place — Replace/Ignore ending up inside And instead of as Conditional branches
  - FID missing type suffix e.g. 20008 instead of 20008:6
  - Wrong number of arguments for any rule type
  
  Return the corrected rule on a single line, list each issue found, and explain what was wrong.
  If syntax is clean say so and explain what the rule does.`,
          },
          { role: "user", content: args.rule },
        ],
        model: openai.languageModel("gpt-4o-mini"),
      });
  
      return response.text;
    },
  });