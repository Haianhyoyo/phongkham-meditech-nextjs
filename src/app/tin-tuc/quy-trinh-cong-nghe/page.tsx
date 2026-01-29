"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function ProcessPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Quy Trình & Công Nghệ"
                description="Hướng dẫn chi tiết quy trình chuẩn y khoa và cảnh báo an toàn thẩm mỹ."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content: Guidelines */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">menu_book</span>
                                Hướng Dẫn Quy Trình
                            </h2>
                            <div className="space-y-8">
                                {[1, 2, 3].map((val) => (
                                    <div key={val} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-6 group hover:shadow-md transition-all">
                                        <div className="w-24 h-24 bg-slate-100 rounded-xl shrink-0 flex items-center justify-center text-slate-400">Img</div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Quy trình chăm sóc sau cắt mí Eye-Lift chuẩn y khoa</h3>
                                            <p className="text-slate-600 text-sm mb-3">Hướng dẫn vệ sinh vết thương, chườm lạnh/ấm và chế độ ăn uống giúp nếp mí nhanh vào form.</p>
                                            <button className="text-primary text-sm font-semibold hover:underline">Xem chi tiết</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar: Warnings & News */}
                        <div className="space-y-12">
                            {/* Warnings */}
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined">warning</span>
                                    Cảnh Báo An Toàn
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Biến chứng khi tiêm Filler tại Spa không phép",
                                        "Nguy cơ nhiễm trùng khi phẫu thuật 'chui'",
                                        "Dấu hiệu nhận biết sụn nâng mũi kém chất lượng"
                                    ].map((item, idx) => (
                                        <li key={idx} className="pb-3 border-b border-red-100 last:border-0 last:pb-0">
                                            <a href="#" className="text-red-900 hover:text-red-700 font-medium text-sm block">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* News */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-blue-600">newspaper</span>
                                    Tin Tức Ngành
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Xu hướng thẩm mỹ không xâm lấn lên ngôi năm 2024",
                                        "Hội nghị Thẩm mỹ Quốc tế lần thứ 10 tại Hàn Quốc",
                                        "Công nghệ tế bào gốc trong trẻ hóa da"
                                    ].map((item, idx) => (
                                        <li key={idx} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                                            <a href="#" className="text-slate-700 hover:text-primary font-medium text-sm block">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
