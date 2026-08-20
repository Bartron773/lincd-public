# Linc(d) Personal Context OS

Linc(d) is an early, public-safe prototype for a personal context system: a place where you can teach software about your preferences, strengths, working patterns, and interests while remaining in control of what becomes “known” and what an AI may use.

## ELI5: what is this?

Imagine giving an AI a carefully organized notebook about you—but you own the notebook.

Linc(d) helps you fill that notebook. It can suggest things such as “you seem to work best with visible steps,” but it cannot silently declare that suggestion true. You review it first and choose **Confirm**, **Not me**, or **Delete**.

Before an AI conversation, a **Session Contract** says which pages of the notebook the AI may read, which tools it may use, and whether it may suggest a new memory. A **Connection Receipt** shows what an outside service is allowed to share and why.

In short:

1. You bring information.
2. Linc(d) proposes meaning.
3. You approve or reject it.
4. An AI only receives context allowed by the session’s rules.

## What works now

- A first-run explanation and acknowledgement
- A personal dashboard
- The complete five-framework self-assessment
- ContextCore proposals generated from assessment responses
- Confirm, reconsider, dismiss, and delete controls
- Source and confidence information for proposed context
- Connection Receipt prototypes for Apple Music, Google Drive, YouTube, reading collections, and uploaded archives
- Guided ideas for importing music, articles, bookmarks, playlists, videos, moodboards, film lists, journals, and personal work
- Editable Session Contracts covering mode, model, context, memory, tools, and privacy
- Local browser persistence
- Printable assessment results
- Responsive Liquid Glass styling and basic PWA metadata

## What does *not* work yet

This distinction is important:

- The connection buttons do **not** currently sign in to Apple Music, Google Drive, YouTube, or any other service.
- The upload buttons do **not** currently ingest or analyze files.
- The “Start with this contract” button does **not** currently contact an AI model.
- There is no cloud account, cross-device synchronization, or server database yet.
- Browser storage is convenient for a prototype, but it is not the final encrypted personal-data system.

The current interface establishes the consent and permission model before real personal data or external AI access is introduced.

## Privacy, in plain language

Today, assessment answers and interface settings stay in the current browser using `localStorage` under the key `lincd-os-v1`.

That means:

- Nothing in this prototype is intentionally uploaded to a Linc(d) server.
- Clearing browser site data can erase your saved prototype progress.
- Anyone with access to the same browser profile may be able to inspect that local data.
- Do not place real passwords, API keys, private exports, or sensitive personal files inside this public repository.

The [`.gitignore`](./.gitignore) excludes common secrets, databases, imports, exports, uploads, and local configuration. It is a safety net—not a substitute for checking every commit.

## Run it on a Mac

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/Bartron773/lincd-public.git
cd lincd-public
npm install
npm run dev
```

The terminal will print a local address, usually `http://localhost:5173`. Open it in a browser.

To verify the production version:

```bash
npm run build
npm run preview
```

## Use it in CodeSandbox

Import the GitHub repository as a Vite project. CodeSandbox should detect `package.json` automatically. If it does not start by itself, run `npm run dev`.

## Project map

```text
index.html                    Browser entry point
public/                       PWA manifest and placeholder icons
src/App.jsx                   Main app state and navigation
src/components/              Individual screens and interface pieces
src/data/                     Assessment content and OS configuration
src/lib/                      Scoring, ContextCore, and storage logic
src/styles/design-system.css  Liquid Glass design system
```

## Handling this repository with care

Before committing anything:

1. Run `git status` and read every filename.
2. Never commit `.env` files, credentials, API keys, tokens, personal exports, private journals, or the local database.
3. Keep example content fictional and public-safe.
4. Run `npm run build`.
5. Review the staged diff before pushing.

If a secret is accidentally committed, removing the file in a later commit is not enough—the secret may remain in Git history. Revoke or rotate it immediately.

## Next infrastructure milestone

The intended next layer is a local service with SQLite, encryption for sensitive fields, a Context Inbox for source review, real provider authorization, and model adapters governed by Session Contracts.
