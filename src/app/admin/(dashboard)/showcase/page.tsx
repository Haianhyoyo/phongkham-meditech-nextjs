"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ShowcaseItem {
    id: string;
    type: string;
    title: string | null;
    description: string | null;
    image: string;
    order: number;
    isActive: boolean;
}

const TYPE_LABELS: Record<string, string> = {
    HERO_SLIDE: "Banner Hero",
    CORE_VALUE: "Giá trị cốt lõi",
    EXPERT_STAT: "Thống kê chuyên gia",
    EQUIPMENT: "Trang thiết bị",
    ACHIEVEMENT: "Thành tựu",
    PROCESS: "Quy trình",
    SERVICE_FEE: "Dịch vụ & Chi phí",
    HOSPITAL_SYSTEM: "Hệ thống bệnh viện",
    HOME_SPECIALTY: "Chuyên khoa (Home)",
    SPECIAL_SERVICE: "Dịch vụ nổi bật",
    INSURANCE: "Đối tác bảo hiểm",
    ABOUT_HISTORY: "Về chúng tôi - Lịch sử",
    ABOUT_VISION: "Về chúng tôi - Tầm nhìn",
    ABOUT_CORE: "Về chúng tôi - Giá trị"
};

export default function ShowcasePage() {
    const [items, setItems] = useState<ShowcaseItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/showcase");
            const data = await res.json();
            if (res.ok && Array.isArray(data)) {
                setItems(data);
            } else {
                console.error("Failed to fetch showcase items:", data.error || "Unknown error");
                setItems([]);
            }
        } catch (error) {
            console.error("Failed to fetch showcase items", error);
            setItems([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa mục này không?")) return;

        try {
            const res = await fetch(`/api/showcase/${id}`, { method: "DELETE" });
            if (res.ok) {
                setItems(items.filter((item) => item.id !== id));
            } else {
                alert("Có lỗi xảy ra khi xóa.");
            }
        } catch (error) {
            console.error("Error deleting item", error);
        }
    };

    const filteredItems = filter
        ? items.filter(item => item.type === filter)
        : items;

    if (loading) return <div className="p-8 text-center">Đang tải dữ liệu...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Quản lý Trang chủ</h1>
                    <p className="text-slate-500">Quản lý các phần giới thiệu, thành tựu, quy trình...</p>
                </div>
                <Link
                    href="/admin/showcase/new"
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                    <span className="material-symbols-outlined">add_circle</span>
                    Thêm mục mới
                </Link>
            </div>

            <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
                <button
                    onClick={() => setFilter("")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === "" ? "bg-primary text-white" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}
                >
                    Tất cả
                </button>
                {Object.entries(TYPE_LABELS).map(([value, label]) => (
                    <button
                        key={value}
                        onClick={() => setFilter(value)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${filter === value ? "bg-primary text-white" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.length === 0 ? (
                    <div className="col-span-full py-12 bg-white rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
                        Chưa có dữ liệu cho mục này.
                    </div>
                ) : (
                    filteredItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group">
                            <div className="relative aspect-video w-full bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title || "Showcase"}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded uppercase tracking-wider">
                                    {TYPE_LABELS[item.type] || item.type}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-slate-800 mb-1 line-clamp-1">{item.title || "Không có tiêu đề"}</h3>
                                <p className="text-slate-500 text-xs line-clamp-2 mb-4 h-8">{item.description || "Không có mô tả"}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <span className="text-xs text-slate-400">Thứ tự: {item.order}</span>
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/admin/showcase/${item.id}`}
                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xl">edit</span>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
