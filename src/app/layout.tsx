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
    "Official portfolio of Omkar Saroj — B.E. in Computer Science and Engineering (IoT, Cyber Security including Blockchain Technology) from University of Mumbai. AI Product Builder, Full Stack Developer, AI Automation Specialist, and Cybersecurity Enthusiast. Architect of PARYATAN, Benefits Business Solutions, NG Global, and AI News Verification.",
  keywords: [
    "Omkar Saroj",
    "B.E. in Computer Science and Engineering",
    "IoT Cyber Security Blockchain Technology",
    "University of Mumbai",
    "AI Product Builder",
    "Full Stack Developer",
    "AI Automation Specialist",
    "Cybersecurity Enthusiast",
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
  icons: {
    icon: "/assets/omkar-portrait-latest.jpg",
    shortcut: "/assets/omkar-portrait-latest.jpg",
    apple: "/assets/omkar-portrait-latest.jpg",
  },
  openGraph: {
    title: "Omkar Saroj | AI Product Builder • Full Stack Developer • Cybersecurity",
    description:
      "Explore the interactive portfolio of Omkar Saroj — B.E. in Computer Science & Engineering (IoT, Cyber Security & Blockchain). Discover production platforms, 60+ tested AI tools, and SecOps command center.",
    url: "https://omkarsaroj.dev",
    siteName: "Omkar Saroj Portfolio",
    images: [
      {
        url: "/assets/omkar-portrait-latest.jpg",
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
    images: ["/assets/omkar-portrait-latest.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omkar Saroj",
  jobTitle: "AI Product Builder & Full Stack Developer",
  url: "https://omkarsaroj.dev",
  image: "https://omkarsaroj.dev/assets/omkar-portrait-latest.jpg",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Mumbai",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "B.E. in Computer Science and Engineering (IoT, Cyber Security including Blockchain Technology)",
  },
  sameAs: [
    "https://www.linkedin.com/in/omkarsaroj/",
    "https://github.com/omkar-2109/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Full Stack Development",
    "Cybersecurity Operations",
    "Google Chronicle SIEM",
    "Microsoft Sentinel",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
    "Role-Based Access Control",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#f3f4f6] min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
