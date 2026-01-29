"use client";

import { signOut } from "next-auth/react";

export default function TopBar() {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40">
            {/* Left side (Breadcrumbs or Page Title - Optional) */}
            <div>
                {/* Placeholder for Breadcrumbs */}
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="h-8 w-px bg-slate-200"></div>

                <button
                    onClick={() => signOut({ callbackUrl: "/admin/login" })}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Đăng xuất
                </button>
            </div>
        </header>
    );
}
