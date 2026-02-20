import { openai } from "@ai-sdk/openai";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";
import { SUPPORT_AGENT_PROMPT } from "../constants";

import { search } from "../tools/search";
import { syntaxCheck } from "../tools/syntax";

export const supportAgent = new Agent(components.agent, {
  name: "Support Agent",
  languageModel: openai.languageModel("gpt-4o"),
  instructions: SUPPORT_AGENT_PROMPT,
  tools: {
    syntaxCheck,
    search,
  },
  maxSteps: 4,
});