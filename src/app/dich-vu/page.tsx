"use client";

import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
    {
        title: "Cắt mí Mini Deep 6D",
        category: "Thẩm mỹ mắt",
        description: "Kỹ thuật cắt mí ít xâm lấn, loại bỏ mỡ thừa và kiến tạo nếp mí tự nhiên, mang lại đôi mắt có hồn và trẻ trung.",
        price: "12.000.000đ",
        image: "/image/Gemini_Generated_Image_s33nu7s33nu7s33n.png",
        href: "/dich-vu/tieu-phau/cat-mi"
    },
    {
        title: "Nâng mũi cấu trúc Meditech",
        category: "Thẩm mỹ mũi",
        description: "Tái cấu trúc toàn diện dáng mũi bằng sụn tự thân và sụn nhân tạo cao cấp, đảm bảo độ bền vững và vẻ đẹp hài hòa.",
        price: "35.000.000đ",
        image: "/image/unnamed.jpg",
        href: "/dich-vu/dai-phau/nang-mui-cau-truc"
    },
    {
        title: "Tạo hình môi trái tim",
        category: "Môi - Cằm",
        description: "Tiểu phẫu thu gọn và tạo hình đường cong môi quyến rũ, cân đối tỉ lệ gương mặt theo phong cách Á Đông.",
        price: "8.000.000đ",
        image: "/image/unnamed (2).jpg",
        href: "/dich-vu/tieu-phau/thu-gon-moi"
    },
    {
        title: "Căng da mặt toàn phần",
        category: "Thẩm mỹ gương mặt",
        description: "Giải pháp tối ưu cho tình trạng lão hóa nặng, giúp xóa mờ nếp nhăn và nâng cơ chảy xệ, trẻ hóa đến 10-15 tuổi.",
        price: "60.000.000đ",
        image: "/image/unnamed (3).jpg",
        href: "/dich-vu/dai-phau/cang-da-mat-co"
    },
    {
        title: "Hút mỡ SlimLipo Vaser",
        category: "Thẩm mỹ cơ thể",
        description: "Công nghệ hút mỡ hiện đại từ Hoa Kỳ giúp loại bỏ mỡ thừa vùng bụng, đùi một cách nhanh chóng, không gồ ghề.",
        price: "45.000.000đ",
        image: "/image/unnamed (4).jpg",
        href: "/dich-vu/dai-phau/hut-mo-tao-hinh"
    },
    {
        title: "Gói phục hồi công nghệ cao",
        category: "Chăm sóc hậu phẫu",
        description: "Kết hợp chiếu tia Plasma và công nghệ nhanh lành thương giúp khách hàng hồi phục nhanh gấp 2 lần bình thường.",
        price: "5.000.000đ",
        image: "/image/unnamed (5).jpg",
        href: "#"
    },
    {
        title: "Trị nám chuyên sâu",
        category: "Liệu trình chuyên sâu",
        description: "Công nghệ Laser tân tiến loại bỏ sắc tố melanin tận gốc, trả lại làn da đều màu.",
        price: "Liên hệ",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
        href: "/dich-vu/tieu-phau/tri-seo"
    },
    {
        title: "Trẻ hóa da Multi-layer",
        category: "Liệu trình chuyên sâu",
        description: "Kích thích tăng sinh collagen tự thân, xóa mờ nếp nhăn và phục hồi độ đàn hồi.",
        price: "Liên hệ",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLSveAcKu95wXQGIhg3RMLhRR4r1P4pPSKGjBU1PYTM5E-DhkMRmcurl3syAla5Bn7fUSuqPmgnroZ3AZomKa4TyONg0pJe_1QDbDLkG0TdmsOfxKbCR6MvLhf_7XRmYm6rZS00IqPygMYtRdc6qHcOlct7c__W5l90rH17GbBd-5rHPrBFHVSZ-FRPnXVM6O0q-AR47NqDWyfxtTRDOsPYLusoAFU457N7Q4qjc6QIxycKtqB3VMKuRttj982g2zW-Vd6_IyXw",
        href: "/dich-vu/tieu-phau/cay-mo-tu-than"
    },
    {
        title: "Nâng cơ Hifu Pro",
        category: "Liệu trình chuyên sâu",
        description: "Sử dụng sóng siêu âm hội tụ cường độ cao giúp thon gọn gương mặt không phẫu thuật.",
        price: "15.000.000đ",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv009JdO-ATSadqYbboaEt8Mh_5nN1x8y8kGMs0mBcVpj6okpzQvMb49diZozphQZ9JcNsOQmJXv_n9Ej2N0C7V9wdyo1ENM3AfGCGzbg6ZidDiVGNdUnMJY8b2vNTM8B-6GoL5r877HImL_pO9XK9JHBGH1YxdAecAqujqJM9289kELLswb0QnFDShH7bF_9_7D54q8LzRnt7GRNLkCMJfAjzB3eA0y7THZQnabNDk-sSz0WLId3kSQyeZinz_5-I1H5ISoEZTw",
        href: "/dich-vu/dai-phau/cang-da-mat-co"
    },
    {
        title: "Điều trị mụn y khoa",
        category: "Liệu trình chuyên sâu",
        description: "Phác đồ chuẩn y khoa kết hợp ánh sáng sinh học giúp sạch mụn và ngăn ngừa thâm sẹo.",
        price: "300.000đ",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyKfYe5R7nL12rlD-FR-SD0OMS8iFKl60Ihar2_RXNStVsLTquAw92nYPg9IIT4Ci5959ti3b09PXCdht9nf4AqmL1RKGABqcCL4fDg5EFTdW31WMOnnbZaLGQTbtWy7c_uhbppbBC7dpKWHs_cX-aL7-o3X0DZK5tLXCBsB7l6lo8sRE_jZtGlVvT3EFRA3iGlvMjE5XJPrYZYfILJR5GMbsJtv_SUJOmiBF1uLeNz-pS3Imlmnj1KzTMW0Cyl_62VsCb_aj3vA",
        href: "/dich-vu/tieu-phau/tri-seo"
    }
];

const filters = [
    "Tất cả",
    "Liệu trình chuyên sâu",
    "Thẩm mỹ mắt",
    "Thẩm mỹ mũi",
    "Môi - Cằm",
    "Thẩm mỹ gương mặt",
    "Tiểu phẫu da",
    "Thẩm mỹ cơ thể",
    "Thẩm mỹ vùng kín",
    "Sửa chữa biến chứng",
    "Chăm sóc hậu phẫu"
];

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ServicesContent() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");
    // Use decodeURIComponent to handle URL encoded strings if necessary, but searchParams.get usually handles basic decoding.
    // However, category in URL might be "Thẩm mỹ mắt" encoded.
    const [activeCategory, setActiveCategory] = useState(categoryQuery || "Tất cả");

    // Update activeCategory if URL changes (optional, but good for navigation)
    // useEffect(() => {
    //     if (categoryQuery) setActiveCategory(categoryQuery);
    // }, [categoryQuery]);

    const filteredServices = activeCategory === "Tất cả"
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <main>
            <PageHeader
                title="Danh Mục Dịch Vụ"
                description="Khám phá các giải pháp thẩm mỹ công nghệ cao được cá nhân hóa bởi đội ngũ bác sĩ hàng đầu tại Meditech."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 overflow-x-auto py-5 hide-scrollbar whitespace-nowrap">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveCategory(filter)}
                                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${activeCategory === filter
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-20 bg-slate-50 min-h-[500px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredServices.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredServices.map((service, index) => (
                                <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                                    <div className="relative h-72 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                                            {service.category}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display font-bold mb-3 text-slate-900">{service.title}</h3>
                                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                            <div className="text-accent font-bold text-lg">Giá từ: {service.price}</div>
                                            <Link href={service.href || "#"} className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm">
                                                Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl text-slate-500">Chưa có dịch vụ nào trong danh mục này.</h3>
                            <p className="text-slate-400 mt-2">Vui lòng quay lại sau hoặc liên hệ để được tư vấn.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">An toàn là ưu tiên số 1</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Cam Kết An Toàn <br /> Phẫu Thuật Tại Meditech</h3>
                            <p className="text-slate-600 leading-relaxed italic border-l-4 border-accent pl-6">
                                &quot;Chúng tôi không chỉ kiến tạo vẻ đẹp, chúng tôi bảo vệ sức khỏe và niềm tin của khách hàng bằng quy trình y khoa nghiêm ngặt nhất.&quot;
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-accent bg-accent/10 p-2 rounded-lg">verified_user</span>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Phòng mổ vô trùng 1 chiều</h4>
                                        <p className="text-sm text-slate-500">Hệ thống lọc khí áp lực dương hiện đại, loại bỏ hoàn toàn nguy cơ nhiễm khuẩn.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="material-symbols-outlined text-accent bg-accent/10 p-2 rounded-lg">groups</span>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Đội ngũ chuyên gia đầu ngành</h4>
                                        <p className="text-sm text-slate-500">100% bác sĩ có chứng chỉ hành nghề, trên 15 năm kinh nghiệm trong lĩnh vực thẩm mỹ.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] -rotate-3"></div>
                            <div className="relative rounded-[2.5rem] shadow-2xl z-10 w-full overflow-hidden h-[500px]">
                                <Image src="/image/Gemini_Generated_Image_80gwom80gwom80gw.png" alt="Chuyên gia Meditech" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

export default function ServicesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ServicesContent />
        </Suspense>
    );
}
