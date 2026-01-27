"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl glass border border-gray-200/50 hover:border-gray-300/80 transition-all duration-300 md:hover:-translate-x-1"
        >
            <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" />
            <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                Back to Home
            </span>
        </button>
    );
}
