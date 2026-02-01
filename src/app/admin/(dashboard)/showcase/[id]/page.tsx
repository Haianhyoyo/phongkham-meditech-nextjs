"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function EditShowcasePage() {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        type: "EQUIPMENT",
        title: "",
        description: "",
        image: "",
        link: "",
        metadata: "",
        order: "0",
        isActive: true,
    });

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await fetch(`/api/showcase/${params.id}`);
                const data = await res.json();
                if (data.id) {
                    setFormData({
                        type: data.type,
                        title: data.title || "",
                        description: data.description || "",
                        image: data.image,
                        link: data.link || "",
                        metadata: data.metadata || "",
                        order: data.order.toString(),
                        isActive: data.isActive,
                    });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setFetching(false);
            }
        };
        fetchItem();
    }, [params.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/showcase/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    order: parseInt(formData.order)
                }),
            });

            if (res.ok) {
                router.push("/admin/showcase");
                router.refresh();
            } else {
                alert("Lỗi khi cập nhật");
            }
        } catch (error) {
            console.error(error);
            alert("Đã có lỗi xảy ra");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-8 text-center">Đang tải dữ liệu...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/showcase" className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Chỉnh sửa nội dung</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Loại nội dung</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="HERO_SLIDE">Banner Hero</option>
                            <option value="CORE_VALUE">Giá trị cốt lõi</option>
                            <option value="EXPERT_STAT">Thống kê chuyên gia</option>
                            <option value="EQUIPMENT">Trang thiết bị</option>
                            <option value="ACHIEVEMENT">Thành tựu</option>
                            <option value="PROCESS">Quy trình</option>
                            <option value="SERVICE_FEE">Dịch vụ & Chi phí</option>
                            <option value="HOSPITAL_SYSTEM">Hệ thống bệnh viện</option>
                            <option value="HOME_SPECIALTY">Chuyên khoa (Home)</option>
                            <option value="SPECIAL_SERVICE">Dịch vụ nổi bật</option>
                            <option value="INSURANCE">Đối tác bảo hiểm</option>
                            <option value="ABOUT_HISTORY">Về chúng tôi - Lịch sử</option>
                            <option value="ABOUT_VISION">Về chúng tôi - Tầm nhìn</option>
                            <option value="ABOUT_CORE">Về chúng tôi - Giá trị</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Thứ tự hiển thị</label>
                        <input
                            type="number"
                            name="order"
                            value={formData.order}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Tiêu đề (Không bắt buộc)</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Hình ảnh</label>
                    <div className="flex flex-col gap-4">
                        {formData.image && (
                            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={() => setFormData(p => ({ ...p, image: "" }))}
                                    className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white text-red-500"
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        )}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="Tải lên hoặc nhập URL..."
                                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            />
                            <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-300 transition-colors flex items-center gap-2 whitespace-nowrap">
                                <span className="material-symbols-outlined">upload</span>
                                Chọn ảnh
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (!file) return;
                                        const fd = new FormData();
                                        fd.append("file", file);
                                        try {
                                            const res = await fetch("/api/upload", { method: "POST", body: fd });
                                            const data = await res.json();
                                            if (data.url) setFormData(p => ({ ...p, image: data.url }));
                                        } catch (err) { alert("Lỗi tải ảnh"); }
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Đường dẫn liên kết (Link)</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Mô tả chi tiết (Không bắt buộc)</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Dữ liệu mở rộng (Metadata - JSON format)</label>
                    <textarea
                        name="metadata"
                        value={formData.metadata}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none font-mono text-sm"
                    ></textarea>
                </div>

                <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
                    <Link href="/admin/showcase" className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                        Hủy bỏ
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-70 flex items-center gap-2"
                    >
                        {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    );
}
