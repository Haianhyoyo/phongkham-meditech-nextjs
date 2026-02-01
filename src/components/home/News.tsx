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
    const apiPosts = await getPosts();

    // Default dummy data if API returns empty
    const dummyPosts = [
        {
            id: 1,
            title: "Virus Nipah là gì?",
            fullTitle: "Virus Nipah là gì? Triệu chứng và cách phòng ngừa lây nhiễm",
            excerpt: "Virus Nipah gây bệnh truyền nhiễm có tỷ lệ tử vong từ 40%-75%, đồng thời gây viêm não cấp và hôn mê chỉ sau 24-48 giờ. Hiện vẫn chưa có vaccine hay...",
            image: "/image/tt1.jpg",
            category: "Tin tức",
            createdAt: new Date(),
            slug: "virus-nipah-la-gi",
            isPublished: true
        },
        {
            id: 2,
            title: "Tia X là gì? Ứng dụng lâm sàng, lợi ích trong đời sống",
            excerpt: "Tia X là một trong những phát minh quan trọng trong lịch sử y học và khoa học. Nhờ khả năng xuyên...",
            image: "/image/tt2.jpg",
            category: "Tin tức",
            createdAt: new Date(),
            slug: "tia-x-la-gi",
            isPublished: true
        },
        {
            id: 3,
            title: "Vôi hóa tinh hoàn có nguy hiểm không? Chữa trị thế nào?",
            excerpt: "Vôi hóa tinh hoàn là một trong những bệnh lý không nguy hiểm đến tính mạng nhưng ảnh hưởng đến khả...",
            image: "/image/tt3.jpg",
            category: "Tin tức",
            createdAt: new Date(),
            slug: "voi-hoa-tinh-hoan",
            isPublished: true
        },
        {
            id: 4,
            title: "Chụp X-quang viêm phổi: Quy trình, lợi ích và lưu ý khi thực hiện",
            excerpt: "Chụp X-quang viêm phổi (chụp x-quang ngực hỗ trợ chẩn đoán viêm phổi) có thể được bác sĩ chỉ định...",
            image: "/image/1.jpg",
            category: "Tin tức",
            createdAt: new Date(),
            slug: "chup-xquang-viem-phoi",
            isPublished: true
        },
        {
            id: 5,
            title: "Nhiễm trùng mi mắt sau tiêm tan filler",
            excerpt: "Hai ngày sau tiêm tan filler vùng trũng mắt, chị Phương - 45 tuổi, bị sưng nề, đau nhức và cộm như...",
            image: "/image/2.jpg",
            category: "Tin tức",
            createdAt: new Date(),
            slug: "nhiem-trung-mi-mat",
            isPublished: true
        }
    ];

    const posts = apiPosts.length > 0 ? apiPosts.filter((p: any) => p.isPublished) : dummyPosts;
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1, 5);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-blue-500 uppercase tracking-widest mb-4">
                        Tin Tức
                    </h2>
                    <div className="w-16 h-1 bg-slate-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Featured News (Left) */}
                    <div className="lg:col-span-5">
                        <Link href={`/tin-tuc/${featuredPost.slug}`} className="group block bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full pb-8">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={featuredPost.image || '/image/news/placeholder.jpg'}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="h-10 w-24 relative contrast-125 brightness-110">
                                        <Image src="/image/logo-meditech-final.png" alt="TA Logo" fill className="object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 pt-6">
                                <h3 className="text-xl font-sans font-black text-blue-700 mb-6 group-hover:text-blue-600 transition-colors uppercase leading-tight">
                                    {featuredPost.title}
                                </h3>
                                <h4 className="text-lg font-sans font-extrabold text-slate-800 mb-4 leading-snug">
                                    {featuredPost.fullTitle || featuredPost.title}
                                </h4>
                                <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* News List (Right) */}
                    <div className="lg:col-span-7 space-y-6">
                        {otherPosts.map((item: any) => (
                            <div key={item.id} className="grid grid-cols-12 gap-4 group">
                                <div className="col-span-4 relative aspect-[4/3] border border-slate-100 shadow-sm overflow-hidden">
                                    <Link href={`/tin-tuc/${item.slug}`}>
                                        <Image
                                            src={item.image || '/image/news/placeholder.jpg'}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </Link>
                                </div>
                                <div className="col-span-8 flex flex-col justify-between py-1">
                                    <div>
                                        <Link href={`/tin-tuc/${item.slug}`}>
                                            <h3 className="text-sm font-sans font-bold text-blue-500 hover:text-blue-600 transition-colors line-clamp-2 mb-2 leading-relaxed">
                                                {item.title}
                                            </h3>
                                        </Link>
                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                            {item.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <div className="flex items-center gap-1 text-slate-400">
                                            <span className="material-symbols-outlined text-sm">share</span>
                                        </div>
                                        <Link
                                            href={`/tin-tuc/${item.slug}`}
                                            className="text-[10px] font-sans font-black text-slate-700 uppercase tracking-widest border-b border-slate-300 hover:text-blue-500 hover:border-blue-500 transition-all"
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/tin-tuc"
                        className="bg-[#1D92D1] hover:bg-blue-600 text-white px-12 py-3.5 font-sans font-bold uppercase tracking-[0.1em] text-sm transition-all shadow-md hover:shadow-xl rounded-sm"
                    >
                        Xem thêm tất cả tin tức
                    </Link>
                </div>
            </div>
        </section>
    );
}
