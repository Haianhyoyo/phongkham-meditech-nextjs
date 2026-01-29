import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET: Get single doctor
export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const doctor = await prisma.doctor.findUnique({
            where: { id },
        });

        if (!doctor) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        return NextResponse.json(doctor);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// PUT: Update doctor
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions as any);
    if (!session || !["ADMIN", "EDITOR"].includes(session.user.role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const { id } = params;
        const body = await request.json();

        const updatedDoctor = await prisma.doctor.update({
            where: { id },
            data: body,
        });

        return NextResponse.json(updatedDoctor);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// DELETE: Delete doctor
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions as any);
    if (!session || !["ADMIN"].includes(session.user.role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const { id } = params;
        await prisma.doctor.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
