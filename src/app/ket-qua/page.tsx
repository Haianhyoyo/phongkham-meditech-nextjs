import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import Image from "next/image";

export default function ResultsPage() {
    return (
        <main>
            <PageHeader
                title="Kết Quả & Biến Đổi"
                description="Hành trình kiến tạo vẻ đẹp tự nhiên, an toàn dựa trên nền tảng y khoa. Khám phá những câu chuyện thay đổi diện mạo đầy cảm hứng tại Meditech."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe8NW9ZtesZOFQxS2g1DJq4y0zwZuqnNKa9T_-qVmLp9_QgdW5tirwmzoFr6_J5MVc--Kiu-KNyTFENW0xePriDHQOIcD-FRHNw3keb7COcGI5VTKV_OqG03F3vVK1JhR2OuZfLGYDges7olCsNWQ04rjmbbxVioJxmMdU4mMy28FyoehytwuVjaWDR0dd5mG4xWTfe0cdmDM-WrieOT-_dHv3ncWje1sGcLmnM83Q9fTeewGSQph4SCtxJhOj4VsbVvixDH9vBg" alt="Result 1" fill className="object-cover" />
                                <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold uppercase px-3 py-1 rounded">Sau 1 liệu trình</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-slate-900">Chị N.T.H</h3>
                                <p className="text-primary text-sm font-medium mb-4">Liệu trình Trị nám Multi-Light</p>
                                <blockquote className="text-slate-600 italic text-sm leading-relaxed relative pl-4 border-l-2 border-accent">
                                    &quot;Vết nám lâu năm mờ hẳn 90%, da sáng và mịn hơn rất nhiều.&quot;
                                </blockquote>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDifydABd6Sm3BuycinN2xhUwD7oorMuxQyiIArw7NXIIXhZlvb91DYPZ_fEEFVjvA_OmcEfhgqW82NJ3G3wrlkL5RccdCdvv-DZkL2uEqwRQ14JlPoexNZSRLTu23-MJ7LVB5g1eumQiJamX-jxedpnsmT1YoyX-YCQDMh8by-kMHNM8E3Xkr707W9yTo_SaGPvBAjf5imlz4dOlHcWOYdTmXaMRWczIhDt_bAfVOTwCZvRm9flvty2nryBTiaDpaSzMpm4qi8YA" alt="Result 2" fill className="object-cover" />
                                <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold uppercase px-3 py-1 rounded">Sau 60 phút</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-slate-900">Anh T.V.A</h3>
                                <p className="text-primary text-sm font-medium mb-4">Nâng cơ Ultherapy</p>
                                <blockquote className="text-slate-600 italic text-sm leading-relaxed relative pl-4 border-l-2 border-accent">
                                    &quot;Gương mặt thon gọn rõ rệt, rãnh cười mờ đi. Hiệu quả nhanh.&quot;
                                </blockquote>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMH1jaSop956a-z2I46g20q08I76Of5gacuArNR-sXQM87oBzH2m0ya6VnA7-9J7bgGPh5PZ13Ps2i8uB3pasmvy3xUihi7zU2VXDJc4hsJUYxMbs5E1JGYmHGCaAehOqBYpD-CfjxWDvxohtXdGdeJLyBg6DH3b68AZJ0Hm0vF_wqsZRHhkimWb6-T4MzUV7J85KTSPOCA9ZKJ50z89wA5wp7eProdbe5CoWIpyhG-ncDVie7TuXXecqXfZQoNqxqU8vgXxDxWg" alt="Result 3" fill className="object-cover" />
                                <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold uppercase px-3 py-1 rounded">Sau 14 ngày</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-slate-900">Chị L.M.K</h3>
                                <p className="text-primary text-sm font-medium mb-4">Cắt mí Deep Eyes</p>
                                <blockquote className="text-slate-600 italic text-sm leading-relaxed relative pl-4 border-l-2 border-accent">
                                    &quot;Mí mắt tự nhiên, không để lại sẹo. Bây giờ tôi tự tin hơn rất nhiều.&quot;
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Sẵn sàng cho sự thay đổi của bạn?"
                description="Đặt lịch thăm khám ngay hôm nay để nhận phác đồ thẩm mỹ riêng biệt và ưu đãi hấp dẫn từ Meditech."
                buttonText="Đặt lịch tư vấn miễn phí"
            />
        </main>
    );
}
