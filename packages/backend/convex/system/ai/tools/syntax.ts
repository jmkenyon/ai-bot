import { createTool } from "@convex-dev/agent";
import z from "zod";

// ── Pure function — called directly from messages.ts ────────────
export function syntaxCheckRule(input: string): string {
  const issues: string[] = [];
  const rule = input.trim();

  // ── 1. Balanced parentheses & brackets ──────────────────────────
  let parenDepth = 0;
  let bracketDepth = 0;
  const parenStack: number[] = [];
  const bracketStack: number[] = [];

  for (let i = 0; i < rule.length; i++) {
    const ch = rule[i];
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
      if (parenDepth < 0) issues.push(`Unexpected ')' at position ${i}`);
    }
    if (ch === "[") {
      bracketDepth++;
      bracketStack.push(i);
    }
    if (ch === "]") {
      bracketDepth--;
      if (bracketDepth < 0) issues.push(`Unexpected ']' at position ${i}`);
    }
  }
  if (parenDepth > 0) {
    issues.push(
      `Unbalanced parentheses: ${parenDepth} unclosed '(' — last opened near position ${parenStack[parenStack.length - 1]}`
    );
  }
  if (parenDepth < 0) {
    issues.push(`Unbalanced parentheses: ${Math.abs(parenDepth)} extra ')'`);
  }
  if (bracketDepth > 0) {
    issues.push(
      `Unbalanced brackets: ${bracketDepth} unclosed '[' — near position ${bracketStack[bracketStack.length - 1]}`
    );
  }

  // ── 2. Target syntax ────────────────────────────────────────────
  const targetMatch = rule.match(/^(#\d+|\d+:\d+)\[([A-Z]*)\]=(.*)/s);
  if (!targetMatch) {
    const missingBracket = rule.match(/^(#\d+|\d+:\d+)\[([A-Z]+)(?=[^=\]]*=)/);
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

  // ── 3. Helpers ──────────────────────────────────────────────────
  function extractFuncBody(
    source: string,
    funcName: string
  ): { body: string; startIdx: number; endIdx: number } | null {
    const idx = source.indexOf(funcName + "(");
    if (idx === -1) return null;
    const start = idx + funcName.length + 1;
    let depth = 1;
    let end = start;
    let inStr = false;
    for (let i = start; i < source.length && depth > 0; i++) {
      if (source[i] === '"') {
        inStr = !inStr;
        continue;
      }
      if (inStr) continue;
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

  function splitTopLevelArgs(str: string): string[] {
    const result: string[] = [];
    let depth = 0;
    let current = "";
    let inStr = false;
    for (const ch of str) {
      if (ch === '"') {
        inStr = !inStr;
        current += ch;
        continue;
      }
      if (inStr) {
        current += ch;
        continue;
      }
      if (ch === "(") depth++;
      if (ch === ")") depth--;
      if (ch === "," && depth === 0) {
        result.push(current.trim());
        current = "";
      } else current += ch;
    }
    if (current.trim()) result.push(current.trim());
    return result;
  }

  // ── 4. Validate Conditional() ───────────────────────────────────
  const conditionalInfo = extractFuncBody(rule, "Conditional");
  if (conditionalInfo) {
    const condArgs = splitTopLevelArgs(conditionalInfo.body);
    if (condArgs.length !== 3) {
      const argSummary = condArgs
        .map(
          (a, i) =>
            `  arg${i + 1}: ${a.length > 50 ? a.substring(0, 50) + "..." : a}`
        )
        .join("\n");
      issues.push(
        `Conditional() requires exactly 3 arguments (condition, trueBranch, falseBranch) — found ${condArgs.length}:\n${argSummary}`
      );
    } else {
      const condition = condArgs[0]!;
      const trueBranch = condArgs[1]!;
      const falseBranch = condArgs[2]!;

      const actionPattern =
        /^(Replace|Ignore|Remove|Constant|Basic|Conditional)\(/;
      if (!actionPattern.test(trueBranch)) {
        issues.push(
          `Conditional() arg 2 (trueBranch) should be an action — found: ${trueBranch.substring(0, 40)}`
        );
      }
      if (!actionPattern.test(falseBranch)) {
        issues.push(
          `Conditional() arg 3 (falseBranch) should be an action — found: ${falseBranch.substring(0, 40)}`
        );
      }
    }
  }

  // ── 5. Validate And()/Or() ──────────────────────────────────────
  for (const funcName of ["And", "Or"]) {
    const funcInfo = extractFuncBody(rule, funcName);
    if (funcInfo) {
      const funcArgs = splitTopLevelArgs(funcInfo.body);
      for (const arg of funcArgs) {
        const actionMatch = arg.match(/^(Replace|Ignore|Remove)\(/);
        if (actionMatch) {
          issues.push(
            `'${actionMatch[1]}()' is an action, not a condition — must NOT be inside ${funcName}(). ${funcName}() is likely missing its closing ')' before '${actionMatch[1]}()'.`
          );
        }
      }
    }
  }

  // ── 6. FID type suffix check ────────────────────────────────────
  const withoutStrings = rule.replace(/"[^"]*"/g, '""');
  const fidPattern = /(?<!#)(?<!\d)\b(\d{5})\b(?!:|\d)/g;
  let fidMatch;
  while ((fidMatch = fidPattern.exec(withoutStrings)) !== null) {
    const preceding = withoutStrings.substring(
      Math.max(0, fidMatch.index - 1),
      fidMatch.index
    );
    if (preceding !== "#") {
      issues.push(
        `FID ${fidMatch[1]} may be missing a type suffix (e.g. ${fidMatch[1]}:6)`
      );
    }
  }

  // ── 7. Return ───────────────────────────────────────────────────
  if (issues.length === 0) {
    const funcsUsed = [
      ...new Set([...rule.matchAll(/\b([A-Z][a-zA-Z]+)\(/g)].map((m) => m[1])),
    ];
    return `SYNTAX CHECK PASSED: No structural issues found.\nFunctions used: ${funcsUsed.join(", ")}\nExplain what this rule does.`;
  }

  return [
    `SYNTAX CHECK FAILED — Found ${issues.length} issue(s):`,
    "",
    ...issues.map((issue, idx) => `${idx + 1}. ${issue}`),
    "",
    "Present the corrected rule to the user on a SINGLE line. Preserve ALL original values and logic. Only fix the structural problems identified.",
  ].join("\n");
}

// ── Tool wrapper (kept for agent, but the real work is the function above) ──
export const syntaxCheck = createTool({
  description: "Run a structural syntax check on a conversion rule.",
  args: z.object({
    rule: z.string().describe("The conversion rule to syntax check."),
  }),
  handler: async (ctx, args) => {
    return syntaxCheckRule(args.rule);
  },
});
