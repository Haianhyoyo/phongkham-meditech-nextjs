import { prisma } from "@/lib/prisma";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = await prisma.post.findMany({ select: { slug: true } });
    return posts.map((item) => ({
        slug: item.slug,
    }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    // Fetch article from DB
    const article = await prisma.post.findUnique({
        where: { slug }
    });

    if (!article) {
        notFound();
    }

    // Fetch related news mapping to current schema
    const rawRelated = await prisma.post.findMany({
        where: {
            slug: { not: slug },
            category: article.category
        },
        take: 5,
        orderBy: { createdAt: 'desc' }
    });

    const relatedNews = rawRelated.map(item => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        image: item.image || "/image/news/bg-news.jpg",
        date: new Date(item.createdAt).toLocaleDateString('vi-VN'),
        category: item.category
    }));

    return (
        <main className="bg-white">
            <PageHeader
                title="Tin tức - Kiến thức"
                description={article.category || "Tin tức"}
                backgroundImage={article.image || "/image/news/bg-news.jpg"}
            />

            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="mb-8">
                                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                                    <Link href="/" className="hover:text-blue-500">Trang chủ</Link>
                                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                                    <Link href="/tin-tuc" className="hover:text-blue-500">Tin tức</Link>
                                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                                    <span className="text-slate-900 font-medium line-clamp-1">{article.title}</span>
                                </nav>

                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-bold uppercase">
                                        {article.category || "Tin tức"}
                                    </span>
                                    <span className="text-sm text-slate-400 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        {new Date(article.createdAt).toLocaleDateString('vi-VN')}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-slate-900 leading-tight mb-8">
                                    {article.title}
                                </h1>

                                <div className="relative aspect-video w-full mb-10 rounded-xl overflow-hidden shadow-lg border border-slate-100">
                                    <Image
                                        src={article.image || "/image/news/bg-news.jpg"}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-sans prose-headings:font-bold prose-headings:text-slate-800
                                    prose-p:text-slate-600 prose-p:leading-relaxed
                                    prose-li:text-slate-600
                                    prose-strong:text-slate-900
                                    prose-img:rounded-xl">
                                    <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
                                </div>

                                <div className="mt-12 py-6 border-y border-slate-100 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Chia sẻ bài viết:</span>
                                        <div className="flex gap-2">
                                            {['facebook', 'content_copy', 'share'].map((icon) => (
                                                <button key={icon} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                                                    <span className="material-symbols-outlined text-lg">{icon}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <Link href="/tin-tuc" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                                        <span className="material-symbols-outlined">arrow_back</span>
                                        Quay lại tin tức
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24 space-y-12">
                                {/* Search Box */}
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h3 className="text-lg font-sans font-black text-slate-900 mb-4 uppercase tracking-tight italic">
                                        Tìm kiếm tin tức
                                    </h3>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Nhập từ khóa..."
                                            className="w-full bg-white border border-slate-200 px-4 py-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                                        />
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                    </div>
                                </div>

                                {/* Related Articles */}
                                <div>
                                    <h3 className="text-xl font-sans font-black text-blue-700 mb-6 uppercase tracking-tight flex items-center gap-2">
                                        <span className="w-8 h-1 bg-blue-700 rounded-full"></span>
                                        Tin liên quan
                                    </h3>
                                    <div className="space-y-6">
                                        {relatedNews.map((news) => (
                                            <Link key={news.id} href={`/tin-tuc/${news.slug}`} className="group flex gap-4">
                                                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                                                    <Image
                                                        src={news.image}
                                                        alt={news.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h4 className="text-sm font-sans font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-1">
                                                        {news.title}
                                                    </h4>
                                                    <span className="text-[10px] text-slate-400 italic font-medium uppercase">{news.date}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Box */}
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
                                    <h3 className="text-2xl font-sans font-black mb-4 leading-tight">
                                        Chăm sóc sức khỏe cùng Meditech
                                    </h3>
                                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                                        Đội ngũ chuyên gia hàng đầu luôn sẵn sàng hỗ trợ bạn 24/7.
                                    </p>
                                    <button className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                                        ĐẶT LỊCH HẸN NGAY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
