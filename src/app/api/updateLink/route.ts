"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, shorted, creatorId, newShorted } = body;

    if (req.method !== "PUT") {
      return new NextResponse("Method not allowed", { status: 405 });
    }

    if (!id || !shorted || !creatorId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (newShorted === "") {
      return new NextResponse("error.shorted.empty", { status: 406 });
    }

    if (shorted === newShorted) {
      return new NextResponse("error.shorted.same", { status: 406 });
    }

    const isLinksExists = await prisma.links.findUnique({
      where: {
        id,
        creatorId,
        shorted,
      },
    });

    if (!isLinksExists) {
      return new NextResponse("Link not found", { status: 404 });
    }

    const isShortedUnique = await prisma.links.findUnique({
      where: {
        shorted: newShorted,
      },
    });

    if (isShortedUnique) {
      return new NextResponse("error.shorted.exists", { status: 406 });
    }

    const updatedLink = await prisma.links.update({
      where: {
        id,
        creatorId,
      },
      data: {
        shorted: newShorted,
      },
    });

    return NextResponse.json(updatedLink, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export { PUT };
