
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/image/Gemini_Generated_Image_80gwom80gwom80gw.png"
                                alt="Đội ngũ bác sĩ"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                            <p className="text-slate-600 italic text-sm">
                                "Nhan sắc của bạn là sứ mệnh của chúng tôi."
                            </p>
                            <div className="mt-2 font-bold text-slate-900 text-sm">- Ban Giám Đốc</div>
                        </div>
                    </div>
                    <div className="space-y-6 order-1 lg:order-2">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Về chúng tôi</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                            Nơi Hội Tụ Tinh Hoa <br />
                            <span className="text-primary">Thẩm Mỹ Y Khoa</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Không chạy theo trào lưu, chúng tôi tập trung vào giá trị cốt lõi: **Sự An Toàn** và **Vẻ Đẹp Bền Vững**.
                            Với định hướng chuyên sâu về cả Tiểu phẫu (tạo hình mắt, mũi, cằm) và Đại phẫu (vóc dáng),
                            chúng tôi cam kết mang lại kết quả thẩm mỹ tự nhiên nhất, hài hòa nhất với từng gương mặt.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="border-l-4 border-primary pl-4">
                                <strong className="block text-2xl font-bold text-slate-900">15+</strong>
                                <span className="text-sm text-slate-500">Năm kinh nghiệm</span>
                            </div>
                            <div className="border-l-4 border-accent pl-4">
                                <strong className="block text-2xl font-bold text-slate-900">100%</strong>
                                <span className="text-sm text-slate-500">Bác sĩ chuyên khoa</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Link href="/ve-chung-toi" className="text-primary font-bold hover:underline flex items-center gap-1">
                                Hiểu thêm về tầm nhìn của chúng tôi <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
