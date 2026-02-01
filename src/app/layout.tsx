import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContact from "@/components/layout/StickyContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trang Chủ Thẩm Mỹ Viện Meditech",
  description: "Giải pháp thẩm mỹ công nghệ cao - Kết hợp chuyên môn y khoa quốc tế và công nghệ tiên tiến.",
  icons: {
    icon: "/image/favicon_square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="bg-slate-50 text-slate-800 transition-colors duration-300 antialiased flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
