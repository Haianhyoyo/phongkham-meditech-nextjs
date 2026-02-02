
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSlides = async () => {
        try {
            const res = await fetch("/api/showcase?type=HERO_SLIDE");
            const data = await res.json();
            if (Array.isArray(data)) {
                const formattedSlides = data.map(item => {
                    let meta = {};
                    try {
                        meta = item.metadata ? JSON.parse(item.metadata) : {};
                    } catch (e) {
                        console.error("Failed to parse metadata", e);
                    }
                    return {
                        id: item.id,
                        title: item.title,
                        subtitle: item.description, // Reusing description as subtitle for consistency
                        image: item.image,
                        link: item.link,
                        ...meta
                    };
                });
                setSlides(formattedSlides);
            }
        } catch (error) {
            console.error("Failed to fetch hero slides", error);
        } finally {
            setLoading(false);
        }
    };

    const nextSlide = useCallback(() => {
        if (slides.length === 0) return;
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = () => {
        if (slides.length === 0) return;
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        fetchSlides();
    }, []);

    useEffect(() => {
        if (slides.length === 0) return;
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide, slides.length]);

    if (loading) return <div className="h-[650px] md:h-[750px] w-full bg-slate-900 animate-pulse flex items-center justify-center text-white/20 font-bold italic">Loading...</div>;
    if (slides.length === 0) return null;

    return (
        <section className="relative h-[650px] md:h-[750px] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                        }`}
                >
                    {/* Main Background Image - Always Full-Width */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={slide.image}
                            alt={slide.title || "Meditech Banner"}
                            fill
                            className="object-cover transition-transform duration-[10000ms] ease-out scale-100 group-hover:scale-110"
                            priority
                        />
                        {/* Gradient Overlays for Readability */}
                        {!(slide as any).isBanner && (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                            </>
                        )}
                        {/* Always show a subtle overlay for banners to maintain brand feel */}
                        {(slide as any).isBanner && (
                            <div className="absolute inset-0 bg-black/10 z-10"></div>
                        )}
                    </div>

                    {/* Tech Patterns (Only for non-banners or as very subtle decoration) */}
                    {!(slide as any).isBanner && (
                        <div className="absolute inset-0 z-15 opacity-20 pointer-events-none">
                            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>
                            <svg className="absolute -bottom-20 -left-20 w-[600px] h-[600px] text-white/10" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2,2" />
                            </svg>
                        </div>
                    )}

                    {/* Content Layer - Overlayed on background */}
                    {!(slide as any).isBanner && (
                        <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center pt-10">
                            <div className="max-w-4xl">
                                {/* Category Badge */}
                                <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center rounded-lg border border-white/20">
                                        <img src="/image/favicon_square.png" alt="Logo" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-white/80 leading-tight">
                                        {(slide as any).category}
                                    </div>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-4xl md:text-8xl font-display font-black leading-[0.9] mb-4 text-white drop-shadow-2xl animate-fade-in-up [animation-delay:200ms]">
                                    {(slide as any).title}
                                </h2>
                                <h3 className="text-2xl md:text-5xl font-sans font-black text-yellow-400 leading-tight mb-10 tracking-tight animate-fade-in-up [animation-delay:400ms]">
                                    {(slide as any).subtitle}
                                </h3>

                                {/* Bottom Info Row */}
                                <div className="flex flex-wrap items-center gap-6 animate-fade-in-up [animation-delay:600ms]">
                                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-primary transition-all cursor-pointer">
                                        <span className="material-symbols-outlined text-red-500 font-black">location_on</span>
                                        <span className="font-bold text-sm tracking-tight uppercase">{(slide as any).footer}</span>
                                    </div>

                                    {/* Feature Icons Row */}
                                    <div className="hidden lg:flex items-center gap-8 pl-6 border-l border-white/20">
                                        {(slide as any).features?.slice(0, 2).map((feat: any, i: number) => (
                                            <div key={i} className="flex items-center gap-3 group/feat">
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/feat:bg-primary transition-colors">
                                                    <span className="material-symbols-outlined text-white text-lg">{feat.icon}</span>
                                                </div>
                                                <div className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{feat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Floating Bar */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] md:w-auto bg-white rounded-2xl p-4 md:px-8 shadow-2xl flex flex-wrap items-center justify-center gap-6 md:gap-10 z-30 ring-1 ring-slate-100">
                        <div className="flex items-center gap-2 text-slate-800">
                            <span className="material-symbols-outlined text-primary-dark font-bold leading-none">call</span>
                            <span className="font-black text-xs md:text-base tracking-tight">{(slide.contact || "").split('|')[0].trim()}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-slate-800">
                            <span className="material-symbols-outlined text-red-500 font-bold leading-none">location_on</span>
                            <span className="font-bold text-xs md:text-sm text-slate-600">{(slide.contact || "").split('|')[1]?.trim() || "Địa chỉ cập nhật"}</span>
                        </div>
                        <Link href="#booking" className="bg-primary text-white px-6 md:px-10 py-3 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
                            Đặt lịch ngay
                        </Link>
                    </div>
                </div>
            ))}

            {/* Slider Navigation */}
            <div className="absolute bottom-8 right-10 md:right-20 flex gap-4 z-[60]">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all backdrop-blur-sm">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all backdrop-blur-sm">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-10 left-10 flex gap-2 z-[60]">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
                    />
                ))}
            </div>
        </section>
    );
}
