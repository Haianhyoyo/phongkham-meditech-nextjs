"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function PolicyPage() {
    const policies = [
        {
            title: "Chính Sách Bảo Mật",
            icon: "security",
            content: [
                "Cam kết bảo mật tuyệt đối thông tin cá nhân và hồ sơ bệnh án của khách hàng.",
                "Không chia sẻ hình ảnh/video của khách hàng khi chưa được sự đồng ý bằng văn bản.",
                "Dữ liệu được lưu trữ an toàn trên hệ thống máy chủ được mã hóa."
            ]
        },
        {
            title: "Điều Khoản Sử Dụng",
            icon: "gavel",
            content: [
                "Khách hàng cần cung cấp trung thực thông tin sức khỏe cho bác sĩ.",
                "Tuân thủ các hướng dẫn chăm sóc hậu phẫu để đảm bảo kết quả.",
                "Thanh toán đúng quy định của phòng khám."
            ]
        },
        {
            title: "Chính Sách Bảo Hành",
            icon: "verified_user",
            content: [
                "Bảo hành trọn đời cho chất liệu sụn/túi ngực (theo chính sách nhà sản xuất).",
                "Bảo hành kết quả thẩm mỹ: Chỉnh sửa miễn phí nếu có lệch lạc, biến chứng do kỹ thuật.",
                "Thẻ bảo hành được cấp ngay sau khi thực hiện dịch vụ."
            ]
        },
        {
            title: "Giải Quyết Khiếu Nại",
            icon: "support_agent",
            content: [
                "Mọi phản hồi được tiếp nhận qua Hotline 24/7.",
                "Hội đồng chuyên môn sẽ hội chẩn lại để tìm nguyên nhân và giải pháp.",
                "Cam kết giải quyết trên tinh thần trách nhiệm, đặt quyền lợi khách hàng lên hàng đầu."
            ]
        }
    ];

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Chính Sách & Pháp Lý"
                description="Minh bạch, rõ ràng và đảm bảo quyền lợi tối đa cho khách hàng."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {policies.map((policy, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <span className="material-symbols-outlined text-3xl">{policy.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-slate-900 mb-6">{policy.title}</h3>
                                <ul className="space-y-4">
                                    {policy.content.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">check_circle</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
