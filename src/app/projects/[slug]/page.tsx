"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = React.use(params);
  
  // Find project matching the slug
  const project = projects.find((p) => p.slug === slug);

  // Find next project for quick navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Define state for active gallery image
  const [activeImage, setActiveImage] = React.useState(
    project?.gallery[0]?.image || project?.coverImage || "/projects/placeholder.png"
  );

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white/90">
        <p className="font-klee text-[20px] mb-4">Project not found</p>
        <Link href="/works" className="text-[12px] tracking-widest uppercase underline text-white/40 hover:text-white">
          Back to works
        </Link>
      </div>
    );
  }

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" as const } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
        
        {/* Back Button */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-10 lg:mb-16">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 text-[11px] font-[400] text-white/45 hover:text-white uppercase tracking-[0.18em] transition-colors duration-300"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to Works
          </Link>
        </motion.div>

        {/* 1. Header / Meta Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full mb-16 lg:mb-24">
          
          {/* Title & Subtitle (col-span-7) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <span className="text-[10px] md:text-[11px] font-[200] tracking-[0.2em] text-white/35 uppercase block mb-3 antialiased">
              PROJECT {project.id}
            </span>
            <h1 className="font-quicksand text-[42px] md:text-[56px] lg:text-[76px] font-[200] tracking-[0.04em] leading-[0.95] text-white/95 uppercase antialiased mb-6">
              {project.title}
            </h1>
            <p className="font-klee italic text-[20px] md:text-[24px] leading-[1.5] text-white/85 max-w-[620px] antialiased">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Project Details Grid (col-span-4) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-4 lg:col-start-9 grid grid-cols-2 gap-x-6 gap-y-6 pt-4 lg:pt-8 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8"
          >
            {[
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Year", value: project.year },
              { label: "Client", value: "Commercial / Case Study" },
            ].map((meta, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col">
                <span className="text-[9px] tracking-[0.18em] text-white/30 uppercase mb-1 font-[300]">{meta.label}</span>
                <span className="text-[13px] text-white/75 font-[300] tracking-[0.02em]">{meta.value}</span>
              </motion.div>
            ))}

            {(project.liveUrl || project.githubUrl) && (
              <motion.div variants={fadeUp} className="col-span-2 flex gap-6 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-[400] text-white/60 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300 pb-0.5 border-b border-white/15 hover:border-white/40"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-[400] text-white/60 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300 pb-0.5 border-b border-white/15 hover:border-white/40"
                  >
                    GitHub
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>

        </div>

        {/* 2. Cinematic Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full aspect-video overflow-hidden bg-neutral-950 border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.25)] mb-20 lg:mb-32"
        >
          <Image
            src={project.coverImage || "/projects/placeholder.png"}
            alt={`${project.title} Cover`}
            fill
            sizes="100vw"
            priority
            className="object-cover grayscale contrast-[1.12] brightness-[0.88] transition-all duration-700 hover:scale-[1.01] hover:grayscale-0 hover:contrast-[1.05]"
          />
        </motion.div>

        {/* 3. Problem & Solution Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full mb-20 lg:mb-32">
          
          {/* Problem Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <span className="text-[10px] font-[300] tracking-[0.2em] text-white/35 uppercase block mb-4">
              01 / THE CHALLENGE
            </span>
            <h2 className="font-quicksand text-[22px] lg:text-[26px] font-[200] tracking-[0.06em] uppercase text-white/90 mb-6">
              The Problem
            </h2>
            <p className="text-[14px] lg:text-[15px] leading-[2.1] text-white/55 font-[300] tracking-[0.03em] antialiased">
              {project.overview.problem}
            </p>
          </motion.div>

          {/* Solution Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6 lg:col-start-7"
          >
            <span className="text-[10px] font-[300] tracking-[0.2em] text-white/35 uppercase block mb-4">
              02 / THE ARCHITECTURE
            </span>
            <h2 className="font-quicksand text-[22px] lg:text-[26px] font-[200] tracking-[0.06em] uppercase text-white/90 mb-6">
              The Solution
            </h2>
            <p className="text-[14px] lg:text-[15px] leading-[2.1] text-white/55 font-[300] tracking-[0.03em] antialiased">
              {project.overview.solution}
            </p>
          </motion.div>

        </div>

        {/* 4. Features Section */}
        <div className="w-full mb-20 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-10 lg:mb-16"
          >
            <span className="text-[10px] font-[300] tracking-[0.2em] text-white/35 uppercase block mb-4">
              03 / CAPABILITIES
            </span>
            <h2 className="font-quicksand text-[24px] lg:text-[32px] font-[200] tracking-[0.08em] uppercase text-white/90">
              Key Features
            </h2>
            <div className="w-full h-[1px] bg-white/10 mt-6" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full"
          >
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={feature ? fadeUp : undefined}
                className="flex flex-col items-start border-l border-white/10 pl-6 py-1"
              >
                <h3 className="text-[14px] md:text-[15px] font-[400] text-white/85 uppercase tracking-wider mb-3">
                  {feature.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[1.8] text-white/50 font-[300]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 5. Grouped Tech Stack */}
        <div className="w-full mb-20 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-10 lg:mb-16"
          >
            <span className="text-[10px] font-[300] tracking-[0.2em] text-white/35 uppercase block mb-4">
              04 / SPECIFICATION
            </span>
            <h2 className="font-quicksand text-[24px] lg:text-[32px] font-[200] tracking-[0.08em] uppercase text-white/90">
              Technologies Used
            </h2>
            <div className="w-full h-[1px] bg-white/10 mt-6" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 w-full"
          >
            {project.techStack.map((group, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-start">
                <h3 className="text-[12px] tracking-[0.18em] text-white/35 uppercase mb-4 font-[300]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full border border-white/10 bg-transparent text-[12px] font-[300] tracking-[0.02em] text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 6. New Cinematic Editorial Project Showcase */}
        <div className="w-full mb-20 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-10 lg:mb-16"
          >
            <span className="text-[10px] font-[300] tracking-[0.2em] text-white/35 uppercase block mb-4">
              05 / ARCHIVE
            </span>
            <h2 className="font-quicksand text-[24px] lg:text-[32px] font-[200] tracking-[0.08em] uppercase text-white/90">
              Visual Showcase
            </h2>
            <div className="w-full h-[1px] bg-white/10 mt-6" />
          </motion.div>

          {/* Large Centered 16:9 Hero Showcase Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="w-full max-w-[1100px] mx-auto mb-8 lg:mb-10"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-950 border border-white/5 shadow-[0_0_60px_rgba(0,0,0,0.3)] w-full">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeImage}
                  alt={`${project.title} active showcase screen`}
                  fill
                  sizes="100vw"
                  className="object-cover grayscale contrast-[1.10] brightness-[0.90] hover:grayscale-0 hover:contrast-[1.05] hover:brightness-[0.95] transition-all duration-700"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* 5 smaller preview thumbnails in a single snap-scrolling / grid row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="w-full max-w-[1100px] mx-auto"
          >
            <div className="flex w-full overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-cols-5 gap-4 md:gap-5 pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory justify-start">
              {project.gallery.map((galleryItem) => {
                const isActive = activeImage === galleryItem.image;
                return (
                  <button
                    key={galleryItem.id}
                    onClick={() => setActiveImage(galleryItem.image)}
                    className="snap-start flex-shrink-0 w-[140px] xs:w-[180px] sm:w-[220px] lg:w-auto relative aspect-[16/9] overflow-hidden rounded-xl border transition-all duration-300 bg-neutral-950 cursor-pointer focus:outline-none"
                    style={{
                      borderColor: isActive ? "rgba(255, 255, 255, 0.35)" : "rgba(255, 255, 255, 0.06)",
                      opacity: isActive ? 1.0 : 0.40,
                    }}
                  >
                    <Image
                      src={galleryItem.image}
                      alt={`${project.title} thumbnail screen ${galleryItem.id}`}
                      fill
                      sizes="(max-width: 768px) 150px, 300px"
                      className="object-cover grayscale contrast-[1.10] brightness-[0.88] hover:grayscale-0 hover:brightness-[0.95] transition-all duration-500"
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 7. Philosophy Quote & Closing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full flex flex-col items-center justify-center text-center py-16 border-y border-white/5 mb-24 max-w-[820px] mx-auto antialiased"
        >
          <span className="text-[10px] tracking-[0.2em] text-white/25 uppercase block mb-6 font-[300]">
            SUMMARY
          </span>
          <p className="font-klee italic text-[18px] md:text-[22px] leading-[1.7] text-white/85 mb-4">
            &ldquo;{project.closing}&rdquo;
          </p>
        </motion.div>

        {/* 8. Bottom Navigation to Next Project */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="w-full flex flex-col items-center pt-8 border-t border-white/5 antialiased"
        >
          <span className="text-[10px] tracking-[0.18em] text-white/35 uppercase mb-4">
            Next Project
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col items-center text-center"
          >
            <h2 className="font-quicksand text-[28px] md:text-[42px] font-[200] tracking-[0.06em] uppercase text-white/50 group-hover:text-white transition-colors duration-300">
              {nextProject.title}
            </h2>
            <span className="text-[11px] tracking-[0.15em] text-white/30 uppercase mt-4 group-hover:text-white/60 transition-colors duration-300 pb-0.5 border-b border-white/10 group-hover:border-white/30">
              View Project <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
            </span>
          </Link>
        </motion.div>

      </div>
    </motion.main>
  );
}
