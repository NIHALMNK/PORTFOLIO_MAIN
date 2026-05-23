import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MusicToggle from "@/components/MusicToggle";
import SmoothScroll from "@/components/SmoothScroll";

// Set up Google Font Inter for clean editorial sans-serif typography
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

// Set up Google Font Manrope for ultra-thin geometric editorial sans-serif typography
const manrope = Manrope({
  variable: "--font-manrope",
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

// Set up Local Font Quicksand for the desktop Hero typography
const quicksand = localFont({
  src: [
    {
      path: "../../public/Quicksand/static/Quicksand-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
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
      suppressHydrationWarning={true}
      className={`${inter.variable} ${manrope.variable} ${kleeOne.variable} ${quicksand.variable} h-full bg-[#151515] text-[#a0a0a0] antialiased selection:bg-neutral-800/50 selection:text-white`}
    >
      <body suppressHydrationWarning={true} className="min-h-full flex flex-col font-sans relative">
        <SmoothScroll>
          <div className="min-h-screen flex flex-col w-full bg-[#151515] overflow-hidden max-w-screen-2xl mx-auto relative border-x border-neutral-900/10 shadow-2xl">
            {/* Top-Right Toggle */}
            <div className="absolute top-0 right-0 z-50 hidden lg:block">
              <MusicToggle />
            </div>

            {/* Sidebar Navigation */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 w-full lg:pl-[160px]">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
