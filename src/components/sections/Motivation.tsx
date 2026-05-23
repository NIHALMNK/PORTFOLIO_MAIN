"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Motivation() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-10 lg:px-24 pt-8 lg:pt-12 pb-32 lg:pb-40">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-0 items-start w-full">
        {/* Left Editorial Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 flex flex-col w-full"
        >
          <h2 className="font-quicksand text-[32px] lg:text-[48px] font-[200] tracking-[0.08em] text-[#d8d8d8] uppercase">
            MOTIVATION
          </h2>
          {/* Thin horizontal divider below heading */}
          <div className="w-full max-w-[680px] h-[1px] bg-white/18 mt-5 mb-12" />
          
          <div className="flex flex-col space-y-5 text-[17px] leading-[1.8] lg:text-[18px] lg:leading-[1.9] tracking-[0.03em] font-[300] text-white/72 max-w-[720px]">
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
          className="lg:col-span-6 lg:col-start-7 lg:justify-self-end lg:pt-10 w-full"
        >
          <div className="relative w-full max-w-[720px] aspect-[16/9] overflow-hidden bg-neutral-950 rounded-none shadow-[0_0_80px_rgba(0,0,0,0.25)]">
            <Image
              src="/nihalMNK.png"
              alt="Mohammed Nihal portrait"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover grayscale contrast-[1.18] brightness-[0.88] transition-all duration-700 hover:scale-[1.02] hover:contrast-[1.25]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
