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
  title: "Austin Snyder - Data Science Portfolio",
  description: "Data Science and Analytics Portfolio showcasing projects and skills in data analysis, machine learning, and business intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="w-full border-b">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">Austin Snyder | Data Analyst</Link>
              <div className="space-x-6">
                <Link href="/#about" className="hover:text-gray-600">About</Link>
                <Link href="/#projects" className="hover:text-gray-600">Projects</Link>
                <Link href="/#contact" className="hover:text-gray-600">Contact</Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full border-t mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <p>© {new Date().getFullYear()} Austin Snyder</p>
              <div className="space-x-4">
                <a href="https://github.com/austinsnyd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">GitHub</a>
                <a href="https://www.linkedin.com/in/austin-snyder-researcher/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
