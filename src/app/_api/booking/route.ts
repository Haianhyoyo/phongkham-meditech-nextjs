import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Mark this route as dynamic to prevent static generation during build
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        if (!prisma) {
            throw new Error("Database connection is not available");
        }

        const body = await request.json();
        const { name, phone, service } = body;

        if (!name || !phone || !service) {
            return NextResponse.json(
                { error: "Vui lòng điền đầy đủ thông tin" },
                { status: 400 }
            );
        }

        const booking = await prisma.booking.create({
            data: {
                name,
                phone,
                service,
                status: "PENDING",
            },
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error("Booking Error:", error);
        return NextResponse.json(
            { error: "Đã có lỗi xảy ra. Vui lòng thử lại sau." },
            { status: 500 }
        );
    }
}
