
import { servicesData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function MajorSurgeryLanding() {
    const majorServices = servicesData.filter(s => s.type === 'dai-phau');

    return (
        <div className="animate-fade-in">
            <div className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="relative z-10">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm">Danh mục dịch vụ</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mt-2">Thẩm Mỹ Đại Phẫu</h1>
                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-lg">
                        Thay đổi vóc dáng toàn diện với các phương pháp phẫu thuật lớn, thực hiện tại bệnh viện đạt chuẩn bởi đội ngũ chuyên gia hàng đầu.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-24">
                    {majorServices.map((service, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/2 relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                <Image
                                    src={service.realImages[0]}
                                    alt={service.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <span className="text-slate-400 font-bold text-6xl opacity-10 font-display">0{idx + 1}</span>
                                <h3 className="text-4xl font-display font-bold text-slate-900 -mt-10">{service.name}</h3>
                                <div className="w-20 h-1 bg-primary rounded-full"></div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {service.shortDesc}
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        Chỉ định chuyên môn khắt khe
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        Thực hiện tại Bệnh viện
                                    </li>
                                </ul>
                                <div className="pt-4">
                                    <Link href={`/dich-vu/dai-phau/${service.slug}`} className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl">
                                        Tìm hiểu chuyên sâu <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
