import { prisma } from "@/lib/prisma";
import Link from "next/link";

// Force dynamic behavior so it always fetches fresh data
export const dynamic = 'force-dynamic';

export default async function AdminBookingsPage() {
    // Ensure prisma is available or fallback
    let bookings: any[] = [];
    try {
        if (prisma) {
            bookings = await prisma.booking.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });
        }
    } catch (e) {
        console.error("Failed to fetch bookings:", e);
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-slate-900">
                        Danh sách khách hàng đăng ký
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-slate-500">
                        Thông tin chi tiết từ form đăng ký tư vấn.
                    </p>
                </div>
                <button
                    className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
                >
                    Tải lại
                </button>
            </div>
            <div className="border-t border-slate-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Thời gian
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Họ và tên
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Dịch vụ quan tâm
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Trạng thái
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-slate-500">
                                        Chưa có dữ liệu đăng ký nào.
                                    </td>
                                </tr>
                            ) : (
                                bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                            {new Date(booking.createdAt).toLocaleString('vi-VN')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                                            {booking.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                            {booking.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                            {booking.service}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                                                booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {booking.status === 'PENDING' ? 'Chờ gọi' : booking.status}
                                            </span>
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
