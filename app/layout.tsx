import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Putri Maharani - Portfolio",
    description: "UI/UX Designer & Marketing Professional",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className={`${outfit.variable} ${playfair.variable}`}>
            <body className="font-sans antialiased text-[#2D2D2D] selection:bg-[#E6D5C3] selection:text-[#2D2D2D]">
                {children}
            </body>
        </html>
    );
}
