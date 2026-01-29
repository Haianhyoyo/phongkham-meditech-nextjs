import Link from "next/link";
import Image from "next/image";

export default function ServiceCategories() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Dịch vụ toàn diện</h2>
                    <h3 className="text-4xl font-display font-bold text-slate-900">Giải Pháp Thẩm Mỹ Hoàn Hảo</h3>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Tiểu phẫu */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/image/thammytieuphau.jpg"
                                alt="Tiểu phẫu thẩm mỹ"
                                fill
                                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
                        </div>
                        <div className="relative p-10 md:p-14">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <span className="material-symbols-outlined text-4xl">face</span>
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-4">Thẩm Mỹ Tiểu Phẫu</h4>
                            <p className="text-slate-600 mb-8 max-w-md">
                                Các thủ thuật nhẹ nhàng, ít xâm lấn, thời gian hồi phục nhanh chóng. Phù hợp cho việc tinh chỉnh các đường nét trên gương mặt.
                            </p>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm font-medium text-slate-700">
                                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-primary"></span>Cắt mí - Nhấn mí</li>
                                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-primary"></span>Nâng mũi cấu trúc</li>
                                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-primary"></span>Độn cằm V-line</li>
                                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-primary"></span>Căng chỉ Collagen</li>
                            </ul>
                            <Link href="/dich-vu/tieu-phau" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-900 hover:bg-slate-50 transition-all shadow-sm">
                                Xem chi tiết <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Đại phẫu */}
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 text-white">
                        <div className="absolute inset-0">
                            <Image
                                src="/image/thammydaiphau.jpg"
                                alt="Đại phẫu thẩm mỹ"
                                fill
                                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-transparent"></div>
                        </div>
                        <div className="relative p-10 md:p-14">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                                <span className="material-symbols-outlined text-4xl">accessibility_new</span>
                            </div>
                            <h4 className="text-3xl font-bold mb-4">Thẩm Mỹ Đại Phẫu</h4>
                            <p className="text-slate-300 mb-8 max-w-md">
                                Thay đổi vóc dáng toàn diện với các phương pháp phẫu thuật lớn, được thực hiện tại bệnh viện đạt chuẩn bởi đội ngũ bác sĩ chuyên gia.
                            </p>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm font-medium text-slate-200">
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-accent"></span>Nâng ngực Y-line</li>
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-accent"></span>Hút mỡ tạo hình</li>
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-accent"></span>Tạo hình thành bụng</li>
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><span className="w-2 h-2 rounded-full bg-accent"></span>Nâng mông nội soi</li>
                            </ul>
                            <Link href="/dich-vu/dai-phau" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm">
                                Xem chi tiết <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
