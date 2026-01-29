"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Promotion {
    id: string;
    title: string;
    discount: string | null;
    expiry: string | null;
    code: string | null;
    isActive: boolean;
    image: string | null;
}

export default function PromotionsPage() {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            const res = await fetch("/api/promotions");
            const data = await res.json();
            setPromotions(data);
        } catch (error) {
            console.error("Failed to fetch promotions", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Quản lý Ưu đãi</h1>
                    <p className="text-slate-500">Các chương trình khuyến mãi và mã giảm giá</p>
                </div>
                <Link
                    href="/admin/promotions/new"
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                    <span className="material-symbols-outlined">add_tag</span>
                    Tạo ưu đãi
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promo) => (
                    <div key={promo.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
                        <div className="h-48 relative bg-slate-100">
                            {promo.image ? (
                                <Image src={promo.image} alt={promo.title} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <span className="material-symbols-outlined text-5xl">local_offer</span>
                                </div>
                            )}
                            <div className="absolute top-3 right-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${promo.isActive ? 'bg-green-500 text-white' : 'bg-slate-500 text-white'
                                    }`}>
                                    {promo.isActive ? 'Đang chạy' : 'Hết hạn'}
                                </span>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2">{promo.title}</h3>
                            <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg text-primary">percent</span>
                                    <span className="font-semibold text-primary">{promo.discount || "Liên hệ"}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">event</span>
                                    <span>{promo.expiry || "Vô thời hạn"}</span>
                                </div>
                            </div>

                            {promo.code && (
                                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-3 text-center mb-4">
                                    <span className="text-xs text-slate-500 uppercase tracking-widest block mb-1">Mã code</span>
                                    <span className="font-mono font-bold text-slate-800 text-lg tracking-wider">{promo.code}</span>
                                </div>
                            )}

                            <div className="flex gap-2">
                                <button className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-sm">
                                    Chỉnh sửa
                                </button>
                                <button className="px-3 py-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-50">
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {promotions.length === 0 && !loading && (
                    <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-xl border border-dashed border-slate-300">
                        <span className="material-symbols-outlined text-4xl mb-2 text-slate-300">campaign</span>
                        <p>Chưa có chương trình ưu đãi nào.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
