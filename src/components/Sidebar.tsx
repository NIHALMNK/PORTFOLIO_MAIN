"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { siteConfig } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "WORKS", path: "/works" },
    { label: "CONTACT", path: "/contact" },
  ];

  const socials = [
    {
      icon: "mdi:linkedin",
      url: siteConfig.linkedin,
      label: "LinkedIn",
    },
    {
      icon: "mdi:instagram",
      url: siteConfig.instagram,
      label: "Instagram",
    },
    {
      icon: "mdi:github",
      url: siteConfig.github,
      label: "GitHub",
    },
    {
      icon: "mdi:email-outline",
      url: `mailto:${siteConfig.email}`,
      label: "Email",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[140px] flex-col justify-between py-12 px-4 z-40 bg-[#151515] text-[#5f5f5f] antialiased select-none items-center">
        {/* Navigation & Social Icons Stack grouped and centered vertically */}
        <div className="flex flex-col gap-10 my-auto items-center">
          {/* Navigation */}
          <nav className="flex flex-col gap-[18px] items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`group relative w-fit text-[16px] font-[200] tracking-[0.16em] leading-[1.8] uppercase transition-all duration-300 ease-out select-none ${isActive ? "text-[#d8d8d8]" : "text-[#5f5f5f] hover:text-[#d8d8d8]/80"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[40px] h-[1px] bg-[#d8d8d8]/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons Stack */}
          <div className="flex flex-col gap-[20px] items-center">
            {socials.map((soc, idx) => {
              return (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="text-[#5f5f5f] opacity-45 hover:opacity-85 hover:text-[#d8d8d8] transition-all duration-300 ease-out"
                >
                  <Icon
                    icon={soc.icon}
                    className="w-[22px] h-[22px]"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Muted Copyright Text at bottom center */}
        <div className="text-[8.5px] font-[200] tracking-[0.08em] uppercase text-white/15 select-none antialiased mb-2 text-center">
          © NIHAL_MNK
        </div>
      </aside>

      {/* Mobile Top Bar (64px, pure black) */}
      <header className="lg:hidden fixed top-0 left-0 w-full h-16 z-40 bg-[#151515] border-b border-neutral-900/40 px-6 flex items-center justify-between text-[#a0a0a0] select-none">
        {/* Left: Hamburger menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-[#5f5f5f] hover:text-[#d8d8d8] transition-colors duration-300 focus:outline-none"
          aria-label="Open navigation menu"
        >
          <Icon icon="feather:menu" className="w-5 h-5" />
        </button>

        {/* Right: Mock theme switch (capsule design matching desktop) */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="group relative flex h-5 w-10 cursor-pointer items-center rounded-full border border-neutral-800 bg-neutral-950 p-0.5 transition-colors duration-300 hover:border-neutral-700"
          aria-label="Toggle visual mode"
        >
          <motion.div
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            className="h-3.5 w-3.5 rounded-full bg-neutral-400 group-hover:bg-neutral-200"
            style={{
              marginLeft: isDark ? "auto" : "0",
              marginRight: isDark ? "0" : "auto",
            }}
          />
        </button>
      </header>

      {/* Mobile Overlay Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-50 bg-[#151515] flex flex-col justify-between px-8 py-16 select-none"
          >
            {/* Top Close Bar */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#5f5f5f] hover:text-[#d8d8d8] transition-colors duration-300 focus:outline-none"
                aria-label="Close navigation menu"
              >
                <Icon icon="feather:x" className="w-5 h-5" />
              </button>
            </div>

            {/* Stacked Vertical Menu */}
            <nav className="flex flex-col gap-10 items-start mt-10">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-[30px] font-[200] tracking-[0.16em] uppercase transition-all duration-300 ease-out select-none antialiased subpixel-antialiased ${isActive ? "text-[#d8d8d8]" : "text-[#5f5f5f] hover:text-[#d8d8d8]"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Social Icons at bottom left */}
            <div className="flex flex-col gap-8 pl-[1px] mb-2">
              {socials.map((soc, idx) => {
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#5f5f5f] opacity-45 hover:opacity-85 hover:text-[#d8d8d8] transition-all duration-300 ease-out w-fit"
                  >
                    <Icon
                      icon={soc.icon}
                      className="w-[24px] h-[24px]"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
