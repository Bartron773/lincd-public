import { Router } from "express";

const router = Router();

const PUBLIC_AI_AGENTS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    provider: "OpenAI",
    role: "reasoning, writing, ideation",
    url: "https://chatgpt.com/",
    accent: "#22d3ee",
    models: ["GPT", "reasoning", "writing"],
    connected: true,
    liveStatus: "Ready in browser",
  },
  {
    id: "claude",
    name: "Claude",
    provider: "Anthropic",
    role: "longform writing, reflection, tone",
    url: "https://claude.ai/",
    accent: "#f59e0b",
    models: ["Opus", "Sonnet", "Haiku"],
    connected: true,
    liveStatus: "Ready in browser",
  },
  {
    id: "gemini",
    name: "Gemini",
    provider: "Google",
    role: "multimodal search, brainstorming, visual input",
    url: "https://gemini.google.com/",
    accent: "#8b5cf6",
    models: ["Gemini"],
    connected: true,
    liveStatus: "Ready in browser",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    provider: "Perplexity",
    role: "search-first research, citations, discovery",
    url: "https://www.perplexity.ai/",
    accent: "#10b981",
    models: ["Search", "Research"],
    connected: true,
    liveStatus: "Ready in browser",
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    provider: "Meta",
    role: "social, assistant, multimodal consumer AI",
    url: "https://www.meta.ai/",
    accent: "#60a5fa",
    models: ["Meta AI"],
    connected: true,
    liveStatus: "Ready in browser",
  },
  {
    id: "grok",
    name: "Grok",
    provider: "xAI",
    role: "fast commentary, cultural pulse, conversational search",
    url: "https://grok.com/",
    accent: "#ec4899",
    models: ["Grok"],
    connected: true,
    liveStatus: "Ready in browser",
  },
];

router.get("/", (_req, res) => {
  res.json(PUBLIC_AI_AGENTS);
});

export default router;
