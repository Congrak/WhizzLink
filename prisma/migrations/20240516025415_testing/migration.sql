/*
  Warnings:

  - A unique constraint covering the columns `[qrId]` on the table `QRChunk` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "QRChunk_qrId_key" ON "QRChunk"("qrId");

-- CreateIndex
CREATE INDEX "QRChunk_data_idx" ON "QRChunk"("data");
