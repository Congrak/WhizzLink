"use server";

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, shorted, description, creatorId } = body;

    if (req.method !== "POST") {
      return new NextResponse("Method not allowed", { status: 405 });
    }

    if (!url || !creatorId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    let auxId = Math.random().toString(36).substring(2, 7);

    let linkExists = await prisma.links.findUnique({
      where: {
        shorted: auxId,
      },
    });

    while (linkExists) {
      auxId = Math.random().toString(36).substring(2, 7);
      linkExists = await prisma.links.findUnique({
        where: {
          shorted: auxId,
        },
      });
    }

    const newLink = await prisma.links.create({
      data: {
        url,
        shorted: auxId,
        description,
        creatorId,
      },
    });

    return new NextResponse(JSON.stringify({ newLink }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export { POST };
