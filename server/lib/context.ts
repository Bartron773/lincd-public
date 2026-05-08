import { z } from "zod";

export const chatRequestSchema = z.object({
  message: z.string().min(1),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .max(12)
    .optional()
    .default([]),
  context: z
    .object({
      notes: z
        .array(
          z.object({
            body: z.string(),
            createdAt: z.string(),
          })
        )
        .optional()
        .default([]),
      tasks: z
        .array(
          z.object({
            title: z.string(),
            details: z.string().optional(),
            done: z.boolean(),
            createdAt: z.string(),
          })
        )
        .optional()
        .default([]),
      profile: z.array(z.string()).optional().default([]),
      obsessions: z.array(z.string()).optional().default([]),
      feedSources: z
        .array(
          z.object({
            name: z.string(),
            category: z.string(),
            url: z.string(),
            siteUrl: z.string().optional(),
          })
        )
        .optional()
        .default([]),
    })
    .optional()
    .default({
      notes: [],
      tasks: [],
      profile: [],
      obsessions: [],
      feedSources: [],
    }),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

function scoreFeedSource(
  query: string,
  source: { name: string; category: string; url: string; siteUrl?: string }
): number {
  const q = query.toLowerCase();
  let score = 0;

  if (q.includes(source.name.toLowerCase())) score += 5;
  if (q.includes(source.category.toLowerCase())) score += 3;

  const interestHints = [
    "design",
    "architecture",
    "ai",
    "music",
    "film",
    "culture",
    "lgbtq",
    "science",
    "space",
  ];

  for (const hint of interestHints) {
    if (q.includes(hint) && source.category.toLowerCase().includes(hint)) {
      score += 2;
    }
  }

  return score;
}

export function getMatchedFeeds(query: string, feedSources: ChatRequest["context"]["feedSources"]) {
  const q = query.toLowerCase();
  return [...feedSources]
    .map((source) => ({ source, score: scoreFeedSource(q, source) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((entry) => ({
      source: entry.source.name,
      category: entry.source.category,
      title: `${entry.source.name} · ${entry.source.category}`,
      link: entry.source.siteUrl || entry.source.url,
    }));
}

export function buildGuestReply(input: ChatRequest) {
  const { message, context } = input;
  const q = message.toLowerCase();

  const relevantNotes = context.notes.slice(0, 3);
  const relevantTasks = context.tasks.slice(0, 3);
  const matchedFeeds = getMatchedFeeds(message, context.feedSources);

  let reply = "";

  if (q.includes("note") || q.includes("notes") || q.includes("remember")) {
    if (relevantNotes.length === 0) {
      reply =
        "There are no saved notes in this guest session yet. Once notes exist, I can surface patterns, themes, and memory fragments cleanly.";
    } else {
      reply = `Here’s the strongest note signal I can see right now:\n\n${relevantNotes
        .map((note, index) => `${index + 1}. ${note.body}`)
        .join("\n")}\n\nThe pattern is less “database” and more “living context” — the notes suggest what matters, not just what was typed.`;
    }
  } else if (q.includes("task") || q.includes("todo") || q.includes("to-do")) {
    if (relevantTasks.length === 0) {
      reply =
        "There are no active task signals in this guest session yet. Once tasks are added, I can summarize what is pending, what is complete, and what looks conceptually clustered.";
    } else {
      reply = `Task layer snapshot:\n\n${relevantTasks
        .map(
          (task, index) =>
            `${index + 1}. ${task.title}${task.details ? ` — ${task.details}` : ""} [${
              task.done ? "done" : "active"
            }]`
        )
        .join("\n")}\n\nThe visible structure suggests a gentle productivity model rather than a punishing one.`;
    }
  } else if (
    q.includes("pattern") ||
    q.includes("vibe") ||
    q.includes("who am i") ||
    q.includes("context")
  ) {
    reply = `The current guest context points toward a person who values ${context.profile
      .slice(0, 4)
      .join(", ")}. The strong aesthetic and systems signal is paired with interests in ${context.obsessions
      .slice(0, 4)
      .join(", ")}.\n\nThe bigger pattern: this interface works best when it organizes around meaning, pacing, and readable tools — not noise.`;
  } else {
    reply = `Here’s my read: your question sounds like it belongs in a context-aware system, not a generic dashboard. I’d approach it through the lenses of ${context.profile
      .slice(0, 3)
      .join(", ")}.\n\nThe guest-safe version of Linc(d) can use notes, tasks, and curated feed sources to build a more human response layer without requiring private surveillance-style profiling.`;
  }

  return {
    reply,
    liveFeedMatches: matchedFeeds,
  };
}
