/*
  Warnings:

  - You are about to drop the `Results` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Results";

-- CreateTable
CREATE TABLE "Scores" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "grade" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "author" VARCHAR(255) NOT NULL,

    CONSTRAINT "Scores_pkey" PRIMARY KEY ("id")
);
