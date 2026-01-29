export default function HistoryMission() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Hành trình phát triển</span>
                    <h2 className="text-4xl font-display font-bold text-slate-900 mt-2">Sứ Mệnh Kiến Tạo Vẻ Đẹp</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl">history_edu</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Lịch Sử Hình Thành</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Thành lập từ năm 2010 với tiền thân là phòng khám da liễu, trải qua hơn 1 thập kỷ phát triển, chúng tôi tự hào trở thành hệ thống thẩm mỹ y khoa đạt chuẩn quốc tế.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl">visibility</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Tầm Nhìn</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Trở thành biểu tượng niềm tin hàng đầu về thẩm mỹ an toàn tại Việt Nam, nơi khách hàng tìm thấy phiên bản hoàn hảo nhất của chính mình.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl">diamond</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Giá Trị Cốt Lõi</h3>
                        <ul className="text-slate-600 space-y-2 text-left inline-block">
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><strong>An toàn:</strong> Là tôn chỉ hoạt động số 1.</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><strong>Trung thực:</strong> Tư vấn đúng, làm thật.</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><strong>Tận tâm:</strong> Chăm sóc trọn đời.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
