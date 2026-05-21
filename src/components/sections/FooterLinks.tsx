"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterLinks() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "ABOUT", path: "/about" },
    { label: "WORKS", path: "/works" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="px-6 md:px-12 lg:px-20 pt-16 pb-20 w-full max-w-6xl mt-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10">
        {/* Left Side: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[9px] tracking-[0.25em] font-light text-neutral-600 uppercase select-none"
        >
          © NIHAl_MNK
        </motion.div>

        {/* Right Side: Stacked links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-end gap-3.5"
        >
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="group flex items-center gap-2 text-xs md:text-[13px] font-light tracking-[0.15em] text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
            >
              <span>{link.label}</span>
              <span className="text-neutral-600 group-hover:text-neutral-200 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
