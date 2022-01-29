import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient();
export default async function handle(req, res) {
  await prisma.results.create({
    data: {
      title: "test wiskunde",
      content: "Yes good",
      published: true,
      author: "N. Vantichelen",
    },
  });
  res.json({ status: "Success" });
}
