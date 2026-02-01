
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
                    {/* Background with Grid/Tech Patterns */}
                    <div className={`absolute inset-0 ${slide.bgColor} z-0`}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>

                        {/* High-tech SVG Decoration */}
                        <svg className="absolute -bottom-20 -left-20 w-[600px] h-[600px] text-white/5 opacity-20 rotate-12" viewBox="0 0 100 100">
                            <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2,2" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
                        </svg>
                    </div>

                    {/* Content Layer */}
                    {(slide as any).isBanner ? (
                        <div className="absolute inset-0 z-10 h-full w-full">
                            <Image
                                src={slide.image}
                                alt="Khuyến mãi Tết"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 grid md:grid-cols-12 gap-8 items-center pt-20">
                            {/* Left Info */}
                            <div className="md:col-span-5 text-white order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-lg">
                                        <img src="/image/favicon_square.png" alt="Logo" className="w-8 h-8 object-contain" />
                                    </div>
                                    <div className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase max-w-[200px] leading-tight opacity-90">
                                        {(slide as any).category}
                                    </div>
                                </div>

                                <h2 className="text-4xl md:text-7xl font-display font-black leading-[1] mb-4 drop-shadow-2xl">
                                    {(slide as any).title}
                                </h2>
                                <h3 className="text-2xl md:text-5xl font-sans font-black text-yellow-400 leading-tight mb-10 tracking-tight">
                                    {(slide as any).subtitle}
                                </h3>

                                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 mb-12 group hover:bg-white hover:text-primary transition-all cursor-pointer">
                                    <span className="material-symbols-outlined text-red-500 font-black animate-pulse">location_on</span>
                                    <span className="font-bold text-sm md:text-base tracking-tight uppercase">{(slide as any).footer}</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                                </div>
                            </div>

                            {/* Center Image Area */}
                            <div className="md:col-span-4 h-full relative flex items-center justify-center order-1 md:order-2">
                                <div className="relative w-full aspect-square md:scale-125">
                                    <Image
                                        src={slide.image}
                                        alt={(slide as any).title}
                                        fill
                                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                        priority
                                    />
                                    {/* Glowing halo behind image */}
                                    <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Right Features */}
                            <div className="md:col-span-3 space-y-8 order-3">
                                <div className="text-center md:text-left mb-8">
                                    <h4 className="text-white font-sans font-black text-sm md:text-lg uppercase tracking-wider mb-2">Công nghệ đỉnh cao</h4>
                                    <div className="w-12 h-0.5 bg-primary-dark mx-auto md:ml-0"></div>
                                </div>

                                {(slide as any).features?.map((feat: any, i: number) => (
                                    <div key={i} className="flex items-center md:items-start gap-4 p-4 rounded-2xl hover:bg-white/10 transition-colors group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <span className="material-symbols-outlined text-primary group-hover:text-white">{feat.icon}</span>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm md:text-base leading-tight mb-1">{feat.label}</div>
                                            <div className="text-primary-dark text-[11px] md:text-xs font-medium uppercase tracking-widest">{feat.desc}</div>
                                        </div>
                                    </div>
                                ))}
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
