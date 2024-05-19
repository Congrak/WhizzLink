"use server";

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, qr, creatorId } = body;

    if (req.method !== "POST") {
      return new NextResponse("Method not allowed", { status: 405 });
    }
    
    if (!url || !creatorId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const base64Data = qr.split(",")[1];
    const chunkSize = 1024; // 1KB
    const chunks = [];

    for (let i = 0; i < base64Data.length; i += chunkSize) {
      const chunk = base64Data.slice(i, i + chunkSize);
      chunks.push(chunk);
    }

    const isQRExists = await prisma.qR.findMany({
      where: {
        chunks: {
          some: {
            data: chunks[0]
          }
        }
      },
    });

    if (isQRExists.length > 0) {
      return new NextResponse("QR code already exists", { status: 400 });
    }

    const newQR = await prisma.qR.create({
      data: {
        url,
        creatorId,
        chunks: {
          create: chunks.map((chunk, index) => ({
            chunk: index,
            data: chunk
          })),
        }
      },
    });

    return new NextResponse(JSON.stringify(newQR), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export { POST };
