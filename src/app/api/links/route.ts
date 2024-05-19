"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const creatorId = url.searchParams.get("creatorId");
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = 6;

    if (!creatorId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (req.method !== "GET") {
      return new NextResponse("Method not allowed", { status: 405 });
    }

    const totalLinks = await prisma.links.count({
      where: {
        creatorId,
      },
    });

    const totalPages = Math.ceil(totalLinks / limit);

    const links = await prisma.links.findMany({
      where: {
        creatorId,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({ links, totalPages, totalLinks }, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 400 });
  }
}
export { GET };
