"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const creatorId = url.searchParams.get("creatorId")
        const page = parseInt(url.searchParams.get("page") || "1", 10);
        const limit = 6;

        if (!creatorId) {
            return new NextResponse("Missing required fields", { status: 400 })
        }

        if (req.method !== "GET") {
            return new NextResponse("Method not allowed", { status: 405 })
        }

        const totalQRs = await prisma.qR.count({
            where: { creatorId },
          });
      
        const totalPages = Math.ceil(totalQRs / limit);

        const qrs = await prisma.qR.findMany({
            where: {
                creatorId
            },
            skip: (page - 1) * limit,
            take: limit,
            include: {
                chunks: true
            }
        })

        return NextResponse.json({ qrs, totalPages, totalQRs }, { status: 200 });
    }catch (error) {
        return new NextResponse("Internal Server Error", { status: 400 })
    }
}

export { GET }