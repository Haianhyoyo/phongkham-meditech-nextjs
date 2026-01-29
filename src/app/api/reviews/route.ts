import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Fetch all reviews
export async function GET(request: Request) {
    try {
        const reviews = await prisma.review.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(reviews);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
