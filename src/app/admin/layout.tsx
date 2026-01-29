import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meditech Admin",
    description: "Trang quản trị website Meditech",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
