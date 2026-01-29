"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Doctor {
    id: string;
    name: string;
    role: string;
    specialty: string | null;
    isActive: boolean;
    image: string | null;
}

export default function DoctorsPage() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const res = await fetch("/api/doctors");
            const data = await res.json();
            setDoctors(data);
        } catch (error) {
            console.error("Failed to fetch doctors", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa bác sĩ này không?")) return;

        try {
            const res = await fetch(`/api/doctors/${id}`, { method: "DELETE" });
            if (res.ok) {
                setDoctors(doctors.filter((d) => d.id !== id));
            } else {
                alert("Có lỗi xảy ra khi xóa.");
            }
        } catch (error) {
            console.error("Error deleting doctor", error);
        }
    };

    if (loading) return <div className="p-8 text-center">Đang tải dữ liệu...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Quản lý Đội ngũ Bác sĩ</h1>
                    <p className="text-slate-500">Danh sách bác sĩ và chuyên gia của phòng khám</p>
                </div>
                <Link
                    href="/admin/doctors/new"
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                    <span className="material-symbols-outlined">add_circle</span>
                    Thêm bác sĩ
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Bác sĩ</th>
                            <th className="px-6 py-4">Chức danh</th>
                            <th className="px-6 py-4">Chuyên khoa</th>
                            <th className="px-6 py-4">Trạng thái</th>
                            <th className="px-6 py-4 text-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {doctors.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                                    Chưa có bác sĩ nào.
                                </td>
                            </tr>
                        ) : (
                            doctors.map((doctor) => (
                                <tr key={doctor.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden relative">
                                            {doctor.image ? (
                                                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                                            ) : (
                                                <span className="material-symbols-outlined w-full h-full flex items-center justify-center text-slate-400">person</span>
                                            )}
                                        </div>
                                        <span className="font-medium text-slate-900">{doctor.name}</span>
                                    </td>
                                    <td className="px-6 py-4">{doctor.role}</td>
                                    <td className="px-6 py-4">{doctor.specialty}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${doctor.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {doctor.isActive ? 'Hiện' : 'Ẩn'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/admin/doctors/${doctor.id}`}
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-xl">edit</span>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(doctor.id)}
                                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
    );
}
