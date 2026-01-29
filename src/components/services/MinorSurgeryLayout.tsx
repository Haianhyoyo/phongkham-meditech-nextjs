
import { ServiceData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function MinorSurgeryLayout({ service }: { service: ServiceData }) {
    if (!service) return null;

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div className="bg-slate-50 py-16 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                        <Link href="/" className="hover:text-primary">Trang chủ</Link> /
                        <Link href="/dich-vu/tieu-phau" className="hover:text-primary">Tiểu phẫu</Link> /
                        <span className="text-slate-900 font-medium">{service.name}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-bold text-xs uppercase tracking-wider">{service.category}</span>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">{service.name}</h1>
                            <p className="text-lg text-slate-600 leading-relaxed">{service.shortDesc}</p>
                            <div className="flex gap-4 pt-4">
                                <Link href="#booking" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                                    Đăng ký tư vấn
                                </Link>
                                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white font-bold text-slate-700">
                                    <span className="material-symbols-outlined text-green-500">check_circle</span> {service.recoveryTime}
                                </span>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image src={service.realImages[0]} alt={service.name} fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Đối tượng phù hợp */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center text-sm font-bold">01</span>
                                Đối tượng thực hiện
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {service.candidates?.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="material-symbols-outlined text-green-500 mt-0.5">check</span>
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Quy trình */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center text-sm font-bold">02</span>
                                Quy trình chuẩn y khoa
                            </h2>
                            <div className="border-l-2 border-slate-200 pl-8 space-y-8 relative">
                                {service.process?.map((step, idx) => (
                                    <div key={idx} className="relative">
                                        <span className="absolute -left-[41px] bg-white border-2 border-primary text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">{idx + 1}</span>
                                        <p className="text-slate-800 font-medium text-lg">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Kết quả */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center text-sm font-bold">03</span>
                                Hình ảnh thực tế
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.realImages.map((img, idx) => (
                                    <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
                                        <Image src={img} alt="Kết quả khách hàng" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center text-sm font-bold">04</span>
                                Câu hỏi thường gặp
                            </h2>
                            <div className="space-y-4">
                                {service.faq?.map((item, idx) => (
                                    <details key={idx} className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between gap-4 font-bold text-slate-900 list-none">
                                            {item.question}
                                            <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                                        </summary>
                                        <div className="mt-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                            {item.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Cost Card */}
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                                <div className="text-sm text-slate-400 mb-1">Chi phí tham khảo</div>
                                <div className="text-3xl font-bold text-accent mb-6">{service.cost}</div>
                                <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-base">check</span> Bao gồm thuốc men</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-base">check</span> Tái khám miễn phí</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-base">check</span> Bảo hành kết quả</li>
                                </ul>
                                <Link href="#booking" className="w-full block bg-primary text-center py-3 rounded-xl font-bold hover:bg-blue-600 transition-all">
                                    Đăng ký giữ ưu đãi
                                </Link>
                            </div>

                            {/* Doctor Card */}
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
                                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-100">
                                    <Image src="/image/Gemini_Generated_Image_iwq7ukiwq7ukiwq7.png" width={80} height={80} alt="Bác sĩ" className="object-cover" />
                                </div>
                                <h4 className="font-bold text-slate-900">BS. Đức Trọng</h4>
                                <p className="text-xs text-slate-500 mb-4">Trưởng khoa Tiểu phẫu</p>
                                <p className="text-slate-600 text-sm italic">"Tôi luôn ưu tiên sự tự nhiên và an toàn trong từng đường nét."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
