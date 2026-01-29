import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Fetch all bookings
export async function GET(request: Request) {
    try {
        const bookings = await prisma.booking.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
