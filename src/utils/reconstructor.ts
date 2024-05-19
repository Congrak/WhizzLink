import { QRChunk } from "@prisma/client";

export const reconstructQR = (chunks: QRChunk[]): string => {
    chunks.sort((a, b) => a.chunk - b.chunk);
    const base64String = chunks.map(chunk => chunk.data).join('');
    return `data:image/png;base64,${base64String}`;
  };