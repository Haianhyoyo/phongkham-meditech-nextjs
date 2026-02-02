
import { ServiceData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function MinorSurgeryLayout({ service }: { service: ServiceData }) {
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
                    <Link href="/dich-vu/tieu-phau" className="hover:text-blue-500 transition-colors">Tiểu phẫu</Link>
                    <span className="mx-2 text-slate-300">›</span>
                    <span className="text-slate-600 font-medium">{service.name}</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* LEFT COLUMN - CONTENT (8/12) */}
                    <div className="lg:col-span-8">
                        <header className="mb-10">
                            {/* Rating Placeholder like sample */}
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
                            {/* Detailed Sections mapping from data */}
                            <section>
                                <h2 className="text-3xl font-display font-black text-[#1A1A1A] mb-6">
                                    {service.name} - Giải pháp thẩm mỹ tối ưu
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    Thẩm mỹ viện Meditech tự hào mang đến công nghệ {service.name} hiện đại, giúp bạn sở hữu diện mạo hoàn hảo mà không tốn nhiều thời gian nghỉ dưỡng. Đây là giải pháp được nhiều chuyên gia và khách hàng tin dùng nhờ hiệu quả vượt trội.
                                </p>
                                <ul className="space-y-4 list-none p-0">
                                    {service.candidates?.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-[10px] flex-shrink-0"></span>
                                            <span className="text-slate-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {service.realImages && service.realImages.length > 0 && (
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={service.realImages[0]}
                                        alt={service.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <section>
                                <h2 className="text-3xl font-display font-black text-[#1A1A1A] mb-6">
                                    Quy trình thực hiện chuẩn y khoa
                                </h2>
                                <div className="space-y-6">
                                    {service.process?.map((step, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <span className="font-sans font-black text-slate-800">Step {idx + 1}:</span>
                                            <span className="text-slate-600 text-lg leading-relaxed">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Before/After Section */}
                            <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                                <h2 className="text-3xl font-display font-black text-[#1A1A1A] mb-12 text-center">
                                    Kết quả sau khi {service.name}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {service.realImages?.map((img, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <div className="text-center">
                                                <span className="text-[10px] font-sans font-black tracking-widest text-[#B59161] uppercase">
                                                    {idx === 0 ? "BEFORE" : "AFTER"}
                                                </span>
                                                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tighter mt-1">{service.name}</h4>
                                            </div>
                                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                                                <Image src={img} alt="Kết quả" fill className="object-cover" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SIDEBAR (4/12) */}
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
                                            <input
                                                type="text"
                                                placeholder="Nhập họ và tên của bạn"
                                                className="w-full bg-white border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[13px] text-slate-600 font-medium"
                                            />
                                            <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400 text-lg">person</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-[#333]">Số điện thoại <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                placeholder="Nhập số điện thoại"
                                                className="w-full bg-white border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[13px] text-slate-600 font-medium"
                                            />
                                            <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400 text-lg">call</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold text-[#333]">Nội dung</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Khách hàng nhắn tin"
                                                className="w-full bg-white border-b border-slate-300 py-3 pr-10 focus:border-[#0056A4] outline-none text-[13px] text-slate-600 font-medium"
                                            />
                                            <span className="material-symbols-outlined absolute right-0 top-3 text-slate-400 text-lg">edit_note</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#0056A4] hover:bg-[#004482] text-white py-4 rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all mt-4 shadow-lg shadow-blue-900/10">
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
