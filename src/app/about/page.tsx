"use client";

import { motion } from "framer-motion";
import Motivation from "@/components/sections/Motivation";
import Skills from "@/components/sections/Skills";
import FooterLinks from "@/components/sections/FooterLinks";

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-start w-full py-16 md:py-24"
    >
      <div className="px-6 md:px-12 lg:px-20 mb-8 max-w-6xl w-full">
        <h1 className="font-klee text-[clamp(48px,8vw,100px)] font-normal text-neutral-200 tracking-[0.06em] leading-[0.9] uppercase select-none">
          ABOUT
        </h1>
        <p className="mt-4 text-xs md:text-sm tracking-[0.2em] font-light text-neutral-500 uppercase">
          MOHAMMED NIHAl K
        </p>
      </div>

      <div className="w-full my-6" />

      {/* Motivation/Portrait Editorial Area */}
      <Motivation />

      {/* Spacing between Motivation and Skills */}
      <div className="w-full my-8" />

      {/* Skills Area */}
      <Skills />

      {/* Footer Area */}
      <FooterLinks />
    </motion.main>
  );
}
