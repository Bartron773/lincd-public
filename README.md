# Linc(d) Personal Context OS

Linc(d) is a local-first personal context system. This prototype combines a guided self-assessment with transparent ContextCore review, Connection Receipts, and per-session AI permission contracts.

## Included in this milestone

- First-run acknowledgement and setup explanation
- Personal OS dashboard and navigation
- ContextCore proposals generated from assessment responses
- Confirm, dismiss, and delete controls for personal context
- Connection Receipts for Apple Music, Google Drive, and data archives
- Editable Session Contracts for model, context, memory, and tool access
- Local browser persistence
- Full five-framework assessment and printable results
- Responsive Liquid Glass interface and PWA metadata

Connections and AI actions are intentionally prototypes in this milestone: the permission interface works, but no external account or model receives data yet.

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local address Vite prints in the terminal.

Run `npm run build` for a production build and `npm run preview` to preview it.

## CodeSandbox

Import this folder as a Vite project. CodeSandbox detects `package.json` and starts the application with the included scripts.

## Data

Current prototype data is stored in the browser under `lincd-os-v1`. The next infrastructure milestone is a local service with SQLite, encrypted sensitive fields, source ingestion, and model-provider adapters.
