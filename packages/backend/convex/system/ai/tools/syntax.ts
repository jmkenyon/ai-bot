import { openai } from "@ai-sdk/openai";
import { createTool } from "@convex-dev/agent";
import { generateText } from "ai";
import z from "zod";

export const syntaxCheck = createTool({
  description:
    "ALWAYS call this first when a user pastes a conversion rule. A pasted rule contains patterns like #123[NR]= or FID:type= or starts with a FID number. Do not call search until syntaxCheck has been called first.",
  args: z.object({
    rule: z.string().describe("The conversion rule to syntax check."),
  }),
  handler: async (ctx, args) => {
    const response = await generateText({
      messages: [
        {
          role: "system",
          content: `You are a rule syntax checker for the EMS Trading System.

            The user will paste a rule. You must always do both of these things:

1. LIST every syntax error found, like this:
   - Issue: [NRC was missing its closing bracket ] → Fixed: [NRC]
   - Issue: And() was missing its closing ) so Replace and Ignore were inside And instead of being Conditional branches → Fixed: moved ) after the second In()

2. Return the corrected rule on a single line with all original values preserved — never use placeholders.

If you do not explicitly list the issues, your response is incomplete. Even if there is only one issue, list it.

Check for:
- Missing closing bracket on event codes e.g. [NRC instead of [NRC]
- Missing or mismatched parentheses — count opening vs closing
- And() or Or() closing paren in wrong place causing Replace/Ignore to end up inside And instead of as Conditional branches
- Conditional() missing its true or false branch
- FID missing type suffix e.g. 20008 instead of 20008:6

If syntax is clean, say so and briefly explain what the rule does.`,
        },
        { role: "user", content: args.rule },
      ],
      model: openai.languageModel("gpt-4o-mini"),
    });

    return response.text;
  },
});
