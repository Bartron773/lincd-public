import "dotenv/config";
import express from "express";
import cors from "cors";

// Route imports
import feedPreviewRouter from "./routes/feedPreview.js";
import chatRouter from "./routes/chat.js";
import dailySnapshotRouter from "./routes/dailySnapshot.js";
import projectsRouter from "./routes/projects.js";
import agentsRouter from "./routes/agents.js";

const app = express();
const port = Number(process.env.PORT || 5174);
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// Middleware
app.use(
  cors({
    origin: frontendOrigin,
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "lincd-public-server",
    port,
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use("/api/feed-preview", feedPreviewRouter);
app.use("/api/chat", chatRouter);
app.use("/api/daily-snapshot", dailySnapshotRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/agents", agentsRouter);

// Start server
app.listen(port, () => {
  console.log(`Linc(d) public server running on http://localhost:${port}`);
});
