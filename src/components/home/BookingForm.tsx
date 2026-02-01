
"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function BookingForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    message,
                    service: "Đăng ký tư vấn", // Default service for this form
                }),
            });

            if (res.ok) {
                alert("Đăng ký thành công! Meditech sẽ liên hệ với bạn sớm nhất.");
                setName("");
                setPhone("");
                setMessage("");
            } else {
                const data = await res.json();
                alert(data.error || "Có lỗi xảy ra, vui lòng thử lại sau.");
            }
        } catch (error) {
            console.error("Booking error:", error);
            alert("Lỗi kết nối máy chủ. Vui lòng liên hệ Hotline: 088 989 5555.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="booking" className="relative">
            {/* Main Booking Section */}
            <div className="grid md:grid-cols-2 min-h-[600px]">
                {/* Left: Image */}
                <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <Image
                        src="/image/booking1.jpg"
                        alt="Tư vấn chuyên nghiệp"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                </div>

                {/* Right: Form */}
                <div className="bg-[#FDFCF9] py-20 px-8 md:px-20 flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative background element like in sample */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-slate-900" />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-lg">
                        <h3 className="text-4xl md:text-5xl font-display font-black text-[#1A1A1A] mb-12">
                            Đăng ký tư vấn
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="space-y-2 group">
                                <label className="text-[13px] font-bold text-[#333] tracking-tight uppercase">Họ và tên <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên của bạn"
                                        className="w-full bg-transparent border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[15px] font-medium transition-colors"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400 group-focus-within:text-[#0056A4] transition-colors">person</span>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[13px] font-bold text-[#333] tracking-tight uppercase">Số điện thoại <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Nhập số điện thoại"
                                        className="w-full bg-transparent border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[15px] font-medium transition-colors"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400 group-focus-within:text-[#0056A4] transition-colors">call</span>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[13px] font-bold text-[#333] tracking-tight uppercase">Nội dung</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Nhập nội dung"
                                        className="w-full bg-transparent border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[15px] font-medium transition-colors"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400 group-focus-within:text-[#0056A4] transition-colors">edit_note</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-[#0056A4] hover:bg-[#004482] text-white px-12 py-4 rounded-full font-sans font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-900/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? "ĐANG GỬI..." : "GỬI TIN NHẮN"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* International Partners Banner - Compact High-Tech Theme */}
            <div className="bg-gradient-to-b from-[#001A33] to-[#000D1A] py-10 border-t border-white/5 relative overflow-hidden">
                {/* High-tech circuit background pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <svg className="w-full h-full text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 20 L20 20 L25 25 L40 25 L45 30 L100 30" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        <path d="M0 80 L30 80 L35 75 L60 75 L65 70 L100 70" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        <circle cx="20" cy="20" r="0.5" fill="currentColor" />
                        <circle cx="45" cy="30" r="0.5" fill="currentColor" />
                        <circle cx="65" cy="70" r="0.5" fill="currentColor" />
                    </svg>
                </div>

                <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h4 className="text-center text-white/50 font-display font-medium text-lg md:text-xl mb-12 italic tracking-[0.3em] uppercase">
                        ĐỐI TÁC QUỐC TẾ CHIẾN LƯỢC
                    </h4>

                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center gap-10 md:gap-4 overflow-x-auto md:overflow-visible pb-2 no-scrollbar">
                        {/* Premium White/Silver Logo Gallery */}
                        <div className="flex-shrink-0 relative w-40 h-16 md:w-52 md:h-20 transition-all duration-700 hover:scale-110 group cursor-pointer">
                            <Image
                                src="/image/partners/thermage_flx.png"
                                alt="Thermage FLX"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                priority
                            />
                        </div>
                        <div className="flex-shrink-0 relative w-40 h-16 md:w-52 md:h-20 transition-all duration-700 hover:scale-110 group cursor-pointer">
                            <Image
                                src="/image/partners/profilo.png"
                                alt="PROFILO"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                priority
                            />
                        </div>
                        <div className="flex-shrink-0 relative w-40 h-16 md:w-52 md:h-20 transition-all duration-700 hover:scale-110 group cursor-pointer">
                            <Image
                                src="/image/partners/picosure_pro.png"
                                alt="PICOSURE PRO"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                priority
                            />
                        </div>
                        <div className="flex-shrink-0 relative w-40 h-16 md:w-52 md:h-20 transition-all duration-700 hover:scale-110 group cursor-pointer">
                            <Image
                                src="/image/partners/dr_muller.png"
                                alt="DR MULLER"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                priority
                            />
                        </div>
                        <div className="flex-shrink-0 relative w-40 h-16 md:w-52 md:h-20 transition-all duration-700 hover:scale-110 group cursor-pointer">
                            <Image
                                src="/image/partners/hydrafacial.png"
                                alt="Hydrafacial"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                priority
                            />
                        </div>
                        <div className="flex-shrink-0 relative w-40 h-16 md:w-52 md:h-20 transition-all duration-700 hover:scale-110 group cursor-pointer">
                            <Image
                                src="/image/partners/cooltech.png"
                                alt="cooltech"
                                fill
                                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
