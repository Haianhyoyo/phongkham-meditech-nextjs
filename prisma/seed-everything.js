const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const heroSlides = [
    {
        type: "HERO_SLIDE",
        image: "/image/banner_tet.jpg",
        metadata: JSON.stringify({
            isBanner: true,
            bgColor: "bg-[#06112a]",
            contact: "088 989 5555 | Tư vấn miễn phí 24/7"
        }),
        order: 0
    },
    {
        type: "HERO_SLIDE",
        title: "“SIÊU MÁY” CT",
        description: "HƠN 100.000 LÁT CẮT",
        image: "/image/clinic_lobby_luxury.png",
        metadata: JSON.stringify({
            subtitle: "HƠN 100.000 LÁT CẮT",
            category: "TRUNG TÂM CHẨN ĐOÁN HÌNH ẢNH VÀ ĐIỆN QUANG CAN THIỆP",
            bgColor: "bg-gradient-to-r from-[#004A99] via-[#0056A4] to-[#0066CC]",
            features: [
                { icon: "psychology", label: "Tích hợp AI", desc: "Chính xác hơn" },
                { icon: "radiology", label: "Giảm liều tia X", desc: "An toàn hơn" },
                { icon: "speed", label: "Tốc độ cực nhanh", desc: "Hiệu quả hơn" }
            ],
            footer: "ĐÃ CÓ MẶT TẠI MEDITECH CẦU GIẤY",
            contact: "088 989 5555 | 265 Cầu Giấy, TP Hà Nội"
        }),
        order: 1
    },
    {
        type: "HERO_SLIDE",
        title: "VẺ ĐẸP HOÀN MỸ",
        description: "CHUẨN Y KHOA QUỐC TẾ",
        image: "/image/unnamed (8).jpg",
        metadata: JSON.stringify({
            subtitle: "CHUẨN Y KHOA QUỐC TẾ",
            category: "DỊCH VỤ THẨM MỸ CÔNG NGHỆ CAO",
            bgColor: "bg-gradient-to-r from-[#004A99] via-[#0056A4] to-[#0066CC]",
            features: [
                { icon: "verified_user", label: "Bác sĩ 15+ năm", desc: "Chuyên môn cao" },
                { icon: "auto_awesome", label: "Laser PicoSure", desc: "Trẻ hóa da" },
                { icon: "health_and_safety", label: "An toàn tuyệt đối", desc: "Cam kết văn bản" }
            ],
            footer: "PHÁC ĐỒ CÁ NHÂN HÓA",
            contact: "088 989 5555 | Tư vấn miễn phí 24/7"
        }),
        order: 2
    }
];

const coreValues = [
    { image: "/image/values/icon5.png", title: "CHUYÊN GIA ĐẦU NGÀNH - BÁC SĨ GIỎI - CHUYÊN VIÊN GIÀU KINH NGHIỆM" },
    { image: "/image/values/icon4.png", title: "TRANG THIẾT BỊ HIỆN ĐẠI BẬC NHẤT" },
    { image: "/image/values/icon3.png", title: "HIỆU QUẢ ĐIỀU TRỊ CAO THÀNH TỰU NỔI BẬT" },
    { image: "/image/values/icon2.png", title: "QUY TRÌNH TOÀN DIỆN, KHOA HỌC, CHUYÊN NGHIỆP" },
    { image: "/image/values/icon1.png", title: "DỊCH VỤ CAO CẤP CHI PHÍ HỢP LÝ" }
];

const expertStats = [
    { title: "GIÁO SƯ - P. GIÁO SƯ", description: "24" },
    { title: "TIẾN SĨ - BÁC SĨ CKII", description: "171" },
    { title: "THẠC SĨ - BÁC SĨ CKI", description: "490" },
    { title: "BÁC SĨ", description: "786" },
    { title: "KỸ THUẬT VIÊN", description: "155" },
    { title: "ĐIỀU DƯỠNG", description: "803" }
];

const hospitalSystems = [
    {
        title: "Bệnh viện Đa khoa Meditech Hà Nội",
        image: "/image/BVDK/hn3.jpg",
        metadata: JSON.stringify({
            contact_label: "Liên hệ",
            direction_label: "Chỉ đường"
        }),
        order: 0
    },
    {
        title: "Bệnh viện Đa khoa Meditech TP.HCM",
        image: "/image/BVDK/hn3.jpg",
        metadata: JSON.stringify({
            contact_label: "Liên hệ",
            direction_label: "Chỉ đường"
        }),
        order: 1
    }
];

const specialties = [
    { title: "Nhấn mí", image: "/image/specialties/nhan_mi.png" },
    { title: "Lấy mỡ mí", image: "/image/specialties/lay_mo_mi.png" },
    { title: "Nâng mũi không phẫu thuật", image: "/image/specialties/nang_mui.png" },
    { title: "Tiêm filler - botox", image: "/image/specialties/tiem_filler.png" },
    { title: "Cấy mỡ", image: "/image/specialties/cay_mo.png" }
];

const specialServices = [
    {
        title: "Dịch vụ cấp cứu 24/7",
        description: "Đội ngũ y bác sĩ trực 24/7, sẵn sàng hỗ trợ và xử lý các tình huống khẩn cấp",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q",
        link: "/lien-he",
        metadata: JSON.stringify({ icon: "emergency" })
    },
    {
        title: "Khu khám VIP",
        description: "Không gian riêng tư, sang trọng với dịch vụ chăm sóc đặc biệt dành cho khách hàng VIP",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg",
        link: "/dat-lich",
        metadata: JSON.stringify({ icon: "diamond" })
    },
    {
        title: "Tư vấn & Điều trị chuyên sâu",
        description: "Phác đồ điều trị cá nhân hóa, theo dõi sát sao từng giai đoạn để đạt hiệu quả tối ưu",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
        link: "/chuyen-gia",
        metadata: JSON.stringify({ icon: "psychology" })
    }
];

const insurancePartners = [
    { title: "Bảo Việt", image: "/image/insurance/baovietnhantho.jpg" },
    { title: "Bảo Minh", image: "/image/insurance/baominh.png" },
    { title: "PVI", image: "/image/insurance/pvi.png" },
    { title: "Liberty", image: "/image/insurance/liberty.png" },
    { title: "Prudential", image: "/image/insurance/prudential.png" },
    { title: "Manulife", image: "/image/insurance/manulife.jpg" }
];

async function main() {
    console.log("Seeding all showcase items...");

    // Clear existing
    await prisma.showcase.deleteMany();

    // Hero Slides
    for (const item of heroSlides) {
        await prisma.showcase.create({ data: item });
    }

    // Core Values
    for (const [index, item] of coreValues.entries()) {
        await prisma.showcase.create({
            data: {
                type: "CORE_VALUE",
                title: item.title,
                image: item.image,
                order: index
            }
        });
    }

    // Expert Stats
    for (const [index, item] of expertStats.entries()) {
        await prisma.showcase.create({
            data: {
                type: "EXPERT_STAT",
                title: item.title,
                description: item.description,
                image: "", // No image
                order: index
            }
        });
    }

    // Already handled: Equipment, Achievement, Process, ServiceFee
    // I'll re-seed them too for completeness
    const equipmentList = [
        { src: "/image/TTB/TTB1.jpg", title: "Máy CT SOMATOM Force", description: "Hệ thống chụp cắt lớp vi tính 2 nguồn năng lượng hàng đầu thế giới..." },
        { src: "/image/TTB/TTB7.jpg", title: "Máy siêu âm tim 4D", description: "Công nghệ siêu âm tim 4D tiên tiến nhất..." },
        { src: "/image/TTB/TTB5.jpg", title: "Robot phẫu thuật Da Vinci", description: "Hệ thống phẫu thuật robot hiện đại nhất thế giới..." },
        { src: "/image/TTB/TTB4.jpg", title: "Laser PicoSure Pro", description: "Tiêu chuẩn vàng trong điều trị sắc tố và trẻ hóa da..." },
        { src: "/image/TTB/TTB10.jpg", title: "Hệ thống MRI 3 Tesla", description: "Máy cộng hưởng từ từ trường cao 3.0 Tesla..." },
        { src: "/image/TTB/TTB8.jpg", title: "Máy Visumax 800", description: "Thế hệ laser femtosecond mới nhất..." }
    ];
    for (const [index, item] of equipmentList.entries()) {
        await prisma.showcase.create({
            data: { type: "EQUIPMENT", title: item.title, description: item.description, image: item.src, order: index }
        });
    }

    for (let i = 1; i <= 4; i++) {
        await prisma.showcase.create({ data: { type: "ACHIEVEMENT", image: `/image/TTNB/ttnb${i}.jpg`, order: i } });
        await prisma.showcase.create({ data: { type: "PROCESS", image: `/image/QTKH/qtkh${i}.jpg`, order: i } });
        await prisma.showcase.create({ data: { type: "SERVICE_FEE", image: `/image/DVCC/dvcc${i}.jpg`, order: i } });
    }

    // Hospital Systems
    for (const item of hospitalSystems) {
        await prisma.showcase.create({ data: { type: "HOSPITAL_SYSTEM", ...item } });
    }

    // Specialties
    for (const [index, item] of specialties.entries()) {
        await prisma.showcase.create({ data: { type: "HOME_SPECIALTY", ...item, order: index } });
    }

    // Special Services
    for (const [index, item] of specialServices.entries()) {
        await prisma.showcase.create({ data: { type: "SPECIAL_SERVICE", ...item, order: index } });
    }

    // Insurance
    for (const [index, item] of insurancePartners.entries()) {
        await prisma.showcase.create({ data: { type: "INSURANCE", title: item.title, image: item.image, order: index } });
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
