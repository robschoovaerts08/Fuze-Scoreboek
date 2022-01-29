import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === "DELETE") {
    res.json({ status: req.method });
  } else if (req.method === "GET") {
    const results = await prisma.scores.findMany();
    res.json(results);
  }
}
