"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewPromotionPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        discount: "",
        expiry: "",
        code: "",
        image: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/promotions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/promotions");
                router.refresh();
            } else {
                alert("Lỗi khi tạo khuyến mãi");
            }
        } catch (error) {
            console.error(error);
            alert("Đã có lỗi xảy ra");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/promotions" className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Tạo chương trình ưu đãi mới</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Tên chương trình <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="VD: Ưu đãi 8/3 - Giảm giá 50% toàn bộ dịch vụ"
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Mức giảm</label>
                        <input
                            type="text"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="VD: 50% hoặc 500k"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Ngày hết hạn</label>
                        <input
                            type="date"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Mã giảm giá (Code)</label>
                    <input
                        type="text"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none font-mono tracking-wider uppercase"
                        placeholder="VD: SUMMER2024"
                    />
                    <p className="text-xs text-slate-500">Để trống nếu không dùng mã code.</p>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-semibold text-slate-700">Ảnh banner</label>
                    <div className="flex flex-col gap-4">
                        {formData.image && (
                            <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                                <img
                                    src={formData.image}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                                    className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white text-red-500 transition-all"
                                >
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                        )}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                                placeholder="Tải lên hoặc nhập URL..."
                            />
                            <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-300 transition-colors flex items-center gap-2 whitespace-nowrap">
                                <span className="material-symbols-outlined text-sm">upload</span>
                                Tải ảnh
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (!file) return;

                                        const uploadData = new FormData();
                                        uploadData.append("file", file);

                                        try {
                                            const res = await fetch("/api/upload", {
                                                method: "POST",
                                                body: uploadData
                                            });
                                            const data = await res.json();
                                            if (data.url) {
                                                setFormData(prev => ({ ...prev, image: data.url }));
                                            }
                                        } catch (err) {
                                            alert("Lỗi khi tải ảnh lên");
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Mô tả chi tiết</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Điều kiện áp dụng, thông tin chi tiết..."
                    ></textarea>
                </div>

                <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
                    <Link href="/admin/promotions" className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                        Hủy bỏ
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-70 flex items-center gap-2"
                    >
                        {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                        Lưu ưu đãi
                    </button>
                </div>
            </form>
        </div>
    );
}
