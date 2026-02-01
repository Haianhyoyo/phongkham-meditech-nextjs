"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function InsurancePartners() {
    const [partners, setPartners] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch("/api/showcase?type=INSURANCE");
                const data = await res.json();
                if (Array.isArray(data)) {
                    setPartners(data);
                }
            } catch (error) {
                console.error("Failed to fetch partners", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPartners();
    }, []);

    if (loading || partners.length === 0) return null;

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-blue-500 uppercase tracking-widest mb-4">
                        Đối TáC BẢO HIỂM
                    </h2>
                    <div className="w-16 h-1 bg-slate-800 mx-auto"></div>
                </div>

                <div className="relative group/slider">
                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-8 px-4">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-32 h-12 md:w-40 md:h-16 relative transition-all duration-500 opacity-90 hover:opacity-100 cursor-pointer hover:scale-105"
                            >
                                <Image
                                    src={partner.image}
                                    alt={partner.title || partner.name}
                                    fill
                                    className="object-contain transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
