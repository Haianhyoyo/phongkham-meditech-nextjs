import Sidebar from "@/components/admin/Sidebar";
import TopBar from "@/components/admin/TopBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions as any);

    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div className="flex bg-slate-50 min-h-screen font-sans antialiased text-slate-900">
            <Sidebar />
            <div className="flex-1 ml-64 flex flex-col min-w-0">
                <TopBar />
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
