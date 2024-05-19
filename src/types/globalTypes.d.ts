import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export interface LinkObject {
  id: string;
  url: string;
  shorted: string;
  description: string | null;
  createdAt: string;
  creatorId: string;
}

export interface ChunkQR {
  chunk: number;
  data: string;
  id: string;
  qrId: string;
}
