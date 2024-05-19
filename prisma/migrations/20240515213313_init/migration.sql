-- CreateTable
CREATE TABLE "QR" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "qr" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "QR_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QR_qr_key" ON "QR"("qr");

-- CreateIndex
CREATE INDEX "QR_qr_idx" ON "QR"("qr");

-- CreateIndex
CREATE INDEX "QR_creatorId_idx" ON "QR"("creatorId");

-- AddForeignKey
ALTER TABLE "QR" ADD CONSTRAINT "QR_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
