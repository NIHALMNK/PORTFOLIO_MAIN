"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import FooterLinks from "@/components/sections/FooterLinks";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function WorksPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-start w-full py-16 md:py-24"
    >
      {/* Page Header */}
      <div className="px-6 md:px-12 lg:px-20 mb-8 max-w-6xl w-full">
        <h1 className="font-klee text-[clamp(48px,8vw,100px)] font-normal text-neutral-200 tracking-[0.06em] leading-[0.9] uppercase select-none">
          WORKS
        </h1>
        <p className="mt-4 text-xs md:text-sm tracking-[0.2em] font-light text-neutral-500 uppercase">
          Selected MERN Stack Projects
        </p>
        <div className="w-full h-[1px] bg-neutral-900 mt-12 mb-16" />
      </div>

      {/* Projects List Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-12 lg:px-20 w-full max-w-6xl flex flex-col gap-20"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full"
          >
            {/* Index prefix */}
            <div className="lg:col-span-1 text-[10px] tracking-[0.2em] font-light text-neutral-600 uppercase select-none pt-1">
              0{idx + 1}
            </div>

            {/* Left side details */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-light text-neutral-200 tracking-wide group-hover:text-white transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-[10px] md:text-xs tracking-[0.1em] font-light text-neutral-500 uppercase">
                {project.impact}
              </p>
              
              {/* Tech Stack Badge List */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full border border-neutral-900 bg-neutral-950/20 text-[9px] font-light text-neutral-600 group-hover:border-neutral-800 transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side description */}
            <div className="lg:col-span-5 flex flex-col gap-6 pt-1">
              <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-light tracking-wide">
                {project.description}
              </p>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-light text-neutral-400 hover:text-neutral-100 transition-colors duration-300 w-fit mt-1 uppercase"
              >
                <FiGithub className="w-3.5 h-3.5" />
                <span>Source Code</span>
                <FiArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-neutral-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Bottom full width line */}
            <div className="absolute -bottom-10 left-0 w-full h-[1px] bg-neutral-950" />
          </motion.div>
        ))}
      </motion.div>

      {/* Spacing before footer */}
      <div className="w-full my-12" />

      {/* Footer Area */}
      <FooterLinks />
    </motion.main>
  );
}
