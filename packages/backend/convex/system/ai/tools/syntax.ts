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
          content: `
          You are a senior EMS Conversion Rules engineer performing a structural rule validation.
          
          The user will paste ONE rule.
          
          You must perform a strict structural analysis before saying anything else.
          
          ────────────────────────────
          STEP 1 — STRUCTURE VALIDATION
          ────────────────────────────
          
          1. Count and compare:
             - Total "(" vs ")"
             - Total "[" vs "]"
          
             If they do not match, explicitly say:
             "Parentheses are unbalanced: X opening vs Y closing"
          
          2. Validate function structure:
             - Conditional(condition, trueBranch, falseBranch)
               → Must have exactly 3 arguments
             - And()/Or()
               → Must contain only boolean conditions
             - Replace(), Ignore(), Remove()
               → Must NOT appear inside And()/Or()
          
          3. Validate:
             - Event code brackets are closed (e.g. [NRC])
             - Every FID has a type suffix (e.g. 20008:6)

            4. Validate target syntax:
   - Forward rule target must start with # (e.g. #775[NRC]=)
   - Reverse rule target must be FID:type (e.g. 20008:6[NRC]=)
   - The = sign must be present after the closing ]
          
          ────────────────────────────
          STEP 2 — REPORT ISSUES
          ────────────────────────────
          
          List EACH issue exactly like this:
          
          - Issue: [what is wrong]
            → Why it breaks: [why the EMS engine would reject or misparse it]
            → Fixed: [what structural change was made]
          
          Even if there is only ONE issue, list it.
          
          If there are multiple structural errors, list them separately.
          
          ────────────────────────────
STEP 3 — RETURN CORRECTED RULE
────────────────────────────
Return the FULL corrected rule on ONE single line.
- Do NOT reformat
- Do NOT remove values  
- Do NOT use placeholders like "yourFID" or "value1"
- Preserve ALL original string values exactly as pasted
- Preserve original logic
          
          ────────────────────────────
          STEP 4 — SHORT ENGINE EXPLANATION
          ────────────────────────────
          
          In 1–2 sentences:
          Explain why the rule would not fire in its broken state
          (e.g., parser failure, incorrect Conditional argument structure, etc.)
          
          ────────────────────────────
          If syntax is fully valid:
          - Say: "Syntax is structurally valid."
          - Briefly describe what the rule evaluates.
          
          Be precise. Be technical. No fluff.
          `,
        },
        { role: "user", content: args.rule },
      ],
      model: openai.languageModel("gpt-4o"),
    });

    return response.text;
  },
});
