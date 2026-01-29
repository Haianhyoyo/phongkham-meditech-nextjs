
import { ServiceData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function MajorSurgeryLayout({ service }: { service: ServiceData }) {
    if (!service) return null;

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div className="relative bg-slate-900 py-24 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image src={service.realImages[0]} alt={service.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                        <Link href="/" className="hover:text-white">Trang chủ</Link> /
                        <Link href="/dich-vu/dai-phau" className="hover:text-white">Đại phẫu</Link> /
                        <span className="text-white font-medium">{service.name}</span>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider border border-accent/20 mb-6">{service.category}</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{service.name}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">{service.shortDesc}</p>
                    <div className="flex gap-4">
                        <Link href="#booking" className="bg-accent text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">
                            Tư vấn chuyên sâu
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Indication & Analysis */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-primary inline-block pb-2">Chỉ định chuyên môn</h2>
                        <p className="text-slate-700 leading-relaxed text-lg bg-orange-50 p-6 rounded-xl border border-orange-100 italic">
                            <span className="material-symbols-outlined align-middle mr-2 text-orange-500">warning</span>
                            {service.profIndication}
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                                <Image src="/image/bacsi.jpg" width={64} height={64} alt="Giám đốc chuyên môn" className="object-cover" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Góc nhìn chuyên gia</h2>
                                <div className="text-sm text-primary font-bold">BS. Tuệ Linh</div>
                            </div>
                        </div>
                        <div className="relative bg-slate-50 p-8 rounded-3xl">
                            <span className="absolute top-4 left-4 text-6xl text-slate-200 font-serif leading-none z-0">"</span>
                            <p className="relative z-10 text-slate-600 leading-relaxed italic">
                                {service.doctorAnalysis}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Risks & Control - Critical Section */}
                <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold">Quản Trị Rủi Ro & An Toàn</h2>
                            <p className="text-slate-400 mt-2">Chúng tôi không giấu giếm rủi ro, chúng tôi kiểm soát nó.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {service.risks?.map((risk, idx) => {
                                const [title, desc] = risk.split(":");
                                return (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h4 className="font-bold text-accent mb-3 text-lg">{title}</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Real Results */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Kết Quả Thay Đổi Cuộc Sống</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {service.realImages.map((img, idx) => (
                            <div key={idx} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                                <Image src={img} alt="Kết quả đại phẫu" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white font-bold text-lg">
                                    Khách hàng {idx + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
