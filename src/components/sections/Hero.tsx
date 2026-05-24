"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 lg:pt-24 pb-20 md:pb-[80px] overflow-x-hidden">
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-4 lg:gap-x-8 items-start w-full gap-10 md:gap-0">
        
        {/* LEFT HERO BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="md:col-span-5 md:col-start-1 ml-0 md:ml-4 lg:ml-6 flex flex-col items-start w-full"
        >
          <h1 className="font-quicksand text-[clamp(48px,14vw,82px)] md:text-[clamp(64px,7vw,85px)] lg:text-[clamp(72px,7vw,128px)] font-[300] text-[#d8d8d8] tracking-[0.12em] md:tracking-[0.18em] lg:tracking-[0.14em] leading-[0.9] md:leading-[0.88] lg:leading-[0.92] uppercase select-none antialiased subpixel-antialiased break-words max-w-full lg:max-w-[780px] xl:max-w-[900px]">
            NIHAL
            <br />
            KEEDATH
          </h1>
          
          <p className="mt-6 text-[16px] md:text-[18px] lg:text-[20px] font-[200] tracking-[0.2em] text-white/40 uppercase select-none antialiased">
            {siteConfig.title}
          </p>

          {/* Email block on Tablet and Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="hidden md:block mt-20 lg:mt-28"
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
        </motion.div>

        {/* RIGHT INFO BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full md:w-auto md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 md:pl-8 lg:pl-24 md:pt-8 lg:pt-16 max-w-full md:max-w-[620px] xl:max-w-[720px] 2xl:max-w-[780px] mt-10 md:mt-0 flex-shrink-0"
        >
          <h2 className="text-[18px] lg:text-[20px] font-[300] tracking-[0.12em] uppercase text-[#d8d8d8] mb-4 antialiased">
            {siteConfig.name}
          </h2>

          {/* Premium divider directly under the name */}
          <div className="w-full lg:max-w-[680px] h-[1px] bg-white/18 mb-6 md:mb-10" />

          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.8] lg:leading-[1.9] tracking-[0.03em] font-[300] text-white/72 max-w-[760px] break-words whitespace-normal antialiased subpixel-antialiased">
            {siteConfig.description}
          </p>

          {/* Minimalist Editorial Resume Button */}
          <a
            href="/resume/nihal_resume.pdf"
            target="_blank"
            download
            className="
              inline-flex items-center gap-2
              mt-8
              px-5 py-2
              border border-white/10
              rounded-full
              text-[11px] md:text-[12px]
              tracking-[0.25em]
              uppercase
              text-white/70
              hover:text-white
              hover:border-white/30
              transition-all duration-300 ease-out
              bg-transparent
              antialiased
            "
          >
            Resume
            <span className="text-[10px] md:text-[11px] translate-y-[0.5px]">↓</span>
          </a>

          {/* Email block on Mobile only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="block md:hidden mt-12 w-full"
          >
            <p className="text-[11px] font-[200] tracking-[0.18em] text-white/35 uppercase mb-2 antialiased">
              For business inquiries, email me at:
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[16px] font-[300] text-white/75 hover:text-white transition-colors duration-300 tracking-wider underline underline-offset-4 decoration-white/20 hover:decoration-white/40 antialiased break-all"
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
