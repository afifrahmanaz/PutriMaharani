"use client";

import BackButton from "@/components/BackButton";
import { Video, Play, ExternalLink } from "lucide-react";

const videoProjects = [
    {
        title: "Product Showcase Videos",
        category: "Product Marketing",
        description: "Professional product videos for e-commerce and social media",
        gradient: "from-cyan-400 to-blue-500",
        features: ["Motion graphics", "Product animations", "Social media formats"]
    },
    {
        title: "Brand Story Videos",
        category: "Brand Content",
        description: "Compelling brand narratives and promotional videos",
        gradient: "from-purple-400 to-indigo-500",
        features: ["Brand storytelling", "Promotional content", "Video editing"]
    },
    {
        title: "Social Media Video Content",
        category: "Social Media",
        description: "Engaging short-form videos for Instagram, TikTok, and more",
        gradient: "from-pink-400 to-rose-500",
        features: ["Reels", "TikTok videos", "Story content"]
    },
    {
        title: "Event & Campaign Videos",
        category: "Events",
        description: "Documentation and promotional videos for events and campaigns",
        gradient: "from-emerald-400 to-green-500",
        features: ["Event coverage", "Campaign videos", "Highlight reels"]
    },
];

export default function VideoPage() {
    return (
        <div className="min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-8">
                    <BackButton />
                </div>

                <div className="text-center mb-12 space-y-4">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold gradient-text">
                        Video Content & Motion Graphics
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Professional video content and motion graphics for various platforms
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="max-w-2xl mx-auto md:max-w-6xl space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    {videoProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl glass border-2 border-gray-200/50 hover:border-gray-300/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                                {/* Video Preview Placeholder */}
                                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Video Icon */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <Video className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-heading text-xl font-semibold text-gray-900">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                        {project.category}
                                    </p>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <div className="pt-2 space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-12 text-center">
                    <div className="max-w-xl mx-auto p-6 rounded-2xl glass border border-gray-200/50">
                        <p className="text-sm text-gray-600">
                            <strong>📹 Video Portfolio:</strong> For video samples and portfolio, please contact me directly or visit my social media channels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
