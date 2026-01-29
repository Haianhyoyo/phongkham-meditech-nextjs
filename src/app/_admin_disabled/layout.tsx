import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`min-h-screen bg-slate-100 ${inter.className}`}>
            <nav className="bg-white shadow border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <span className="text-xl font-bold text-primary">MEDITECH Admin</span>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link
                                    href="/admin/bookings"
                                    className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Danh sách đăng ký
                                </Link>
                                <Link
                                    href="/admin/settings"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Cài đặt
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Link href="/" className="text-sm text-slate-500 hover:text-primary">
                                Về trang chủ
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
