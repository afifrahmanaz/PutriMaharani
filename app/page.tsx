"use client";

import Image from "next/image";
import { Palette, Image as ImageIcon, FileText, ArrowRight, Instagram, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    // Pinky Theme Colors for Cards
    const links = [
        {
            icon: Palette,
            title: "Design & Landing Page",
            description: "Professional websites & UI/UX projects",
            action: "navigate",
            href: "/design",
            color: "bg-[#FFF0F3] text-[#E63946]", // Soft Red/Pink
        },
        {
            icon: ImageIcon,
            title: "Social Media & Graphic Content",
            description: "Creative designs & visual storytelling",
            action: "navigate",
            href: "/social-media",
            color: "bg-[#F3E5F5] text-[#9C27B0]", // Soft Purple/Pink
        },
        {
            icon: FileText,
            title: "My Curriculum Vitae",
            description: "Preview & download my professional resume",
            action: "navigate",
            href: "/cv",
            color: "bg-[#E3F2FD] text-[#1565C0]", // Soft Blue (keep distinct but soft)
        },
    ];

    const handleCardClick = (link: any) => {
        if (link.action === "navigate" && link.href) {
            router.push(link.href);
        } else if (link.onClick) {
            link.onClick();
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#FFF5F7]">
            {/* Pinky Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-dot-pattern opacity-50" />

                {/* Soft Pink Blobs */}
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#FFDEE9] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse delay-500" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#B5FFFC] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse" />
            </div>

            <div className="relative max-w-2xl mx-auto px-4 py-6 md:px-6 md:py-20 lg:py-28">
                {/* Hero Section */}
                <div className="text-center mb-4 md:mb-12 lg:mb-16 space-y-3 md:space-y-6 animate-fadeIn">
                    {/* Profile Photo with Pink Ring */}
                    <div className="relative inline-block mb-2 md:mb-4 group">
                        {/* Animated Rings */}
                        <div className="absolute -inset-1 md:-inset-2 rounded-full border border-pink-200 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute -inset-1 md:-inset-2 rounded-full border border-r-transparent border-t-transparent border-pink-300 animate-[spin_15s_linear_infinite_reverse]" />

                        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto rounded-full p-1.5 md:p-2 bg-white/60 backdrop-blur-sm border border-white shadow-xl pink-glow">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src="/profilputri/PUTRI.jpg"
                                    alt="Putri Maharani"
                                    width={176}
                                    height={176}
                                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name & Title */}
                    <div className="space-y-2">
                        <h1 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-[#333] tracking-tight hover:text-[#FF69B4] transition-colors duration-300 cursor-default">
                            Putri Maharani
                        </h1>

                        <p className="font-sans text-sm md:text-lg lg:text-xl text-[#777] tracking-wider font-light">
                            UI/UX Designer & Marketing
                        </p>

                        {/* Aesthetic Tag Pink */}
                        <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/80 border border-pink-100 text-[#D81B60] text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mt-2 md:mt-3 shadow-sm hover:shadow-md transition-all">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                            </span>
                            Open To Work
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-3 md:gap-5 pt-3 md:pt-4">
                        <a
                            href="mailto:putcaaz@gmail.com"
                            className="group p-2 md:p-3 bg-white border border-pink-50 rounded-xl md:rounded-2xl shadow-sm hover:shadow-[0_4px_12px_rgba(255,105,180,0.2)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#FF69B4] transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/ptrlss/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-2 md:p-3 bg-white border border-pink-50 rounded-xl md:rounded-2xl shadow-sm hover:shadow-[0_4px_12px_rgba(193,53,132,0.2)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <Instagram className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#C13584] transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Menu Cards */}
                <div className="space-y-2 md:space-y-4 lg:space-y-6 relative z-10 px-1 md:px-2">
                    {links.map((link, index) => {
                        const Icon = link.icon;

                        return (
                            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>
                                <button
                                    onClick={() => handleCardClick(link)}
                                    className="aesthetic-card w-full rounded-2xl md:rounded-[2rem] p-0.5 md:p-1 group text-left relative overflow-hidden"
                                >
                                    <div className="relative px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-7 flex items-center gap-3 md:gap-4 lg:gap-6 min-h-[100px] md:min-h-[110px] lg:min-h-[120px]">
                                        {/* Icon Container with Soft Colors */}
                                        <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-[1.2rem] ${link.color} flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform duration-500`}>
                                            <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="font-serif font-bold text-base md:text-xl lg:text-2xl text-[#333] mb-0.5 md:mb-1 group-hover:text-[#FF69B4] transition-colors">
                                                {link.title}
                                            </h3>
                                            <p className="font-sans text-xs md:text-sm lg:text-base text-[#666] leading-relaxed group-hover:text-[#333] transition-colors">
                                                {link.description}
                                            </p>
                                        </div>

                                        {/* Pink Arrow */}
                                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-[#FF69B4] transition-all duration-300">
                                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-pink-300 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <footer className="relative mt-4 md:mt-16 lg:mt-20 pb-6 md:pb-10 lg:pb-12">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-50" />
                <div className="flex justify-center items-center gap-5 md:gap-8 lg:gap-10 pt-4 md:pt-8 lg:pt-10 px-4 md:px-6">

                    {/* Instagram */}
                    <a href="https://www.instagram.com/ptrlss/" target="_blank" rel="noopener noreferrer" className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm border border-pink-50">
                                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#C13584]" />
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-pink-300">Instagram</span>
                        </div>
                    </a>

                    {/* Canva */}
                    <div className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm border border-pink-50 p-1.5 md:p-2 flex items-center justify-center">
                                <Image
                                    src="/logo/Canva-Logo-2023.png"
                                    alt="Canva"
                                    width={36}
                                    height={36}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-pink-300">Canva</span>
                        </div>
                    </div>

                    {/* Figma */}
                    <div className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm border border-pink-50 flex items-center justify-center">
                                <svg className="w-5 h-7 md:w-6 md:h-8" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
                                    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
                                    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
                                    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
                                    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
                                </svg>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-pink-300">Figma</span>
                        </div>
                    </div>

                    {/* Office */}
                    <div className="filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm border border-pink-50 flex items-center justify-center">
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F25022]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 7.6V2.4L12 0v12h12V7.6zM11 0L0 2.4v9.6h11V0zm13 13H12v12l12-2.4V13zM11 24v-11H0v9.6L11 24z" />
                                </svg>
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest text-pink-300">Office</span>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}
