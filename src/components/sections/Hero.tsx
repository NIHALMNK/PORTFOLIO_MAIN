"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl lg:ml-0 lg:mr-auto px-6 md:px-12 lg:pl-2 lg:pr-20 pt-24 lg:pt-32 pb-16">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-x-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <h1 className="font-manrope text-[clamp(40px,10vw,64px)] lg:text-[clamp(56px,5.5vw,80px)] font-[200] text-[#d8d8d8] tracking-[0.18em] leading-[0.88] uppercase select-none antialiased subpixel-antialiased">
            NIHAL
            <br />
            KEEDATH
          </h1>
          <p className="mt-6 text-[11px] font-[200] tracking-[0.2em] text-white/40 uppercase select-none antialiased">
            {siteConfig.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-6 lg:col-start-6 lg:pl-12 flex flex-col pt-2 lg:pt-10 w-full"
        >
          {/* Ultra subtle restrained horizontal divider */}
          <div className="w-full max-w-[320px] lg:max-w-[420px] h-[1px] bg-white/10 mb-4" />

          <h2 className="text-[11px] font-[300] tracking-[0.14em] text-[#d8d8d8] uppercase mb-4 antialiased">
            {siteConfig.name}
          </h2>
          <p className="text-[12px] leading-[1.9] text-white/50 font-[200] tracking-wide max-w-[320px] lg:max-w-[420px] antialiased subpixel-antialiased">
            {siteConfig.description}
          </p>
        </motion.div>
      </div>

      {/* Inquiry Email text below hero with responsive breathing room */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-20 lg:mt-32"
      >
        <p className="text-[11px] font-[200] tracking-[0.18em] text-white/35 uppercase mb-2 antialiased">
          For business inquiries, email me at:
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[14px] md:text-[15px] font-[300] text-white/75 hover:text-white transition-colors duration-300 tracking-wider underline underline-offset-4 decoration-white/20 hover:decoration-white/40 antialiased"
        >
          {siteConfig.email}
        </a>
      </motion.div>
    </section>
  );
}
