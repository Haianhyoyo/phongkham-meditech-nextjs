import PageHeader from "@/components/ui/PageHeader";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function GuidePage() {
    const processes = await prisma.showcase.findMany({
        where: { type: "PROCESS" },
        orderBy: { order: "asc" }
    });

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Hướng Dẫn Khám Bệnh"
                description="Quy trình chuyên nghiệp, thủ tục nhanh gọn, tối ưu thời gian cho khách hàng."
                backgroundImage="/image/banner.jpg"
            />

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {processes.length === 0 ? (
                            <div className="text-center py-20 text-slate-500">
                                Đang cập nhật quy trình khám bệnh...
                            </div>
                        ) : (
                            processes.map((item, index) => (
                                <div key={item.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-lg transition-all">
                                    <div className="w-full md:w-1/3 shrink-0">
                                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                                            <div className="absolute top-0 left-0 bg-primary text-white font-bold px-4 py-2 rounded-br-xl z-10 text-lg">
                                                Bước {index + 1}
                                            </div>
                                            <Image
                                                src={item.image || ""}
                                                alt={item.title || "Hướng dẫn"}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="w-16 h-1 bg-slate-200 mb-6 mx-auto md:mx-0 group-hover:bg-primary transition-colors"></div>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
