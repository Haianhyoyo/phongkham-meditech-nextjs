"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
    id: string;
    title: string;
    category: string | null;
    isPublished: boolean;
    image: string | null;
    author: { name: string | null } | null;
    createdAt: string;
}

export default function NewsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch("/api/news");
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch news", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) return;

        try {
            const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
            if (res.ok) {
                setPosts(posts.filter((p) => p.id !== id));
            } else {
                const error = await res.json();
                alert(error.error || "Có lỗi xảy ra khi xóa.");
            }
        } catch (error) {
            console.error("Error deleting post", error);
        }
    };

    if (loading) return <div className="p-8 text-center">Đang tải dữ liệu...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Quản lý Tin tức</h1>
                    <p className="text-slate-500">Bài viết, kiến thức, và thông tin sự kiện</p>
                </div>
                <Link
                    href="/admin/news/new"
                    className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                    <span className="material-symbols-outlined">edit_square</span>
                    Viết bài mới
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Bài viết</th>
                            <th className="px-6 py-4">Danh mục</th>
                            <th className="px-6 py-4">Tác giả</th>
                            <th className="px-6 py-4">Ngày đăng</th>
                            <th className="px-6 py-4">Trạng thái</th>
                            <th className="px-6 py-4 text-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                                    Chưa có bài viết nào.
                                </td>
                            </tr>
                        ) : (
                            posts.map((post) => (
                                <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-16 h-12 rounded bg-slate-100 overflow-hidden relative flex-shrink-0">
                                                {post.image ? (
                                                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                                                ) : (
                                                    <span className="material-symbols-outlined w-full h-full flex items-center justify-center text-slate-400">image</span>
                                                )}
                                            </div>
                                            <span className="font-medium text-slate-900 line-clamp-2 max-w-xs">{post.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{post.category || 'Chưa phân loại'}</td>
                                    <td className="px-6 py-4">{post.author?.name || 'Admin'}</td>
                                    <td className="px-6 py-4">{new Date(post.createdAt).toLocaleDateString('vi-VN')}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${post.isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {post.isPublished ? 'Đã đăng' : 'Bản nháp'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/admin/news/${post.id}`}
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-xl">edit</span>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post.id)}
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
