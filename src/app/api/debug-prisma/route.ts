import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET() {
    const dbUrl = process.env.DATABASE_URL || "";
    const debugInfo: any = {
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV,
        database_url_defined: !!process.env.DATABASE_URL,
        database_url_length: dbUrl.length,
        database_url_starts_with: dbUrl.substring(0, 10), // Xem 10 ký tự đầu để check dấu cách/ngoặc
        message: "Starting Prisma Debug...",
        steps: []
    };

    try {
        debugInfo.steps.push("1. Attempting to require @prisma/client...");
        const prisma = new PrismaClient();
        debugInfo.steps.push("✅ PrismaClient instantiated successfully.");

        debugInfo.steps.push("2. Attempting database connection ($connect)...");
        await prisma.$connect();
        debugInfo.steps.push("✅ Database connected successfully.");

        debugInfo.steps.push("3. Resetting admin@meditech.com password...");
        const hashedPassword = await require('bcryptjs').hash('admin123', 10);
        await prisma.user.upsert({
            where: { email: 'admin@meditech.com' },
            update: { password: hashedPassword },
            create: {
                email: 'admin@meditech.com',
                name: 'Admin User',
                password: hashedPassword,
                role: 'ADMIN'
            }
        });
        debugInfo.steps.push("✅ Password reset to 'admin123' successfully.");

        await prisma.$disconnect();
        debugInfo.status = "SUCCESS";
    } catch (error: any) {
        debugInfo.status = "FAILED";
        debugInfo.error = {
            message: error.message,
            stack: error.stack,
            code: error.code
        };
    }

    return NextResponse.json(debugInfo);
}
