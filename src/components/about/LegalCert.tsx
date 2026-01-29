export default function LegalCert() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-accent font-bold tracking-widest uppercase text-sm">Minh Bạch Pháp Lý</span>
                <h2 className="text-3xl font-display font-bold mt-2 mb-12">Hoạt Động Dưới Sự Cấp Phép Của Sở Y Tế</h2>

                <div className="inline-block p-2 bg-white rounded-xl">
                    <div className="border-2 border-dashed border-slate-300 p-8 rounded-lg bg-slate-50 w-full max-w-3xl mx-auto">
                        <div className="aspect-[16/9] bg-white flex items-center justify-center shadow-inner rounded-md">
                            <div className="text-center text-slate-400">
                                <span className="material-symbols-outlined text-6xl mb-2">license</span>
                                <p className="font-bold text-lg">HÌNH ẢNH GIẤY PHÉP HOẠT ĐỘNG</p>
                                <p className="text-sm">Số: xxxx/SYT-GPHĐ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-slate-400 mt-8 max-w-2xl mx-auto text-sm">
                    Chúng tôi cam kết tuân thủ mọi quy định pháp luật về khám chữa bệnh, mang lại môi trường an toàn nhất cho khách hàng.
                </p>
            </div>
        </section>
    );
}
