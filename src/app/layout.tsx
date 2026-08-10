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
  title: "alapBD — Fast, Simple & Secure Messaging",
  description: "Connect instantly with crystal clear voice, HD video calls, and end-to-end encrypted messaging.",
  keywords: ["chat", "messaging", "privacy", "encrypted chat", "alapBD", "video call"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#0D1117] text-gray-100 selection:bg-green-500 selection:text-white overflow-x-hidden w-full max-w-[100vw]">
        {children}
      </body>
    </html>
  );
}

