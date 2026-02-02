import PageHeader from "@/components/ui/PageHeader";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const { q } = await searchParams;
    const query = q || "";

    if (!query) {
        return (
            <main className="bg-slate-50 min-h-screen">
                <PageHeader title="Tìm Kiếm" backgroundImage="/image/banner.jpg" />
                <div className="py-20 text-center">
                    <p className="text-slate-600">Vui lòng nhập từ khóa để tìm kiếm.</p>
                </div>
            </main>
        );
    }

    const [services, posts, achievements] = await Promise.all([
        prisma.service.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { description: { contains: query } }
                ]
            },
            take: 10
        }),
        prisma.post.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { summary: { contains: query } }
                ]
            },
            take: 10
        }),
        prisma.showcase.findMany({
            where: {
                type: "ACHIEVEMENT",
                OR: [
                    { title: { contains: query } },
                    { description: { contains: query } }
                ]
            },
            take: 5
        })
    ]);

    const hasResults = services.length > 0 || posts.length > 0 || achievements.length > 0;

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title={`Kết quả tìm kiếm: "${query}"`}
                description="Kết quả tìm kiếm phù hợp nhất với yêu cầu của bạn."
                backgroundImage="/image/banner.jpg"
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {!hasResults ? (
                        <div className="text-center py-20">
                            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">search_off</span>
                            <p className="text-slate-600">Không tìm thấy kết quả nào phù hợp với từ khóa "{query}".</p>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {/* Services Results */}
                            {services.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">medical_services</span>
                                        Dịch Vụ ({services.length})
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {services.map((item) => (
                                            <Link key={item.id} href={`/dich-vu/${item.type}/${item.slug}`} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-slate-600 text-sm line-clamp-2">{item.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* News Results */}
                            {posts.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">article</span>
                                        Tin Tức ({posts.length})
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {posts.map((item) => (
                                            <Link key={item.id} href={`/tin-tuc/${item.slug}`} className="flex gap-4 group bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-all">
                                                <div className="w-24 h-24 relative shrink-0 rounded-lg overflow-hidden bg-slate-100">
                                                    <Image src={item.image || "/image/news/bg-news.jpg"} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">{item.title}</h3>
                                                    <p className="text-xs text-slate-500 line-clamp-2">{item.summary}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Achievement Results */}
                            {achievements.length > 0 && (
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">emoji_events</span>
                                        Thành Tựu ({achievements.length})
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {achievements.map((item) => (
                                            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-600 text-sm line-clamp-2">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
