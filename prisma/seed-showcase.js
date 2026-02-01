const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const equipmentList = [
    {
        src: "/image/TTB/TTB1.jpg",
        title: "Máy CT SOMATOM Force",
        description: "Hệ thống chụp cắt lớp vi tính 2 nguồn năng lượng hàng đầu thế giới, giảm 90% liều bức xạ, thời gian chụp siêu nhanh chỉ trong vài giây."
    },
    {
        src: "/image/TTB/TTB7.jpg",
        title: "Máy siêu âm tim 4D",
        description: "Công nghệ siêu âm tim 4D tiên tiến nhất, cho hình ảnh cấu trúc tim sống động, giúp chẩn đoán chính xác các bệnh lý van tim và tim bẩm sinh phức tạp."
    },
    {
        src: "/image/TTB/TTB5.jpg",
        title: "Robot phẫu thuật Da Vinci",
        description: "Hệ thống phẫu thuật robot hiện đại nhất thế giới, cho phép thực hiện các ca phẫu thuật tinh vi với độ chính xác tuyệt đối, giảm thiểu xâm lấn và phục hồi nhanh chóng."
    },
    {
        src: "/image/TTB/TTB4.jpg",
        title: "Laser PicoSure Pro",
        description: "Tiêu chuẩn vàng trong điều trị sắc tố và trẻ hóa da. Sử dụng xung cực ngắn picosecond để phá vỡ sắc tố mà không gây tổn thương mô xung quanh."
    },
    {
        src: "/image/TTB/TTB10.jpg",
        title: "Hệ thống MRI 3 Tesla",
        description: "Máy cộng hưởng từ từ trường cao 3.0 Tesla, cung cấp hình ảnh siêu rõ nét, đặc biệt hiệu quả trong chẩn đoán thần kinh, cơ xương khớp và ung thư giai đoạn sớm."
    },
    {
        src: "/image/TTB/TTB8.jpg",
        title: "Máy Visumax 800",
        description: "Thế hệ laser femtosecond mới nhất từ Zeiss (Đức), ứng dụng trong phẫu thuật khúc xạ (SMILE Pro) với thời gian laser chỉ 10 giây mỗi mắt."
    }
];

async function main() {
    console.log("Seeding showcase...");

    // Clear existing
    await prisma.showcase.deleteMany();

    // Equipment
    for (const [index, item] of equipmentList.entries()) {
        await prisma.showcase.create({
            data: {
                type: "EQUIPMENT",
                title: item.title,
                description: item.description,
                image: item.src,
                order: index
            }
        });
    }

    // Achievements
    for (let i = 1; i <= 4; i++) {
        await prisma.showcase.create({
            data: {
                type: "ACHIEVEMENT",
                image: `/image/TTNB/ttnb${i}.jpg`,
                order: i
            }
        });
    }

    // Process
    for (let i = 1; i <= 4; i++) {
        await prisma.showcase.create({
            data: {
                type: "PROCESS",
                image: `/image/QTKH/qtkh${i}.jpg`,
                order: i
            }
        });
    }

    // Service & Fee
    for (let i = 1; i <= 4; i++) {
        await prisma.showcase.create({
            data: {
                type: "SERVICE_FEE",
                image: `/image/DVCC/dvcc${i}.jpg`,
                order: i
            }
        });
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
