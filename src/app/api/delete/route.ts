import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function DELETE(req: NextRequest) {
    try {

        const body = await req.json();
        const { id, creatorId, type } = body;
        let deletedRecord;

        if ( req.method !== "DELETE" ) {
            return new NextResponse("Method not allowed", { status: 405 });
        }

        if (!id || !creatorId) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        if (type === "link") {
            deletedRecord = await prisma.links.deleteMany({
                where: {
                    id,
                    creatorId
                }
            });
        }else if (type === "qr") {
            deletedRecord = await prisma.qR.deleteMany({
                where: {
                    id,
                    creatorId
                }
            });
        }else {
            return new NextResponse("Invalid type", { status: 400 });
        }

        return new NextResponse(JSON.stringify(deletedRecord), { status: 200 });

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export { DELETE };
