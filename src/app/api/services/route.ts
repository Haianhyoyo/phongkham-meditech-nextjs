import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET: Fetch all services
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const type = searchParams.get("type");

        const whereCondition = type ? { type } : {};

        const services = await prisma.service.findMany({
            where: whereCondition,
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(services);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// POST: Create a new service
export async function POST(request: Request) {
    type AppSession = { user?: { role?: string } } | null;
    const session = (await getServerSession(authOptions as any)) as AppSession;

    const role = session?.user?.role;
    if (!role || !["ADMIN", "EDITOR"].includes(role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { title, slug, type, category, shortDesc, content, images, price, recoveryTime } = body;

        // Basic validation
        if (!title || !slug || !type) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const newService = await prisma.service.create({
            data: {
                title,
                slug,
                type,
                category,
                shortDesc,
                content,
                images,
                price,
                recoveryTime,
                isActive: true,
            },
        });

        return NextResponse.json(newService, { status: 201 });
    } catch (error: any) {
        if (error.code === 'P2002') { // Unique constraint violation (slug)
            return NextResponse.json(
                { error: "Slug already exists" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
