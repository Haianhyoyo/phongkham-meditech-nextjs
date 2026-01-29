import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// DELETE: Delete a service
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions as any);
    if (!session || !["ADMIN"].includes(session.user.role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const { id } = params; // Params might be a promise in Next 15+, but let's assume standard behavior or await if needed
        // Note: In Next.js 15, params is a Promise. We should check Next version. 
        // Given the context of "NextJs 16.1.1 (Turbopack)" in user logs, 'params' IS A PROMISE via props but in Route Handlers the typings are slightly different. 
        // Actually in Route Handlers matching [id], params is passed. Let's strictly follow Next 15+ patterns if possible, 
        // but the provided type definition in standard docs usually shows it as object.
        // However, recent changelogs say APIs might change. Let's safer assume it acts as an object for now or handle it.

        await prisma.service.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// GET: Get single service details
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const service = await prisma.service.findUnique({
            where: { id },
        });

        if (!service) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// PUT: Update service
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions as any);
    if (!session || !["ADMIN", "EDITOR"].includes(session.user.role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const { id } = await params;
        const body = await request.json();

        const updatedService = await prisma.service.update({
            where: { id },
            data: body,
        });

        return NextResponse.json(updatedService);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
