import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET: Fetch all posts
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");

        // Build where clause
        const where: any = {};
        if (category) where.category = category;

        const posts = await prisma.post.findMany({
            where,
            orderBy: { createdAt: "desc" },
            include: {
                author: {
                    select: { name: true, email: true }
                }
            }
        });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// POST: Create a new post
export async function POST(request: Request) {
    type AppSession = { user?: { role?: string } } | null;
    const session = (await getServerSession(authOptions as any)) as AppSession;

    const role = session?.user?.role;
    if (!role || !["ADMIN", "EDITOR", "MARKETING"].includes(role)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    try {
        const body = await request.json();
        const { title, slug, summary, content, image, category, isPublished } = body;

        // Check slug uniqueness
        const existingPost = await prisma.post.findUnique({ where: { slug } });
        if (existingPost) {
            return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                slug,
                summary,
                content,
                image,
                category,
                isPublished: isPublished || false,
                authorId: session.user.id,
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
