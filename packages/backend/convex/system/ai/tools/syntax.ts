import { createTool } from "@convex-dev/agent";
import z from "zod";

export const syntaxCheck = createTool({
  description:
    "ALWAYS call this first when a user pastes a conversion rule. A pasted rule contains patterns like #123[NR]= or FID:type= or starts with a FID number. Do not call search until syntaxCheck has been called first.",
  args: z.object({
    rule: z.string().describe("The conversion rule to syntax check."),
  }),
  handler: async (ctx, args) => {
    const issues: string[] = [];
    const rule = args.rule.trim();

    // ── 1. Balanced parentheses & brackets ──────────────────────────
    let parenDepth = 0;
    let bracketDepth = 0;
    const parenStack: number[] = [];
    const bracketStack: number[] = [];

    for (let i = 0; i < rule.length; i++) {
      const ch = rule[i];
      // Skip characters inside string literals
      if (ch === '"') {
        i++;
        while (i < rule.length && rule[i] !== '"') i++;
        continue;
      }
      if (ch === "(") {
        parenDepth++;
        parenStack.push(i);
      }
      if (ch === ")") {
        parenDepth--;
        parenStack.pop();
        if (parenDepth < 0)
          issues.push(`Unexpected ')' at position ${i}`);
      }
      if (ch === "[") {
        bracketDepth++;
        bracketStack.push(i);
      }
      if (ch === "]") {
        bracketDepth--;
        if (bracketDepth < 0)
          issues.push(`Unexpected ']' at position ${i}`);
      }
    }
    if (parenDepth > 0) {
      issues.push(
        `Unbalanced parentheses: ${parenDepth} unclosed '(' — last opened near position ${parenStack[parenStack.length - 1]}`
      );
    }
    if (parenDepth < 0) {
      issues.push(
        `Unbalanced parentheses: ${Math.abs(parenDepth)} extra ')'`
      );
    }
    if (bracketDepth > 0) {
      issues.push(
        `Unbalanced brackets: ${bracketDepth} unclosed '[' — near position ${bracketStack[bracketStack.length - 1]}`
      );
    }

    // ── 2. Target syntax: #tag[EVENTS]= or FID:type[EVENTS]= ───────
    const targetMatch = rule.match(/^(#\d+|\d+:\d+)\[([A-Z]*)\]=(.*)/s);
    if (!targetMatch) {
      // Detect missing ']' specifically
      const missingBracket = rule.match(
        /^(#\d+|\d+:\d+)\[([A-Z]+)(?=[^=\]]*=)/
      );
      if (missingBracket) {
        issues.push(
          `Missing ']' after event codes '${missingBracket[2]}' — should be ${missingBracket[1]}[${missingBracket[2]}]=`
        );
      } else {
        const missingEquals = rule.match(/^(#\d+|\d+:\d+)\[([A-Z]*)\][^=]/);
        if (missingEquals) {
          issues.push(
            `Missing '=' after ${missingEquals[1]}[${missingEquals[2]}]`
          );
        } else {
          issues.push(
            "Rule target must match #tag[events]= or FID:type[events]="
          );
        }
      }
    } else {
      const [, , events, body] = targetMatch;
      if (!events) issues.push("Event codes are empty inside brackets");
      if (!body) issues.push("Rule body after '=' is empty");
    }

    // ── 3. Helper: extract body of a named function ─────────────────
    function extractFuncBody(
      source: string,
      funcName: string
    ): { body: string; startIdx: number; endIdx: number } | null {
      const idx = source.indexOf(funcName + "(");
      if (idx === -1) return null;
      const start = idx + funcName.length + 1;
      let depth = 1;
      let end = start;
      let inString = false;
      for (let i = start; i < source.length && depth > 0; i++) {
        if (source[i] === '"') {
          inString = !inString;
          continue;
        }
        if (inString) continue;
        if (source[i] === "(") depth++;
        if (source[i] === ")") {
          depth--;
          if (depth === 0) {
            end = i;
            break;
          }
        }
      }
      return { body: source.substring(start, end), startIdx: start, endIdx: end };
    }

    // ── 4. Helper: split top-level arguments ────────────────────────
    function splitTopLevelArgs(str: string): string[] {
      const args: string[] = [];
      let depth = 0;
      let current = "";
      let inString = false;
      for (const ch of str) {
        if (ch === '"') {
          inString = !inString;
          current += ch;
          continue;
        }
        if (inString) {
          current += ch;
          continue;
        }
        if (ch === "(") depth++;
        if (ch === ")") depth--;
        if (ch === "," && depth === 0) {
          args.push(current.trim());
          current = "";
        } else {
          current += ch;
        }
      }
      if (current.trim()) args.push(current.trim());
      return args;
    }

    // ── 5. Validate Conditional() ───────────────────────────────────
    const conditionalInfo = extractFuncBody(rule, "Conditional");
    if (conditionalInfo) {
      const condArgs = splitTopLevelArgs(conditionalInfo.body);
      if (condArgs.length !== 3) {
        const argSummary = condArgs
          .map((a, i) => `  arg${i + 1}: ${a.length > 50 ? a.substring(0, 50) + "..." : a}`)
          .join("\n");
        issues.push(
          `Conditional() requires exactly 3 arguments (condition, trueBranch, falseBranch) — found ${condArgs.length}:\n${argSummary}`
        );
      } else {
        // Check that trueBranch and falseBranch are action-type functions
        const actionPattern = /^(Replace|Ignore|Remove|Constant|Basic|Conditional)\(/;
        if (!actionPattern.test(condArgs[1])) {
          issues.push(
            `Conditional() arg 2 (trueBranch) should be an action like Replace()/Ignore()/Remove() — found: ${condArgs[1].substring(0, 40)}`
          );
        }
        if (!actionPattern.test(condArgs[2])) {
          issues.push(
            `Conditional() arg 3 (falseBranch) should be an action like Replace()/Ignore()/Remove() — found: ${condArgs[2].substring(0, 40)}`
          );
        }
      }
    }

    // ── 6. Validate And()/Or() — no actions inside ──────────────────
    for (const funcName of ["And", "Or"]) {
      const funcInfo = extractFuncBody(rule, funcName);
      if (funcInfo) {
        const funcArgs = splitTopLevelArgs(funcInfo.body);
        for (const arg of funcArgs) {
          const actionMatch = arg.match(/^(Replace|Ignore|Remove)\(/);
          if (actionMatch) {
            issues.push(
              `'${actionMatch[1]}()' is an action, not a condition — it must NOT be inside ${funcName}(). ` +
              `This usually means ${funcName}() is missing its closing ')' before '${actionMatch[1]}()'.`
            );
          }
        }
      }
    }

    // ── 7. Check FIDs have type suffixes (skip string literals) ─────
    const withoutStrings = rule.replace(/"[^"]*"/g, '""');
    // Match 5-digit numbers that aren't preceded by '#' or followed by ':'
    const fidPattern = /(?<!#)(?<!\d)\b(\d{5})\b(?!:|\d)/g;
    let fidMatch;
    while ((fidMatch = fidPattern.exec(withoutStrings)) !== null) {
      // Make sure it's not part of a tag target like #775
      const preceding = withoutStrings.substring(
        Math.max(0, fidMatch.index - 1),
        fidMatch.index
      );
      if (preceding !== "#") {
        issues.push(
          `FID ${fidMatch[1]} appears to be missing a type suffix (e.g. ${fidMatch[1]}:6)`
        );
      }
    }

    // ── 8. Return results ───────────────────────────────────────────
    if (issues.length === 0) {
      // Also provide a structural summary for valid rules
      const funcsUsed = [
        ...new Set(
          [...rule.matchAll(/\b([A-Z][a-zA-Z]+)\(/g)].map((m) => m[1])
        ),
      ];
      return [
        "SYNTAX CHECK PASSED: No structural issues found.",
        `Functions used: ${funcsUsed.join(", ")}`,
        "Present this rule to the user and explain what it does.",
      ].join("\n");
    }

    return [
      `SYNTAX CHECK FAILED — Found ${issues.length} issue(s):`,
      "",
      ...issues.map((issue, idx) => `${idx + 1}. ${issue}`),
      "",
      "INSTRUCTIONS FOR AGENT: Using the issues above, present the corrected rule to the user on a SINGLE line.",
      "Preserve ALL original values and logic. Only fix the structural problems identified.",
    ].join("\n");
  },
});