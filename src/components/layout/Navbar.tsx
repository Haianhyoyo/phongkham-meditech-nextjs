"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navLinks = [
        { name: "Trang Chủ", href: "/" },
        {
            name: "Tiểu phẫu",
            href: "/dich-vu/tieu-phau",
            children: [
                { name: "Cắt mí trên/dưới", href: "/dich-vu/tieu-phau/cat-mi" },
                { name: "Nhấn mí", href: "/dich-vu/tieu-phau/nhan-mi" },
                { name: "Lấy mỡ mí", href: "/dich-vu/tieu-phau/lay-mo-mi" },
                { name: "Nâng mũi không phẫu thuật", href: "/dich-vu/tieu-phau/nang-mui-khong-phau-thuat" },
                { name: "Tiêm filler - botox", href: "/dich-vu/tieu-phau/tiem-filler-botox" },
                { name: "Cấy mỡ tự thân", href: "/dich-vu/tieu-phau/cay-mo-tu-than" },
                { name: "Thu gọn môi", href: "/dich-vu/tieu-phau/thu-gon-moi" },
                { name: "Trị sẹo", href: "/dich-vu/tieu-phau/tri-seo" },
            ]
        },
        {
            name: "Đại phẫu",
            href: "/dich-vu/dai-phau",
            children: [
                { name: "Nâng mũi cấu trúc", href: "/dich-vu/dai-phau/nang-mui-cau-truc" },
                { name: "Gọt hàm - hạ gò má", href: "/dich-vu/dai-phau/got-ham-ha-go-ma" },
                { name: "Độn cằm", href: "/dich-vu/dai-phau/don-cam" },
                { name: "Phẫu thuật hàm", href: "/dich-vu/dai-phau/phau-thuat-ham" },
                { name: "Nâng ngực", href: "/dich-vu/dai-phau/nang-nguc" },
                { name: "Hút mỡ tạo hình", href: "/dich-vu/dai-phau/hut-mo-tao-hinh" },
                { name: "Căng da mặt/cổ", href: "/dich-vu/dai-phau/cang-da-mat-co" },
                { name: "Tạo hình thành bụng", href: "/dich-vu/dai-phau/tao-hinh-thanh-bung" },
            ]
        },
        { name: "Giới thiệu", href: "/ve-chung-toi" },
        { name: "Tin tức", href: "/tin-tuc" },
        { name: "Liên hệ", href: "/lien-he" },
        { name: "Ưu đãi", href: "/uu-dai" },
    ];

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <header className="sticky top-0 z-50 shadow-md">
            {/* Top Bar - White */}
            <div className="bg-white py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center gap-4">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center group no-underline">
                        <div className="relative w-56 h-20 lg:w-[380px] lg:h-32 shrink-0">
                            <Image
                                src="/image/logo-meditech-ultra.png"
                                alt="MEDITECH Logo"
                                fill
                                className="object-contain object-left scale-[2.0] lg:scale-[2.6] origin-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Contact Info (Desktop) */}
                    <div className="hidden lg:flex flex-col items-end gap-1 text-sm">
                        <div className="flex items-center gap-6 text-slate-600/80 text-xs uppercase font-semibold">
                            <span>Hà Nội: 135 Nam Đồng - Đống Đa</span>
                            <span>TP.HCM: 123 Nguyễn Du - Q.1</span>
                        </div>
                        <div className="text-xl font-bold font-sans text-primary tracking-wide">
                            <a href="tel:0889895555" className="hover:text-primary-dark transition-colors">088 989 5555</a> - <a href="tel:02438723872" className="hover:text-primary-dark transition-colors">024 3872 3872</a>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium mt-1 text-slate-600">
                            <Link href="/khach-hang" className="flex items-center gap-1 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">person</span>
                                Dành cho khách hàng
                            </Link>
                            <Link href="/hoi-dap" className="flex items-center gap-1 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">help</span>
                                Hỏi đáp
                            </Link>
                            <Link href="/dat-lich" className="flex items-center gap-1 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">calendar_month</span>
                                Đặt lịch khám
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle (Visible on Mobile) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-primary hover:bg-slate-50 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Bar - Navigation (Desktop) - Dark Blue */}
            <nav className="bg-primary text-white border-b border-primary/20 hidden lg:block shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Main Navigation */}
                        <div className="flex space-x-8 font-bold text-sm uppercase tracking-wide">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group" suppressHydrationWarning={true}>
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-1 transition-colors py-2 px-2 border-b-2 ${isActive(link.href)
                                            ? "text-white border-accent"
                                            : "text-blue-100 border-transparent hover:text-white hover:border-blue-200"
                                            }`}
                                    >
                                        {link.name}
                                        {link.children && <span className="material-symbols-outlined text-sm">expand_more</span>}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.children && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50" suppressHydrationWarning={true}>
                                            <div className="p-2 flex flex-col" suppressHydrationWarning={true}>
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className={`px-4 py-3 rounded-lg text-sm normal-case font-medium transition-colors text-slate-600 hover:bg-slate-50 hover:text-primary`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Search / Action */}
                        <div className="flex items-center gap-4 pl-8 border-l border-white/20 py-2">
                            <button className="p-2 text-blue-100 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl">search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-white top-[120px]"> {/* Adjust top to start below header */}
                    <div className="flex flex-col h-full border-t border-slate-100">
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name} suppressHydrationWarning={true}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.href}
                                            onClick={() => !link.children && setIsMobileMenuOpen(false)}
                                            className={`flex-1 px-4 py-3 rounded-xl font-bold text-lg transition-colors ${isActive(link.href)
                                                ? "text-primary"
                                                : "text-slate-800"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.children && (
                                            <button
                                                onClick={() => toggleDropdown(link.name)}
                                                className="p-3 text-slate-500"
                                            >
                                                <span className={`material-symbols-outlined transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}>
                                                    expand_more
                                                </span>
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {link.children && activeDropdown === link.name && (
                                        <div className="ml-4 pl-4 border-l-2 border-slate-100 space-y-1 mb-2">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive(child.href)
                                                        ? "text-primary bg-primary/5"
                                                        : "text-slate-600 hover:text-primary"
                                                        }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {/* Mobile Contact Info */}
                            <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                                <div className="text-center">
                                    <div className="text-sm text-slate-500 uppercase font-bold mb-2">Hotline</div>
                                    <a href="tel:0889895555" className="text-2xl font-bold text-primary block">088 989 5555</a>
                                </div>
                                <Link href="/dat-lich" className="block w-full bg-primary text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20">
                                    Đặt lịch ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
