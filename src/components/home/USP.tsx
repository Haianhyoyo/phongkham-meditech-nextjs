import Link from "next/link";

export default function USP() {
    const usps = [
        {
            icon: "diamond",
            title: "Không Đại Trà",
            desc: "Thiết kế vẻ đẹp độc bản, phù hợp từng cá nhân."
        },
        {
            icon: "medical_services",
            title: "Bác Sĩ Trực Tiếp",
            desc: "100% ca thực hiện bởi bác sĩ chuyên khoa."
        },
        {
            icon: "monitor_heart",
            title: "Công Nghệ Hỗ Trợ",
            desc: "Hệ thống mô phỏng 3D và theo dõi hậu phẫu 24/7."
        }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {usps.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link href="#services" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
                        Xem chi tiết dịch vụ <span className="material-symbols-outlined text-sm">arrow_downward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
