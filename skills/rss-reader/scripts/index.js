async function fetchFeed(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const xmlText = await response.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "text/xml");

  const items = [...xml.querySelectorAll("item")].slice(0, 10).map(item => ({
    title: item.querySelector("title")?.textContent?.trim() || "",
    link: item.querySelector("link")?.textContent?.trim() || "",
    date: item.querySelector("pubDate")?.textContent?.trim() || "",
    description: item.querySelector("description")?.textContent?.trim() || ""
  }));

  return {
    result: {
      feedUrl: url,
      items
    }
  };
}

window['ai_edge_gallery_get_result'] = async (data) => {
  try {
    const jsonData = JSON.parse(data);

    if (!jsonData.url) {
      throw new Error("No feed URL supplied");
    }

    return JSON.stringify(
      await fetchFeed(jsonData.url)
    );
  } catch (e) {
    console.error(e);

    return JSON.stringify({
      error: `Failed to fetch RSS feed: ${e.message}`
    });
  }
};