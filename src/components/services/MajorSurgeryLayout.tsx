
import { ServiceData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function MajorSurgeryLayout({ service }: { service: ServiceData }) {
    if (!service) return null;

    return (
        <div className="animate-fade-in bg-white pb-20">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-1 text-[13px] text-slate-400 mb-8 border-b border-slate-100 pb-4">
                    <Link href="/" className="hover:text-blue-500 transition-colors">
                        <span className="material-symbols-outlined text-sm align-middle">home</span>
                    </Link>
                    <span className="mx-2 text-slate-300">›</span>
                    <Link href="/dich-vu" className="hover:text-blue-500 transition-colors">Dịch vụ</Link>
                    <span className="mx-2 text-slate-300">›</span>
                    <Link href="/dich-vu/dai-phau" className="hover:text-blue-500 transition-colors">Đại phẫu</Link>
                    <span className="mx-2 text-slate-300">›</span>
                    <span className="text-slate-600 font-medium">{service.name}</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* LEFT COLUMN - CONTENT (8/12) */}
                    <div className="lg:col-span-8">
                        <header className="mb-10">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <span key={i} className="material-symbols-outlined text-lg text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        star
                                    </span>
                                ))}
                                <span className="text-[11px] text-slate-400 ml-2 italic">Rate this post</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-black text-[#1A1A1A] leading-tight mb-4">
                                {service.name}
                            </h1>

                            <div className="text-[13px] text-slate-400 font-medium mb-8">
                                1 Tháng một, 2026
                            </div>

                            <div className="text-lg text-[#333] leading-relaxed font-bold italic border-b border-slate-100 pb-8 mb-8">
                                {service.shortDesc}
                            </div>
                        </header>

                        <div className="prose prose-slate max-w-none space-y-12">
                            {/* Professional Indication Section */}
                            <section>
                                <h2 className="text-3xl font-display font-black text-[#1A1A1A] mb-6">
                                    Chỉ định chuyên môn từ bác sĩ
                                </h2>
                                <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100 mb-6 italic text-lg text-orange-900/80 font-bold">
                                    "{service.profIndication}"
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <Image src="/image/bacsi.jpg" width={40} height={40} alt="Doctor" className="rounded-full shadow-sm" />
                                    <div>
                                        <div className="text-xs font-black text-blue-600 uppercase">Phân tích chuyên sâu:</div>
                                        <div className="text-sm font-bold text-slate-800">BS. Tuệ Linh</div>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {service.doctorAnalysis}
                                </p>
                            </section>

                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={service.realImages[0]}
                                    alt={service.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Risks & Control Section */}
                            <section>
                                <h2 className="text-3xl font-display font-black text-[#1A1A1A] mb-6 uppercase tracking-tight">
                                    Quản trị rủi ro & An toàn
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {service.risks?.map((risk, idx) => {
                                        const [title, desc] = risk.split(":");
                                        return (
                                            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                                                <h4 className="font-bold text-slate-800 mb-2 text-lg uppercase tracking-tight">{title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>

                            {/* Real Results */}
                            <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                                <h2 className="text-3xl font-display font-black text-[#1A1A1A] mb-12 text-center">
                                    Kết quả thay đổi diện mạo
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {service.realImages.map((img, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <div className="text-center">
                                                <span className="text-[10px] font-sans font-black tracking-widest text-[#D4AF37] uppercase">
                                                    THỰC TẾ KHÁCH HÀNG #{idx + 1}
                                                </span>
                                            </div>
                                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                                <Image src={img} alt="Kết quả" fill className="object-cover" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SIDEBAR */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28">
                            <div className="bg-blue-50/30 p-8 md:p-10 rounded-[2rem] border border-blue-100 shadow-sm">
                                <h3 className="text-2xl font-display font-black text-[#1A1A1A] mb-2">Đăng ký tư vấn</h3>
                                <p className="text-[13px] text-slate-500 mb-8 leading-relaxed">
                                    Để lại thông tin chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất !!!
                                </p>

                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-[#333]">Họ và tên <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input type="text" placeholder="Nhập họ và tên" className="w-full bg-white border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[13px]" />
                                            <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400">person</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-[#333]">Số điện thoại <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input type="tel" placeholder="Nhập số điện thoại" className="w-full bg-white border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[13px]" />
                                            <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400">call</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-[#333]">Nội dung</label>
                                        <div className="relative">
                                            <input type="text" placeholder="Khách hàng nhắn tin" className="w-full bg-white border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[13px]" />
                                            <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400">edit_note</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#0056A4] hover:bg-[#004482] text-white py-4 rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/10">
                                        GỬI TIN NHẮN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
