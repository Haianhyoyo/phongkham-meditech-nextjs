
import Image from "next/image";

export default function Testimonials() {
    const reviews = [
        {
            name: "Chị Minh Anh",
            service: "Nâng mũi cấu trúc",
            content: "Mình rất sợ đau nhưng bác sĩ làm rất nhẹ nhàng. Sau 1 tháng mũi đã gom form rất đẹp, tự nhiên, ai cũng khen.",
            avatar: "/image/hinhanhtt1.jpg"
        },
        {
            name: "Bạn Ngọc Diệp",
            service: "Cắt mí Eye-lift",
            content: "Mắt mình trước đây một mí, nhìn lờ đờ. Giờ cắt xong mắt to tròn, long lanh hơn hẳn. Cảm ơn bác sĩ nhiều lắm!",
            avatar: "/image/hinhanhtt2.jpg"
        },
        {
            name: "Cô Thanh Mai",
            service: "Căng chỉ Collagen",
            content: "Ở tuổi 50 cô không nghĩ mình có thể trẻ lại như thế này. Da căng bóng, nếp nhăn giảm hẳn. Dịch vụ rất chuyên nghiệp.",
            avatar: "/image/hinhanhtt3.jpg"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Feedback khách hàng</h2>
                    <h3 className="text-4xl font-display font-bold text-slate-900">Chia Sẻ Thực Tế</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                            <div className="absolute top-8 right-8 text-primary/20">
                                <span className="material-symbols-outlined text-6xl">format_quote</span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{review.name}</div>
                                    <div className="text-xs text-primary font-semibold uppercase">{review.service}</div>
                                </div>
                            </div>
                            <p className="text-slate-600 italic leading-relaxed relative z-10">
                                "{review.content}"
                            </p>
                            <div className="flex gap-1 mt-4 text-yellow-400">
                                <span className="material-symbols-outlined text-sm fill-current">star</span>
                                <span className="material-symbols-outlined text-sm fill-current">star</span>
                                <span className="material-symbols-outlined text-sm fill-current">star</span>
                                <span className="material-symbols-outlined text-sm fill-current">star</span>
                                <span className="material-symbols-outlined text-sm fill-current">star</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
