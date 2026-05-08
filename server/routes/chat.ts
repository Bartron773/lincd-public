import { Router } from "express";
import { chatRequestSchema, buildGuestReply, getMatchedFeeds } from "../lib/context.js";
import { z } from "zod";
import OpenAI from "openai";

const router = Router();

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

router.post("/", async (req, res) => {
  try {
    const parsed = chatRequestSchema.parse(req.body);

    if (!openai) {
      const guestResponse = buildGuestReply(parsed);
      return res.json(guestResponse);
    }

    // OpenAI-powered response
    const systemPrompt = `
You are the intelligence layer of Linc(d), a context-aware personal dashboard.
Your goal is to provide a contextual, human, and insightful reply based on the user's current state.

USER CONTEXT:
- Profile: ${parsed.context.profile.join(", ")}
- Obsessions: ${parsed.context.obsessions.join(", ")}
- Recent Notes: ${parsed.context.notes.map(n => n.body).join(" | ")}
- Active Tasks: ${parsed.context.tasks.filter(t => !t.done).map(t => t.title).join(" | ")}

INSTRUCTIONS:
1. Be concise, aesthetic, and helpful.
2. Reference the user's notes or tasks if relevant.
3. Maintain a tone that is "gentle productivity" and "meaning-over-noise".
4. Do not use generic AI platitudes.
    `.trim();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...parsed.history,
        { role: "user", content: parsed.message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0].message.content || "I'm processing that signal now.";
    const matchedFeeds = getMatchedFeeds(parsed.message, parsed.context.feedSources);

    return res.json({
      reply,
      liveFeedMatches: matchedFeeds,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: "Invalid request body",
        issues: error.flatten(),
      });
    }

    const message =
      error instanceof Error ? error.message : "Chat request failed";
    return res.status(500).json({ error: message });
  }
});

export default router;
