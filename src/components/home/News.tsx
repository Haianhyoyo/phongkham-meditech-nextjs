import Image from "next/image";
import Link from "next/link";

// Function to fetch posts from the API
async function getPosts() {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/news`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        console.error("Failed to fetch news:", error);
        return [];
    }
}

export default async function News() {
    const posts = await getPosts();

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        Tin tức & Kiến thức
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Cập Nhật Mới Nhất
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Những thông tin hữu ích về thẩm mỹ, sức khỏe và làm đẹp từ đội ngũ chuyên gia
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.length > 0 ? (
                        posts
                            .filter((p: any) => p.isPublished)
                            .slice(0, 3)
                            .map((item: any) => (
                                <Link
                                    key={item.id}
                                    href={`/tin-tuc/${item.slug}`}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/20 hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden bg-slate-100">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                <span className="material-symbols-outlined text-6xl">article</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                                {item.category || 'Tin tức'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="font-display font-bold text-lg text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-base">calendar_today</span>
                                            {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                            <span>Đọc thêm</span>
                                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                    ) : (
                        <div className="col-span-3 text-center py-10 text-slate-500 text-lg">
                            Hiện chưa có bài viết nào.
                        </div>
                    )}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/tin-tuc"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg"
                    >
                        <span>Xem tất cả tin tức</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
