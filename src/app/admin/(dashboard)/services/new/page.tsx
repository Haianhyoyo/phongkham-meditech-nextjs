"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NewServicePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        category: "Mắt",
        type: "tieu-phau",
        shortDesc: "",
        content: "",
        price: "",
        recoveryTime: "",
        images: "[]" // JSON string placeholder for now
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Auto-generate slug from title
        if (name === "title") {
            const slug = value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[đĐ]/g, "d")
                .replace(/[^a-z0-9\s]/g, "")
                .replace(/\s+/g, "-");
            setFormData(prev => ({ ...prev, slug: slug }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                router.push("/admin/services");
                router.refresh();
            } else {
                const data = await res.json();
                alert(`Lỗi: ${data.error}`);
            }
        } catch (error) {
            console.error("Error creating service:", error);
            alert("Đã có lỗi xảy ra.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link
                    href="/admin/services"
                    className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Thêm dịch vụ mới</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Tên dịch vụ <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            placeholder="Ví dụ: Cắt mí Eye-Lift"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Đường dẫn (Slug) <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Loại dịch vụ</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        >
                            <option value="tieu-phau">Tiểu phẫu</option>
                            <option value="dai-phau">Đại phẫu</option>
                            <option value="da-lieu">Da liễu</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Danh mục</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            placeholder="Ví dụ: Mắt, Mũi, Hàm mặt..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Chi phí</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            placeholder="Ví dụ: 8.000.000đ"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Thời gian hồi phục</label>
                        <input
                            type="text"
                            name="recoveryTime"
                            value={formData.recoveryTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            placeholder="Ví dụ: 5-7 ngày"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Mô tả ngắn <span className="text-red-500">*</span></label>
                    <textarea
                        name="shortDesc"
                        value={formData.shortDesc}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        placeholder="Mô tả tóm tắt hiển thị trên thẻ dịch vụ..."
                    ></textarea>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-semibold text-slate-700">Hình ảnh dịch vụ</label>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {JSON.parse(formData.images || "[]").map((url: string, index: number) => (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 group">
                                <img src={url} alt={`Service ${index}`} className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={() => {
                                        const imgs = JSON.parse(formData.images);
                                        imgs.splice(index, 1);
                                        setFormData(prev => ({ ...prev, images: JSON.stringify(imgs) }));
                                    }}
                                    className="absolute top-1 right-1 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:bg-white shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-sm">close</span>
                                </button>
                            </div>
                        ))}
                        <label className="aspect-square rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-slate-50 transition-all text-slate-500 hover:text-primary">
                            <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                            <span className="text-xs mt-1 font-medium">Thêm ảnh</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                multiple
                                onChange={async (e) => {
                                    const files = Array.from(e.target.files || []);
                                    if (files.length === 0) return;

                                    for (const file of files) {
                                        const uploadData = new FormData();
                                        uploadData.append("file", file);

                                        try {
                                            const res = await fetch("/api/upload", {
                                                method: "POST",
                                                body: uploadData
                                            });
                                            const data = await res.json();
                                            if (data.url) {
                                                const currentImgs = JSON.parse(formData.images || "[]");
                                                currentImgs.push(data.url);
                                                setFormData(prev => ({ ...prev, images: JSON.stringify(currentImgs) }));
                                            }
                                        } catch (err) {
                                            console.error("Upload error", err);
                                        }
                                    }
                                }}
                            />
                        </label>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Nội dung chi tiết</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={10}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-mono text-sm"
                        placeholder="Nhập nội dung chi tiết (HTML hoặc Markdown)..."
                    ></textarea>
                    <p className="text-xs text-slate-500">Ghi chú: Sẽ cập nhật trình soạn thảo văn bản phong phú (Rich Text Editor) sau.</p>
                </div>

                <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
                    <Link
                        href="/admin/services"
                        className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                    >
                        Hủy bỏ
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-70 flex items-center gap-2"
                    >
                        {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                        Lưu dịch vụ
                    </button>
                </div>
            </form>
        </div>
    );
}
