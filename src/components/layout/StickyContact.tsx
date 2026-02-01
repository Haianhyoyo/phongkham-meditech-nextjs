"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function StickyContact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="fixed right-4 bottom-8 z-[60] flex flex-col gap-3">
            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 rounded-full bg-[#00bcd4] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
                title="Về đầu trang"
            >
                <span className="material-symbols-outlined text-3xl">expand_less</span>
            </button>

            {/* Phone Button */}
            <a
                href="tel:0889895555"
                className="w-12 h-12 rounded-full bg-[#4caf50] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                title="Gọi điện ngay"
            >
                <span className="material-symbols-outlined text-2xl">call</span>
            </a>

            {/* Zalo Button */}
            <a
                href="https://zalo.me/0889895555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0068ff] p-2 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                title="Chat Zalo"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                        alt="Zalo"
                        fill
                        className="object-contain"
                    />
                </div>
            </a>

            {/* Messenger Button */}
            <a
                href="https://m.me/meditech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#006AFF] via-[#A033FF] to-[#FF5280] p-2.5 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                title="Chat Messenger"
            >
                <div className="relative w-full h-full">
                    <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                        <path d="M12 2C6.47715 2 2 6.14545 2 11.2591C2 14.1727 3.44543 16.7455 5.70909 18.3727V21.8182L8.98182 20.0182C9.94545 20.2818 10.9545 20.4273 12 20.4273C17.5228 20.4273 22 16.2818 22 11.1682C22 6.05455 17.5228 2 12 2ZM12.9273 14L10.6455 11.5636L6.2 14L11.0727 8.81818L13.3545 11.2545L17.8 8.81818L12.9273 14Z" />
                    </svg>
                </div>
            </a>
        </div>
    );
}
