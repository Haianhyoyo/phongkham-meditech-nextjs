import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
// POST: Create a new booking
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, message, service } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const booking = await prisma.booking.create({
            data: {
                name,
                phone,
                message: message || "",
                service: service || "Tư vấn chung",
                status: "PENDING",
            },
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error("Booking error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
