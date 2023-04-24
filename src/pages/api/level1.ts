// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result?: string;
  error?: string;
};

export default function handler(
  { body }: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (!body.name) {
    res.status(400).json({ error: "name is required" });
    return;
  }

  const result = `Hello ${body.name}`;
  res.status(200).json({ result });
}
