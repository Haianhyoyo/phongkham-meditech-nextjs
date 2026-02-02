import PageHeader from "@/components/ui/PageHeader";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function SpecialtiesPage() {
    const specialties = await prisma.showcase.findMany({
        where: { type: "HOME_SPECIALTY" },
        orderBy: { order: "asc" }
    });

    const services = await prisma.service.findMany({
        where: { isActive: true },
        orderBy: { category: "asc" }
    });

    // Group services by category for better display if needed, 
    // but for now let's just show the main specialties as requested.

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Chuyên Khoa Thẩm Mỹ"
                description="Hệ thống chuyên khoa sâu với đội ngũ bác sĩ hàng đầu và công nghệ tiên tiến."
                backgroundImage="/image/banner.jpg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Specialties Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
                        {specialties.map((spec) => (
                            <Link key={spec.id} href={`/dich-vu?category=${spec.title}`} className="flex flex-col items-center group cursor-pointer bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100">
                                <div className="w-32 h-32 rounded-full border-2 border-blue-100 flex items-center justify-center mb-6 group-hover:border-primary transition-colors overflow-hidden relative p-4 bg-slate-50">
                                    <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={spec.image || ""}
                                            alt={spec.title || "Chuyên khoa"}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-sm font-sans font-bold text-slate-900 uppercase leading-snug tracking-wide text-center">
                                    {spec.title}
                                </h4>
                            </Link>
                        ))}
                    </div>

                    {/* All Services List */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">
                            Danh Mục Dịch Vụ
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <Link key={service.id} href={`/dich-vu/${service.type}/${service.slug}`} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group border border-dashed border-slate-200 hover:border-primary/30">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">medical_services</span>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-sm group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-xs text-slate-500 font-medium">{service.category}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
