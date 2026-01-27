"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200/50 bg-gradient-to-b from-white to-gray-50/50 mt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Tools & Social Icons */}
                <div className="flex items-center justify-center gap-8 mb-6">
                    {/* Canva Icon */}
                    <a
                        href="#"
                        className="group relative w-12 h-12 flex items-center justify-center rounded-xl glass hover:scale-110 transition-all duration-300"
                        aria-label="Canva"
                    >
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-0.395 0.279-0.88 0.437-1.395 0.437-0.633 0-1.156-0.213-1.557-0.633l-0.633-0.633-0.633 0.633c-0.401 0.42-0.924 0.633-1.557 0.633-0.516 0-1-0.158-1.395-0.437-0.791-0.558-1.251-1.498-1.251-2.539 0-1.725 1.396-3.126 3.121-3.126 0.633 0 1.156 0.213 1.557 0.633l0.633 0.633 0.633-0.633c0.401-0.42 0.924-0.633 1.557-0.633 1.725 0 3.121 1.401 3.121 3.126 0 1.041-0.46 1.981-1.251 2.539z" fill="#6B46C1" />
                        </svg>
                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-600">
                            Canva
                        </div>
                    </a>

                    {/* Figma Icon */}
                    <a
                        href="#"
                        className="group relative w-12 h-12 flex items-center justify-center rounded-xl glass hover:scale-110 transition-all duration-300"
                        aria-label="Figma"
                    >
                        <svg className="w-6 h-9" viewBox="0 0 24 24" fill="none">
                            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
                            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
                            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
                            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
                            <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
                        </svg>
                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-600">
                            Figma
                        </div>
                    </a>

                    {/* Instagram Icon */}
                    <a
                        href="https://www.instagram.com/salad_sayurbell/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-12 h-12 flex items-center justify-center rounded-xl glass hover:scale-110 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-6 h-6 text-pink-600" />
                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-600">
                            Instagram
                        </div>
                    </a>
                </div>

                {/* Footer Text */}
                <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                        © 2026 Putri Rahmadani. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400 italic">
                        Designed with care and professionalism
                    </p>
                </div>
            </div>
        </footer>
    );
}
