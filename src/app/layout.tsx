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
  metadataBase: new URL("https://omkarsaroj.dev"),
  title: "Omkar Saroj | AI Product Builder • Full Stack Developer • Cybersecurity",
  description:
    "Official portfolio of Omkar Saroj — Computer Science graduate, AI Product Builder, Full Stack Developer, AI Automation Specialist, and Cybersecurity Enthusiast. Architect of PARYATAN, Benefits Business Solutions, NG Global, and AI News Verification.",
  keywords: [
    "Omkar Saroj",
    "AI Product Builder",
    "Full Stack Developer",
    "Cybersecurity",
    "Paryatan",
    "Benefits Business Solutions",
    "NG Global",
    "Next.js 15",
    "Chronicle SIEM",
    "Gemini 2.5 Pro",
    "Groq",
    "Mumbai Developer",
  ],
  authors: [{ name: "Omkar Saroj" }],
  creator: "Omkar Saroj",
  openGraph: {
    title: "Omkar Saroj | AI Product Builder • Full Stack Developer • Cybersecurity",
    description:
      "Explore the interactive portfolio of Omkar Saroj. Discover production platforms, 60+ tested AI tools, SecOps command center, and engineering insights.",
    url: "https://omkarsaroj.dev",
    siteName: "Omkar Saroj Portfolio",
    images: [
      {
        url: "/assets/omkar-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Omkar Saroj - AI Product Builder & Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omkar Saroj | AI Product Builder & Full Stack Developer",
    description: "Explore production platforms, AI lab, and cybersecurity command center by Omkar Saroj.",
    images: ["/assets/omkar-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}>
      <body className="bg-[#050505] text-[#f3f4f6] min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
