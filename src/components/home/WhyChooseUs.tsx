"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function WhyChooseUs() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [equipment, setEquipment] = useState<any[]>([]);
    const [achievements, setAchievements] = useState<any[]>([]);
    const [processItems, setProcessItems] = useState<any[]>([]);
    const [serviceItems, setServiceItems] = useState<any[]>([]);
    const [mainValues, setMainValues] = useState<any[]>([]);
    const [expertStats, setExpertStats] = useState<any[]>([]);
    const [hospitals, setHospitals] = useState<any[]>([]);
    const [specialties, setSpecialties] = useState<any[]>([]);

    useEffect(() => {
        fetchShowcase();
    }, []);

    const fetchShowcase = async () => {
        try {
            const res = await fetch("/api/showcase");
            const data = await res.json();
            if (Array.isArray(data)) {
                setEquipment(data.filter((item: any) => item.type === "EQUIPMENT"));
                setAchievements(data.filter((item: any) => item.type === "ACHIEVEMENT"));
                setProcessItems(data.filter((item: any) => item.type === "PROCESS"));
                setServiceItems(data.filter((item: any) => item.type === "SERVICE_FEE"));
                setMainValues(data.filter((item: any) => item.type === "CORE_VALUE"));
                setExpertStats(data.filter((item: any) => item.type === "EXPERT_STAT").map(s => ({
                    number: s.description,
                    title: s.title
                })));
                setHospitals(data.filter((item: any) => item.type === "HOSPITAL_SYSTEM").map(h => ({
                    ...h,
                    ...(h.metadata ? JSON.parse(h.metadata) : {})
                })));
                setSpecialties(data.filter((item: any) => item.type === "HOME_SPECIALTY"));
            }
        } catch (error) {
            console.error("Failed to fetch showcase", error);
        }
    };

    // Lock scroll when lightbox is open
    useEffect(() => {
        if (selectedIdx !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedIdx]);

    const handlePrev = () => {
        if (selectedIdx !== null) {
            setSelectedIdx((selectedIdx - 1 + equipment.length) % equipment.length);
        }
    };

    const handleNext = () => {
        if (selectedIdx !== null) {
            setSelectedIdx((selectedIdx + 1) % equipment.length);
        }
    };

    return (
        <section className="py-20 bg-white space-y-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 1. Core Values Section */}
                <div className="mb-24">
                    <div className="text-center mb-16 relative">
                        <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary-dark uppercase tracking-widest mb-4">
                            Giá Trị Khác Biệt Của Meditech
                        </h2>
                        <div className="w-16 h-1 bg-slate-800 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {mainValues.map((value, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-[2.5rem] p-6 lg:p-8 border border-slate-100 flex flex-col items-center text-center shadow-md shadow-slate-200/40 hover:shadow-xl transition-all duration-500 min-h-[460px] group"
                            >
                                {/* Refined Accent Tab */}
                                <div
                                    className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-200 opacity-90 transition-opacity"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', borderRadius: '2.5rem 0 0 0' }}
                                ></div>

                                {/* Fixed-height container for Icon/Image to ensure text alignment */}
                                <div className="h-[240px] flex items-center justify-center w-full mt-4 mb-6">
                                    <div className="relative w-full aspect-square max-w-[180px] lg:max-w-[210px] group-hover:scale-105 transition-transform duration-500 overflow-hidden rounded-2xl">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="mt-2 pb-6">
                                    <h3 className="text-base lg:text-lg font-sans font-bold text-slate-800 leading-tight uppercase tracking-tight max-w-[220px] mx-auto min-h-[4.5rem] flex items-start justify-center">
                                        <span className="mt-0">{value.title}</span>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Experts Section */}
                <div className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-2 border-l-4 border-primary pl-4 uppercase">
                            Chuyên gia đầu ngành - bác sĩ giỏi - chuyên viên giàu kinh nghiệm
                        </h2>
                        <div className="w-24 h-0.5 bg-slate-800 mb-3 ml-4"></div>x
                        <p className="text-slate-500 text-sm ml-4 uppercase tracking-tighter">
                            Quy tụ đội ngũ chuyên gia đầu ngành, bác sĩ chuyên môn cao, giàu kinh nghiệm.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                        {expertStats.map((stat, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group">
                                <span className="block text-4xl md:text-5xl font-display font-medium text-primary mb-2 group-hover:scale-110 transition-transform">
                                    {stat.number}
                                </span>
                                <span className="text-[10px] md:text-[11px] font-sans font-bold text-slate-700 uppercase leading-snug">
                                    {stat.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link href="/chuyen-gia" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/30">
                            Xem các chuyên gia
                        </Link>
                    </div>
                </div>

                {/* 3. Modern Equipment Section */}
                <div className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-2 border-l-4 border-primary pl-4 uppercase">
                            Trang thiết bị hiện đại
                        </h2>
                        <div className="w-24 h-0.5 bg-slate-800 mb-3 ml-4"></div>
                        <p className="text-slate-500 text-sm ml-4 uppercase tracking-tighter">
                            Bệnh viện sở hữu hệ thống trang thiết bị cao cấp phục vụ công tác chẩn đoán và điều trị.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[650px] overflow-hidden">
                        {/* Equipment Card Component */}
                        {(() => {
                            const EquipmentCard = ({ item, index, className }: { item: any, index: number, className?: string }) => (
                                <div
                                    className={`relative group overflow-hidden rounded-lg shadow-sm border border-slate-100 cursor-pointer ${className}`}
                                    onClick={() => setSelectedIdx(index)}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title || "Equipment"}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 bg-slate-100"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary-dark/90 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <h3 className="text-white font-sans font-black text-sm md:text-base mb-3 uppercase leading-tight tracking-tight italic">
                                            {item.title}
                                        </h3>
                                        <div className="w-10 h-0.5 bg-white/50 mb-4"></div>
                                        <p className="text-white/90 text-[10px] md:text-xs leading-relaxed font-medium line-clamp-6">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );

                            if (equipment.length < 6) return (
                                <div className="col-span-4 flex items-center justify-center bg-slate-50 text-slate-400 font-medium italic">
                                    Đang tải dữ liệu trang thiết bị...
                                </div>
                            );

                            return (
                                <>
                                    <div className="md:col-span-1 flex flex-col gap-4">
                                        <EquipmentCard
                                            item={equipment[0]}
                                            index={0}
                                            className="h-[65%]"
                                        />
                                        <EquipmentCard
                                            item={equipment[1]}
                                            index={1}
                                            className="h-[31%]"
                                        />
                                    </div>
                                    <EquipmentCard
                                        item={equipment[2]}
                                        index={2}
                                        className="md:col-span-1"
                                    />
                                    <EquipmentCard
                                        item={equipment[3]}
                                        index={3}
                                        className="md:col-span-1"
                                    />
                                    <div className="md:col-span-1 flex flex-col gap-4">
                                        <EquipmentCard
                                            item={equipment[4]}
                                            index={4}
                                            className="h-[55%]"
                                        />
                                        <EquipmentCard
                                            item={equipment[5]}
                                            index={5}
                                            className="flex-grow"
                                        />
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {selectedIdx !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedIdx(null)}
                        ></div>

                        {/* Modal Content */}
                        <div className="relative bg-white max-w-4xl w-full rounded-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
                                onClick={() => setSelectedIdx(null)}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="relative aspect-[4/3] md:aspect-video w-full">
                                <Image
                                    src={equipment[selectedIdx].image}
                                    alt={equipment[selectedIdx].title || "Equipment"}
                                    fill
                                    className="object-contain p-8 bg-slate-50"
                                />

                                {/* Navigation Arrows */}
                                <button
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/30 text-white rounded-full flex items-center justify-center transition-all"
                                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                >
                                    <span className="material-symbols-outlined text-3xl">chevron_left</span>
                                </button>
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/10 hover:bg-black/30 text-white rounded-full flex items-center justify-center transition-all"
                                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                >
                                    <span className="material-symbols-outlined text-3xl">chevron_right</span>
                                </button>
                            </div>

                            {/* Info Box */}
                            <div className="p-8 text-center border-t border-slate-100">
                                <h3 className="text-xl md:text-2xl font-sans font-black text-slate-800 mb-4 uppercase italic">
                                    {equipment[selectedIdx].title}
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                                    {equipment[selectedIdx].description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. Achievements Section */}
                <div className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-2 border-l-4 border-primary pl-4 uppercase">
                            Hiệu quả điều trị cao - Thành tựu nổi bật
                        </h2>
                        <div className="w-24 h-0.5 bg-slate-800 mb-3 ml-4"></div>
                        <p className="text-slate-500 text-sm ml-4 uppercase tracking-tighter">
                            Ứng dụng kỹ thuật tiên tiến, phác đồ chuyên biệt, tăng tỷ lệ thành công.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {achievements.map((item, i) => (
                            <div key={item.id} className="relative h-64 rounded-lg overflow-hidden group border border-slate-100 shadow-sm">
                                <Image src={item.image} alt={item.title || `Achievement ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link href="/ket-qua-thanh-tuu" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/30">
                            Xem các thành tựu
                        </Link>
                    </div>
                </div>

                {/* 5. Scientific Process Section */}
                <div className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-2 border-l-4 border-primary pl-4 uppercase">
                            Quy trình khoa học - Toàn diện - Chuyên nghiệp
                        </h2>
                        <div className="w-24 h-0.5 bg-slate-800 mb-3 ml-4"></div>
                        <p className="text-slate-500 text-sm ml-4 uppercase tracking-tighter">
                            Quy trình khám, tư vấn và điều trị toàn diện, phối hợp chặt chẽ giữa các chuyên khoa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {processItems.map((item, i) => (
                            <div key={item.id} className="relative h-64 rounded-lg overflow-hidden group">
                                <Image src={item.image} alt={item.title || `Process ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link href="/huong-dan-kham-benh" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/30">
                            Xem hướng dẫn khám bệnh
                        </Link>
                    </div>
                </div>

                {/* 6. Premium Services Section */}
                <div className="mb-24">
                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-2 border-l-4 border-primary pl-4 uppercase">
                            Dịch vụ cao cấp - Chi phí hợp lý
                        </h2>
                        <div className="w-24 h-0.5 bg-slate-800 mb-3 ml-4"></div>
                        <p className="text-slate-500 text-sm ml-4 uppercase tracking-tighter">
                            Đội ngũ chăm sóc khách hàng chuyên nghiệp, tư vấn miễn phí qua tổng đài, website và fanpage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {serviceItems.map((item, i) => (
                            <div key={item.id} className="relative h-64 rounded-lg overflow-hidden group">
                                <Image src={item.image} alt={item.title || `Service ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100" />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link href="/dich-vu" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/30">
                            Xem các dịch vụ
                        </Link>
                    </div>
                </div>

                {/* 7. Hospital System Section */}
                <div className="mb-24 text-center">
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-medium text-primary uppercase tracking-widest mb-4">
                            Hệ thống bệnh viện đa khoa Meditech
                        </h2>
                        <div className="w-16 h-1 bg-slate-800 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {hospitals.map((hospital, index) => (
                            <div key={hospital.id} className="group">
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-xl">
                                    <Image src={hospital.image} alt={hospital.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h3 className="text-lg font-display font-bold text-slate-800 mb-4">{hospital.title}</h3>
                                    <div className="flex gap-4">
                                        <Link href="/lien-he" className="bg-primary text-white px-6 py-2 rounded font-sans font-bold text-xs uppercase hover:bg-primary-dark transition-colors">{hospital.contact_label || "Liên hệ"}</Link>
                                        <Link href="/lien-he" className="bg-primary text-white px-6 py-2 rounded font-sans font-bold text-xs uppercase hover:bg-primary-dark transition-colors">{hospital.direction_label || "Chỉ đường"}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 8. Specialties Section */}
                <div className="text-center">
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-medium text-primary uppercase tracking-widest mb-4">
                            Chuyên khoa
                        </h2>
                        <div className="w-16 h-1 bg-slate-800 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                        {specialties.map((spec, index) => (
                            <Link key={spec.id} href={`/dich-vu?category=${spec.title}`} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-32 h-32 rounded-full border-2 border-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-all shadow-lg group-hover:shadow-blue-200/50 overflow-hidden relative p-4">
                                    <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={spec.image || ""}
                                            alt={spec.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-[11px] font-sans font-bold text-slate-700 uppercase leading-snug tracking-wide max-w-[120px] text-center">
                                    {spec.title}
                                </h4>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link href="/chuyen-khoa" className="bg-primary hover:bg-primary-dark text-white px-10 py-3 font-sans font-bold uppercase tracking-wider text-sm transition-colors shadow-lg shadow-primary/30">
                            Xem thêm
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
