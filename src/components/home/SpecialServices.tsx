import Link from "next/link";
import Image from "next/image";

export default function SpecialServices() {
    const services = [
        {
            title: "Dịch vụ cấp cứu 24/7",
            description: "Đội ngũ y bác sĩ trực 24/7, sẵn sàng hỗ trợ và xử lý các tình huống khẩn cấp",
            icon: "emergency",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q",
            link: "/lien-he"
        },
        {
            title: "Khu khám VIP",
            description: "Không gian riêng tư, sang trọng với dịch vụ chăm sóc đặc biệt dành cho khách hàng VIP",
            icon: "diamond",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg",
            link: "/dat-lich"
        },
        {
            title: "Tư vấn & Điều trị chuyên sâu",
            description: "Phác đồ điều trị cá nhân hóa, theo dõi sát sao từng giai đoạn để đạt hiệu quả tối ưu",
            icon: "psychology",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
            link: "/chuyen-gia"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        Dịch vụ đặc biệt
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Dịch Vụ Nổi Bật
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Các dịch vụ chuyên biệt được thiết kế để mang lại trải nghiệm tốt nhất cho khách hàng
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/30 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                {/* Icon Badge */}
                                <div className="absolute top-6 left-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                        <span className="material-symbols-outlined text-primary text-2xl">
                                            {service.icon}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                                    <span>Xem chi tiết</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/dich-vu/tieu-phau"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        <span>Xem tất cả dịch vụ</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
