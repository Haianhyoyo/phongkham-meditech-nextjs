"use client";

import { useEffect, useState } from "react";

interface Booking {
    id: string;
    name: string;
    phone: string;
    service: string;
    message: string | null;
    status: string;
    createdAt: string;
}

export default function BookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const res = await fetch("/api/bookings");
            const data = await res.json();
            setBookings(data);
        } catch (error) {
            console.error("Failed to fetch bookings", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Quản lý Đặt lịch</h1>
                    <p className="text-slate-500">Danh sách khách hàng đăng ký tư vấn & đặt lịch khám</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-500/30">
                    <span className="material-symbols-outlined">download</span>
                    Xuất Excel
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Khách hàng</th>
                            <th className="px-6 py-4">Số điện thoại</th>
                            <th className="px-6 py-4">Dịch vụ quan tâm</th>
                            <th className="px-6 py-4">Lời nhắn</th>
                            <th className="px-6 py-4">Trạng thái</th>
                            <th className="px-6 py-4 text-right">Ngày gửi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {bookings.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                    <span className="material-symbols-outlined text-4xl mb-2 text-slate-300">calendar_month</span>
                                    <p>Chưa có yêu cầu đặt lịch nào.</p>
                                </td>
                            </tr>
                        ) : (
                            bookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{booking.name}</td>
                                    <td className="px-6 py-4 font-mono text-slate-600">{booking.phone}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-semibold">
                                            {booking.service}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 max-w-xs truncate" title={booking.message || ''}>{booking.message || '-'}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                                                booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                            {booking.status === 'PENDING' ? 'Chờ xử lý' :
                                                booking.status === 'CONFIRMED' ? 'Đã xác nhận' : booking.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">{new Date(booking.createdAt).toLocaleString('vi-VN')}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
