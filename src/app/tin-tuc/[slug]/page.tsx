import { newsData } from "@/data/news";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return newsData.map((item) => ({
        slug: item.slug,
    }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const article = newsData.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main>
            <PageHeader
                title={article.category}
                description=""
                backgroundImage={article.image}
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">{article.date}</span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
                            {article.title}
                        </h1>
                    </div>

                    <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-lg prose-slate mx-auto">
                        <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                        <Link href="/tin-tuc" className="flex items-center gap-2 text-slate-600 font-bold hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                            Quay lại tin tức
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
