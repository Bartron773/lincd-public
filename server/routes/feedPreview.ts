import { Router } from "express";
import { buildFeedPreview, buildPagePreview } from "../lib/feed.js";

const router = Router();

router.get("/", async (req, res) => {
  const source = String(req.query.source || "").trim();

  if (!source) {
    return res.status(400).json({ error: "Missing ?source= URL" });
  }

  try {
    let parsed: URL;
    try {
      parsed = new URL(source);
    } catch {
      return res.status(400).json({ error: "Invalid source URL" });
    }

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return res.status(400).json({ error: "Only http/https URLs are allowed" });
    }

    try {
      const preview = await buildFeedPreview(source);
      return res.json(preview);
    } catch {
      const pagePreview = await buildPagePreview(source);
      return res.json(pagePreview);
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Preview generation failed";
    return res.status(500).json({ error: message });
  }
});

export default router;
