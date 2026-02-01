"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SpecialServices() {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch("/api/showcase?type=SPECIAL_SERVICE");
                const data = await res.json();
                if (Array.isArray(data)) {
                    setServices(data.map(item => ({
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        image: item.image,
                        link: item.link || "/dat-lich",
                        icon: item.metadata ? JSON.parse(item.metadata).icon : "medical_services"
                    })));
                }
            } catch (error) {
                console.error("Failed to fetch special services", error);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    if (loading) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        Dịch vụ đặc biệt
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Dịch Vụ Nổi Bật
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Các dịch vụ chuyên biệt được thiết kế để mang lại trải nghiệm tốt nhất cho khách hàng
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/30 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                {/* Icon Badge */}
                                <div className="absolute top-6 left-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                        <span className="material-symbols-outlined text-primary text-2xl">
                                            {service.icon}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                    <span>Xem chi tiết</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/dich-vu/tieu-phau"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        <span>Xem tất cả dịch vụ</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
