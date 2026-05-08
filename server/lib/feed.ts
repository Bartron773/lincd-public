import Parser from "rss-parser";
import * as cheerio from "cheerio";

const parser = new Parser({
  timeout: 10000,
  customFields: {
    item: [
      ["media:content", "mediaContent", { keepArray: true }],
      ["media:thumbnail", "mediaThumbnail", { keepArray: true }],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

export type FeedPreviewItem = {
  title: string;
  link: string;
  pubDate?: string | null;
  description?: string;
  image?: string | null;
};

export type FeedPreviewResponse = {
  kind: "feed" | "page";
  source: string;
  title: string;
  description: string;
  image?: string | null;
  url: string;
  items: FeedPreviewItem[];
  summary?: string | null;
};

function cleanText(input?: string | null): string {
  if (!input) return "";
  return input
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractImageFromHtml(html?: string | null): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || null;
}

function absoluteUrl(base: string, maybeRelative?: string | null): string | null {
  if (!maybeRelative) return null;
  try {
    return new URL(maybeRelative, base).toString();
  } catch {
    return null;
  }
}

function pickFeedItemImage(item: Record<string, unknown>): string | null {
  const mediaThumbnail = item["mediaThumbnail"];
  if (Array.isArray(mediaThumbnail) && mediaThumbnail.length > 0) {
    const first = mediaThumbnail[0] as Record<string, any>;
    if (first?.$?.url) return first.$.url;
    if (first?.url) return first.url;
  }

  const mediaContent = item["mediaContent"];
  if (Array.isArray(mediaContent) && mediaContent.length > 0) {
    const first = mediaContent[0] as Record<string, any>;
    if (first?.$?.url) return first.$.url;
    if (first?.url) return first.url;
  }

  const encoded = typeof item["contentEncoded"] === "string" ? item["contentEncoded"] : "";
  const content = typeof item["content"] === "string" ? item["content"] : "";
  const snippet = typeof item["contentSnippet"] === "string" ? item["contentSnippet"] : "";
  return (
    extractImageFromHtml(encoded) ||
    extractImageFromHtml(content) ||
    extractImageFromHtml(snippet)
  );
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "LincdPublicBot/1.0",
      Accept:
        "application/rss+xml, application/xml, text/xml, text/html;q=0.9, */*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

export async function buildFeedPreview(source: string): Promise<FeedPreviewResponse> {
  const feed = await parser.parseURL(source);

  const items: FeedPreviewItem[] = (feed.items || []).slice(0, 6).map((item) => {
    const raw = item as Record<string, unknown>;
    const description =
      cleanText(
        typeof raw.contentSnippet === "string"
          ? raw.contentSnippet
          : typeof raw.content === "string"
          ? raw.content
          : typeof raw.contentEncoded === "string"
          ? raw.contentEncoded
          : ""
      ) || "";

    return {
      title: item.title || "Untitled item",
      link: item.link || source,
      pubDate: item.pubDate || null,
      description,
      image: pickFeedItemImage(raw),
    };
  });

  return {
    kind: "feed",
    source,
    title: feed.title || "Feed Preview",
    description: cleanText(feed.description || "") || "Live feed preview",
    image: null,
    url: feed.link || source,
    items,
    summary: `Fetched ${items.length} live items from ${feed.title || source}.`,
  };
}

export async function buildPagePreview(source: string): Promise<FeedPreviewResponse> {
  const html = await fetchText(source);
  const $ = cheerio.load(html);

  const title =
    $('meta[property="og:title"]').attr("content") ||
    $("title").text().trim() ||
    "Page Preview";

  const description =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    cleanText($("p").first().text()) ||
    "Web page preview";

  const image =
    absoluteUrl(source, $('meta[property="og:image"]').attr("content")) ||
    absoluteUrl(source, $('img').first().attr("src")) ||
    null;

  return {
    kind: "page",
    source,
    title,
    description,
    image,
    url: source,
    items: [
      {
        title,
        link: source,
        description,
        image,
      },
    ],
    summary: "Fetched a webpage preview fallback because RSS parsing was unavailable.",
  };
}
