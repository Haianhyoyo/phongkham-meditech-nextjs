"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function PriceListPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Bảng Giá Dịch Vụ"
                description="Chi phí minh bạch, không phát sinh. Ưu đãi hấp dẫn khi đăng ký online."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Minor Surgery */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-display font-bold text-center text-slate-900 mb-10">Bảng Giá Tiểu Phẫu</h2>
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary/5 border-b border-primary/10">
                                        <th className="p-6 font-bold text-primary">Dịch Vụ</th>
                                        <th className="p-6 font-bold text-primary">Thời Gian</th>
                                        <th className="p-6 font-bold text-primary text-right">Chi Phí (VNĐ)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Cắt mí Eye-Lift", time: "45 phút", price: "8.000.000" },
                                        { name: "Nhấn mí đa điểm", time: "30 phút", price: "6.000.000" },
                                        { name: "Nâng mũi bọc sụn", time: "60 phút", price: "25.000.000" },
                                        { name: "Thu gọn cánh mũi", time: "45 phút", price: "10.000.000" },
                                        { name: "Tiêm Filler (1cc)", time: "15 phút", price: "3.500.000" },
                                    ].map((item, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50">
                                            <td className="p-6 font-semibold text-slate-800">{item.name}</td>
                                            <td className="p-6 text-slate-600">{item.time}</td>
                                            <td className="p-6 font-bold text-primary text-right">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Major Surgery */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-display font-bold text-center text-slate-900 mb-10">Bảng Giá Đại Phẫu</h2>
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-orange-50 border-b border-orange-100">
                                        <th className="p-6 font-bold text-orange-600">Dịch Vụ</th>
                                        <th className="p-6 font-bold text-orange-600">Thời Gian</th>
                                        <th className="p-6 font-bold text-orange-600 text-right">Chi Phí (VNĐ)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Nâng ngực Nano Chip", time: "90 phút", price: "65.000.000" },
                                        { name: "Hút mỡ bụng eo", time: "120 phút", price: "45.000.000" },
                                        { name: "Căng da mặt toàn phần", time: "150 phút", price: "80.000.000" },
                                        { name: "Gọt hàm V-line", time: "120 phút", price: "70.000.000" },
                                    ].map((item, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50">
                                            <td className="p-6 font-semibold text-slate-800">{item.name}</td>
                                            <td className="p-6 text-slate-600">{item.time}</td>
                                            <td className="p-6 font-bold text-orange-600 text-right">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Offers & Notes */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 text-white shadow-xl">
                            <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">redeem</span>
                                Ưu Đãi Hiện Hành
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1">check</span>
                                    <span>Giảm 20% cho khách hàng đặt lịch online.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1">check</span>
                                    <span>Tặng gói chăm sóc hậu phẫu trị giá 5.000.000đ cho đại phẫu.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined mt-1">check</span>
                                    <span>Hỗ trợ xe đưa đón miễn phí nội thành.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold font-display text-slate-900 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-orange-500">warning</span>
                                Lưu Ý Phát Sinh
                            </h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"></span>
                                    <span>Chi phí trên chưa bao gồm phí xét nghiệm tổng quát (nếu thực hiện tại bệnh viện liên kết).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"></span>
                                    <span>Phí thuốc men sau phẫu thuật được kê đơn riêng tùy tình trạng.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2"></span>
                                    <span>Bảng giá có thể thay đổi tùy thời điểm, vui lòng liên hệ hotline để nhận báo giá chính xác nhất.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
