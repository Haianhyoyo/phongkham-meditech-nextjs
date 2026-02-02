import PageHeader from "@/components/ui/PageHeader";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function AchievementsPage() {
    const achievements = await prisma.showcase.findMany({
        where: { type: "ACHIEVEMENT" },
        orderBy: { order: "asc" }
    });

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Thành Tựu & Giải Thưởng"
                description="Minh chứng cho chất lượng và uy tín của Meditech trên hành trình kiến tạo vẻ đẹp."
                backgroundImage="/image/banner.jpg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {achievements.length === 0 ? (
                        <div className="text-center py-20 text-slate-500">
                            Đang cập nhật dữ liệu thành tựu...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {achievements.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100 group">
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-slate-100">
                                        <Image
                                            src={item.image || ""}
                                            alt={item.title || "Thành tựu"}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3 text-center group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-slate-600 text-sm text-center line-clamp-3">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
