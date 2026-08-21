---
name: rss-reader
description: Fetch and summarize Bart's saved RSS feeds.
---

# RSS Reader

## My Feeds

- https://rss.app/r/feed/M8fpidMRk9gEBQDp

## Instructions

When the user asks to fetch feeds, get RSS, check what's new, or summarize the feed:

Call the `run_js` tool with:

- script name: index.html
- data: A JSON string containing:
  - action: "fetch"
  - feeds: an array of RSS feed URLs

Use this feed:


After the JavaScript returns results, summarize the newest entries for the user.

Do not invent feed contents.