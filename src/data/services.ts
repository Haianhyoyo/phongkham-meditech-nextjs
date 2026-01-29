
export interface ServiceData {
    id: string;
    slug: string;
    type: 'tieu-phau' | 'dai-phau';
    category: string; // Mắt, Mũi, Ngực, ...
    name: string;
    shortDesc: string;

    // Minor Surgery specific
    candidates?: string[];
    process?: string[]; // Steps
    recoveryTime?: string;
    cost?: string;
    faq?: { question: string; answer: string }[];

    // Major Surgery specific
    profIndication?: string; // Chỉ định chuyên môn
    doctorAnalysis?: string; // Bác sĩ phân tích
    risks?: string[]; // Rủi ro & Kiểm soát

    // Common
    realImages: string[];
}

export const servicesData: ServiceData[] = [
    // --- TIỂU PHẪU ---
    {
        id: "cat-mi",
        slug: "cat-mi",
        type: "tieu-phau",
        category: "Mắt",
        name: "Cắt Mí Eye-Lift",
        shortDesc: "Kiến tạo nếp mí rõ nét, tự nhiên, loại bỏ da dư mỡ thừa giúp đôi mắt to tròn, linh hoạt.",
        candidates: ["Người mắt một mí, mí lót.", "Người có da chùng, mỡ thừa.", "Muốn nếp mí to tròn."],
        process: ["Thăm khám.", "Sát khuẩn & Gây tê.", "Thực hiện cắt mí.", "Khâu đóng vết thương."],
        recoveryTime: "5 - 7 ngày cắt chỉ.",
        cost: "8.000.000đ - 15.000.000đ",
        faq: [{ question: "Cắt mí có đau không?", answer: "Có gây tê nên không đau." }],
        realImages: ["/image/catmieye_lift.jpg", "/image/594685847_122243953076248364_4104872537926630032_n.jpg"]
    },
    {
        id: "nhan-mi",
        slug: "nhan-mi",
        type: "tieu-phau",
        category: "Mắt",
        name: "Nhấn Mí",
        shortDesc: "Tạo nếp mí không phẫu thuật, thời gian hồi phục nhanh.",
        candidates: ["Mắt một mí, da mỏng.", "Chưa có da chùng mỡ thừa."],
        process: ["Đo vẽ.", "Gây tê.", "Luồn chỉ tạo liên kết."],
        recoveryTime: "3 - 5 ngày.",
        cost: "5.000.000đ - 8.000.000đ",
        faq: [],
        realImages: ["/image/2.jpg"]
    },
    {
        id: "lay-mo-mi",
        slug: "lay-mo-mi",
        type: "tieu-phau",
        category: "Mắt",
        name: "Lấy Mỡ Mí",
        shortDesc: "Loại bỏ bọng mỡ mắt dưới hoặc trên, trẻ hóa đôi mắt.",
        candidates: ["Có bọng mỡ mắt."],
        process: ["Gây tê.", "Rạch đường nhỏ lấy mỡ.", "Khâu thẩm mỹ."],
        recoveryTime: "5 - 7 ngày.",
        cost: "Cam kết chi phí hợp lý.",
        faq: [],
        realImages: ["/image/2.jpg"]
    },
    {
        id: "nang-mui-khong-phau-thuat",
        slug: "nang-mui-khong-phau-thuat",
        type: "tieu-phau",
        category: "Mũi",
        name: "Nâng Mũi Không Phẫu Thuật",
        shortDesc: "Nâng cao sống mũi bằng chỉ hoặc filler, hiệu quả tức thì.",
        candidates: ["Sợ phẫu thuật.", "Muốn cải thiện nhẹ dáng mũi."],
        process: ["Ủ tê.", "Thực hiện thủ thuật."],
        recoveryTime: "1 - 2 ngày.",
        cost: "Liên hệ.",
        faq: [],
        realImages: ["/image/3.jpg"]
    },
    {
        id: "tiem-filler-botox",
        slug: "tiem-filler-botox",
        type: "tieu-phau",
        category: "Thẩm mỹ nội khoa",
        name: "Tiêm Filler - Botox",
        shortDesc: "Làm đầy, xóa nhăn, thon gọn hàm không phẫu thuật.",
        candidates: ["Muốn làm đẹp nhanh.", "Không nghỉ dưỡng."],
        process: ["Ủ tê.", "Tiêm tinh chất."],
        recoveryTime: "Ngay lập tức.",
        cost: "Theo cc.",
        faq: [],
        realImages: ["/image/2.jpg"]
    },
    {
        id: "cay-mo-tu-than",
        slug: "cay-mo-tu-than",
        type: "tieu-phau",
        category: "Trẻ hóa",
        name: "Cấy Mỡ Tự Thân",
        shortDesc: "Làm đầy thái dương, má hóp, rãnh cười bằng mỡ tự thân.",
        candidates: ["Khuôn mặt hốc hác.", "Muốn trẻ hóa tự nhiên."],
        process: ["Hút mỡ vùng thừa.", "Ly tâm lọc mỡ.", "Cấy vào vùng khuyết."],
        recoveryTime: "5 - 7 ngày.",
        cost: "Liên hệ.",
        faq: [],
        realImages: ["/image/594685847_122243953076248364_4104872537926630032_n.jpg"]
    },
    {
        id: "thu-gon-moi",
        slug: "thu-gon-moi",
        type: "tieu-phau",
        category: "Môi",
        name: "Thu Gọn Môi",
        shortDesc: "Tạo hình môi trái tim, thu mỏng môi dày.",
        candidates: ["Môi dày, trề.", "Muốn môi hình trái tim."],
        process: ["Gây tê.", "Cắt bỏ niêm mạc thừa.", "Khâu tạo hình."],
        recoveryTime: "7 ngày.",
        cost: "Liên hệ.",
        faq: [],
        realImages: ["/image/2.jpg"]
    },
    {
        id: "tri-seo",
        slug: "tri-seo",
        type: "tieu-phau",
        category: "Da",
        name: "Điều Trị Sẹo",
        shortDesc: "Xóa sẹo rỗ, sẹo lồi, sẹo xấu bằng công nghệ cao.",
        candidates: ["Các loại sẹo."],
        process: ["Laser/Cắt đáy sẹo..."],
        recoveryTime: "Tùy tình trạng.",
        cost: "Liên hệ.",
        faq: [],
        realImages: ["/image/594685847_122243953076248364_4104872537926630032_n.jpg"]
    },

    // --- ĐẠI PHẪU ---
    {
        id: "nang-mui-cau-truc",
        slug: "nang-mui-cau-truc",
        type: "dai-phau",
        category: "Mũi",
        name: "Nâng Mũi Cấu Trúc",
        shortDesc: "Tái cấu trúc toàn diện dáng mũi, khắc phục mọi khuyết điểm.",
        profIndication: "Mũi nhiều khuyết điểm, mũi hỏng, mũi ngắn...",
        doctorAnalysis: "Can thiệp cả sụn vách ngăn, trụ mũi và sống mũi.",
        risks: ["Sưng nề vài ngày đầu."],
        recoveryTime: "10 ngày cắt chỉ.",
        realImages: ["/image/3.jpg"]
    },
    {
        id: "got-ham-ha-go-ma",
        slug: "got-ham-ha-go-ma",
        type: "dai-phau",
        category: "Hàm mặt",
        name: "Gọt Hàm - Hạ Gò Má",
        shortDesc: "Tạo mặt V-line thon gọn, hài hòa, hạ gò má cao.",
        profIndication: "Gương mặt vuông, góc cạnh, gò má cao.",
        doctorAnalysis: "Phẫu thuật nội soi đường trần, không sẹo xấu.",
        risks: ["Cần kiểm soát an toàn gây mê."],
        recoveryTime: "2 - 4 tuần.",
        realImages: ["/image/594685847_122243953076248364_4104872537926630032_n.jpg"]
    },
    {
        id: "don-cam",
        slug: "don-cam",
        type: "dai-phau",
        category: "Hàm mặt",
        name: "Độn Cằm V-Line",
        shortDesc: "Khắc phục cằm lẹm, cằm ngắn, tạo dáng cằm V-line.",
        profIndication: "Cằm lẹm, ngắn.",
        doctorAnalysis: "Đặt chất liệu độn qua đường niêm mạc miệng.",
        risks: ["Lệch vật liệu nếu va chạm mạnh khi chưa ổn định."],
        recoveryTime: "7 ngày.",
        realImages: ["/image/2.jpg"]
    },
    {
        id: "phau-thuat-ham",
        slug: "phau-thuat-ham",
        type: "dai-phau",
        category: "Hàm mặt",
        name: "Phẫu Thuật Hàm Hô/Móm",
        shortDesc: "Chỉnh hàm hô, móm, sai khớp cắn.",
        profIndication: "Hô/móm do xương hàm.",
        doctorAnalysis: "Cắt đẩy xương hàm về vị trí chuẩn.",
        risks: ["Đòi hỏi kỹ thuật cao."],
        recoveryTime: "4 - 6 tuần.",
        realImages: ["/image/594685847_122243953076248364_4104872537926630032_n.jpg"]
    },
    {
        id: "nang-nguc",
        slug: "nang-nguc",
        type: "dai-phau",
        category: "Ngực",
        name: "Nâng Ngực Nội Soi",
        shortDesc: "Vòng 1 căng tròn, quyến rũ với kỹ thuật nội soi an toàn.",
        profIndication: "Ngực lép, sa trễ.",
        doctorAnalysis: "Nội soi đường nách, không sẹo xấu.",
        risks: ["Bao xơ (thấp)."],
        recoveryTime: "1 tháng.",
        realImages: ["/image/6.jpg", "/image/7.jpg"]
    },
    {
        id: "hut-mo-tao-hinh",
        slug: "hut-mo-tao-hinh",
        type: "dai-phau",
        category: "Body",
        name: "Hút Mỡ Tạo Hình",
        shortDesc: "Hút mỡ bụng, đùi, bắp tay, tạo đường cong cơ thể.",
        profIndication: "Mỡ thừa nhiều vùng.",
        doctorAnalysis: "Công nghệ Lipo Ultrasound.",
        risks: ["Tụ dịch nhẹ."],
        recoveryTime: "3 - 5 ngày.",
        realImages: ["/image/3.jpg"]
    },
    {
        id: "cang-da-mat-co",
        slug: "cang-da-mat-co",
        type: "dai-phau",
        category: "Trẻ hóa",
        name: "Căng Da Mặt / Cổ",
        shortDesc: "Xóa nhăn, nâng cơ, trẻ hóa 10 tuổi.",
        profIndication: "Da lão hóa, chùng nhão nặng.",
        doctorAnalysis: "Căng da SMAS.",
        risks: ["Sưng nề."],
        recoveryTime: "2 tuần.",
        realImages: ["/image/594685847_122243953076248364_4104872537926630032_n.jpg"]
    },
    {
        id: "tao-hinh-thanh-bung",
        slug: "tao-hinh-thanh-bung",
        type: "dai-phau",
        category: "Body",
        name: "Tạo Hình Thành Bụng",
        shortDesc: "Cắt bỏ da chùng, xử lý sổ cơ bụng sau sinh.",
        profIndication: "Da bụng thừa nhiều, sổ cơ.",
        doctorAnalysis: "Cắt bỏ da thừa, khâu phục hồi cân cơ.",
        risks: ["Sẹo dài (nhưng giấu được)."],
        recoveryTime: "1 tháng.",
        realImages: ["/image/3.jpg"]
    }
];
