
import Image from "next/image";

export default function Results() {
    return (
        <section id="results" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Kết quả khách hàng</h2>
                    <p className="text-slate-600">Đồng hành cùng hơn 10,000 khách hàng tìm lại sự tự tin và vẻ đẹp rạng rỡ</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                        <Image src="/image/594685847_122243953076248364_4104872537926630032_n.jpg" alt="Khách hàng 1" fill className="object-cover" />
                    </div>
                    <div className="space-y-4">
                        <div className="relative h-[calc(50%-0.5rem)] w-full rounded-2xl overflow-hidden">
                            <Image src="/image/2.jpg" alt="Khách hàng 2" fill className="object-cover" />
                        </div>
                        <div className="relative h-[calc(50%-0.5rem)] w-full rounded-2xl overflow-hidden">
                            <Image src="/image/595116797_122243952962248364_329157565639851819_n.jpg" alt="Khách hàng 3" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden mt-8">
                        <Image src="/image/3.jpg" alt="Khách hàng 4" fill className="object-cover" />
                    </div>
                    <div className="space-y-4">
                        <div className="relative h-36 w-full rounded-2xl overflow-hidden">
                            <Image src="/image/7.jpg" alt="Khách hàng 5" fill className="object-cover" />
                        </div>
                        <div className="relative h-[calc(100%-10rem)] w-full rounded-2xl overflow-hidden">
                            <Image src="/image/6.jpg" alt="Khách hàng 6" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
