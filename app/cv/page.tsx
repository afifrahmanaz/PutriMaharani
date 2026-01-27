"use client";

import BackButton from "@/components/BackButton";
import { Download } from "lucide-react";

export default function CVPage() {
    const cvId = "1Lpo5naqy78Wh9Wx1zpPsIH1KZ-_1Wj5n";
    const previewUrl = `https://drive.google.com/file/d/${cvId}/preview`;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${cvId}`;
    const externalViewUrl = `https://drive.google.com/file/d/${cvId}/view?usp=sharing`;

    return (
        <div className="min-h-screen bg-[#fafafa]">
            {/* Subtle Background */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8 md:px-6 md:py-12 relative animate-fadeIn">
                {/* Header */}
                <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                    <BackButton />

                    <div className="flex gap-3">

                        <a
                            href={downloadUrl}
                            className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-medium text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 justify-center md:justify-start"
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="text-center mb-6 md:mb-8 space-y-1.5 md:space-y-2">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900">
                        Curriculum Vitae
                    </h1>
                    <p className="text-sm md:text-base text-gray-500">
                        Professional Experience & Skills
                    </p>
                </div>

                {/* PDF Preview Container */}
                <div className="w-full bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-[600px] md:h-[700px] lg:h-[800px] relative">
                    {/* Loading Indicator (will be covered by iframe) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 -z-10">
                        <div className="animate-pulse text-gray-400">Loading Preview...</div>
                    </div>

                    <iframe
                        src={previewUrl}
                        className="w-full h-full border-0"
                        title="Curriculum Vitae Preview"
                        allow="autoplay"
                    />
                </div>
            </div>
        </div>
    );
}
