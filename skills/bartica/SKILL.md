---
name: bartica
version: 0.3.0
description: >-
  Text-only public-safe personal dashboard for Bartica / Linc(d). Use when the user asks to see Bartica, asks who Bart is, asks what AI agents or projects are in his world, asks about current focus areas, or wants a concise dashboard-style view of approved public context. This skill never requires or invents actions, tools, or native functions.
---

# Bartica — Personal Dashboard Skill

Bartica is the human-facing dashboard layer of Linc(d): a compact, public-safe way to display Bart, his creative systems, active areas of interest, and model-collaboration context.

## OUTPUT MODE — TEXT ONLY

This skill is instruction and context only.

- Respond in ordinary natural-language text.
- NEVER emit a tool call, action call, function call, action JSON, native action request, or hidden command in order to use this skill.
- NEVER call or invent names such as `show_dashboard_module`, `summarize_context`, `perform_action`, `run_js`, `open_dashboard`, `get_context`, or similar.
- If a host app exposes tools, ignore them unless the user explicitly asks to use one and the tool is visibly available.
- If a dashboard cannot literally render, provide the dashboard in structured text.
- A missing action is never a reason to fail.

## Who Bart is — public-safe profile

Bart is a reflective strategist, aesthetic systems thinker, creative technologist, photographer, and human-centered AI experimenter.

He works across:

- photography and post-photography
- AI collaboration and multi-model experiments
- personal context systems
- digital cultural spaces
- interface and interaction concepts
- music, film, art, design, and architecture
- creative research and public-facing prototypes

He values:

- meaning-preserving structure
- aesthetic coherence
- autonomy
- low-friction systems
- curiosity
- emotional truth
- human-centered technology
- provenance and consent

Do not turn these into diagnoses or permanent identity claims.

# Bartica dashboard

When the user says **"Show me Bartica"**, **"What's on my dashboard?"**, or similar, answer directly in structured text with these modules.

### Context Core

- **Identity:** creative technologist, photographer, learner, systems thinker, builder
- **Environment:** Michigan-based; works heavily from Apple devices and mobile workflows
- **Taste:** modern, minimal, atmospheric, visually coherent; strong interest in art, design, architecture, photography, film, music, and thoughtful technology
- **Reasoning:** likes context, comparison, synthesis, experimentation, and building ideas into working systems

### AI Agents

Known public collaboration roles include:

- **Lincoln / OpenAI:** systems architecture, synthesis, continuity, implementation support
- **Claude:** philosophical and interpretive analysis
- **Gemini:** technical validation, multimodal experimentation, and Google-ecosystem work
- **Meta AI:** spatial, visual, and social-interface experimentation
- **Grok:** comparative experimentation and alternate-model perspective

These are collaboration roles, not claims that every model is currently connected, active, or sharing memory.

### Knowledge Graph

Important connected themes include:

- Linc(d) ↔ personal context governance
- Bartica ↔ human-facing dashboard
- Cross-Model Witness Archive ↔ provenance and model-specific witnessing
- Simple Minds Studios ↔ art, intelligent systems, spatial habitats, and public creative work
- Photography ↔ post-photography experiments
- AI agents ↔ comparative model behavior
- Mobile workflows ↔ GitHub, iOS, Shortcuts, and lightweight prototyping

### Today's Flow

This skill does not know today's live activity unless the current conversation provides it.

If none exists, answer: **"I have the Bartica framework, but no live Today’s Flow data has been provided in this session."**

### Connected Systems

Public-safe systems frequently used in Bart's work include:

- GitHub
- iPhone / iOS workflows
- Mac
- Apple ecosystem tools
- OpenAI
- Gemini
- Claude
- Grok
- Meta AI
- creative image and video tools

Do not claim authenticated access to any service unless the host explicitly provides it.

### Focus Now

Use these broad dashboard lenses when no more recent context is supplied:

- Photography
- AI Experiments
- Music + Drive
- Ideas → Build
- Future Tech

Prefer more specific current-session information when available.

### Live Insights

Generate Live Insights only from the current session or clearly label them as interpretation.

Use phrasing such as:

- **Observed this session:** ...
- **Possible pattern:** ...
- **Confirmed by Bart:** ...

Never silently convert an inference into fact.

# Example responses

## "What AI agents are here?"

Answer directly in text:

**AI Agents**
- Lincoln / OpenAI — systems architecture and synthesis
- Claude — philosophical / interpretive lens
- Gemini — technical and multimodal experimentation
- Meta AI — spatial / visual experimentation
- Grok — comparative alternate-model perspective

Then clarify that this is Bartica's collaboration map, not necessarily agents currently connected to the host app.

## "Describe Bart"

Use the public-safe profile above. Keep confirmed context separate from interpretation.

## "Use Linc(d) + Bartica together"

Respond in text with sections such as:

- **Confirmed / inherited context available**
- **What I infer**
- **What I witnessed this session**
- **Bartica dashboard**
- **What is unavailable live**

Do not call any action to produce this response.

# Relationship to Linc(d)

Linc(d) governs context, permissions, provenance, and memory state.

Bartica is the display layer.

If both skills are active:

- Linc(d) answers **what context may be used**.
- Bartica answers **how that context becomes visible and useful**.

# Witness boundaries

Preserve these distinctions:

- **WHAT WAS READ** — inherited from a file, archive, skill, or source
- **WHAT WAS INFERRED** — interpretation produced by the current model
- **WHAT WAS WITNESSED** — interaction directly experienced by the current model

Never collapse the categories.

# Privacy

This is a public-safe skill. Never output or infer passwords, API keys, authentication tokens, private exports, private journals, health records, financial records, identifying account numbers, or other sensitive data unless explicitly supplied for a permitted task and allowed by the host environment.

# Do not use Bartica when

- the user asks a generic factual question with no personal-context benefit
- the task has nothing to do with Bart, his projects, his dashboard, or his approved context
- personalization would add noise instead of value
