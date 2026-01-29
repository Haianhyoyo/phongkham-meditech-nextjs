"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Review {
    id: string;
    customerName: string;
    rating: number;
    content: string;
    service: string | null;
    isActive: boolean;
    createdAt: string;
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const res = await fetch("/api/reviews");
            const data = await res.json();
            setReviews(data);
        } catch (error) {
            console.error("Failed to fetch reviews", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Đánh giá khách hàng</h1>
                    <p className="text-slate-500">Quản lý phản hồi và feedback từ khách hàng</p>
                </div>
                <button className="bg-slate-100 text-slate-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed flex items-center gap-2">
                    <span className="material-symbols-outlined">add_comment</span>
                    Thêm đánh giá (Thủ công)
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Khách hàng</th>
                            <th className="px-6 py-4">Đánh giá</th>
                            <th className="px-6 py-4">Nội dung</th>
                            <th className="px-6 py-4">Dịch vụ</th>
                            <th className="px-6 py-4">Trạng thái</th>
                            <th className="px-6 py-4 text-right">Ngày gửi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {reviews.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                    <span className="material-symbols-outlined text-4xl mb-2 text-slate-300">chat</span>
                                    <p>Chưa có đánh giá nào.</p>
                                </td>
                            </tr>
                        ) : (
                            reviews.map((review) => (
                                <tr key={review.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-medium text-slate-900">{review.customerName}</td>
                                    <td className="px-6 py-4 text-yellow-500 flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-base">
                                                {i < review.rating ? 'star' : 'star_outline'}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 max-w-xs truncate" title={review.content}>{review.content}</td>
                                    <td className="px-6 py-4">{review.service || '-'}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${review.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                                            }`}>
                                            {review.isActive ? 'Hiển thị' : 'Ẩn'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">{new Date(review.createdAt).toLocaleDateString('vi-VN')}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
