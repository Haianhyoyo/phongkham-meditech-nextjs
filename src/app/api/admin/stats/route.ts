import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const [servicesCount, newsCount, bookingsTotal] = await Promise.all([
            prisma.service.count(),
            prisma.post.count(),
            prisma.booking.count(),
        ]);

        // "Liên hệ mới" (Contacts) often refers to requests where service is "Đăng ký tư vấn" 
        // Or those with status PENDING and no specific medical service.
        const [newBookings, newContacts] = await Promise.all([
            prisma.booking.count({
                where: {
                    service: { not: "Đăng ký tư vấn" },
                    status: "PENDING"
                }
            }),
            prisma.booking.count({
                where: {
                    service: "Đăng ký tư vấn",
                    status: "PENDING"
                }
            }),
        ]);

        return NextResponse.json({
            bookings: newBookings,
            contacts: newContacts,
            services: servicesCount,
            news: newsCount,
        });
    } catch (error) {
        console.error("Stats fetch error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
