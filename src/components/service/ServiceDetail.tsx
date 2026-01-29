import Image from "next/image";
import Link from "next/link";
import { ServiceData } from "@/lib/service-data";
import PageHeader from "@/components/ui/PageHeader";

export default function ServiceDetail({ data }: { data: ServiceData }) {
    return (
        <main>
            <PageHeader
                title={data.title}
                description={data.description}
                backgroundImage={data.heroImage}
            />

            {/* Intro Section */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-accent font-semibold tracking-[0.2em] text-sm uppercase block mb-4">Vẻ đẹp hoàn hảo</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">{data.introTitle}</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        {data.introDesc}
                    </p>
                </div>
            </section>

            {/* Sub Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Các dịch vụ</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Danh Mục Chi Tiết</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.subServices.map((service, index) => (
                            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                                <div className="h-60 overflow-hidden shrink-0 relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8 flex flex-col grow">
                                    <h3 className="text-2xl font-display font-bold mb-3 text-slate-900">{service.title}</h3>
                                    <p className="text-slate-500 text-sm mb-6 leading-relaxed italic grow">{service.desc}</p>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                                        <span className="text-accent font-bold">Giá: {service.price}</span>
                                        <Link href="#booking" className="text-primary font-semibold flex items-center gap-1 text-sm hover:gap-2 transition-all">
                                            Đăng ký <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Độc quyền tại Meditech</h2>
                        <h3 className="text-4xl font-display font-bold text-slate-900">Công Nghệ Đột Phá</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {data.technologies.map((tech, index) => (
                            <div key={index} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                                    <span className="material-symbols-outlined text-3xl">{tech.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3 text-slate-900">{tech.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Minh chứng thực tế</h2>
                        <h3 className="text-4xl font-display font-bold text-slate-900">Kết Quả Khách Hàng</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.results.map((result, index) => (
                            <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                                <Image
                                    src={result.image}
                                    alt={result.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <p className="font-bold text-lg">{result.title}</p>
                                        <p className="text-xs opacity-80">{result.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary">{result.beforeLabel}</div>
                                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white">{result.afterLabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
