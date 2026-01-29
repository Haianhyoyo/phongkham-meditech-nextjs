"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { promotionsData } from "@/data/promotions";

export default function BookingForm() {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
        const phoneInput = form.querySelector('input[type="tel"]') as HTMLInputElement;
        const serviceInput = form.querySelector('select[name="service"]') as HTMLSelectElement;
        const promotionInput = form.querySelector('select[name="promotion"]') as HTMLSelectElement;

        const data = {
            name: nameInput.value,
            phone: phoneInput.value,
            service: serviceInput.value,
            promotion: promotionInput.value,
        };

        try {
            // Because this is a static site on Mắt Bão, API routes are not available.
            // We show a professional message to the user instead.
            alert("Cảm ơn bạn! Để được hỗ trợ nhanh nhất, quý khách vui lòng liên hệ Hotline: 088 989 5555.");
            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
            alert("Có lỗi xảy ra khi gửi dữ liệu.");
        }
    };

    return (
        <section id="booking" className="py-24 relative">
            <div className="absolute inset-0">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q"
                    alt="Tư vấn khách hàng"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
                    <div className="text-center mb-10 space-y-4">
                        <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase">Ưu đãi đặc biệt</span>
                        <h3 className="text-3xl font-display font-bold text-slate-900">Đăng ký tư vấn ngay</h3>
                        <p className="text-slate-600">Tặng ngay gói soi da 3D và tư vấn phác đồ điều trị miễn phí</p>
                    </div>
                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Họ và tên</label>
                            <input name="name" className="w-full rounded-xl border-slate-200 focus:ring-primary focus:border-primary px-4 py-3 text-slate-900 bg-white" placeholder="Nhập tên của bạn" type="text" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Số điện thoại</label>
                            <input name="phone" className="w-full rounded-xl border-slate-200 focus:ring-primary focus:border-primary px-4 py-3 text-slate-900 bg-white" placeholder="Số điện thoại liên hệ" type="tel" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Dịch vụ quan tâm</label>
                            <select name="service" className="w-full rounded-xl border-slate-200 focus:ring-primary focus:border-primary px-4 py-3 text-slate-900 bg-white">
                                <option value="Trị nám / Tàn nhang">Trị nám / Tàn nhang</option>
                                <option value="Trẻ hóa da">Trẻ hóa da</option>
                                <option value="Nâng cơ Hifu">Nâng cơ Hifu</option>
                                <option value="Điều trị mụn">Điều trị mụn</option>
                                <option value="Dịch vụ khác">Dịch vụ khác</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Ưu đãi (nếu có)</label>
                            <select name="promotion" className="w-full rounded-xl border-slate-200 focus:ring-primary focus:border-primary px-4 py-3 text-slate-900 bg-white">
                                <option value="">Chọn ưu đãi</option>
                                {promotionsData.map((p) => (
                                    <option key={p.id} value={p.title}>{p.title}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="md:col-span-2 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest mt-4">
                            Gửi yêu cầu tư vấn
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
