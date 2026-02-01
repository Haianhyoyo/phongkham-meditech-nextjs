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
            city: "Hà Nội",
            address: "61 Nguyễn Khang, Cầu Giấy",
            phone: "024 3872 3872"
        }
    ];


    return (
        <footer className="bg-slate-900 pt-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 gap-12 pb-6 border-b border-white/10">
                    {/* Logo & About */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="block -ml-1.5 lg:-ml-2.5">
                            <div className="relative w-[300px] h-[100px] lg:w-[420px] lg:h-[140px]">
                                <Image
                                    src="/image/logo-meditech-ultra.png"
                                    alt="MEDITECH Logo"
                                    fill
                                    className="object-contain object-left scale-[1.5] lg:scale-[1.7] origin-left brightness-0 invert"
                                />
                            </div>
                        </Link>

                        <div className="space-y-4 -mt-4 lg:-mt-6">
                            <div className="text-white font-extrabold text-xl leading-tight uppercase tracking-tight font-sans">
                                CÔNG TY CỔ PHẦN PHÒNG KHÁM ĐA KHOA MEDITECH
                            </div>

                            <div className="text-slate-400 text-xs leading-relaxed space-y-1">
                                <p>Số đăng ký kinh doanh: 0102362369 cấp bởi Sở kế hoạch và đầu tư Thành phố Hà Nội, đăng ký lần đầu ngày 11 tháng 9 năm 2007</p>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <div className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                                    HỆ THỐNG PHÒNG KHÁM <br />ĐA KHOA MEDITECH
                                </div>
                            </div>
                        </div>
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


            </div>

            {/* Redesigned Bottom Bar - Vibrant Blue */}
            <div className="bg-primary py-4 mt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white text-sm font-medium tracking-wide">
                        Copyright © 2024 Thẩm Mỹ Viện Meditech. Tất cả các quyền được bảo hộ.
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/20 transition-all group">
                                <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/20 transition-all group">
                                <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/20 transition-all group">
                                <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-4">
                            {/* NCSC Badge */}
                            <div className="relative w-[120px] h-[40px]">
                                <Image
                                    src="/image/trust/ncsc.png"
                                    alt="NCSC Tín Nhiệm Mạng"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* DMCA Badge */}
                            <div className="relative w-[80px] h-[30px]">
                                <Image
                                    src="/image/trust/dmca.png"
                                    alt="DMCA Protected"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Ministry of Industry and Trade Badge */}
                            <div className="relative w-[110px] h-[40px]">
                                <Image
                                    src="/image/trust/bocongthuong.png"
                                    alt="Bộ Công Thương"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
