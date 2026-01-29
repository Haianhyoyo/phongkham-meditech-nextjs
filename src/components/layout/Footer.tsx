import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const locations = [
        {
            city: "Hà Nội",
            address: "135 Nam Đồng, Đống Đa",
            phone: "024 3872 3872"
        },
        {
            city: "TP. Hồ Chí Minh",
            address: "123 Nguyễn Du, Quận 1",
            phone: "028 3825 3825"
        }
    ];

    const insurancePartners = [
        "Bảo Việt", "Bảo Minh", "PVI", "Liberty", "Prudential", "Manulife"
    ];

    return (
        <footer className="bg-slate-900 pt-16 pb-8 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
                    {/* Logo & About */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="block">
                            <div className="relative w-48 h-24">
                                <Image
                                    src="/image/logo-meditech-ultra.png"
                                    alt="MEDITECH Logo"
                                    fill
                                    className="object-contain object-left scale-150 origin-left brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Tái định nghĩa vẻ đẹp thông qua sự chính xác của y khoa. Chúng tôi mang đến những tiêu chuẩn chăm sóc thẩm mỹ cao cấp nhất.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-lg">camera_alt</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-lg">play_circle</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">Liên kết nhanh</h5>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><Link href="/ve-chung-toi" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Giới thiệu</Link></li>
                            <li><Link href="/chuyen-gia" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Đội ngũ chuyên gia</Link></li>
                            <li><Link href="/dich-vu/tieu-phau" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Dịch vụ thẩm mỹ</Link></li>
                            <li><Link href="/ket-qua" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Kết quả điều trị</Link></li>
                            <li><Link href="/uu-dai" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Ưu đãi đặc biệt</Link></li>
                            <li><Link href="/tin-tuc" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Tin tức</Link></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">Hệ thống cơ sở</h5>
                        <div className="space-y-6">
                            {locations.map((location, index) => (
                                <div key={index} className="text-sm">
                                    <div className="font-bold text-white mb-2">{location.city}</div>
                                    <div className="text-slate-400 space-y-1">
                                        <div className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                                            <span>{location.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-base">phone</span>
                                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                                {location.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h5 className="text-white font-bold text-lg mb-6">Hỗ trợ khách hàng</h5>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><Link href="/dat-lich" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Đặt lịch tư vấn</Link></li>
                            <li><Link href="/hoi-dap" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Hỏi đáp</Link></li>
                            <li><Link href="/bang-gia" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Bảng giá dịch vụ</Link></li>
                            <li><Link href="/chinh-sach" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Chính sách & Pháp lý</Link></li>
                            <li><Link href="/lien-he" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary">›</span> Liên hệ</Link></li>
                        </ul>

                        {/* Hotline */}
                        <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                            <div className="text-xs text-slate-400 uppercase font-bold mb-1">Hotline 24/7</div>
                            <a href="tel:0889895555" className="text-2xl font-bold text-primary hover:text-blue-400 transition-colors">
                                088 989 5555
                            </a>
                        </div>
                    </div>
                </div>

                {/* Insurance Partners */}
                <div className="mb-8 pb-8 border-b border-white/10">
                    <h5 className="text-white font-bold text-lg mb-6 text-center">Đối tác bảo hiểm</h5>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {insurancePartners.map((partner, index) => (
                            <div key={index} className="px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <span className="text-slate-300 font-medium text-sm">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div className="text-center md:text-left">
                        © 2024 Thẩm Mỹ Viện Meditech. Tất cả các quyền được bảo hộ.
                    </div>
                    <div className="flex gap-6 text-xs">
                        <Link href="/chinh-sach" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
                        <Link href="/chinh-sach" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
