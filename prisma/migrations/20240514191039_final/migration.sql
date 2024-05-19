/*
  Warnings:

  - You are about to drop the column `clicks` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `lastClicked` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the column `isTwoFactorEnabled` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `limitLinks` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `LinkTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordResetToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwoFactorConfirmation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwoFactorToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[shorted]` on the table `Links` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shorted` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LinkTags" DROP CONSTRAINT "LinkTags_linkId_fkey";

-- DropForeignKey
ALTER TABLE "LinkTags" DROP CONSTRAINT "LinkTags_tagId_fkey";

-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "TwoFactorConfirmation" DROP CONSTRAINT "TwoFactorConfirmation_userId_fkey";

-- DropIndex
DROP INDEX "Links_slug_idx";

-- DropIndex
DROP INDEX "Links_slug_key";

-- AlterTable
ALTER TABLE "Links" DROP COLUMN "clicks",
DROP COLUMN "lastClicked",
DROP COLUMN "slug",
ADD COLUMN     "shorted" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isTwoFactorEnabled",
DROP COLUMN "limitLinks",
DROP COLUMN "username";

-- DropTable
DROP TABLE "LinkTags";

-- DropTable
DROP TABLE "PasswordResetToken";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "TwoFactorConfirmation";

-- DropTable
DROP TABLE "TwoFactorToken";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateIndex
CREATE UNIQUE INDEX "Links_shorted_key" ON "Links"("shorted");

-- CreateIndex
CREATE INDEX "Links_shorted_idx" ON "Links"("shorted");
