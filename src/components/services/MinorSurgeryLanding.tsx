
import { servicesData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function MinorSurgeryLanding() {
    const minorServices = servicesData.filter(s => s.type === 'tieu-phau');

    return (
        <div className="animate-fade-in">
            <div className="bg-slate-50 py-20 text-center">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Danh mục dịch vụ</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-2">Thẩm Mỹ Tiểu Phẫu</h1>
                <p className="text-slate-600 mt-4 max-w-xl mx-auto">
                    Các thủ thuật tinh chỉnh nhẹ nhàng, xâm lấn tối thiểu, mang lại hiệu quả thẩm mỹ cao và thời gian hồi phục nhanh chóng.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {minorServices.map((service, idx) => (
                        <Link href={`/dich-vu/tieu-phau/${service.slug}`} key={idx} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.realImages[0]}
                                    alt={service.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                    {service.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
                                <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed">
                                    {service.shortDesc}
                                </p>
                                <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                    Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
