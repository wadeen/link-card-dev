// src/utils/scrape.ts
import fetch from "node-fetch";
import cheerio from "cheerio";

export async function handleGet(url: string) {
  const res = await fetch(url);
  const body = await res.text();
  const $ = cheerio.load(body);

  const title = $("head > title").text();
  const description = $('meta[name="description"]').attr("content");

  const ogp = $('meta[property^="og:image"]').text();

  return {
    title,
    description,
    ogp,
    url,
  };
}
