import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET: Fetch all doctors
export async function GET(request: Request) {
    try {
        const doctors = await prisma.doctor.findMany({
            orderBy: { order: "asc" },
        });
        return NextResponse.json(doctors);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// POST: Create a new doctor
export async function POST(request: Request) {
    type AppSession = { user?: { role?: string } } | null;
    const session = (await getServerSession(authOptions as any)) as AppSession;

    const role = session?.user?.role;
    if (!role || !["ADMIN", "EDITOR"].includes(role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { name, role, image, specialty, description, qualifications, experience } = body;

        const newDoctor = await prisma.doctor.create({
            data: {
                name,
                role,
                image,
                specialty,
                description,
                qualifications, // storing as JSON string or text based on schema
                experience,
                isActive: true,
            },
        });

        return NextResponse.json(newDoctor, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
