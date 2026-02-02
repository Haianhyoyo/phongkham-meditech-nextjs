"use client";

import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NewsPage() {
    const [news, setNews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch("/api/news");
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Failed to fetch news", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) return null;
    return (
        <main>
            <PageHeader
                title="Tin Tức & Kiến Thức Thẩm Mỹ"
                description="Cập nhật những xu hướng làm đẹp mới nhất, kiến thức thẩm mỹ chuẩn y khoa và lời khuyên từ chuyên gia."
                backgroundImage="/image/banner.jpg"
            />

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* News Search */}
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="bg-white p-2 rounded-full shadow-md border border-slate-100 flex">
                            <div className="flex-1 flex items-center px-4 gap-3">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tin tức..."
                                    className="w-full h-full py-2 outline-none text-slate-700 bg-transparent"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            const val = e.currentTarget.value;
                                            if (val.trim()) window.location.href = `/tim-kiem?q=${encodeURIComponent(val)}`;
                                        }
                                    }}
                                />
                            </div>
                            <button
                                className="bg-primary text-white rounded-full px-6 py-2 font-bold hover:bg-primary-dark transition-colors"
                                onClick={(e) => {
                                    const input = e.currentTarget.parentElement?.querySelector('input');
                                    if (input && input.value.trim()) {
                                        window.location.href = `/tim-kiem?q=${encodeURIComponent(input.value)}`;
                                    }
                                }}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </div>

                    {/* Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link href="/tin-tuc/kien-thuc-cong-nghe" className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-600 font-semibold hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md">
                            Kiến thức & Công nghệ
                        </Link>
                        <Link href="/tin-tuc/quy-trinh-cong-nghe" className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-600 font-semibold hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md">
                            Quy trình & Công nghệ
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <div key={index} className="group cursor-pointer bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
                                <Link href={`/tin-tuc/${item.slug}`}>
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                                            {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-slate-900 line-clamp-2 group-hover:text-primary transition-colors mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                                            {item.summary || `Tìm hiểu thêm về ${item.title.toLowerCase()}...`}
                                        </p>
                                        <div className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Đọc tiếp <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-600 font-bold hover:bg-primary hover:text-white hover:border-primary transition-all">
                            Xem thêm tin tức
                        </button>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
