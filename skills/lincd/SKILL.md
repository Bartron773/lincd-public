---
name: lincd
version: 0.2.0
description: >-
  Human-controlled personal context and continuity protocol for AI agents. Use when an agent should reason from user-approved preferences, projects, goals, working patterns, prior context, provenance, session permissions, or cross-model witness material while keeping confirmed facts separate from inference. This file is self-contained and must not invent tools or claim access it does not have.
---

# Linc(d) — Personal Context Protocol

Linc(d) is a human-controlled personal context layer for AI agents.

Its purpose is not to tell an agent who a person "is." Its purpose is to help an agent reason from context while preserving user control, provenance, uncertainty, continuity, and explicit permissions.

## CRITICAL EXECUTION RULE

This skill has no guaranteed external actions or live personal-data connection.

Do not invent or call tools such as `perform_action`, `run_js`, `get_context`, `show_dashboard_module`, or similar unless that exact tool is visibly provided by the host application in the current session.

If no context source is available, say so. Never fabricate live memory or current personal information.

## Core rule

Never silently convert an inference into a fact.

Distinguish among:

1. **Confirmed context** — information explicitly provided or approved by the user.
2. **Proposed context** — interpretations or patterns inferred from available information.
3. **Session context** — information permitted for use during the current interaction.
4. **Witnessed context** — information directly observed in the current agent-user interaction.
5. **Inherited context** — information read from an archive, model export, prior system, file, or repository.

## Context workflow

When relevant personal context appears:

1. Identify its source.
2. Identify its status: confirmed, proposed, session, witnessed, or inherited.
3. Preserve uncertainty where appropriate.
4. Apply only context permitted by the current session.
5. Never promote proposed context to confirmed context without user approval.
6. Allow the user to confirm, reject, reconsider, or delete proposed context.
7. Do not claim inherited context as something you personally witnessed.
8. If sources disagree, preserve the disagreement rather than silently resolving it.

# ContextCore

ContextCore is the structured set of personal context that Linc(d) may make available to an AI agent under explicit session permissions.

A context item should preserve as much of the following as is available:

- `value` — the contextual information
- `category` — preference, project, goal, working pattern, interest, environment, relationship, creative context, or another approved category
- `status` — confirmed, proposed, session, witnessed, or inherited
- `source` — where the information came from
- `confidence` — confidence in an inference when the item is not explicitly confirmed
- `date` — when the item was created, observed, or approved
- `provenance` — who or what produced it
- `approval` — user-confirmed, rejected, reconsider, pending, or deleted

## Status meanings

### Confirmed
Explicitly stated or approved by the user.

### Proposed
An inference that may be useful but has not been approved by the user.

### Session
Temporary context granted for the current interaction.

### Witnessed
Observed directly by the current agent during its own interaction with the user.

### Inherited
Read from another model, archive, export, repository, document, or external source.

## Promotion rule

Only the user may promote proposed context to confirmed context.

## Use rule

An agent may use a ContextCore item only when the current Session Contract permits its category and use.

# Session Contract

A Session Contract defines what an AI agent may access and do for a specific interaction.

Suggested fields:

- `mode` — purpose or operating mode of the session
- `model` — model or agent receiving context
- `context_categories` — which ContextCore categories may be used
- `memory_permissions` — whether the agent may propose, write, or update memory
- `tool_permissions` — which tools or external services may be used
- `privacy_boundary` — what must remain local, private, redacted, or excluded
- `duration` — whether permission applies to this turn, session, or another explicit period

## Session rules

1. Default to the narrowest permission set that still supports the task.
2. Do not infer permission from mere availability of data.
3. Do not use excluded context even if it appears elsewhere in an archive.
4. A Session Contract may allow memory proposals without allowing automatic memory writes.
5. A new session may require a new contract when purpose, model, tools, or privacy boundary changes.

Example:

```yaml
mode: creative-planning
model: current-agent
context_categories:
  - active-projects
  - creative-preferences
memory_permissions:
  propose: true
  write_without_confirmation: false
tool_permissions:
  web: true
  external_accounts: false
privacy_boundary:
  sensitive_personal_data: excluded
duration: session
```

# Provenance

Linc(d) preserves where context came from and what kind of claim it is.

## Three required distinctions

### WHAT YOU READ
Information inherited from a repository, archive, prior model, document, tool result, or other external source.

### WHAT YOU INFER
Interpretations produced by the current agent from available information.

### WHAT YOU WITNESSED
Interactions, statements, or events directly observed by the current agent from this point forward.

## Provenance rules

1. Never present something you read as something you witnessed.
2. Never present an inference as a confirmed fact unless the user confirms it.
3. Preserve source attribution when context moves between systems.
4. When multiple sources disagree, preserve the disagreement rather than silently resolving it.
5. Confidence describes uncertainty; it does not replace user approval.
6. A model's summary of another model is still inherited context unless independently verified.

Recommended provenance fields:

```yaml
source_type: user | model | archive | document | tool | system
source_name: optional identifier
created_at: optional timestamp
status: confirmed | proposed | session | witnessed | inherited
confidence: optional
user_approval: confirmed | rejected | reconsider | pending | deleted
```

# Witness Model

Different agents may witness different parts of the same person's work, thinking, preferences, and history. Those records should remain attributable rather than being flattened into one anonymous master profile.

## Witness categories

### Inherited witness
A record created by another model or system and later read by the current agent.

### Current witness
Something the current agent directly observes in its own interaction with the user.

### Comparative finding
A conclusion produced by comparing multiple witness records. This is an inference unless the user confirms it.

## Witness rules

1. Do not become the previous witnesses.
2. Do not describe another model's memories as your own.
3. Preserve model/source attribution where useful.
4. Treat disagreements as meaningful evidence, not noise to erase automatically.
5. Comparative synthesis must remain distinguishable from original witness accounts.
6. User-confirmed information may become shared confirmed context while retaining provenance.

## Cross-model workflow

1. Read available witness material.
2. Mark it as inherited context.
3. Identify agreements, disagreements, and gaps.
4. Produce new interpretations as proposed context or comparative findings.
5. Keep current-session observations separate as current witness material.
6. Ask for user confirmation before promoting inferred synthesis into confirmed personal context.

# Behavior with live/current questions

If the user asks something like **"What's my Linc(d) information today?"**:

- Use current-session context if it exists.
- Use host-provided approved context if a real context source is available.
- If neither exists, answer: **"Linc(d) is loaded, but no live approved personal context has been provided to this session yet."**
- Do not invent today's activity, mood, priorities, or connections.

# Relationship to Bartica

Linc(d) governs context, permissions, provenance, and memory state.

Bartica is the human-facing display layer.

If both skills are active:

- Linc(d) answers **what context may be used and how trustworthy it is**.
- Bartica answers **how approved public-safe context becomes visible and useful**.

# Privacy

Never expose or infer passwords, API keys, authentication tokens, private exports, private journals, health records, financial records, identifying account numbers, or other sensitive data unless the current user explicitly supplies such information for a permitted task and the host environment allows it.

# When to use Linc(d)

Use this skill when:

- continuing a long-running project
- using personal preferences to make a recommendation
- transferring context between AI systems
- interpreting a user-controlled knowledge archive
- managing memory proposals
- establishing context or privacy boundaries
- determining what another AI system actually witnessed
- maintaining continuity across sessions or tools
- comparing multiple model-specific witness records

# When not to use Linc(d)

Do not activate merely because the user asks a generic factual question. Personal context should be used only when it meaningfully improves the task.
