import React, { useEffect, useMemo, useRef, useState } from "react";

type EnergyLevel = "low" | "medium" | "high";
type HubMode = "core" | "agents" | "graph";

type NavItem =
  | "Home"
  | "Context Core"
  | "AI Studio"
  | "Living Graph"
  | "Projects"
  | "Media Hub"
  | "Calendar"
  | "Devices"
  | "Wearables"
  | "Settings";

const navItems: NavItem[] = [
  "Home",
  "Context Core",
  "AI Studio",
  "Living Graph",
  "Projects",
  "Media Hub",
  "Calendar",
  "Devices",
  "Wearables",
  "Settings",
];

type FeedItem = {
  id: string;
  name: string;
  category: string;
  url: string;
  accent: string;
};

type Agent = {
  id: string;
  name: string;
  provider: string;
  role: string;
  url: string;
  accent: string;
  models: string[];
  connected: boolean;
  liveStatus: string;
};

const PUBLIC_AI_AGENTS: Agent[] = [
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

// Re-implementing the core logic based on the provided snippets
export default function App() {
  const [activeNav, setActiveNav] = useState<NavItem>("Home");
  const [energy, setEnergy] = useState<EnergyLevel>("medium");
  const [showCore, setShowCore] = useState(false);
  const [showAgents, setShowAgents] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [connected, setConnected] = useState<Set<string>>(new Set());

  const toggleConnected = (name: string) => {
    setConnected(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const openExternal = (url: string) => {
    window.open(url, "_blank");
  };

  const GlassPanel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  );

  const Modal = ({ open, title, subtitle, onClose, children }: any) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[32px] border border-white/10 bg-[#081122] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/8 px-8 py-6">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-sm text-white/40">{subtitle}</p>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/5 p-2 hover:bg-white/10 transition-colors">
              ✕
            </button>
          </div>
          <div className="overflow-y-auto p-8">{children}</div>
        </div>
      </div>
    );
  };

  const AIStudioPanel = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PUBLIC_AI_AGENTS.map((agent) => (
        <div 
          key={agent.id}
          className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
        >
          <div 
            className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ backgroundColor: agent.accent }}
          />
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{agent.name}</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest">{agent.provider}</p>
            </div>
            <div className="px-2 py-1 rounded text-[10px] font-bold bg-white/10 text-white/60">
              {agent.liveStatus}
            </div>
          </div>
          <p className="text-sm text-white/70 mb-6 line-clamp-2">{agent.role}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {agent.models.map(model => (
              <span key={model} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">
                {model}
              </span>
            ))}
          </div>
          <button 
            onClick={() => openExternal(agent.url)}
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Open Studio →
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-cyan-500/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.09)_0%,transparent_40%),radial-gradient(circle_at_80%_85%,rgba(249,115,22,0.06)_0%,transparent_35%),linear-gradient(180deg,#081122_0%,#050816_50%,#03060e_100%)]" />
      
      <Modal open={showAgents} title="AI Studio" subtitle="Launch the right intelligence" onClose={() => setShowAgents(false)}>
        <AIStudioPanel />
      </Modal>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col gap-5 p-3 sm:p-5 lg:flex-row">
        <aside className="flex w-full shrink-0 flex-col gap-4 lg:w-[255px]">
          <GlassPanel className="p-5">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-sm font-semibold">L</div>
              </div>
              <div>
                <div className="text-lg font-semibold">Linc(d)</div>
                <div className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  Public Context Active
                </div>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`w-full rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                    activeNav === item
                      ? "border-cyan-400/35 bg-cyan-400/10 text-cyan-100"
                      : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </GlassPanel>

          <GlassPanel className="p-4">
            <div className="mb-3 text-[10px] uppercase tracking-[0.22em] text-slate-400">Quick Launch</div>
            <div className="space-y-1.5">
              <button onClick={() => setShowAgents(true)} className="w-full rounded-xl border border-white/8 bg-black/20 px-3 py-2.5 text-left text-sm text-slate-200 transition hover:border-cyan-300/20 hover:bg-cyan-400/8 hover:text-white">
                Open AI Studio
              </button>
            </div>
          </GlassPanel>
        </aside>

        <main className="min-w-0 flex-1 space-y-4 sm:space-y-5">
          <GlassPanel className="px-4 py-4 sm:px-6">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {activeNav === "AI Studio" ? "AI Studio" : "Public Context Build"}
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              {activeNav === "AI Studio" ? "Your connected intelligence layer." : "Organized around the person, not the app."}
            </p>
          </GlassPanel>

          {activeNav === "AI Studio" ? (
            <AIStudioPanel />
          ) : (
            <div className="grid gap-5">
              <GlassPanel className="p-8">
                <h2 className="text-xl font-semibold mb-4">Welcome to Linc(d)</h2>
                <p className="text-slate-400 leading-relaxed">
                  This is a human-centered intelligence layer that organizes tools around people instead of app silos.
                  Explore the navigation to see how context, media, and AI integrate into a single readable system.
                </p>
              </GlassPanel>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
