# Session Contract

A Session Contract defines what an AI agent may access and do for a specific interaction.

## Suggested fields

- `mode` — the purpose or operating mode of the session
- `model` — the model or agent receiving context
- `context_categories` — which ContextCore categories may be used
- `memory_permissions` — whether the agent may propose, write, or update memory
- `tool_permissions` — which tools or external services may be used
- `privacy_boundary` — what must remain local, private, redacted, or excluded
- `duration` — whether permission applies only to this turn, this session, or another explicit period

## Rules

1. Default to the narrowest permission set that still supports the task.
2. Do not infer permission from mere availability of data.
3. Do not use excluded context even if it appears elsewhere in the archive.
4. A Session Contract may allow memory proposals without allowing automatic memory writes.
5. A new session may require a new contract when the purpose, model, tools, or privacy boundary changes.

## Example

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
