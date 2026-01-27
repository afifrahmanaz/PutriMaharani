"use client";

import BackButton from "@/components/BackButton";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Salad Sayur",
        category: "F&B Landing Page",
        description: "Fresh vegetable salad e-commerce website with modern design",
        url: "https://salad-sayur-new.vercel.app/",
        image: "/webdesain/SALAD SAYUR BELL.png", // Updated image path
    },
    {
        title: "OneHundred Honey",
        category: "Product Landing Page",
        description: "Premium honey brand website with elegant presentation",
        url: "https://onehundredhoney.com/",
        image: "/webdesain/ONEHUNDRED.png", // Updated image path
    },
    {
        title: "Oxide Studio",
        category: "Creative Agency",
        description: "Design studio portfolio showcasing creative work",
        url: "https://oxide-studio.vercel.app/",
        image: "/webdesain/OXIDE.png", // Updated image path
    },
    {
        title: "Taman Ramah Lansia",
        category: "Social Campaign",
        description: "Elderly-friendly park initiative website",
        url: "https://taman-ramah-lansia.vercel.app/",
        image: "/webdesain/TAMAN LANSIA.png", // Updated image path
    },
];

export default function DesignPage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Subtle Background */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 relative">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <BackButton />
                </div>

                <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4 animate-fadeIn">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900">
                        Design & Landing Page
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        Professional websites and landing pages I've created
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="max-w-2xl mx-auto md:max-w-6xl space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl md:rounded-2xl transition-all duration-300 hover:border-gray-400 hover:shadow-lg md:hover:-translate-y-1">
                                {/* Website Thumbnail */}
                                <div className="relative h-40 md:h-48 lg:h-64 bg-gray-100 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* External Link Icon */}
                                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:group-hover:scale-110">
                                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-4 md:p-5 lg:p-6 space-y-2 md:space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                                            {project.title}
                                        </h3>
                                        <span className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider px-1.5 md:px-2 py-0.5 md:py-1 rounded bg-gray-100 text-gray-600`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Visit Button */}
                                    <div className="pt-2">
                                        <span className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-gray-900 md:group-hover:gap-3 transition-all">
                                            Visit Website
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
