import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    try {
        const showcase = await (prisma as any).showcase.findMany({
            where: type ? { type } : {},
            orderBy: { order: "asc" },
        });
        return NextResponse.json(showcase);
    } catch (error) {
        console.error("Showcase fetch error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, title, description, image, order, link, metadata } = body;

        if (!type || !image) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const item = await (prisma as any).showcase.create({
            data: {
                type,
                title: title || "",
                description: description || "",
                image,
                link: link || "",
                metadata: metadata || "",
                order: parseInt(order) || 0,
            },
        });

        return NextResponse.json(item, { status: 201 });
    } catch (error) {
        console.error("Showcase create error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
