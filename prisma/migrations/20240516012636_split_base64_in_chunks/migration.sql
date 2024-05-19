/*
  Warnings:

  - You are about to drop the column `qr` on the `QR` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "QR_qr_idx";

-- DropIndex
DROP INDEX "QR_qr_key";

-- AlterTable
ALTER TABLE "QR" DROP COLUMN "qr";

-- CreateTable
CREATE TABLE "QRChunk" (
    "id" TEXT NOT NULL,
    "qrId" TEXT NOT NULL,
    "chunk" INTEGER NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "QRChunk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QRChunk_qrId_chunk_idx" ON "QRChunk"("qrId", "chunk");

-- AddForeignKey
ALTER TABLE "QRChunk" ADD CONSTRAINT "QRChunk_qrId_fkey" FOREIGN KEY ("qrId") REFERENCES "QR"("id") ON DELETE CASCADE ON UPDATE CASCADE;
