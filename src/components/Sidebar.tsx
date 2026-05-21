"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLinkedin, FiInstagram, FiGithub, FiMail } from "react-icons/fi";
import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "WORKS", path: "/works" },
    { label: "CONTACT", path: "/contact" },
  ];

  const socials = [
    { icon: FiLinkedin, url: siteConfig.linkedin, label: "LinkedIn" },
    { icon: FiInstagram, url: siteConfig.instagram, label: "Instagram" },
    { icon: FiGithub, url: siteConfig.github, label: "GitHub" },
    { icon: FiMail, url: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-48 flex-col justify-between py-20 pl-16 pr-4 z-40 bg-black text-[#a0a0a0]">
        {/* Navigation */}
        <nav className="flex flex-col gap-6 mt-6">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                href={item.path}
                className="group relative w-fit text-[10px] tracking-[0.25em] font-light text-neutral-500 hover:text-neutral-200 transition-colors duration-300"
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 w-8 h-[1px] bg-neutral-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Icons Stack */}
        <div className="flex flex-col gap-5 mb-8 pl-1">
          {socials.map((soc, idx) => {
            const Icon = soc.icon;
            return (
              <a
                key={idx}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className="text-neutral-500 hover:text-neutral-200 transition-colors duration-300 text-sm w-fit"
              >
                <Icon className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
            );
          })}
        </div>
      </aside>

      {/* Mobile Top Navigation */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-neutral-900/40 px-6 py-4 flex items-center justify-between text-[#a0a0a0]">
        <Link href="/" className="text-[10px] tracking-[0.2em] font-light text-neutral-300">
          NIHAL_MNK
        </Link>
        <nav className="flex gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`text-[9px] tracking-[0.15em] font-light transition-colors duration-300 ${
                  isActive ? "text-neutral-200 border-b border-neutral-400 pb-0.5" : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
