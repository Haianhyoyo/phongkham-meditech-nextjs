const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const servicesData = [
    // 1-8: Minor Surgery
    { slug: "cat-mi", type: "tieu-phau", category: "Mắt", title: "Cắt Mí Eye-Lift", description: "Kiến tạo nếp mí rõ nét, tự nhiên.", price: "8tr - 15tr", recoveryTime: "5-7 ngày", isActive: true },
    { slug: "nhan-mi", type: "tieu-phau", category: "Mắt", title: "Nhấn Mí", description: "Tạo nếp mí không phẫu thuật.", price: "5tr - 8tr", recoveryTime: "3-5 ngày", isActive: true },
    { slug: "lay-mo-mi", type: "tieu-phau", category: "Mắt", title: "Lấy Mỡ Mí", description: "Loại bỏ bọng mỡ mắt.", price: "Liên hệ", recoveryTime: "5-7 ngày", isActive: true },
    { slug: "nang-mui-khong-phau-thuat", type: "tieu-phau", category: "Mũi", title: "Nâng Mũi Không Phẫu Thuật", description: "Nâng mũi bằng chỉ/filler.", price: "Liên hệ", recoveryTime: "1-2 ngày", isActive: true },
    { slug: "tiem-filler-botox", type: "tieu-phau", category: "Da liễu", title: "Tiêm Filler - Botox", description: "Làm đẹp không phẫu thuật.", price: "Theo cc", recoveryTime: "Ngay lập tức", isActive: true },
    { slug: "cay-mo-tu-than", type: "tieu-phau", category: "Trẻ hóa", title: "Cấy Mỡ Tự Thân", description: "Trẻ hóa khuôn mặt tự nhiên.", price: "Liên hệ", recoveryTime: "5-7 ngày", isActive: true },
    { slug: "thu-gon-moi", type: "tieu-phau", category: "Môi", title: "Thu Gọn Môi", description: "Tạo hình môi trái tim.", price: "Liên hệ", recoveryTime: "7 ngày", isActive: true },
    { slug: "tri-seo", type: "tieu-phau", category: "Da", title: "Điều Trị Sẹo", description: "Xóa sẹo bằng công nghệ cao.", price: "Liên hệ", recoveryTime: "Tùy tình trạng", isActive: true },

    // 9-16: Major Surgery
    { slug: "nang-mui-cau-truc", type: "dai-phau", category: "Mũi", title: "Nâng Mũi Cấu Trúc", description: "Tái cấu trúc toàn diện dáng mũi.", price: "35tr - 75tr", recoveryTime: "10 ngày", isActive: true },
    { slug: "got-ham-ha-go-ma", type: "dai-phau", category: "Hàm mặt", title: "Gọt Hàm - Hạ Gò Má", description: "Tạo mặt V-line thon gọn.", price: "70tr+", recoveryTime: "2-4 tuần", isActive: true },
    { slug: "don-cam", type: "dai-phau", category: "Hàm mặt", title: "Độn Cằm V-Line", description: "Khắc phục cằm lẹm, ngắn.", price: "15tr+", recoveryTime: "7 ngày", isActive: true },
    { slug: "phau-thuat-ham", type: "dai-phau", category: "Hàm mặt", title: "Phẫu Thuật Hàm Hô/Móm", description: "Chỉnh hàm hô móm sai khớp cắn.", price: "80tr+", recoveryTime: "4-6 tuần", isActive: true },
    { slug: "nang-nguc", type: "dai-phau", category: "Ngực", title: "Nâng Ngực Nội Soi", description: "Vòng 1 căng tròn, quyến rũ.", price: "60tr+", recoveryTime: "1 tháng", isActive: true },
    { slug: "hut-mo-tao-hinh", type: "dai-phau", category: "Body", title: "Hút Mỡ Tạo Hình", description: "Tạo đường cong cơ thể.", price: "40tr+", recoveryTime: "3-5 ngày", isActive: true },
    { slug: "cang-da-mat-co", type: "dai-phau", category: "Trẻ hóa", title: "Căng Da Mặt / Cổ", description: "Trẻ hóa 10-15 tuổi.", price: "50tr+", recoveryTime: "2 tuần", isActive: true },
    { slug: "tao-hinh-thanh-bung", type: "dai-phau", category: "Body", title: "Tạo Hình Thành Bụng", description: "Xử lý da chùng, sổ cơ bụng.", price: "45tr+", recoveryTime: "1 tháng", isActive: true },

    // 17-21: Specialties (from design)
    { slug: "tham-my-mat-spec", type: "specialty", category: "Chuyên khoa", title: "Thẩm Mỹ Mắt", description: "Chuyên sâu về các dịch vụ mắt.", image: "/image/specialties/nhan_mi.png", isActive: true },
    { slug: "tham-my-mui-spec", type: "specialty", category: "Chuyên khoa", title: "Thẩm Mỹ Mũi", description: "Chuyên sâu về các dịch vụ mũi.", image: "/image/specialties/nang_mui.png", isActive: true },
    { slug: "tham-my-ham-mat-spec", type: "specialty", category: "Chuyên khoa", title: "Thẩm Mỹ Hàm Mặt", description: "Chuyên sâu về khung xương mặt.", image: "/image/specialties/lay_mo_mi.png", isActive: true },
    { slug: "tham-my-voc-dang-spec", type: "specialty", category: "Chuyên khoa", title: "Thẩm Mỹ Vóc Dáng", description: "Chuyên sâu về body contouring.", image: "/image/specialties/cay_mo.png", isActive: true },
    { slug: "dieu-tri-da-spec", type: "specialty", category: "Chuyên khoa", title: "Điều Trị Da", description: "Chuyên sâu về da liễu thẩm mỹ.", image: "/image/specialties/tiem_filler.png", isActive: true },

    // 22-24: Special Services
    { slug: "cap-cuu-247", type: "special", category: "Dịch vụ đặc biệt", title: "Cấp cứu 24/7", description: "Hỗ trợ khẩn cấp mọi lúc.", icon: "emergency", isActive: true },
    { slug: "khu-kham-vip", type: "special", category: "Dịch vụ đặc biệt", title: "Khu khám VIP", description: "Không gian sang trọng, riêng tư.", icon: "diamond", isActive: true },
    { slug: "tu-van-chuyen-sau", type: "special", category: "Dịch vụ đặc biệt", title: "Tư vấn chuyên sâu", description: "Phác đồ cá nhân hóa từ chuyên gia.", icon: "psychology", isActive: true },
];

const newsCategories = ["Tin tức", "Kiến thức", "Công nghệ", "Làm đẹp", "Chăm sóc da"];
const newsData = Array.from({ length: 48 }, (_, i) => ({
    title: `Bài viết tin tức ${i + 1}: Chuyên sâu về thẩm mỹ và công nghệ ${i % 5}`,
    slug: `bai-viet-tin-tuc-${i + 1}`,
    summary: `Tóm tắt bài viết số ${i + 1} về xu hướng thẩm mỹ quốc tế và quy chuẩn y khoa tại Meditech.`,
    content: `<p>Nội dung chi tiết của bài viết số ${i + 1}...</p>`,
    category: newsCategories[i % newsCategories.length],
    image: `/image/unnamed (${(i % 30) + 1}).jpg`,
    isPublished: true,
    createdAt: new Date(Date.now() - i * 86400000) // Each one day older
}));

const bookingsData = Array.from({ length: 12 }, (_, i) => ({
    name: `Khách hàng ${i + 1}`,
    phone: `09012345${i.toString().padStart(2, '0')}`,
    email: `khachhang${i + 1}@example.com`,
    service: servicesData[i % 16].title,
    message: "Tôi muốn đặt lịch tư vấn sớm nhất.",
    status: "PENDING",
    createdAt: new Date()
}));

const contactsData = Array.from({ length: 5 }, (_, i) => ({
    name: `Người liên hệ ${i + 1}`,
    phone: `09876543${i.toString().padStart(2, '0')}`,
    service: "Đăng ký tư vấn",
    message: "Yêu cầu liên hệ lại để tư vấn về dịch vụ.",
    status: "PENDING",
    createdAt: new Date()
}));

const doctorsData = [
    { name: "BS. Tuệ Linh", role: "Giám đốc chuyên môn", image: "/image/bacsi.jpg", specialty: "PTTM", experience: "20 năm", isActive: true },
    { name: "BS. Trần Hoàng", role: "Trưởng khoa Tiểu phẫu", image: "/image/bacsi.jpg", specialty: "Mắt/Mũi", experience: "12 năm", isActive: true },
    { name: "BS. Vũ Lan Anh", role: "Bác sĩ Da liễu", image: "/image/bacsi.jpg", specialty: "Da liễu", experience: "10 năm", isActive: true },
    { name: "BS. Nguyễn Văn A", role: "Trưởng khoa Nội khoa", image: "/image/bacsi.jpg", specialty: "Nội khoa", experience: "15 năm", isActive: true },
    { name: "BS. Trần Thị B", role: "Chuyên gia Trẻ hóa", image: "/image/bacsi.jpg", specialty: "Trẻ hóa", experience: "18 năm", isActive: true },
    { name: "BS. Lê Hoàng C", role: "Thẩm mỹ ngoại khoa", image: "/image/bacsi.jpg", specialty: "Ngoại khoa", experience: "14 năm", isActive: true },
];

const showcaseData = [
    // Hero Slides
    {
        type: "HERO_SLIDE",
        title: "KIM CƯƠNG TRẮNG",
        description: "CHUẨN Y KHOA QUỐC TẾ",
        image: "/image/banner.jpg",
        order: 1,
        metadata: JSON.stringify({
            category: "KIẾN TẠO DÁNG MẮT | CƠ NÂNG MI",
            footer: "Số 1 về Phẫu thuật Mắt",
            bgColor: "bg-slate-900",
            contact: "088 989 5555 | 135 Nam Đồng, Đống Đa, Hà Nội",
            features: [
                { icon: "verified", label: "PHÁC ĐỒ CÁ NHÂN HÓA", desc: "VẼ VÀ ĐO VỚI TỶ LỆ VÀNG" },
                { icon: "security", label: "CÔNG NGHỆ KHÔNG SƯNG", desc: "HỒI PHỤC SAU 3-5 NGÀY" },
                { icon: "star", label: "KẾT QUẢ TỰ NHIÊN", desc: "BẢO HÀNH TRỌN ĐỜI" }
            ]
        })
    },
    {
        type: "HERO_SLIDE",
        image: "/image/banner_tet.jpg",
        order: 0,
        metadata: JSON.stringify({
            isBanner: true,
            contact: "088 989 5555 | 135 Nam Đồng, Đống Đa, Hà Nội"
        })
    },

    // Core Values
    { type: "CORE_VALUE", title: "ĐỘI NGŨ CHUYÊN GIA ĐẦU NGÀNH", image: "/image/values/icon5.png", order: 0 },
    { type: "CORE_VALUE", title: "CÔNG NGHỆ THẨM MỸ TÂN TIẾN", image: "/image/values/icon4.png", order: 1 },
    { type: "CORE_VALUE", title: "QUY TRÌNH AN TOÀN Y KHOA", image: "/image/values/icon3.png", order: 2 },
    { type: "CORE_VALUE", title: "DỊCH VỤ CHĂM SÓC TẬN TÂM", image: "/image/values/icon2.png", order: 3 },
    { type: "CORE_VALUE", title: "KẾT QUẢ TỰ NHIÊN BỀN VỮNG", image: "/image/values/icon1.png", order: 4 },

    // Expert Stats
    { type: "EXPERT_STAT", title: "BÁC SĨ CHUYÊN KHOA", description: "50+", image: "", order: 0 },
    { type: "EXPERT_STAT", title: "NĂM KINH NGHIỆM", description: "15+", image: "", order: 1 },
    { type: "EXPERT_STAT", title: "KHÁCH HÀNG HÀI LÒNG", description: "10K+", image: "", order: 2 },

    // Equipment
    { type: "EQUIPMENT", title: "Thiết bị Thermage FLX", description: "Trẻ hóa da cao cấp.", image: "/image/TTB/ttb1.jpg", order: 0 },
    { type: "EQUIPMENT", title: "Laser PicoSure Pro", description: "Xóa nám trẻ hóa.", image: "/image/TTB/ttb4.jpg", order: 1 },
    { type: "EQUIPMENT", title: "Hifu Ultra", description: "Nâng cơ đa tầng.", image: "/image/TTB/ttb5.jpg", order: 2 },
    { type: "EQUIPMENT", title: "MRI 3.0 Tesla", description: "Chẩn đoán hình ảnh.", image: "/image/TTB/ttb10.jpg", order: 3 },
    { type: "EQUIPMENT", title: "CT 512 Slice", description: "Tầm soát sức khỏe.", image: "/image/TTB/ttb7.jpg", order: 4 },
    { type: "EQUIPMENT", title: "Morpheus 8", description: "Căng bóng da.", image: "/image/TTB/ttb2.jpg", order: 5 },

    // Others
    { type: "ACHIEVEMENT", title: "Top 10 Bệnh Viện", image: "/image/15.jpg", order: 0 },
    { type: "HOSPITAL_SYSTEM", title: "Meditech Hà Nội", image: "/image/hn1.jpg", order: 0 },
    { type: "INSURANCE", title: "Bảo Việt", image: "/image/insurance/baovietnhantho.jpg", order: 0 },
];

const settingsData = [
    { key: "site_name", value: "Viện Thẩm Mỹ Meditech", group: "general" },
    { key: "contact_phone", value: "088 989 5555", group: "contact" },
    { key: "contact_address", value: "88 P. Láng Hạ, Láng Hạ, Đống Đa, Hà Nội", group: "contact" },
    { key: "contact_email", value: "contact@meditech.vn", group: "contact" },
    { key: "hotline_247", value: "1900 123 456", group: "contact" },
    { key: "opening_hours", value: "08:00 - 20:00 (Tất cả các ngày)", group: "general" },
    { key: "social_fb", value: "https://facebook.com/meditech", group: "social" },
];

async function main() {
    console.log("🚀 Starting Standard Data Seeding...");

    try {
        await prisma.service.deleteMany();
        await prisma.post.deleteMany();
        await prisma.booking.deleteMany();
        await prisma.doctor.deleteMany();
        await prisma.showcase.deleteMany();
        await prisma.promotion.deleteMany();
        await prisma.review.deleteMany();
        await prisma.setting.deleteMany();

        console.log("📦 Seeding 24 Services...");
        for (const item of servicesData) await prisma.service.create({ data: item });

        console.log("📰 Seeding 48 News Articles...");
        for (const item of newsData) await prisma.post.create({ data: item });

        console.log("📅 Seeding 12 Bookings...");
        for (const item of bookingsData) await prisma.booking.create({ data: item });

        console.log("✉️ Seeding 5 Contacts (Inquiry Bookings)...");
        for (const item of contactsData) await prisma.booking.create({ data: item });

        console.log("👨‍⚕️ Seeding 6 Doctors...");
        for (const item of doctorsData) await prisma.doctor.create({ data: item });

        console.log("🖼️ Seeding Showcase Data...");
        for (const item of showcaseData) await prisma.showcase.create({ data: item });

        console.log("⚙️ Seeding Settings...");
        for (const item of settingsData) await prisma.setting.create({ data: item });

        console.log("✅ Standard Seeding Finished Successfully!");
    } catch (e) {
        console.error("❌ Seeding failed:", e);
        process.exit(1);
    }
}

main().finally(async () => { await prisma.$disconnect(); });
