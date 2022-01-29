-- CreateTable
CREATE TABLE "Results" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "author" VARCHAR(255) NOT NULL,

    CONSTRAINT "Results_pkey" PRIMARY KEY ("id")
);
