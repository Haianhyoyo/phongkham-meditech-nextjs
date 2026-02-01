"use client";

import PageHeader from "@/components/ui/PageHeader";
import BookingForm from "@/components/home/BookingForm";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function OffersPage() {
    const [offers, setOffers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const res = await fetch("/api/promotions");
                const data = await res.json();

                const parsed = data.map((o: any) => {
                    let tags = [];
                    try {
                        if (o.metadata) {
                            const meta = JSON.parse(o.metadata);
                            tags = Array.isArray(meta.tags) ? meta.tags : [];
                        }
                    } catch (e) {
                        console.error("Failed to parse promotion tags", e);
                    }
                    return { ...o, tags };
                });
                setOffers(parsed);
            } catch (error) {
                console.error("Failed to fetch promotions", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOffers();
    }, []);

    if (loading) return null;

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Ưu Đãi Đặc Biệt"
                description="Cập nhật những chương trình khuyến mãi hấp dẫn nhất từ Meditech. Đừng bỏ lỡ cơ hội làm đẹp với chi phí tiết kiệm."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Featured/Highlight Section (Optional placeholder based on image) */}
                    <div className="mb-16 relative rounded-3xl overflow-hidden aspect-[21/9] hidden md:block group cursor-pointer shadow-xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
                            alt="Featured Offer"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-12">
                            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold w-fit mb-4">Ưu đãi độc quyền</span>
                            <h2 className="text-4xl font-display font-bold text-white mb-2">Đặc quyền hội viên Meditech Club</h2>
                            <p className="text-white/90 text-lg mb-6">Trải nghiệm đặc quyền tinh hoa và ưu đãi không giới hạn.</p>
                            <Link href="/dat-lich" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all w-fit">
                                Khám phá ngay
                            </Link>
                        </div>
                    </div>

                    {/* Offers Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offers.map((offer) => (
                            <div key={offer.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                                <Link href={`/dat-lich?promotion=${encodeURIComponent(offer.title)}`} className="relative h-64 overflow-hidden block">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full shadow-lg">
                                        -{offer.discount}
                                    </div>
                                </Link>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {offer.tags.map((tag: string, idx: number) => (
                                            <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {offer.title}
                                    </h3>
                                    <div className="mt-auto pt-4">
                                        <div className="text-sm text-slate-500 mb-4">
                                            Thời gian áp dụng: <span className="font-medium text-slate-700">{offer.expiry}</span>
                                        </div>
                                        <Link href={`/dat-lich?promotion=${encodeURIComponent(offer.title)}`} className="block w-full py-3 text-center bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-primary transition-colors shadow-lg shadow-slate-900/10">
                                            Tư vấn ngay
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Consultation Form Section */}
            <BookingForm />
        </main>
    );
}
