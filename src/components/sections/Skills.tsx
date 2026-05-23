"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const categories = [
    { name: "LANGUAGES", items: skills.languages },
    { name: "FRONTEND", items: skills.frontend },
    { name: "BACKEND", items: skills.backend },
    { name: "DATABASES", items: skills.databases },
    { name: "DEVOPS / CLOUD", items: skills.devops },
    { name: "REALTIME", items: skills.realtime },
    { name: "TOOLS", items: skills.tools },
  ];

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-12 lg:py-14 overflow-x-hidden">
      <div className="flex flex-col w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full"
        >
          <h2 className="font-quicksand text-[32px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-[200] tracking-[0.08em] uppercase text-white/90 antialiased">
            SKILLS
          </h2>
          {/* Subtle divider line */}
          <div className="w-full h-[1px] bg-white/15 mt-2 mb-10" />
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 lg:gap-x-16 lg:gap-y-12 items-start w-full">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-start w-full"
            >
              <h3 className="font-quicksand text-[15px] md:text-[16px] lg:text-[17px] font-[300] tracking-[0.12em] uppercase text-white/80 mb-4 antialiased">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5 w-full justify-start">
                {category.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={itemVariants}
                    className="px-3.5 py-1.5 rounded-full border border-white/10 bg-transparent text-[13px] md:text-[14px] lg:text-[14px] font-[300] tracking-[0.02em] text-white/70 hover:border-white/35 hover:text-white transition-all duration-300 select-none cursor-default whitespace-nowrap"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

