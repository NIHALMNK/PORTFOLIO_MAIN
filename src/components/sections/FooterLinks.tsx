"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterLinks() {
  const links = [
    { label: "ABOUT", path: "/about" },
    { label: "WORKS", path: "/works" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="relative w-full min-h-[260px] px-8 lg:px-14 py-10">

      {/* Left Side: Copyright (positioned absolute bottom-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-8 lg:left-14 bottom-6 text-[11px] tracking-[0.14em] uppercase text-white/18 select-none"
      >
        © NIHAL_MNK
      </motion.div>

      {/* Right Side: Stacked links (positioned absolute top-right) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        className="absolute right-8 lg:right-14 top-10 flex flex-col space-y-5 items-end"
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.path}
            className="group flex items-center gap-3.5 text-[22px] font-[200] tracking-[0.08em] uppercase text-white/18 hover:text-white/65 transition-all duration-300"
          >
            <span>{link.label}</span>
            <span className="text-white/5 group-hover:text-white/20 transition-colors duration-300">
              →
            </span>
          </Link>
        ))}
      </motion.div>

    </footer>
  );
}
