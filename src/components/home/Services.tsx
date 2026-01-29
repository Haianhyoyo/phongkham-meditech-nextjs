import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Trị nám chuyên sâu",
        description: "Công nghệ Laser tân tiến loại bỏ sắc tố melanin tận gốc, trả lại làn da đều màu.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
        href: "/dich-vu/tri-nam-chuyen-sau"
    },
    {
        title: "Trẻ hóa da Multi-layer",
        description: "Kích thích tăng sinh collagen tự thân, xóa mờ nếp nhăn và phục hồi độ đàn hồi.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLSveAcKu95wXQGIhg3RMLhRR4r1P4pPSKGjBU1PYTM5E-DhkMRmcurl3syAla5Bn7fUSuqPmgnroZ3AZomKa4TyONg0pJe_1QDbDLkG0TdmsOfxKbCR6MvLhf_7XRmYm6rZS00IqPygMYtRdc6qHcOlct7c__W5l90rH17GbBd-5rHPrBFHVSZ-FRPnXVM6O0q-AR47NqDWyfxtTRDOsPYLusoAFU457N7Q4qjc6QIxycKtqB3VMKuRttj982g2zW-Vd6_IyXw",
        href: "/dich-vu/tre-hoa-da-multi-layer"
    },
    {
        title: "Nâng cơ Hifu Pro",
        description: "Sử dụng sóng siêu âm hội tụ cường độ cao giúp thon gọn gương mặt không phẫu thuật.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv009JdO-ATSadqYbboaEt8Mh_5nN1x8y8kGMs0mBcVpj6okpzQvMb49diZozphQZ9JcNsOQmJXv_n9Ej2N0C7V9wdyo1ENM3AfGCGzbg6ZidDiVGNdUnMJY8b2vNTM8B-6GoL5r877HImL_pO9XK9JHBGH1YxdAecAqujqJM9289kELLswb0QnFDShH7bF_9_7D54q8LzRnt7GRNLkCMJfAjzB3eA0y7THZQnabNDk-sSz0WLId3kSQyeZinz_5-I1H5ISoEZTw",
        href: "/dich-vu/nang-co-hifu-pro"
    },
    {
        title: "Điều trị mụn y khoa",
        description: "Phác đồ chuẩn y khoa kết hợp ánh sáng sinh học giúp sạch mụn và ngăn ngừa thâm sẹo.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyKfYe5R7nL12rlD-FR-SD0OMS8iFKl60Ihar2_RXNStVsLTquAw92nYPg9IIT4Ci5959ti3b09PXCdht9nf4AqmL1RKGABqcCL4fDg5EFTdW31WMOnnbZaLGQTbtWy7c_uhbppbBC7dpKWHs_cX-aL7-o3X0DZK5tLXCBsB7l6lo8sRE_jZtGlVvT3EFRA3iGlvMjE5XJPrYZYfILJR5GMbsJtv_SUJOmiBF1uLeNz-pS3Imlmnj1KzTMW0Cyl_62VsCb_aj3vA",
        href: "/dich-vu/dieu-tri-mun-y-khoa"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Dịch vụ nổi bật</h2>
                    <h3 className="text-4xl font-display font-bold text-slate-900">Liệu Trình Chuyên Sâu</h3>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold mb-2 text-slate-900">{service.title}</h4>
                                <p className="text-slate-600 mb-4 text-xs leading-relaxed">{service.description}</p>
                                <Link href={service.href} className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Xem chi tiết <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
