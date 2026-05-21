"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-16 w-full max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Side Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <h1 className="font-klee text-[clamp(64px,10vw,140px)] font-normal text-neutral-200 tracking-[0.06em] leading-[0.9] uppercase select-none">
            NIHAL
            <br />
            KEEDATH
          </h1>
          <p className="mt-8 text-xs md:text-sm tracking-[0.2em] font-light text-neutral-500 uppercase">
            {siteConfig.title}
          </p>
        </motion.div>

        {/* Right Side Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 flex flex-col pt-4"
        >
          {/* Thin horizontal divider */}
          <div className="w-full h-[1px] bg-neutral-900 mb-6" />
          
          <h2 className="text-[10px] tracking-[0.3em] font-light text-neutral-300 uppercase mb-4">
            {siteConfig.name}
          </h2>
          <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-light max-w-sm tracking-wide">
            {siteConfig.description}
          </p>
        </motion.div>
      </div>

      {/* Inquiry Email text below hero with generous spacing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-28 md:mt-36"
      >
        <p className="text-[10px] tracking-[0.2em] font-light text-neutral-600 uppercase mb-2">
          For business inquiries, email me at:
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-xs md:text-sm font-light text-neutral-400 hover:text-neutral-200 transition-colors duration-300 tracking-wider underline underline-offset-4 decoration-neutral-800 hover:decoration-neutral-600"
        >
          {siteConfig.email}
        </a>
      </motion.div>
    </section>
  );
}
