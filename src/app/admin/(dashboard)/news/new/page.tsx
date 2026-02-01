"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        category: "Kiến thức thẩm mỹ",
        summary: "",
        content: "",
        image: "",
        isPublished: true,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Auto-generate slug from title
        if (name === "title") {
            const slug = value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[đĐ]/g, "d")
                .replace(/[^a-z0-9\s]/g, "")
                .replace(/\s+/g, "-");
            setFormData((prev) => ({ ...prev, slug: slug }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/news", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/news");
                router.refresh();
            } else {
                const data = await res.json();
                alert(`Lỗi: ${data.error}`);
            }
        } catch (error) {
            console.error(error);
            alert("Đã có lỗi xảy ra");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link
                    href="/admin/news"
                    className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Viết bài mới</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Tiêu đề bài viết <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none text-lg font-medium"
                                placeholder="Nhập tiêu đề..."
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
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-primary outline-none text-sm text-slate-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Tóm tắt ngắn <span className="text-red-500">*</span></label>
                            <textarea
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                                placeholder="Mô tả ngắn gọn về nội dung bài viết..."
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Nội dung chi tiết</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={15}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none font-mono text-sm"
                                placeholder="Nhập nội dung bài viết (HTML hoặc Markdown)..."
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-span-1 space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Trạng thái</label>
                            <select
                                name="isPublished"
                                value={formData.isPublished ? "true" : "false"}
                                onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.value === "true" }))}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            >
                                <option value="true">Công khai (Published)</option>
                                <option value="false">Bản nháp (Draft)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Danh mục</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            >
                                <option value="Kiến thức thẩm mỹ">Kiến thức thẩm mỹ</option>
                                <option value="Tin tức sự kiện">Tin tức sự kiện</option>
                                <option value="Khuyến mãi">Khuyến mãi</option>
                                <option value="Câu chuyện khách hàng">Câu chuyện khách hàng</option>
                            </select>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <label className="text-sm font-semibold text-slate-700">Ảnh bài viết</label>

                            {formData.image && (
                                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                                        className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white text-red-500 transition-all font-bold"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            )}

                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none text-sm"
                                        placeholder="URL ảnh hoặc tải lên..."
                                    />
                                    <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-300 transition-colors flex items-center gap-2 whitespace-nowrap text-sm">
                                        <span className="material-symbols-outlined text-sm">upload</span>
                                        Tải lên
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
                                <p className="text-[11px] text-slate-500 italic">Dung lượng tối đa 5MB. Định dạng: JPG, PNG, WEBP.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
                    <Link
                        href="/admin/news"
                        className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                    >
                        Hủy bỏ
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-70 flex items-center gap-2"
                    >
                        {loading && (
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        )}
                        Đăng bài
                    </button>
                </div>
            </form>
        </div>
    );
}
