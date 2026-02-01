"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
    { name: "Tổng quan", href: "/admin", icon: "dashboard" },
    { name: "Đặt lịch & Liên hệ", href: "/admin/bookings", icon: "calendar_month" },
    { name: "Dịch vụ", href: "/admin/services", icon: "medical_services" },
    { name: "Bác sĩ", href: "/admin/doctors", icon: "stethoscope" }, // Using a generic icon if doctor isn't available
    { name: "Tin tức", href: "/admin/news", icon: "article" },
    { name: "Ưu đãi", href: "/admin/promotions", icon: "campaign" },
    { name: "Quản lý Trang chủ", href: "/admin/showcase", icon: "home_app_logo" },
    { name: "Đánh giá", href: "/admin/reviews", icon: "reviews" },
    { name: "Cài đặt chung", href: "/admin/settings", icon: "settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col z-50">
            {/* Logo Area */}
            <div className="h-16 flex items-center justify-center border-b border-slate-800">
                <Link href="/admin" className="text-xl font-bold tracking-wider text-primary-400">
                    MEDITECH ADMIN
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-3">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? "bg-primary text-white"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    <span className="font-medium text-sm">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* User Info / Footer */}
            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
                        <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">Admin</p>
                        <p className="text-xs text-slate-500">Quản trị viên</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
