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
  title: {
    default: "Auvriex Technologies",
    template: "%s | Auvriex Technologies",
  },
  description:
    "AI-powered engineering intelligence platform. Creator of ROOTTRACE, an AI-powered platform for automated root cause analysis.",
  keywords: [
    "Auvriex",
    "ROOTTRACE",
    "AI",
    "Root Cause Analysis",
    "Observability",
    "DevOps",
    "Engineering Intelligence",
  ],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}