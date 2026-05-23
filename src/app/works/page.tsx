"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" as const } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      className="w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 lg:pt-24 pb-32 text-white/80 overflow-x-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Top Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full mb-20 lg:mb-32"
        >
          <span className="text-[10px] md:text-[11px] font-[200] tracking-[0.2em] text-white/35 uppercase block mb-3 antialiased">
            PORTFOLIO
          </span>
          <h1 className="font-quicksand text-[48px] md:text-[72px] lg:text-[110px] font-[200] tracking-[0.08em] uppercase text-white/90 antialiased select-none leading-none">
            Works
          </h1>
          <p className="text-[13px] md:text-[14px] tracking-[0.18em] uppercase text-white/40 mt-4 antialiased">
            Selected projects & case studies
          </p>
          <div className="w-full h-[1px] bg-white/10 mt-8 lg:mt-10" />
        </motion.div>

        {/* Projects Gallery */}
        <div className="flex flex-col space-y-24 md:space-y-36 lg:space-y-48 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              variants={fadeUp}
              className="w-full"
            >
              {/* Staggered Grid Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center w-full relative">
                
                {/* 1. PROJECT IMAGE (Placed first in DOM so it stacks on top on mobile) */}
                <div className="w-full lg:col-span-7 lg:col-start-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block w-full group overflow-hidden bg-neutral-950 border border-white/5 relative aspect-video shadow-[0_0_60px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={idx < 2}
                      className="object-cover grayscale contrast-[1.12] brightness-[0.88] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:contrast-[1.05] group-hover:brightness-[0.95]"
                    />
                  </Link>
                </div>

                {/* 2. PROJECT INFO BLOCK (Placed second in DOM for mobile underneath stack) */}
                <div className="w-full lg:col-span-4 lg:col-start-1 relative flex flex-col items-start justify-center pt-4 lg:pt-0">
                  
                  {/* Giant Faded Background Number */}
                  <span className="text-[110px] lg:text-[180px] font-[200] text-white/[0.04] absolute -top-16 lg:-top-28 left-0 select-none pointer-events-none tracking-tighter leading-none antialiased">
                    {project.id}
                  </span>

                  {/* Year Tag */}
                  <span className="text-[11px] font-[300] tracking-[0.2em] text-white/30 uppercase mb-3 relative z-10 antialiased">
                    {project.year} / SYSTEM
                  </span>

                  {/* Title */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/title relative z-10 block"
                  >
                    <h2 className="font-quicksand text-[28px] lg:text-[38px] font-[200] tracking-[0.06em] uppercase text-white/90 group-hover/title:text-white transition-colors duration-300 antialiased">
                      {project.title}
                    </h2>
                  </Link>

                  {/* Description */}
                  <p className="text-[14px] lg:text-[15px] leading-[1.9] text-white/55 max-w-[420px] mt-4 mb-6 relative z-10 antialiased">
                    {project.description}
                  </p>

                  {/* Tech Stack inline list */}
                  <div className="text-[11px] tracking-[0.12em] uppercase text-white/35 font-[300] mb-8 relative z-10 antialiased">
                    {project.techStack}
                  </div>

                  {/* Call to Action */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/cta relative z-10 text-[11px] font-[400] text-white/65 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300 pb-1 border-b border-white/10 hover:border-white/40 antialiased"
                  >
                    View Case Study <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1 ml-1">→</span>
                  </Link>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Bottom Exhibition Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="w-full flex justify-between items-center mt-32 lg:mt-48 pt-8 border-t border-white/5 text-[10px] tracking-[0.2em] text-white/20 uppercase font-[300] antialiased"
        >
          <span>Curated Gallery</span>
          <span>© 2026 Nihal Keedath</span>
        </motion.div>

      </div>
    </motion.main>
  );
}
