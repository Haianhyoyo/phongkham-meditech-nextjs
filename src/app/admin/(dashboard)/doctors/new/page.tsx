"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewDoctorPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        specialty: "",
        experience: "",
        image: "",
        qualifications: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/doctors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/doctors");
                router.refresh();
            } else {
                alert("Lỗi khi thêm bác sĩ");
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
                <Link href="/admin/doctors" className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h1 className="text-2xl font-bold text-slate-800">Thêm Bác sĩ mới</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="VD: BS. Nguyễn Văn A"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Chức danh / Vai trò <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="VD: Giám đốc chuyên môn"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Chuyên khoa</label>
                        <input
                            type="text"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="VD: Phẫu thuật thẩm mỹ"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Kinh nghiệm</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="VD: 15 năm"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700">Ảnh đại diện</label>
                        <div className="flex gap-4 items-start">
                            {formData.image && (
                                <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex-shrink-0">
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                                        className="absolute top-1 right-1 bg-white/80 rounded-full p-0.5 shadow-sm hover:bg-white text-red-500"
                                    >
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                            )}
                            <div className="flex-1 space-y-3">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="Tải ảnh lên hoặc nhập URL: https://..."
                                    />
                                    <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-300 transition-colors flex items-center gap-2 whitespace-nowrap">
                                        <span className="material-symbols-outlined text-sm">upload</span>
                                        Chọn ảnh
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
                                <p className="text-xs text-slate-500 italic">Lưu ý: Bạn có thể chọn file từ máy tính hoặc dán link ảnh trực tiếp.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Bằng cấp / Chứng chỉ</label>
                    <textarea
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Nhập các bằng cấp, chứng chỉ..."
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Mô tả / Giới thiệu</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Giới thiệu chi tiết về bác sĩ..."
                    ></textarea>
                </div>

                <div className="pt-4 flex justify-end gap-4 border-t border-slate-100">
                    <Link href="/admin/doctors" className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                        Hủy bỏ
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-70 flex items-center gap-2"
                    >
                        {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                        Lưu hồ sơ
                    </button>
                </div>
            </form>
        </div>
    );
}
