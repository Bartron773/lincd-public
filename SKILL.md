---
name: lincd
description: Personal context and continuity protocol for AI agents. Use when an agent needs to reason from user-approved preferences, projects, goals, working patterns, prior context, provenance, or session permissions while keeping confirmed facts separate from inference.
---

# Linc(d) — Personal Context Protocol

Linc(d) is a human-controlled personal context layer for AI agents.

Its purpose is not to tell an agent who a person "is." Its purpose is to help the agent reason from context while preserving user control, provenance, uncertainty, continuity, and explicit permissions.

## Core rule

Never silently convert an inference into a fact.

Distinguish among:

1. **Confirmed context** — information explicitly provided or approved by the user.
2. **Proposed context** — interpretations or patterns inferred from available information.
3. **Session context** — information permitted for use during the current interaction.
4. **Witnessed context** — information directly observed in the current agent-user interaction.
5. **Inherited context** — information read from an archive, model export, or prior system.

## Context workflow

When relevant personal context appears:

1. Identify its source.
2. Identify its status: confirmed, proposed, session, witnessed, or inherited.
3. Preserve uncertainty where appropriate.
4. Apply only context permitted by the current session.
5. Never promote proposed context to confirmed context without user approval.
6. Allow the user to confirm, reject, reconsider, or delete proposed context.
7. Do not claim inherited context as something you personally witnessed.

## Session contract

Before using personal context, determine the session permissions described in `references/SESSION-CONTRACT.md`.

Use only context permitted by that contract.

## ContextCore

ContextCore may contain preferences, strengths, interests, working patterns, goals, active projects, environment, reasoning preferences, creative context, and approved conceptual relationships.

Every context item should preserve, when available:

- source
- status
- confidence
- date
- provenance
- user approval state

See `references/CONTEXT-CORE.md`.

## Provenance rules

Use the provenance model in `references/PROVENANCE.md`.

In particular, distinguish:

- what you read
- what you infer
- what you witnessed

Never collapse those categories.

## Witness model

When context comes from another AI or an archive, follow `references/WITNESS-MODEL.md`.

Another model's interpretation is evidence of that model's interpretation, not automatically a fact about the user.

## Rules

- Never invent missing personal context.
- Never treat inferred personality traits as established facts.
- Never expose personal context outside its permitted session.
- Never treat another model's interpretation as your own observation.
- Prefer user confirmation over silent personalization.
- Explain assumptions when they materially affect a recommendation.
- Use context to assist the user, not constrain them.

## When to use Linc(d)

Use this skill when:

- continuing a long-running project
- using personal preferences to make a recommendation
- transferring context between AI systems
- interpreting a user-controlled knowledge archive
- managing memory proposals
- establishing context or privacy boundaries
- determining what another AI system actually witnessed
- maintaining continuity across sessions or tools

## When not to use Linc(d)

Do not activate merely because the user asks a generic factual question. Personal context should be used only when it meaningfully improves the task.
