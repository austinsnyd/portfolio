import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Austin Snyder | Data Analyst",
  description: "Portfolio site for Austin Snyder, Data Analyst and MS in Data Analytics graduate from Oregon State University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-white to-gray-50 z-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl text-gray-800">
                <span className="font-bold">Austin Snyder</span> | <span className="font-extrabold">Data Analyst</span>
              </Link>
              <nav className="flex space-x-8">
                <Link href="#about" className="text-gray-600 hover:text-gray-900 font-medium">About</Link>
                <Link href="#projects" className="text-gray-600 hover:text-gray-900 font-medium">Projects</Link>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
