const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    try {
        console.log("Testing Post creation...");
        await prisma.post.create({
            data: {
                title: "Test",
                slug: "test-" + Date.now(),
                isPublished: true
            }
        });
        console.log("Post creation OK");

        console.log("Testing Doctor creation...");
        await prisma.doctor.create({
            data: {
                name: "Test Doc",
                role: "Test Role"
            }
        });
        console.log("Doctor creation OK");
    } catch (e) {
        console.error("Diagnostic error:", e);
    }
}

main().finally(() => prisma.$disconnect());
