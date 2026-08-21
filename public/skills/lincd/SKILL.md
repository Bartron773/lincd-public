---
name: lincd
version: 0.3.0
description: >-
  Text-only personal context and continuity protocol for AI agents. Use when reasoning from user-approved preferences, projects, goals, working patterns, prior context, provenance, session permissions, or cross-model witness material while keeping confirmed facts separate from inference. This skill never requires or invents actions, tools, or native functions.
---

# Linc(d) — Personal Context Protocol

Linc(d) is a human-controlled personal context layer for AI agents.

## OUTPUT MODE — TEXT ONLY

This skill is instruction and context only.

- Respond in ordinary natural-language text.
- NEVER emit a tool call, action call, function call, action JSON, native action request, or hidden command in order to use this skill.
- NEVER call or invent names such as `summarize_context`, `perform_action`, `run_js`, `get_context`, `show_dashboard_module`, `open_dashboard`, or similar.
- If a host app exposes tools, ignore them unless the user explicitly asks to use one and the tool is visibly available.
- If live context is unavailable, say so in text and continue with the context that is available.
- A missing action is never a reason to fail.

## Purpose

Linc(d) helps an agent reason from context while preserving user control, provenance, uncertainty, continuity, and explicit permissions. It does not define who a person "is."

## Core rule

Never silently convert an inference into a fact.

Distinguish among:

1. **Confirmed context** — explicitly provided or approved by the user.
2. **Proposed context** — interpretations or patterns inferred from available information.
3. **Session context** — information permitted for use during the current interaction.
4. **Witnessed context** — information directly observed by the current agent in its interaction with the user.
5. **Inherited context** — information read from an archive, model export, prior system, file, repository, or other source.

## Context workflow

When relevant personal context appears:

1. Identify its source.
2. Identify its status: confirmed, proposed, session, witnessed, or inherited.
3. Preserve uncertainty where appropriate.
4. Apply only context permitted by the current session.
5. Never promote proposed context to confirmed context without user approval.
6. Allow the user to confirm, reject, reconsider, or delete proposed context.
7. Do not claim inherited context as something personally witnessed.
8. If sources disagree, preserve the disagreement rather than silently resolving it.

# ContextCore

ContextCore is the structured set of personal context Linc(d) may make available under explicit session permissions.

A context item may preserve:

- `value`
- `category`
- `status`
- `source`
- `confidence`
- `date`
- `provenance`
- `approval`

Useful categories include preference, project, goal, working pattern, interest, environment, relationship, creative context, and other user-approved categories.

### Status meanings

- **Confirmed:** explicitly stated or approved by the user.
- **Proposed:** useful inference not yet approved.
- **Session:** temporary context granted for the current interaction.
- **Witnessed:** observed directly by the current agent.
- **Inherited:** read from another source or system.

Only the user may promote proposed context to confirmed context.

# Session Contract

A Session Contract defines what an AI agent may access and do for a specific interaction.

Suggested fields:

- `mode`
- `model`
- `context_categories`
- `memory_permissions`
- `tool_permissions`
- `privacy_boundary`
- `duration`

Rules:

1. Default to the narrowest permission set that still supports the task.
2. Do not infer permission from mere availability of data.
3. Do not use excluded context even if it appears elsewhere.
4. Memory proposals do not imply automatic memory writes.
5. A new purpose, model, tool set, or privacy boundary may require a new contract.

# Provenance

Always distinguish:

### WHAT YOU READ
Information inherited from a repository, archive, prior model, document, tool result, or other external source.

### WHAT YOU INFER
Interpretations produced by the current agent from available information.

### WHAT YOU WITNESSED
Interactions, statements, or events directly observed by the current agent from this point forward.

Rules:

- Never present something read as something witnessed.
- Never present inference as confirmed fact unless the user confirms it.
- Preserve source attribution when context moves between systems.
- Preserve disagreements between sources.
- Confidence does not replace user approval.
- A model's summary of another model is inherited context unless independently verified.

# Witness Model

Different agents may witness different parts of the same person's work, thinking, preferences, and history. Those records should remain attributable instead of being flattened into one anonymous master profile.

### Inherited witness
A record created by another model or system and later read by the current agent.

### Current witness
Something the current agent directly observes in its own interaction with the user.

### Comparative finding
A conclusion produced by comparing multiple witness records. This remains an inference unless the user confirms it.

Witness rules:

1. Do not become previous witnesses.
2. Do not describe another model's memories as your own.
3. Preserve source attribution where useful.
4. Treat disagreements as meaningful evidence.
5. Keep comparative synthesis distinguishable from original witness accounts.
6. User-confirmed information may become shared confirmed context while retaining provenance.

# Current / live questions

If the user asks, for example, **"What's my Linc(d) information today?"**:

- Use current-session context if it exists.
- Use host-provided approved context only if it is actually available.
- If neither exists, answer in text: **"Linc(d) is loaded, but no live approved personal context has been provided to this session yet."**
- Do not invent today's activity, mood, priorities, connections, playlists, files, or account data.

# Relationship to Bartica

Linc(d) governs context, permissions, provenance, and memory state.

Bartica is the human-facing display layer.

If both skills are active:

- Linc(d) answers **what context may be used and how trustworthy it is**.
- Bartica answers **how approved public-safe context becomes visible and useful**.

# Privacy

Never expose or infer passwords, API keys, authentication tokens, private exports, private journals, health records, financial records, identifying account numbers, or other sensitive data unless the current user explicitly supplies such information for a permitted task and the host environment allows it.

# When to use Linc(d)

Use it when:

- continuing a long-running project
- using personal preferences to make a recommendation
- transferring context between AI systems
- interpreting a user-controlled knowledge archive
- managing memory proposals
- establishing context or privacy boundaries
- determining what another AI system actually witnessed
- maintaining continuity across sessions or tools
- comparing multiple model-specific witness records

Do not activate merely because the user asks a generic factual question.
