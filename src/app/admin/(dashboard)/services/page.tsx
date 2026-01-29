"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Service {
    id: string;
    title: string;
    category: string;
    type: string;
    price: string | null;
    isActive: boolean;
    createdAt: string;
}

export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await fetch("/api/services");
            const data = await res.json();
            setServices(data);
        } catch (error) {
            console.error("Failed to fetch services", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa dịch vụ này không?")) return;

        try {
            const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
            if (res.ok) {
                setServices(services.filter(s => s.id !== id));
                alert("Đã xóa thành công!");
            } else {
                alert("Có lỗi xảy ra khi xóa.");
            }
        } catch (error) {
            console.error("Error deleting service", error);
        }
    };

    if (loading) return <div className="p-8 text-center">Đang tải dữ liệu...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Quản lý Dịch vụ</h1>
                    <p className="text-slate-500">Danh sách các dịch vụ tiểu phẫu và đại phẫu</p>
                </div>
                <Link
                    href="/admin/services/new"
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                    <span className="material-symbols-outlined">add</span>
                    Thêm dịch vụ mới
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4">Tên dịch vụ</th>
                                <th className="px-6 py-4">Danh mục</th>
                                <th className="px-6 py-4">Loại</th>
                                <th className="px-6 py-4">Chi phí</th>
                                <th className="px-6 py-4">Trạng thái</th>
                                <th className="px-6 py-4 text-right">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {services.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                                        Chưa có dịch vụ nào. Hãy thêm mới!
                                    </td>
                                </tr>
                            ) : (
                                services.map((service) => (
                                    <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">{service.title}</td>
                                        <td className="px-6 py-4">{service.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${service.type === 'tieu-phau' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                                }`}>
                                                {service.type === 'tieu-phau' ? 'Tiểu phẫu' : 'Đại phẫu'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{service.price || "Liên hệ"}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${service.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                }`}>
                                                {service.isActive ? 'Hiện' : 'Ẩn'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/services/${service.id}`}
                                                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Chỉnh sửa"
                                                >
                                                    <span className="material-symbols-outlined text-xl">edit</span>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(service.id)}
                                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Xóa"
                                                >
                                                    <span className="material-symbols-outlined text-xl">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
