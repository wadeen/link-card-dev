import { ogHandler } from "@/utils/scrape";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ogHandler(req, res);
}
