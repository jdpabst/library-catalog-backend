-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "author" TEXT NOT NULL,
    "available" INTEGER NOT NULL,
    "cover" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
