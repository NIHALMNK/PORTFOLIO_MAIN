"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Motivation from "@/components/sections/Motivation";
import Skills from "@/components/sections/Skills";
import FooterLinks from "@/components/sections/FooterLinks";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-start w-full pb-8 md:pb-16"
    >
      {/* Editorial Hero Area */}
      <Hero />

      {/* Spacing between Hero and Motivation is generous */}
      <div className="w-full my-12 lg:my-0" />

      {/* Motivation/Portrait Editorial Area */}
      <Motivation />

      {/* Spacing between Motivation and Skills */}
      <div className="w-full my-12" />

      {/* Skills Area */}
      <Skills />

      {/* Footer Area */}
      <FooterLinks />
    </motion.main>
  );
}
