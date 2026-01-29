import Link from "next/link";

export default function WhyChooseUs() {
    const values = [
        {
            icon: "workspace_premium",
            title: "Chuyên gia đầu ngành",
            subtitle: "Bác sĩ giỏi - Chuyên viên giàu kinh nghiệm",
            description: "Đội ngũ bác sĩ, chuyên gia hàng đầu với trình độ chuyên môn cao, tận tâm và giàu kinh nghiệm",
            link: "/chuyen-gia"
        },
        {
            icon: "biotech",
            title: "Trang thiết bị hiện đại",
            subtitle: "Công nghệ y tế tiên tiến",
            description: "Đầu tư trang thiết bị y tế hiện đại bậc nhất, đảm bảo chất lượng điều trị tối ưu",
            link: "/ve-chung-toi"
        },
        {
            icon: "verified",
            title: "Hiệu quả điều trị cao",
            subtitle: "Thành tựu nổi bật",
            description: "Cam kết mang lại hiệu quả điều trị cao với hàng nghìn ca thành công và khách hàng hài lòng",
            link: "/ket-qua"
        },
        {
            icon: "fact_check",
            title: "Quy trình khoa học",
            subtitle: "Toàn diện - Chuyên nghiệp",
            description: "Quy trình khám, tư vấn và điều trị theo tiêu chuẩn quốc tế, đảm bảo an toàn tuyệt đối",
            link: "/dat-lich"
        },
        {
            icon: "diamond",
            title: "Dịch vụ cao cấp",
            subtitle: "Chi phí hợp lý",
            description: "Dịch vụ chăm sóc 5 sao với mức chi phí minh bạch, phù hợp với mọi đối tượng khách hàng",
            link: "/bang-gia"
        }
    ];

    return (
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        Meditech Premium
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">
                        Giá Trị Khác Biệt
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        Những giá trị cốt lõi tạo nên sự khác biệt và uy tín của Meditech trong lĩnh vực thẩm mỹ
                    </p>
                </div>

                {/* Values Grid */}
                <div className="flex flex-wrap justify-center gap-5">
                    {values.map((value, index) => (
                        <Link
                            key={index}
                            href={value.link}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-primary/20 hover:-translate-y-1 w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.33%-1.25rem)]"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md shadow-primary/30">
                                    <span className="material-symbols-outlined text-white text-2xl">
                                        {value.icon}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-display font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-xs font-semibold text-primary mb-2">
                                {value.subtitle}
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2">
                                {value.description}
                            </p>

                            {/* Arrow */}
                            <div className="flex items-center text-primary font-semibold text-xs group-hover:gap-1 transition-all">
                                <span>Tìm hiểu thêm</span>
                                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-10 text-center">
                    <Link
                        href="/dat-lich"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
                    >
                        <span>Đặt lịch tư vấn ngay</span>
                        <span className="material-symbols-outlined text-lg">calendar_today</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
