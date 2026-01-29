"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { doctors } from "@/data/doctors";

function BookingFormContent() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        date: "",
        note: "",
        doctor: ""
    });

    const services = [
        "Thẩm mỹ mắt",
        "Thẩm mỹ mũi",
        "Môi - Cằm",
        "Thẩm mỹ gương mặt",
        "Tiểu phẫu da",
        "Thẩm mỹ cơ thể",
        "Thẩm mỹ vùng kín",
        "Sửa chữa biến chứng",
        "Chăm sóc hậu phẫu",
        "Khác"
    ];

    useEffect(() => {
        const doctorParam = searchParams.get("doctor");
        const serviceParam = searchParams.get("service");
        const noteParam = searchParams.get("note");
        const promotionParam = searchParams.get("promotion");

        setFormData(prev => ({
            ...prev,
            doctor: doctorParam || prev.doctor,
            service: serviceParam || prev.service,
            note: noteParam ? noteParam : (promotionParam ? `Đăng ký ưu đãi: ${promotionParam}` : prev.note)
        }));
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
        console.log("Form data:", formData);
        // Reset form
        setFormData({ name: "", phone: "", service: "", date: "", note: "", doctor: "" });
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden p-8 md:p-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Đăng Ký Tư Vấn</h2>
                <p className="text-slate-600">Hãy để lại thông tin, đội ngũ tư vấn viên của Meditech sẽ liên hệ và sắp xếp lịch hẹn phù hợp nhất cho bạn.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Họ và tên</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-800"
                        placeholder="Nhập họ tên của bạn"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Số điện thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-800"
                            placeholder="09xx xxx xxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">Ngày dự kiến</label>
                        <input
                            type="date"
                            id="date"
                            required
                            className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-800"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Dịch vụ quan tâm</label>
                    <select
                        id="service"
                        required
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-800 bg-white"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                        <option value="">Chọn dịch vụ</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="note" className="block text-sm font-semibold text-slate-700 mb-2">Ghi chú thêm</label>
                    <textarea
                        id="note"
                        rows={3}
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-800 resize-none"
                        placeholder="Ví dụ: tư vấn buổi sáng..."
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="doctor" className="block text-sm font-semibold text-slate-700 mb-2">Chọn Bác sĩ (Tùy chọn)</label>
                    <select
                        id="doctor"
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-800 bg-white"
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    >
                        <option value="">Chọn bác sĩ</option>
                        {doctors.map(d => <option key={d.id} value={d.name}>{d.name} - {d.role}</option>)}
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95"
                >
                    Gửi Đăng Ký
                </button>
            </form>
        </div>
    );
}

export default function BookingPage() {
    return (
        <main className="bg-slate-50 min-h-screen py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Suspense fallback={<div className="text-center p-10">Đang tải form đăng ký...</div>}>
                    <BookingFormContent />
                </Suspense>

                {/* Reception Process */}
                <div className="mt-16">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">Quy Trình Tiếp Nhận</h2>
                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            { step: "01", title: "Đặt Lịch", desc: "Đăng ký qua form hoặc hotline" },
                            { step: "02", title: "Tư Vấn", desc: "Tư vấn sơ bộ với trợ lý bác sĩ" },
                            { step: "03", title: "Thăm Khám", desc: "Bác sĩ trực tiếp thăm khám 1:1" },
                            { step: "04", title: "Thực Hiện", desc: "Phẫu thuật tại phòng mổ vô khuẩn" },
                            { step: "05", title: "Chăm Sóc", desc: "Theo dõi & tái khám định kỳ" },
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full text-center z-10 relative">
                                    <div className="text-4xl font-display font-bold text-primary/10 mb-2 group-hover:text-primary/20 transition-colors">{item.step}</div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                                {index < 4 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 -z-0"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

