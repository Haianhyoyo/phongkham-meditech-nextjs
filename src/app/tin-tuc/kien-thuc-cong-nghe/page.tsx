"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function KnowledgePage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Kiến Thức & Công Nghệ"
                description="Cập nhật những xu hướng thẩm mỹ mới nhất và công nghệ làm đẹp tiên tiến."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Knowledge Section */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">Kiến Thức Thẩm Mỹ</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((val) => (
                                <article key={val} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                                    <div className="h-48 bg-slate-200 relative">
                                        {/* Placeholder Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">Image {val}</div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">7 Điều cần biết trước khi nâng mũi cấu trúc</h3>
                                        <p className="text-slate-600 text-sm line-clamp-3">Phân tích chi tiết về các phương pháp, chất liệu sụn và những lưu ý quan trọng để có dáng mũi đẹp an toàn.</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Technology Section */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Công Nghệ Mới</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[1, 2].map((val) => (
                                <article key={val} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row h-full md:h-48 group">
                                    <div className="h-48 md:w-1/3 bg-slate-200 relative shrink-0">
                                        {/* Placeholder Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">Tech {val}</div>
                                    </div>
                                    <div className="p-6 flex flex-col justify-center">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Công nghệ Plasma lạnh trong giảm sưng nề hậu phẫu</h3>
                                        <p className="text-slate-600 text-sm line-clamp-2">Ứng dụng tia Plasma giúp diệt khuẩn, kích thích lành thương nhanh gấp 2 lần so với phương pháp thông thường.</p>
                                    </div>
                                </article>
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
