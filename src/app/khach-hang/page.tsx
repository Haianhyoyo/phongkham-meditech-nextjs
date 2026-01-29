"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function CustomerPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Dành Cho Khách Hàng"
                description="Thông tin cần thiết và hướng dẫn quy trình dịch vụ an toàn, chuyên nghiệp tại MEDITECH."
                backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053"
            />

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Sidebar Navigation (Optional Sticky) */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-32">
                                <h3 className="text-xl font-bold font-display text-primary mb-6">Mục Lục</h3>
                                <ul className="space-y-3 font-medium text-slate-600">
                                    <li>
                                        <a href="#quy-trinh" className="block p-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                                            1. Quy trình thăm khám
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#chuan-bi" className="block p-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                                            2. Chuẩn bị trước phẫu thuật
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#cham-soc" className="block p-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                                            3. Chăm sóc hậu phẫu
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#thanh-toan" className="block p-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                                            4. Chính sách thanh toán
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#khach-xa" className="block p-2 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors">
                                            5. Khách hàng ở xa
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <p className="text-sm text-slate-500 mb-4">Cần hỗ trợ trực tiếp?</p>
                                    <a href="tel:0889895555" className="block w-full py-3 bg-primary text-white text-center rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-500/20">
                                        Gọi Hotline Ngay
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Section 1: Quy trình */}
                            <div id="quy-trinh" className="scroll-mt-32">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full text-lg font-bold">1</span>
                                    Quy Trình Thăm Khám
                                </h2>
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                    <div className="p-6 md:p-8 space-y-6">
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold">B1</div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-2">Đặt lịch hẹn</h4>
                                                <p className="text-slate-600">Khách hàng đặt lịch qua Hotline, Website hoặc Fanpage để được sắp xếp thời gian ưu tiên, không phải chờ đợi.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold">B2</div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-2">Thăm khám 1:1 với Bác sĩ</h4>
                                                <p className="text-slate-600">Bác sĩ chuyên khoa trực tiếp thăm khám, kiểm tra tình trạng và tư vấn phương pháp phù hợp nhất.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold">B3</div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-2">Kiểm tra sức khỏe</h4>
                                                <p className="text-slate-600">Thực hiện các xét nghiệm máu, tim mạch, huyết áp... để đảm bảo đủ điều kiện sức khỏe cho ca phẫu thuật.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Chuẩn bị */}
                            <div id="chuan-bi" className="scroll-mt-32">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full text-lg font-bold">2</span>
                                    Chuẩn Bị Trước Phẫu Thuật
                                </h2>
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
                                    <ul className="space-y-4 text-slate-600">
                                        <li className="flex gap-3">
                                            <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                            <span>Nhịn ăn uống ít nhất 6-8 tiếng trước khi đại phẫu (gây mê). Với tiểu phẫu (gây tê), có thể ăn nhẹ.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                            <span>Ngưng sử dụng các thuốc chứa Aspirin, Vitamin E, thảo dược... 2 tuần trước phẫu thuật.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                            <span>Giữ tâm lý thoải mái, ngủ đủ giấc đêm trước ngày phẫu thuật.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
                                            <span>Không trang điểm, không sơn móng tay/chân khi vào phòng mổ.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 3: Chăm sóc */}
                            <div id="cham-soc" className="scroll-mt-32">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full text-lg font-bold">3</span>
                                    Chăm Sóc Hậu Phẫu
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined">medication</span>
                                            Dùng thuốc
                                        </h4>
                                        <p className="text-sm text-slate-700">Uống thuốc kháng sinh, giảm đau, chống phù nề đúng liều lượng theo đơn kê của bác sĩ. Không tự ý mua thuốc ngoài.</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined">restaurant</span>
                                            Chế độ ăn
                                        </h4>
                                        <p className="text-sm text-slate-700">Kiêng: Rau muống, thịt bò, đồ nếp, hải sản, chất kích thích. Ăn: Nhiều rau xanh, trái cây, uống đủ nước.</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined">cleaning_services</span>
                                            Vệ sinh
                                        </h4>
                                        <p className="text-sm text-slate-700">Vệ sinh vết thương bằng nước muối sinh lý. Giữ vết thương khô ráo, tránh nước trực tiếp trong những ngày đầu.</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined">calendar_today</span>
                                            Tái khám
                                        </h4>
                                        <p className="text-sm text-slate-700">Tái khám và cắt chỉ đúng lịch hẹn (thường sau 5, 7 hoặc 10 ngày tùy dịch vụ). Liên hệ ngay nếu có dấu hiệu bất thường.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Chính sách */}
                            <div id="thanh-toan" className="scroll-mt-32">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full text-lg font-bold">4</span>
                                    Thanh Toán & Hỗ Trợ
                                </h2>
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
                                    <div className="grid gap-6">
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Hình thức thanh toán</h4>
                                            <p className="text-slate-600">Chúng tôi chấp nhận đa dạng hình thức thanh toán để thuận tiện cho khách hàng:</p>
                                            <ul className="list-disc list-inside mt-2 text-slate-600 pl-4">
                                                <li>Tiền mặt (VND, USD)</li>
                                                <li>Chuyển khoản ngân hàng</li>
                                                <li>Thẻ ATM, Visa, Master, JCB</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                                <span className="bg-yellow-400 text-primary text-xs px-2 py-1 rounded font-bold">ƯU ĐÃI</span>
                                                Trả góp 0% lãi suất
                                            </h4>
                                            <p className="text-slate-600">Hỗ trợ trả góp qua thẻ tín dụng với kỳ hạn linh hoạt 3, 6, 9, 12 tháng. Thủ tục nhanh gọn chỉ trong 5 phút.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5: Khách xa */}
                            <div id="khach-xa" className="scroll-mt-32">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full text-lg font-bold">5</span>
                                    Hỗ Trợ Khách Hàng Ở Xa
                                </h2>
                                <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="text-lg mb-6 leading-relaxed opacity-90">
                                            Thấu hiểu những khó khăn của khách hàng từ các tỉnh xa, MEDITECH có chính sách hỗ trợ đặc biệt:
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-yellow-400">directions_car</span>
                                                Hỗ trợ chi phí đi lại (xe khách/máy bay) tùy theo giá trị dịch vụ.
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-yellow-400">hotel</span>
                                                Miễn phí lưu trú lại bệnh viện/khách sạn liên kết trong thời gian theo dõi.
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-yellow-400">support_agent</span>
                                                Tư vấn online 1:1 qua Video Call trước khi đến để tiết kiệm thời gian.
                                            </li>
                                        </ul>
                                        <a href="/lien-he" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-primary transition-colors">
                                            Đăng Ký Tư Vấn Ngay
                                        </a>
                                    </div>
                                    {/* Decorative bg */}
                                    <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
                                        <span className="material-symbols-outlined text-[200px]">flight_takeoff</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
