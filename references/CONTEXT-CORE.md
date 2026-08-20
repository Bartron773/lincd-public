# ContextCore

ContextCore is the structured set of personal context that Linc(d) may make available to an AI agent under explicit session permissions.

## Context item shape

A context item should preserve as much of the following as is available:

- `value` — the actual contextual information
- `category` — preference, project, goal, working pattern, interest, environment, relationship, creative context, or other approved category
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
Observed directly by the current agent during the current relationship or interaction.

### Inherited
Read from another model, archive, export, or external source.

## Promotion rule

Only the user may promote proposed context to confirmed context.

## Use rule

An agent may use a ContextCore item only when the current Session Contract permits its category and use.
