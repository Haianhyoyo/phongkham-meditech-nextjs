"use client";

import { useState, useEffect } from "react";

export default function HistoryMission() {
    const [sections, setSections] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const res = await fetch("/api/showcase");
                const data = await res.json();
                const filtered = data.filter((item: any) =>
                    ["ABOUT_HISTORY", "ABOUT_VISION", "ABOUT_CORE"].includes(item.type)
                );
                // Sort by order
                filtered.sort((a: any, b: any) => a.order - b.order);
                setSections(filtered);
            } catch (error) {
                console.error("Failed to fetch about sections", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSections();
    }, []);

    if (loading || sections.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Hành trình phát triển</span>
                    <h2 className="text-4xl font-display font-bold text-slate-900 mt-2">Sứ Mệnh Kiến Tạo Vẻ Đẹp</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {sections.map((section, idx) => {
                        const icon = section.metadata ? JSON.parse(section.metadata).icon : "verified";
                        const isCore = section.type === "ABOUT_CORE";

                        return (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-3xl">{icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>
                                {isCore ? (
                                    <ul className="text-slate-600 space-y-2 text-left inline-block">
                                        {JSON.parse(section.description || "[]").map((item: any, i: number) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                                <strong>{item.label}:</strong> {item.value}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-slate-600 leading-relaxed">
                                        {section.description}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
