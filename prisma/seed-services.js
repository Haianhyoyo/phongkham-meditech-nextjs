const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const servicesData = [
    // --- TIỂU PHẪU ---
    {
        id: "cat-mi",
        slug: "cat-mi",
        type: "tieu-phau",
        category: "Mắt",
        title: "Cắt Mí Eye-Lift",
        description: "Kiến tạo nếp mí rõ nét, tự nhiên, loại bỏ da dư mỡ thừa giúp đôi mắt to tròn, linh hoạt.",
        candidates: JSON.stringify(["Người mắt một mí, mí lót.", "Người có da chùng, mỡ thừa.", "Muốn nếp mí to tròn."]),
        process: JSON.stringify(["Thăm khám.", "Sát khuẩn & Gây tê.", "Thực hiện cắt mí.", "Khâu đóng vết thương."]),
        recoveryTime: "5 - 7 ngày cắt chỉ.",
        price: "8.000.000đ - 15.000.000đ",
        faq: JSON.stringify([{ question: "Cắt mí có đau không?", answer: "Có gây tê nên không đau." }]),
        realImages: JSON.stringify(["/image/catmieye_lift.jpg", "/image/594685847_122243953076248364_4104872537926630032_n.jpg"])
    },
    {
        id: "nhan-mi",
        slug: "nhan-mi",
        type: "tieu-phau",
        category: "Mắt",
        title: "Nhấn Mí",
        description: "Tạo nếp mí không phẫu thuật, thời gian hồi phục nhanh.",
        candidates: JSON.stringify(["Mắt một mí, da mỏng.", "Chưa có da chùng mỡ thừa."]),
        process: JSON.stringify(["Đo vẽ.", "Gây tê.", "Luồn chỉ tạo liên kết."]),
        recoveryTime: "3 - 5 ngày.",
        price: "5.000.000đ - 8.000.000đ",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/2.jpg"])
    },
    {
        id: "lay-mo-mi",
        slug: "lay-mo-mi",
        type: "tieu-phau",
        category: "Mắt",
        title: "Lấy Mỡ Mí",
        description: "Loại bỏ bọng mỡ mắt dưới hoặc trên, trẻ hóa đôi mắt.",
        candidates: JSON.stringify(["Có bọng mỡ mắt."]),
        process: JSON.stringify(["Gây tê.", "Rạch đường nhỏ lấy mỡ.", "Khâu thẩm mỹ."]),
        recoveryTime: "5 - 7 ngày.",
        price: "Cam kết chi phí hợp lý.",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/2.jpg"])
    },
    {
        id: "nang-mui-khong-phau-thuat",
        slug: "nang-mui-khong-phau-thuat",
        type: "tieu-phau",
        category: "Mũi",
        title: "Nâng Mũi Không Phẫu Thuật",
        description: "Nâng cao sống mũi bằng chỉ hoặc filler, hiệu quả tức thì.",
        candidates: JSON.stringify(["Sợ phẫu thuật.", "Muốn cải thiện nhẹ dáng mũi."]),
        process: JSON.stringify(["Ủ tê.", "Thực hiện thủ thuật."]),
        recoveryTime: "1 - 2 ngày.",
        price: "Liên hệ.",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/3.jpg"])
    },
    {
        id: "tiem-filler-botox",
        slug: "tiem-filler-botox",
        type: "tieu-phau",
        category: "Thẩm mỹ nội khoa",
        title: "Tiêm Filler - Botox",
        description: "Làm đầy, xóa nhăn, thon gọn hàm không phẫu thuật.",
        candidates: JSON.stringify(["Muốn làm đẹp nhanh.", "Không nghỉ dưỡng."]),
        process: JSON.stringify(["Ủ tê.", "Tiêm tinh chất."]),
        recoveryTime: "Ngay lập tức.",
        price: "Theo cc.",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/2.jpg"])
    },
    {
        id: "cay-mo-tu-than",
        slug: "cay-mo-tu-than",
        type: "tieu-phau",
        category: "Trẻ hóa",
        title: "Cấy Mỡ Tự Thân",
        description: "Làm đầy thái dương, má hóp, rãnh cười bằng mỡ tự thân.",
        candidates: JSON.stringify(["Khuôn mặt hốc hác.", "Muốn trẻ hóa tự nhiên."]),
        process: JSON.stringify(["Hút mỡ vùng thừa.", "Ly tâm lọc mỡ.", "Cấy vào vùng khuyết."]),
        recoveryTime: "5 - 7 ngày.",
        price: "Liên hệ.",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/594685847_122243953076248364_4104872537926630032_n.jpg"])
    },
    {
        id: "thu-gon-moi",
        slug: "thu-gon-moi",
        type: "tieu-phau",
        category: "Môi",
        title: "Thu Gọn Môi",
        description: "Tạo hình môi trái tim, thu mỏng môi dày.",
        candidates: JSON.stringify(["Môi dày, trề.", "Muốn môi hình trái tim."]),
        process: JSON.stringify(["Gây tê.", "Cắt bỏ niêm mạc thừa.", "Khâu tạo hình."]),
        recoveryTime: "7 ngày.",
        price: "Liên hệ.",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/2.jpg"])
    },
    {
        id: "tri-seo",
        slug: "tri-seo",
        type: "tieu-phau",
        category: "Da",
        title: "Điều Trị Sẹo",
        description: "Xóa sẹo rỗ, sẹo lồi, sẹo xấu bằng công nghệ cao.",
        candidates: JSON.stringify(["Các loại sẹo."]),
        process: JSON.stringify(["Laser/Cắt đáy sẹo..."]),
        recoveryTime: "Tùy tình trạng.",
        price: "Liên hệ.",
        faq: JSON.stringify([]),
        realImages: JSON.stringify(["/image/594685847_122243953076248364_4104872537926630032_n.jpg"])
    },

    // --- ĐẠI PHẪU ---
    {
        id: "nang-mui-cau-truc",
        slug: "nang-mui-cau-truc",
        type: "dai-phau",
        category: "Mũi",
        title: "Nâng Mũi Cấu Trúc",
        description: "Tái cấu trúc toàn diện dáng mũi, khắc phục mọi khuyết điểm.",
        profIndication: "Mũi nhiều khuyết điểm, mũi hỏng, mũi ngắn...",
        doctorAnalysis: "Can thiệp cả sụn vách ngăn, trụ mũi và sống mũi.",
        risks: JSON.stringify(["Sưng nề vài ngày đầu."]),
        recoveryTime: "10 ngày cắt chỉ.",
        realImages: JSON.stringify(["/image/3.jpg"])
    },
    {
        id: "got-ham-ha-go-ma",
        slug: "got-ham-ha-go-ma",
        type: "dai-phau",
        category: "Hàm mặt",
        title: "Gọt Hàm - Hạ Gò Má",
        description: "Tạo mặt V-line thon gọn, hài hòa, hạ gò má cao.",
        profIndication: "Gương mặt vuông, góc cạnh, gò má cao.",
        doctorAnalysis: "Phẫu thuật nội soi đường trần, không sẹo xấu.",
        risks: JSON.stringify(["Cần kiểm soát an toàn gây mê."]),
        recoveryTime: "2 - 4 tuần.",
        realImages: JSON.stringify(["/image/594685847_122243953076248364_4104872537926630032_n.jpg"])
    },
    {
        id: "don-cam",
        slug: "don-cam",
        type: "dai-phau",
        category: "Hàm mặt",
        title: "Độn Cằm V-Line",
        description: "Khắc phục cằm lẹm, cằm ngắn, tạo dáng cằm V-line.",
        profIndication: "Cằm lẹm, ngắn.",
        doctorAnalysis: "Đặt chất liệu độn qua đường niêm mạc miệng.",
        risks: JSON.stringify(["Lệch vật liệu nếu va chạm mạnh khi chưa ổn định."]),
        recoveryTime: "7 ngày.",
        realImages: JSON.stringify(["/image/2.jpg"])
    },
    {
        id: "phau-thuat-ham",
        slug: "phau-thuat-ham",
        type: "dai-phau",
        category: "Hàm mặt",
        title: "Phẫu Thuật Hàm Hô/Móm",
        description: "Chỉnh hàm hô, móm, sai khớp cắn.",
        profIndication: "Hô/móm do xương hàm.",
        doctorAnalysis: "Cắt đẩy xương hàm về vị trí chuẩn.",
        risks: JSON.stringify(["Đòi hỏi kỹ thuật cao."]),
        recoveryTime: "4 - 6 tuần.",
        realImages: JSON.stringify(["/image/594685847_122243953076248364_4104872537926630032_n.jpg"])
    },
    {
        id: "nang-nguc",
        slug: "nang-nguc",
        type: "dai-phau",
        category: "Ngực",
        title: "Nâng Ngực Nội Soi",
        description: "Vòng 1 căng tròn, quyến rũ với kỹ thuật nội soi an toàn.",
        profIndication: "Ngực lép, sa trễ.",
        doctorAnalysis: "Nội soi đường nách, không sẹo xấu.",
        risks: JSON.stringify(["Bao xơ (thấp)."]),
        recoveryTime: "1 tháng.",
        realImages: JSON.stringify(["/image/6.jpg", "/image/7.jpg"])
    },
    {
        id: "hut-mo-tao-hinh",
        slug: "hut-mo-tao-hinh",
        type: "dai-phau",
        category: "Body",
        title: "Hút Mỡ Tạo Hình",
        description: "Hút mỡ bụng, đùi, bắp tay, tạo đường cong cơ thể.",
        profIndication: "Mỡ thừa nhiều vùng.",
        doctorAnalysis: "Công nghệ Lipo Ultrasound.",
        risks: JSON.stringify(["Tụ dịch nhẹ."]),
        recoveryTime: "3 - 5 ngày.",
        realImages: JSON.stringify(["/image/3.jpg"])
    },
    {
        id: "cang-da-mat-co",
        slug: "cang-da-mat-co",
        type: "dai-phau",
        category: "Trẻ hóa",
        title: "Căng Da Mặt / Cổ",
        description: "Xóa nhăn, nâng cơ, trẻ hóa 10 tuổi.",
        profIndication: "Da lão hóa, chùng nhão nặng.",
        doctorAnalysis: "Căng da SMAS.",
        risks: JSON.stringify(["Sưng nề."]),
        recoveryTime: "2 tuần.",
        realImages: JSON.stringify(["/image/594685847_122243953076248364_4104872537926630032_n.jpg"])
    },
    {
        id: "tao-hinh-thanh-bung",
        slug: "tao-hinh-thanh-bung",
        type: "dai-phau",
        category: "Body",
        title: "Tạo Hình Thành Bụng",
        description: "Cắt bỏ da chùng, xử lý sổ cơ bụng sau sinh.",
        profIndication: "Da bụng thừa nhiều, sổ cơ.",
        doctorAnalysis: "Cắt bỏ da thừa, khâu phục hồi cân cơ.",
        risks: JSON.stringify(["Sẹo dài (nhưng giấu được)."]),
        recoveryTime: "1 tháng.",
        realImages: JSON.stringify(["/image/3.jpg"])
    }
];

const settingsData = [
    { key: "site_name", value: "Viện Thẩm Mỹ Meditech", group: "general" },
    { key: "contact_phone", value: "088 989 5555", group: "contact" },
    { key: "contact_address", value: "88 P. Láng Hạ, Láng Hạ, Đống Đa, Hà Nội", group: "contact" },
    { key: "contact_email", value: "contact@meditech.vn", group: "contact" },
    { key: "hotline_247", value: "1900 123 456", group: "contact" },
    { key: "map_embed_url", value: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.113110940561!2d105.81524337604313!3d21.02816008780287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab70b8a1c0d1%3A0x8264d1a0c849177f!2zODggUC4gTzEgY-G6p3UsIEzDoW5nIEjhuqEsIMSQ4buRbmcgxJBhLCBIw6AgTk9pLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s", group: "contact" },
    { key: "social_fb", value: "https://facebook.com/meditech", group: "social" },
    { key: "social_zalo", value: "0889895555", group: "social" },
];

const aboutUsData = [
    { type: "ABOUT_HISTORY", title: "Lịch Sử Hình Thành", description: "Thành lập từ năm 2010 với tiền thân là phòng khám da liễu, trải qua hơn 1 thập kỷ phát triển, chúng tôi tự hào trở thành hệ thống thẩm mỹ y khoa đạt chuẩn quốc tế.", image: "history_edu", order: 0 },
    { type: "ABOUT_VISION", title: "Tầm Nhìn", description: "Trở thành biểu tượng niềm tin hàng đầu về thẩm mỹ an toàn tại Việt Nam, nơi khách hàng tìm thấy phiên bản hoàn hảo nhất của chính mình.", image: "visibility", order: 1 },
    {
        type: "ABOUT_CORE", title: "Giá Trị Cốt Lõi", description: JSON.stringify([
            { label: "An toàn", value: "Là tôn chỉ hoạt động số 1." },
            { label: "Trung thực", value: "Tư vấn đúng, làm thật." },
            { label: "Tận tâm", value: "Chăm sóc trọn đời." }
        ]), image: "diamond", order: 2
    }
];

async function main() {
    console.log("Seeding services, settings, and about us...");

    // Clear existing
    await prisma.service.deleteMany();
    await prisma.setting.deleteMany();

    // Services
    for (const item of servicesData) {
        await prisma.service.create({ data: item });
    }

    // Settings
    for (const item of settingsData) {
        await prisma.setting.create({ data: item });
    }

    // About Us in Showcase
    await prisma.showcase.deleteMany({
        where: { type: { in: ["ABOUT_HISTORY", "ABOUT_VISION", "ABOUT_CORE"] } }
    });
    for (const item of aboutUsData) {
        await prisma.showcase.create({
            data: {
                type: item.type,
                title: item.title,
                description: item.description,
                image: "/icons/placeholder.png",
                metadata: JSON.stringify({ icon: item.image }),
                order: item.order
            }
        });
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
