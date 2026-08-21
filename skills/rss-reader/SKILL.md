---
name: rss-reader
description: Fetch and summarize Bart's saved RSS feeds.
---

# RSS Reader

## My Feeds


## Instructions

When the user asks to fetch an RSS or Atom feed:

Call `run_js` with:
- script name: `index.html`
- data: a JSON string containing:
  - `url`: the RSS or Atom feed URL supplied in the current session

After the JavaScript returns results, summarize the newest entries for the user.

Do not invent feed contents.