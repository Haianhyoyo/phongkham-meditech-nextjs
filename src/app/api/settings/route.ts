import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const group = searchParams.get("group");

    try {
        const settings = await prisma.setting.findMany({
            where: group ? { group } : {},
        });
        return NextResponse.json(settings);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { key, value, group } = body;

        const setting = await prisma.setting.upsert({
            where: { key },
            update: { value, group },
            create: { key, value, group },
        });

        return NextResponse.json(setting);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
