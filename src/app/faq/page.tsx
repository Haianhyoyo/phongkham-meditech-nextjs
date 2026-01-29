"use client";

import PageHeader from "@/components/ui/PageHeader";
import { useState } from "react";

export default function FAQPage() {
    const categories = [
        {
            id: "safe",
            title: "An Toàn Y Khoa",
            questions: [
                { q: "Quy trình phẫu thuật có đảm bảo vô trùng không?", a: "Toàn bộ quy trình được thực hiện trong phòng mổ áp lực dương vô khuẩn một chiều, đảm bảo tiêu chuẩn khắt khe của Bộ Y tế." },
                { q: "Gây tê/Gây mê có an toàn không?", a: "Chúng tôi có ekip bác sĩ gây mê hồi sức chuyên nghiệp, khách hàng được khám sức khỏe tổng quát kỹ lưỡng trước khi thực hiện để loại trừ mọi rủi ro." },
                { q: "Vật liệu sử dụng có nguồn gốc rõ ràng không?", a: "100% sụn nâng, túi ngực, filler, botox... đều là hàng chính hãng, có tem mác và check code trực tiếp trước khi sử dụng." }
            ]
        },
        {
            id: "recovery",
            title: "Hồi Phục & Chăm Sóc",
            questions: [
                { q: "Thời gian hồi phục sau phẫu thuật là bao lâu?", a: "Tùy dịch vụ: Tiểu phẫu (mắt, mũi) thường 5-7 ngày cắt chỉ. Đại phẫu (ngực, bụng) cần nghỉ dưỡng 1-2 ngày tại viện và hồi phục trong 2-4 tuần." },
                { q: "Cần kiêng khen gì sau phẫu thuật?", a: "Cần kiêng đồ nếp, rau muống, thịt bò, hải sản trong 1 tháng đầu. Hạn chế vận động mạnh và tuân thủ lịch uống thuốc của bác sĩ." }
            ]
        },
        {
            id: "durability",
            title: "Độ Bền Kết Quả",
            questions: [
                { q: "Nâng mũi/Nâng ngực có được vĩnh viễn không?", a: "Với kỹ thuật can thiệp cấu trúc và vật liệu cao cấp, kết quả có thể duy trì ổn định lâu dài (trên 10-20 năm hoặc vĩnh viễn tùy cơ địa)." },
                { q: "Cắt mí sau này có bị sụp lại không?", a: "Cắt mí loại bỏ da dư mỡ thừa triệt để, nếp mí giữ được rất lâu. Tuy nhiên theo lão hóa tự nhiên, da có thể chùng lại sau nhiều năm." }
            ]
        },
        {
            id: "warranty",
            title: "Bảo Hành & Chỉnh Sửa",
            questions: [
                { q: "Chính sách bảo hành của Meditech như thế nào?", a: "Chúng tôi bảo hành sụn/vật liệu trọn đời và bảo hành kết quả thẩm mỹ theo từng dịch vụ cụ thể (có thẻ bảo hành rõ ràng)." },
                { q: "Nếu kết quả không ưng ý có được sửa lại không?", a: "Nếu lỗi do kỹ thuật hoặc không đúng cam kết ban đầu, Meditech chịu trách nhiệm chỉnh sửa miễn phí cho khách hàng." }
            ]
        }
    ];

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Câu Hỏi Thường Gặp (FAQ)"
                description="Giải đáp những thắc mắc phổ biến về dịch vụ, quy trình và chính sách tại Meditech."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12">
                        {categories.map((cat) => (
                            <div key={cat.id} id={cat.id} className="scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                                    {cat.title}
                                </h2>
                                <div className="space-y-4">
                                    {cat.questions.map((item, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                            <h3 className="font-bold text-lg text-slate-900 mb-3 flex gap-3">
                                                <span className="text-primary font-black">Q.</span>
                                                {item.q}
                                            </h3>
                                            <p className="text-slate-600 pl-8 border-l-2 border-slate-100 italic">
                                                {item.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
