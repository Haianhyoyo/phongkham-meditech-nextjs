const fs = require('fs');
const path = require('path');

console.log("--- START CHECK PRISMA ---");

try {
    console.log("1. Checking require('@prisma/client')...");
    const { PrismaClient } = require('@prisma/client');
    console.log("✅ REQUIRE SUCCESS! Found PrismaClient.");

    console.log("2. Instantiating PrismaClient...");
    const prisma = new PrismaClient();
    console.log("✅ INSTANTIATION SUCCESS!");

} catch (e) {
    console.error("❌ ERROR:", e.message);
    console.error("Stack:", e.stack);
}

console.log("\n--- FILE SYSTEM CHECK ---");
const prismaDir = path.join(__dirname, 'node_modules', '@prisma', 'client');
if (fs.existsSync(prismaDir)) {
    console.log("✅ Directory exists:", prismaDir);
    console.log("Files:", fs.readdirSync(prismaDir).join(', '));
} else {
    console.log("❌ Directory NOT found:", prismaDir);
}

console.log("--- END CHECK ---");
