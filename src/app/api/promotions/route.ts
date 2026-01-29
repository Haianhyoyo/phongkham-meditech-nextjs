import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET: Fetch all promotions
export async function GET(request: Request) {
    try {
        const promotions = await prisma.promotion.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(promotions);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// POST: Create a new promotion
export async function POST(request: Request) {
    const session = await getServerSession(authOptions as any);
    if (!session || !["ADMIN", "EDITOR", "MARKETING"].includes(session.user.role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { title, description, discount, expiry, code, image } = body;

        const newPromotion = await prisma.promotion.create({
            data: {
                title,
                description,
                discount,
                expiry,
                code,
                image,
                isActive: true,
            },
        });

        return NextResponse.json(newPromotion, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
