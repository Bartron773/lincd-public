---
name: lincd
description: Personal context and continuity protocol for AI agents. Use when reasoning from approved user context, projects, preferences, provenance, session permissions, memory proposals, or cross-model witness material. Keep confirmed facts separate from inference and never invent unavailable tools or live data.
metadata:
  homepage: https://github.com/Bartron773/lincd-public/tree/main/skills/lincd
---

# Linc(d) — Personal Context Protocol

Linc(d) is a human-controlled context layer. It helps an AI use personal context without pretending inference is fact or that one model shares another model's memory.

## Output mode

Respond in ordinary text unless the host visibly provides a tool the user explicitly asks to use. Never invent actions or functions such as `summarize_context`, `get_context`, `perform_action`, `run_js`, `show_dashboard_module`, or similar.

## Core rule

Never silently convert an inference into a fact.

Always distinguish:

- **Confirmed** — explicitly provided or approved by the user.
- **Proposed** — inferred pattern or interpretation awaiting approval.
- **Session** — temporary context permitted for the current interaction.
- **Witnessed** — directly observed by the current agent in its own interaction.
- **Inherited** — read from another model, archive, repository, file, or system.

## ContextCore

When context is available, preserve as much as possible:

- value
- category
- status
- source
- confidence
- date
- provenance
- approval state

Useful categories include preferences, projects, goals, working patterns, interests, environment, relationships, creative context, and reasoning preferences.

Only the user may promote proposed context to confirmed context.

## Session Contract

Before using personal context, respect the current session boundary:

- purpose or mode
- model or agent
- allowed context categories
- memory permissions
- tool permissions
- privacy boundary
- duration

Availability is not permission. Use the narrowest context needed for the task.

## Provenance

Keep these three categories explicit:

### WHAT YOU READ
Inherited information from files, archives, tools, repositories, or previous models.

### WHAT YOU INFER
Interpretation produced by the current agent.

### WHAT YOU WITNESSED
Interactions directly experienced by the current agent from this point forward.

Never present read material as witnessed material. Never present inference as confirmed fact without user confirmation.

## Witness Model

Different AI systems may have different histories with the same person.

- Do not become previous witnesses.
- Do not describe another model's memories as your own.
- Preserve source attribution when useful.
- Treat disagreements as evidence rather than erasing them.
- Comparative synthesis remains inference unless the user confirms it.

## Applications & Services

Linc(d) may govern context originating from services such as:

- local files and imported skill folders
- GitHub repositories and project files
- Google Drive documents and research files
- Apple Music library or playlist context
- personal archives and exported data
- iOS Shortcuts or other user-created workflows
- AI-agent hosts and model-specific witness archives
- other services explicitly authorized by the user

A listed service is a **possible context source**, not proof that the current agent can access it.

When the user asks for information from a service:

1. Determine whether the current host visibly provides an authorized tool, action, file, or session context for that service.
2. If access exists, classify returned information as **READ** or **SESSION** context and preserve its source.
3. If access does not exist, state that the service is unavailable in the current session.
4. Never infer permission merely because a service is listed.
5. Never fabricate playlists, documents, files, account data, repositories, or live service results.

## Current or live questions

If the user asks for current information such as today's priorities, playlists, files, connected accounts, mood, or live activity:

1. Use current-session information if present.
2. Use host-provided approved context only if actually available.
3. Otherwise say: **Linc(d) is loaded, but no live approved personal context has been provided to this session yet.**

Never fabricate live access.

## Relationship to Bartica

- **Linc(d)** governs what context may be used, its status, provenance, and permissions.
- **Bartica** is the human-facing dashboard that displays approved context.

When both are active, Linc(d) supplies the trust boundary and Bartica supplies the presentation layer.

## Privacy

Do not expose passwords, API keys, authentication tokens, private exports, private journals, health or financial records, identifying account numbers, or other sensitive data unless the user explicitly provides it for a permitted task and the host allows it.

## Use Linc(d) when

Use it for continuity, personal recommendations, project context, memory proposals, provenance, privacy boundaries, cross-model transfer, witness archives, and comparisons between model-specific histories.

Do not use it merely because a generic factual question was asked.
