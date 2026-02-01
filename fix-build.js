const fs = require('fs');
const path = require('path');

// Đường dẫn nguồn và đích
const sourcePrisma = path.join(__dirname, 'node_modules', '@prisma');
const destPrisma = path.join(__dirname, '.next', 'standalone', 'node_modules', '@prisma');

const sourceDotPrisma = path.join(__dirname, 'node_modules', '.prisma');
const destDotPrisma = path.join(__dirname, '.next', 'standalone', 'node_modules', '.prisma');

function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;

    // Tạo thư mục đích nếu chưa có
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

console.log('🔄 Đang vá lỗi Prisma trong bản build Standalone...');

try {
    // 1. Copy @prisma (chứa index.js, package.json...)
    console.log('1. Copying @prisma...');
    copyDir(sourcePrisma, destPrisma);

    // 2. Copy .prisma (chứa binary engines)
    console.log('2. Copying .prisma...');
    copyDir(sourceDotPrisma, destDotPrisma);

    // 3. Copy public folder
    console.log('3. Copying public folder...');
    const sourcePublic = path.join(__dirname, 'public');
    const destPublic = path.join(__dirname, '.next', 'standalone', 'public');
    copyDir(sourcePublic, destPublic);

    // 4. Copy .next/static
    console.log('4. Copying .next/static...');
    const sourceStatic = path.join(__dirname, '.next', 'static');
    const destStatic = path.join(__dirname, '.next', 'standalone', '.next', 'static');
    copyDir(sourceStatic, destStatic);

    console.log('✅ ĐÃ VÁ XONG TOÀN BỘ! (Fixed Everything)');
    console.log('Giờ folder .next/standalone đã có đủ: node_modules, public, .next/static.');
} catch (e) {
    console.error('❌ Lỗi khi copy:', e);
}
