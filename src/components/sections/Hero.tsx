"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <>
      {/* MOBILE & TABLET LAYOUT */}
      <section className="relative w-full max-w-6xl lg:ml-0 lg:mr-auto px-6 md:px-12 pt-28 md:pt-36 pb-20 lg:hidden">
        <div className="flex flex-col gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-start"
          >
            <h1 className="font-quicksand text-[clamp(38px,8vw,58px)] md:text-[clamp(58px,7vw,85px)] font-[300] text-[#d8d8d8] tracking-[0.18em] leading-[0.88] uppercase select-none antialiased subpixel-antialiased">
              NIHAL
              <br />
              KEEDATH
            </h1>
            <p className="mt-6 text-[13px] md:text-[16px] font-[200] tracking-[0.2em] text-white/40 uppercase select-none antialiased">
              {siteConfig.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col w-full"
          >
            <div className="relative w-full max-w-[520px] pt-2">
              {/* Embedded horizontal line passing behind the heading */}
              <div className="absolute top-[8px] md:top-[10px] left-0 w-full h-px bg-white/10" />

              <h2 className="relative inline-block bg-[#151515] pr-6 text-[12px] md:text-[15px] tracking-[0.16em] font-[300] text-[#d8d8d8] uppercase antialiased">
                {siteConfig.name}
              </h2>

              <p className="mt-6 md:mt-10 text-[13px] md:text-[15px] leading-[1.8] tracking-[0.03em] text-white/55 font-[300] max-w-[520px] antialiased subpixel-antialiased">
                {siteConfig.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Inquiry Email text below hero with responsive breathing room */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-24 md:mt-28"
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

      {/* DESKTOP LAYOUT */}
      <section className="relative w-full min-h-screen px-8 lg:px-16 pt-24 hidden lg:block">
        <div className="hidden lg:flex items-start justify-between w-full">
          {/* LEFT HERO BLOCK */}
          <div className="max-w-[720px] ml-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-quicksand lg:text-[clamp(85px,8vw,140px)] font-[300] text-[#d8d8d8] tracking-[0.18em] leading-[0.88] uppercase select-none antialiased subpixel-antialiased"
            >
              NIHAL
              <br />
              KEEDATH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-6 lg:text-[20px] font-[200] tracking-[0.2em] text-white/40 uppercase select-none antialiased"
            >
              {siteConfig.title}
            </motion.p>

            {/* Inquiry Email text below hero with responsive breathing room */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-28"
            >
              <p className="text-[11px] font-[200] tracking-[0.18em] text-white/35 uppercase mb-2 antialiased">
                For business inquiries, email me at:
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[15px] font-[300] text-white/75 hover:text-white transition-colors duration-300 tracking-wider underline underline-offset-4 decoration-white/20 hover:decoration-white/40 antialiased"
              >
                {siteConfig.email}
              </a>
            </motion.div>
          </div>

          {/* RIGHT INFO BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-[520px] mr-10 mt-16 flex-shrink-0"
          >
            <div className="relative w-full mb-10">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
              <h2 className="relative inline-block bg-[#151515] px-5 text-[18px] tracking-[0.16em] font-[300] text-[#d8d8d8] uppercase antialiased">
                {siteConfig.name}
              </h2>
            </div>
            <p className="text-[18px] leading-[2] tracking-[0.03em] text-white/65 font-[300] max-w-[520px] antialiased subpixel-antialiased">
              {siteConfig.description}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
