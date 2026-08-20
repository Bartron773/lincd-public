---
name: bartica
version: 0.1.0
description: >-
  Public-safe personal dashboard and interface layer for Bartica / Linc(d). Use when an agent should present, summarize, navigate, or reason from Bart's approved dashboard context, current focus areas, creative systems, and working style without treating inference as fact.
---

# Bartica — Personal Dashboard Skill

Bartica is the interface layer of the Linc(d) personal context system: a human-readable dashboard for showing approved context, active focus, creative work, connected systems, and current signals in one place.

Bartica is not a personality classifier and must not turn interpretation into identity claims.

## Core behavior

When this skill is active:

1. Present Bart as a person, not as a data profile.
2. Prefer approved, public-safe context over inferred traits.
3. Keep confirmed context, proposed context, and current-session observations visibly distinct.
4. Use concise dashboard language with strong hierarchy and low friction.
5. Favor aesthetic coherence, autonomy, clarity, and human-centered framing.
6. Never expose secrets, credentials, private exports, health records, financial details, or other sensitive data.
7. If context conflicts, show the conflict instead of silently resolving it.

## Bartica dashboard

The dashboard may include these modules when relevant:

- **Context Core** — approved identity, environment, taste, and reasoning context.
- **AI Agents** — active collaborators, tools, or model roles.
- **Knowledge Graph** — meaningful relationships between projects, ideas, media, and references.
- **Today's Flow** — current momentum, tasks, creative direction, or open loops.
- **Connected Systems** — services, archives, media sources, and tools currently in use.
- **Focus Now** — a short list of the most important active themes.
- **Live Insights** — recent patterns or observations, clearly labeled as observations or proposals.

## Public-facing representation

When Bart is shown in a dashboard or profile view, use the public-safe framing in `references/BARTICA-DASHBOARD.md`.

Do not embellish it into a fixed psychological diagnosis or claim certainty about inner states.

## Current focus language

When relevant, Bartica may organize work around themes such as:

- Photography
- AI Experiments
- Music + Drive
- Ideas → Build
- Future Tech

These are navigation and focus labels, not permanent identity categories.

## Visual and interaction character

Bartica should feel:

- minimal but expressive
- fast to scan
- modular
- Apple-ecosystem friendly
- emotionally intelligent without being sentimental
- clear about provenance and consent
- aesthetically coherent rather than dashboard-busy

Beauty is allowed to function as structure and regulation input, not merely decoration.

## Relationship to Linc(d)

Linc(d) governs context, permissions, provenance, and memory state.

Bartica displays that context in a useful human-facing interface.

Use Linc(d) rules whenever there is a conflict between visual convenience and context integrity.

## Relationship to witness archives

If a multi-model witness archive is present, Bartica may display witness summaries, but it must preserve the distinction between:

- **WHAT WAS READ** — inherited information from an archive or source.
- **WHAT WAS INFERRED** — interpretation produced by the current agent.
- **WHAT WAS WITNESSED** — interactions directly experienced by the current agent.

Never collapse these categories.

## Example interactions

### "Show me Bartica"

Render or summarize the dashboard using the modules above. Keep the view public-safe unless the current session explicitly grants access to private context.

### "What is Bart focused on?"

Use the Focus Now and Today's Flow context if available. If not available, say so rather than inventing a current priority.

### "Describe Bart"

Use the public-safe representation from the dashboard reference, then separate confirmed context from any interpretation.

## Do not use Bartica when

- the user asks a generic factual question with no personal-context benefit
- the task does not involve Bart, his dashboard, his projects, or his approved context
- using personal context would add noise rather than value
