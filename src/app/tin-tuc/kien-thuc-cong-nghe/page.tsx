"use client";

import PageHeader from "@/components/ui/PageHeader";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function KnowledgePage() {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch("/api/news");
                const data = await res.json();
                setArticles(data);
            } catch (error) {
                console.error("Failed to fetch articles", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const knowledgeNews = articles.filter(a => a.category === "Kiến thức").slice(0, 3);
    const techNews = articles.filter(a => a.category === "Công nghệ").slice(0, 4);

    if (loading) return null;

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Kiến Thức & Công Nghệ"
                description="Cập nhật những xu hướng thẩm mỹ mới nhất và công nghệ làm đẹp tiên tiến."
                backgroundImage="/image/banner.jpg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Knowledge Section */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">Kiến Thức Thẩm Mỹ</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {knowledgeNews.map((item) => (
                                <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                                        <Image
                                            src={item.image || "/image/news/bg-news.jpg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-all"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm line-clamp-3">{item.summary}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Technology Section */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Công Nghệ Mới</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {techNews.map((item) => (
                                <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row h-full md:h-48 group">
                                    <div className="h-48 md:w-1/3 bg-slate-200 relative shrink-0 overflow-hidden">
                                        <Image
                                            src={item.image || "/image/news/bg-news.jpg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-all"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm line-clamp-2">{item.summary}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Section */}
                    <div>
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 border-l-4 border-purple-600 pl-4">So Sánh Phương Pháp</h2>
                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold mb-6">Nâng mũi bọc sụn vs Nâng mũi cấu trúc</h3>
                            <table className="w-full text-left border-collapse text-sm md:text-base">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-4 border border-slate-200">Tiêu chí</th>
                                        <th className="p-4 border border-slate-200">Nâng mũi bọc sụn</th>
                                        <th className="p-4 border border-slate-200">Nâng mũi cấu trúc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-semibold">Đối tượng</td>
                                        <td className="p-4 border border-slate-200">Dáng mũi ít khuyết điểm, chỉ cần nâng cao.</td>
                                        <td className="p-4 border border-slate-200">Mũi thấp, tẹt, ngắn, hếch, hỏng...</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-200 font-semibold">Kỹ thuật</td>
                                        <td className="p-4 border border-slate-200">Đặt sụn nhân tạo + bọc sụn tai đầu mũi.</td>
                                        <td className="p-4 border border-slate-200">Tái lập toàn bộ cấu trúc mũi (trụ mũi, đầu mũi, sống mũi).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
