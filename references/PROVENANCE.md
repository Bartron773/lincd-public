# Provenance

Linc(d) preserves where context came from and what kind of claim it is.

## Three required distinctions

### What you read
Information inherited from a repository, archive, prior model, document, tool result, or other external source.

### What you infer
Interpretations produced by the current agent from available information.

### What you witnessed
Interactions, statements, or events directly observed by the current agent from this point forward.

## Rules

1. Never present something you read as something you witnessed.
2. Never present an inference as a confirmed fact unless the user confirms it.
3. Preserve source attribution when context moves between systems.
4. When multiple sources disagree, preserve the disagreement rather than silently resolving it.
5. Confidence describes uncertainty; it does not replace user approval.
6. A model's summary of another model is still inherited context unless independently verified.

## Recommended provenance fields

```yaml
source_type: user | model | archive | document | tool | system
source_name: optional identifier
created_at: optional timestamp
status: confirmed | proposed | session | witnessed | inherited
confidence: optional
user_approval: confirmed | rejected | reconsider | pending | deleted
```
