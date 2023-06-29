import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import cheerio from "cheerio";

export const nextApiOgHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const url = req.query.url?.toString();

    // Check if URL is present
    if (!url) {
      return res.status(400).json({ error: "URL parameter is missing" });
    }

    try {
      const response = await fetch(url);
      const body = await response.text();
      const $ = cheerio.load(body);

      const ogTitle = $("head > title").text();
      const ogDescription = $('meta[name="description"]').attr("content");
      const ogImage = (() => {
        const target = $('meta[property^="og:image"]').attr("content");
        if (!target) return;
        if (target.startsWith("http")) return target;
        return url + target;
      })();
      const favicon = (() => {
        const target = $('link[rel="icon"]').attr("href");
        if (!target) return;
        if (target.startsWith("http")) return target;
        return url + target;
      })();

      return res.status(200).json({
        ogTitle,
        ogDescription,
        ogImage,
        favicon,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch the URL" });
    }
  }

  // If it's not a GET method
  return res.status(405).json({ error: "Method not allowed" });
};
