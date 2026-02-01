"use client";

import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactPage() {
    const [settings, setSettings] = useState<any>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch("/api/settings");
                const data = await res.json();
                const settingsObj = data.reduce((acc: any, curr: any) => {
                    acc[curr.key] = curr.value;
                    return acc;
                }, {});
                setSettings(settingsObj);
            } catch (error) {
                console.error("Failed to fetch settings", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const contactLinks = [
        {
            title: "Đặt lịch tư vấn",
            description: "Đăng ký lịch hẹn với chuyên gia",
            icon: "calendar_month",
            href: "/dat-lich",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Câu hỏi thường gặp (FAQ)",
            description: "Giải đáp thắc mắc phổ biến",
            icon: "help",
            href: "/faq",
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Chính sách & Pháp lý",
            description: "Thông tin về quy định và bảo mật",
            icon: "policy",
            href: "/chinh-sach",
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            title: "Bảng giá dịch vụ",
            description: "Tham khảo chi phí các liệu trình",
            icon: "payments",
            href: "/bang-gia",
            color: "bg-orange-50 text-orange-600"
        }
    ];

    if (loading) return null;

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Liên Hệ Với Chúng Tôi"
                description="Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trên hành trình chinh phục vẻ đẹp hoàn mỹ."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Information Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
                            >
                                <div className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined text-2xl">{link.icon}</span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
                                <p className="text-slate-500 text-sm">{link.description}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Detail & Map */}
                    <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Thông Tin Liên Hệ</h2>
                                <p className="text-slate-600 mb-8">
                                    Đừng ngần ngại liên hệ với chúng tôi để được tư vấn miễn phí và nhận ưu đãi tốt nhất.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Địa chỉ</h4>
                                        <p className="text-slate-600">{settings.contact_address || "Đang cập nhật..."}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Hotline</h4>
                                        <p className="text-slate-600">{settings.contact_phone || settings.hotline_247 || "Đang cập nhật..."}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Email</h4>
                                        <p className="text-slate-600">{settings.contact_email || "Đang cập nhật..."}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden relative">
                            {settings.map_embed_url ? (
                                <iframe
                                    src={settings.map_embed_url}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-400">Đang cập nhật bản đồ...</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
