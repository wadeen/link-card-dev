import { NextApiRequest, NextApiResponse } from "next";
import { handleGet } from "../../utils/scrape";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const url = req.query.url as string;

    // Check if URL is present
    if (!url) {
      return res.status(400).json({ error: "URL parameter is missing" });
    }

    try {
      const metadata = await handleGet(url);

      return res.status(200).json(metadata);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch the URL" });
    }
  }

  // If it's not a GET method
  return res.status(405).json({ error: "Method not allowed" });
}
