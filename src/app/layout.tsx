import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import SmoothScroll from "@/components/SmoothScroll";

// Set up Google Font Inter for clean editorial sans-serif typography
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

// Set up Local Font Klee One specifically for hero typography
const kleeOne = localFont({
  src: [
    {
      path: "../../public/Klee_One/KleeOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Klee_One/KleeOne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-klee-one",
});

export const metadata: Metadata = {
  title: "Nihal Keedath | Web Developer - MERN",
  description: "Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${kleeOne.variable} h-full bg-[#000000] text-[#a0a0a0] antialiased selection:bg-neutral-800/50 selection:text-white`}
    >
      <body className="min-h-full flex flex-col font-sans relative">
        <SmoothScroll>
          <div className="min-h-screen flex flex-col w-full bg-[#000000] overflow-hidden">
            {/* Top-Right Toggle */}
            <div className="absolute top-0 right-0 z-50">
              <ThemeToggle />
            </div>

            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 w-full lg:pl-48">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
