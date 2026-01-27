"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface MenuCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href?: string;
    onClick?: () => void;
    gradient?: string;
}

export default function MenuCard({
    icon: Icon,
    title,
    description,
    href,
    onClick,
    gradient = "from-indigo-500 to-purple-500"
}: MenuCardProps) {
    const Component = href ? Link : "button";

    return (
        <Component
            href={href || ""}
            onClick={onClick}
            className="group relative w-full p-6 rounded-2xl glass border-2 border-gray-200/50 hover:border-gray-300/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 text-left"
        >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                {/* Icon */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                    {description}
                </p>

                {/* Arrow Indicator */}
                <div className="pt-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Component>
    );
}
