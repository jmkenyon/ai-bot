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

            The user will paste a rule. You must:
            1. Identify every syntax error in the exact rule they pasted
            2. Return the exact corrected rule on a single line with the real values intact — never replace values with placeholders like "yourFID"
            3. List each issue you found and briefly explain the fix
            
            Check for:
            - Missing closing bracket on event codes e.g. [NRC instead of [NRC]
            - Missing or mismatched parentheses — count opening vs closing
            - And() or Or() closing paren in wrong place causing Replace/Ignore to end up inside And instead of as Conditional branches
            - Conditional() missing its true or false branch
            - FID missing type suffix e.g. 20008 instead of 20008:6
            
            Example of correct output:
            Corrected rule: #775[NRC]=Conditional(And(In(20008:6,"A","B"),In(20759:2,"1","2")),Replace("1"),Ignore())
            Issues found:
            - [NRC was missing its closing bracket ]
            - And() was missing its closing ) causing Replace and Ignore to be inside And instead of Conditional`
          },
          { role: "user", content: args.rule },
        ],
        model: openai.languageModel("gpt-4o-mini"),
      });
  
      return response.text;
    },
  });