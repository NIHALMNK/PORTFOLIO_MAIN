"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Motivation() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 w-full max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Editorial Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-6 flex flex-col"
        >
          <h2 className="text-[10px] tracking-[0.3em] font-light text-neutral-300 uppercase mb-3">
            MOTIVATION
          </h2>
          {/* Thin horizontal divider below heading */}
          <div className="w-full h-[1px] bg-neutral-900 mb-8" />
          
          <div className="flex flex-col gap-6 text-xs md:text-[13px] text-neutral-500 font-light leading-relaxed tracking-wide">
            <p>
              I&apos;m a full-stack developer with a growing focus on backend development.
            </p>
            <p>
              While I&apos;m still exploring where I want my career to evolve, I&apos;ve discovered that designing scalable systems, APIs, and backend architecture is what excites me the most.
            </p>
            <p>
              That&apos;s why I&apos;m currently dedicating my energy to improving both my technical depth and problem-solving skills on the backend.
            </p>
          </div>
        </motion.div>

        {/* Right Portrait Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-6 w-full flex justify-end lg:pt-4"
        >
          <div className="relative w-full aspect-[4/3] max-w-lg overflow-hidden bg-neutral-950 border border-neutral-900/40">
            <Image
              src="/nihalMNK.png"
              alt="Mohammed Nihal portrait"
              fill
              priority
              className="object-cover grayscale contrast-[1.18] brightness-[0.88] transition-all duration-700 hover:scale-[1.02] hover:contrast-[1.25]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
