import Footer from "@/components/Partials/Footer";
import Header from "@/components/Partials/Header";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Escrow Dashboard",
    description: "Track and manage your escrow transactions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header />
                <Providers>{children}</Providers>
                <Footer />
            </body>
        </html>
    );
}
