"use client";

import BackButton from "@/components/BackButton";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// List of all images from the directory
const socialMediaImages = [
    "flyer pemuda pemudi bergerak indonesia bersatu.jpg.jpeg",
    "hardcover design mc.jpg.jpeg",
    "pricelist ina cookies.jpg.jpeg",
    "TAMAN RAMAH LANSIA (1).png",
    "WhatsApp Image 2026-01-27 at 6.21.27 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.27 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.28 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.28 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.28 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.29 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.29 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.29 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.30 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.30 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.30 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.31 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.31 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.31 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.32 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.32 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.32 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.33 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.33 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.33 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.34 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.34 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.34 PM.jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.35 PM (1).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.35 PM (2).jpeg",
    "WhatsApp Image 2026-01-27 at 6.21.35 PM.jpeg",
    "statistik perguruan tinggi.png",
];

export default function SocialMediaPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Subtle Background */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12 relative animate-fadeIn">
                {/* Header */}
                <div className="mb-6 md:mb-8 flex items-center justify-between">
                    <BackButton />
                </div>

                <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900">
                        Social Media & Graphic Content
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        A collection of creative designs, social media posts, and visual storytelling
                    </p>
                </div>

                {/* Grid Gallery - 4 columns on mobile */}
                <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                    {socialMediaImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg md:rounded-xl overflow-hidden cursor-zoom-in bg-gray-100 border border-gray-200 hover:shadow-lg transition-all duration-300 aspect-square"
                            onClick={() => setSelectedImage(image)}
                            style={{
                                // Animating items sequentially for a nice effect
                                animation: `fadeIn 0.5s ease-out ${index * 0.05}s forwards`,
                                opacity: 0,
                            }}
                        >
                            <Image
                                src={`/socialmedia/${image}`}
                                alt={`Social Media Content ${index + 1}`}
                                fill
                                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                sizes="(max-width: 640px) 25vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 25vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                                    <ZoomIn className="w-5 h-5 text-gray-800" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-6 h-6 text-gray-900" />
                    </button>

                    <div
                        className="relative w-full max-w-5xl h-[70vh] md:h-[85vh] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                    >
                        <Image
                            src={`/socialmedia/${selectedImage}`}
                            alt="Full size preview"
                            fill
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
