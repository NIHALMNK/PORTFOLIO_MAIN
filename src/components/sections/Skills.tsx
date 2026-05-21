"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 w-full max-w-6xl">
      <div className="flex flex-col w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full"
        >
          <h2 className="text-[10px] tracking-[0.3em] font-light text-neutral-300 uppercase mb-3">
            SKILLS
          </h2>
          {/* Full-width thin horizontal divider */}
          <div className="w-full h-[1px] bg-neutral-900 mb-12" />
        </motion.div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Frontend Category */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-[10px] tracking-[0.25em] font-light text-neutral-400 uppercase">
              FRONTEND
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.frontend.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-3.5 py-1.5 rounded-full border border-neutral-900 bg-neutral-950/20 text-[10px] md:text-xs font-light text-neutral-500 hover:text-neutral-200 hover:border-neutral-800 transition-all duration-300 select-none cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend Category */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-[10px] tracking-[0.25em] font-light text-neutral-400 uppercase">
              BACKEND
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.backend.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-3.5 py-1.5 rounded-full border border-neutral-900 bg-neutral-950/20 text-[10px] md:text-xs font-light text-neutral-500 hover:text-neutral-200 hover:border-neutral-800 transition-all duration-300 select-none cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools Category */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-[10px] tracking-[0.25em] font-light text-neutral-400 uppercase">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.tools.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  className="px-3.5 py-1.5 rounded-full border border-neutral-900 bg-neutral-950/20 text-[10px] md:text-xs font-light text-neutral-500 hover:text-neutral-200 hover:border-neutral-800 transition-all duration-300 select-none cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
