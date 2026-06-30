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
  metadataBase: new URL("https://www.auvriextechnologies.com"),

  title: {
    default: "Auvriex Technologies | AI Engineering Intelligence",
    template: "%s | Auvriex Technologies",
  },

  description:
    "Auvriex Technologies is building ROOTTRACE, an AI-powered engineering intelligence platform that automatically identifies production issues, explains root causes, and recommends fixes in minutes.",

  keywords: [
    "Auvriex Technologies",
    "ROOTTRACE",
    "AI",
    "Artificial Intelligence",
    "Engineering Intelligence",
    "Root Cause Analysis",
    "Error Monitoring",
    "Observability",
    "Application Monitoring",
    "Java",
    "Spring Boot",
    "Production Debugging",
    "DevOps",
    "SaaS",
    "Software Engineering",
  ],

  authors: [
    {
      name: "Bhargav Vyas",
    },
  ],

  creator: "Bhargav Vyas",

  publisher: "Auvriex Technologies",

  applicationName: "ROOTTRACE",

  openGraph: {
    title: "Auvriex Technologies | AI Engineering Intelligence",
    description:
      "ROOTTRACE automatically identifies production issues, explains root causes, and recommends fixes using AI.",
    url: "https://www.auvriextechnologies.com",
    siteName: "Auvriex Technologies",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Auvriex Technologies",
    description:
      "AI-powered engineering intelligence platform built for modern software teams.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}