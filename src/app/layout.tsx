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
    title: "Liam Mack Snyder | Home",
    description: "Liam Snyder's personal website showcasing his professional qualifications, providing a quick summary, and acting as an online hub. It also shows some nice UX!",

    // OpenGraph for Email
    openGraph: {
        title: "Liam Mack Snyder | Home",
        description: "Liam Snyder's personal website showcasing his professional qualifications, providing a quick summary, and acting as an online hub. It also shows some nice UX!",
        url: "https://liammacksnyder.com",
        siteName: "Liam Mack Snyder",
        images: [
            {
                url: "https://liammacksnyder.com/LinkedIn.png",
                width: 600,
                height: 600,
            },
        ],
        type: "website",
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Liam Mack Snyder | Home",
        description: "Liam Snyder's personal website showcasing his professional qualifications, providing a quick summary, and acting as an online hub. It also shows some nice UX!",
        images : ["https://liammacksnyder.com/LinkedIn.png"],
    },

    // Site Icons
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },

    metadataBase: new URL("https://liammacksnyder.com"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={
            `${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
        </body>
        </html>
    );
}
