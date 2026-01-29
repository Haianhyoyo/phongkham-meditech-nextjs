export default function Process() {
    const steps = [
        {
            num: "01",
            title: "Tư vấn & Thăm khám",
            desc: "Bác sĩ chuyên khoa trực tiếp thăm khám, phân tích tình trạng và tư vấn phác đồ phù hợp."
        },
        {
            num: "02",
            title: "Kiểm tra sức khỏe",
            desc: "Xét nghiệm tổng quát đảm bảo khách hàng đủ điều kiện sức khỏe để thực hiện dịch vụ."
        },
        {
            num: "03",
            title: "Thực hiện dịch vụ",
            desc: "Tiến hành phẫu thuật/thủ thuật trong phòng vô trùng với trang thiết bị hiện đại."
        },
        {
            num: "04",
            title: "Chăm sóc & Tái khám",
            desc: "Nghỉ ngơi tại phòng hậu phẫu tiện nghi và tái khám định kỳ theo lịch hẹn."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Quy trình chuẩn y khoa</h2>
                        <h3 className="text-4xl font-display font-bold text-slate-900">An Toàn - Chuyên Nghiệp - Tận Tâm</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Mọi quy trình làm đẹp tại phòng khám đều tuân thủ nghiêm ngặt các tiêu chuẩn an toàn của Bộ Y Tế, giúp khách hàng hoàn toàn yên tâm khi gửi gắm nhan sắc.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
                            Xem chi tiết quy trình <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group hover:bg-white hover:shadow-lg transition-all">
                                <div className="text-4xl font-black text-slate-200 mb-4 group-hover:text-primary/20 transition-colors">{step.num}</div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-slate-600 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
