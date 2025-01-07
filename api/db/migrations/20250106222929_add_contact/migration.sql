-- CreateTable
CREATE TABLE "Contact" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "name" TEXT
);
