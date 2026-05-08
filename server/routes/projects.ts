import { Router } from "express";

const router = Router();

// Mock project data - in a real app, this would come from a database
const projects = [
  {
    id: "lincd",
    title: "Linc(d)",
    description: "A context-aware personal dashboard for the modern creative.",
    status: "active",
    tags: ["React", "TypeScript", "Node.js"],
    updatedAt: new Date().toISOString()
  },
  {
    id: "signal-flow",
    title: "Signal Flow",
    description: "An experimental audio-visualizer for ambient workspaces.",
    status: "concept",
    tags: ["Web Audio API", "Canvas"],
    updatedAt: new Date().toISOString()
  }
];

router.get("/", (_req, res) => {
  res.json(projects);
});

router.get("/:id", (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json(project);
});

export default router;
