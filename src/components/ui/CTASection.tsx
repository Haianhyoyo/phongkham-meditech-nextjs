import Image from "next/image";


interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function CTASection({
    title = "Tư vấn phẫu thuật cùng chuyên gia",
    description = "Để lại thông tin để đặt lịch thăm khám trực tiếp cùng đội ngũ bác sĩ trưởng khoa tại Meditech Clinic.",
    buttonText = "Đăng ký ngay"
}: CTASectionProps) {
    return (
        <section className="relative py-24" id="booking">
            <div className="absolute inset-0">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q"
                    alt="Tư vấn phẫu thuật"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm"></div>
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{title}</h2>
                <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                    {description}
                </p>
                <form className="bg-white/10 backdrop-blur-xl p-3 rounded-[2rem] max-w-2xl mx-auto flex flex-col md:flex-row gap-3 border border-white/20">
                    <input
                        className="flex-1 bg-white/95 text-slate-900 px-8 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-accent placeholder:text-slate-400"
                        placeholder="Số điện thoại của bạn"
                        required
                        type="tel"
                    />
                    <button className="bg-accent text-white px-10 py-4 rounded-2xl font-bold hover:bg-yellow-600 transition-all uppercase tracking-[0.15em] shadow-lg text-sm whitespace-nowrap">
                        {buttonText}
                    </button>
                </form>
            </div>
        </section>
    );
}
