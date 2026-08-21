---
name: rss-reader
description: Fetch and summarize an RSS or Atom feed supplied by the user.
---

# RSS Reader

## Instructions

When the user asks to fetch or summarize an RSS or Atom feed:

1. Identify the RSS or Atom feed URL supplied by the user in the current session.

2. Call the `run_js` tool with:
   - script name: `index.html`
   - data: a JSON string containing:
     - `url`: the RSS or Atom feed URL

3. After JavaScript returns successfully:
   - summarize the newest entries
   - prefer newest entries first
   - include titles, publication dates, and links when available

4. If JavaScript returns an error, report the error clearly.

Never invent feed contents.
Never claim a feed was fetched unless `run_js` returned its contents.