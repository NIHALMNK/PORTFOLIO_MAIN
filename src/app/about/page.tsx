"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" as const } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      className="w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 lg:pt-24 pb-24 text-white/80 overflow-x-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Asymmetrical Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-20 items-start w-full">
          
          {/* LEFT COLUMN: 60% Width (col-span-7) */}
          <div className="lg:col-span-7 w-full flex flex-col items-start">
            
            {/* Header / Title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="w-full mb-10 lg:mb-14"
            >
              <span className="text-[10px] md:text-[11px] font-[200] tracking-[0.2em] text-white/35 uppercase block mb-3 antialiased">
                01 / OVERVIEW
              </span>
              <h1 className="font-klee text-[56px] md:text-[80px] lg:text-[100px] xl:text-[112px] font-[300] tracking-[0.06em] leading-[0.95] text-white/90 antialiased select-none uppercase">
                About
              </h1>
              <div className="w-full max-w-[120px] h-[1px] bg-white/20 mt-6" />
            </motion.div>

            {/* Intro text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="w-full mb-10 lg:mb-14"
            >
              <p className="font-klee italic text-[22px] md:text-[26px] lg:text-[28px] leading-[1.5] text-white/90 tracking-wide max-w-[660px] antialiased">
                I design and build full-stack web applications for real-world use.
              </p>
            </motion.div>

            {/* MOBILE ONLY PORTRAIT IMAGE (Positioned between Intro and Story) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="block lg:hidden w-full mb-12"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-950 border border-white/5">
                <Image
                  src="/about_portrait.png"
                  alt="Mohammed Nihal portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover grayscale contrast-[1.12] brightness-[0.92]"
                />
              </div>
            </motion.div>

            {/* Detailed Story / Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col space-y-8 text-[14px] md:text-[15px] leading-[2.1] text-white/55 font-[300] tracking-[0.03em] max-w-[620px] mb-12 antialiased"
            >
              <motion.p variants={fadeUp}>
                I started building software in 2023, driven by curiosity and a determination to understand how the web works end to end. What began with learning core programming concepts and building small projects quickly turned into designing and developing real websites and applications. I wasn&apos;t interested in just learning syntax—I wanted to build things that actually worked and could be used by others.
              </motion.p>
              <motion.p variants={fadeUp}>
                Over time, this led me into full-stack development and freelance work, where I&apos;ve collaborated with small businesses, startups, and individuals. I&apos;ve worked on e-commerce platforms, landing pages, business websites, and personal portfolios, handling both complete builds and specific parts of larger projects. My work spans frontend, backend, and databases, along with authentication, payments, APIs, and real-time features.
              </motion.p>
              <motion.p variants={fadeUp}>
                What motivates me most is building clean, fast, and reliable web applications that serve a real purpose. I focus on clear UI, performance, and shipping efficiently—learning from real usage and improving through iteration. For me, development isn&apos;t about flashy demos or buzzwords, but about delivering practical solutions that work in the real world.
              </motion.p>
            </motion.div>

            {/* Philosophy Quote Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full flex flex-col items-start mb-16 antialiased"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] font-[300] tracking-[0.18em] text-white/40 uppercase mb-4"
              >
                This is how I approach building software:
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="w-full max-w-[620px] py-8 border-y border-white/10 my-2"
              >
                <p className="font-klee italic text-[20px] md:text-[24px] lg:text-[28px] leading-[1.6] text-white/95 tracking-wide">
                  &ldquo;I don&apos;t build features just because they&apos;re possible. I build only what needs to exist.&rdquo;
                </p>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[14px] md:text-[15px] leading-[2] text-white/50 font-[300] max-w-[620px]"
              >
                I&apos;m not interested in writing code for the sake of complexity or visual appeal alone. Every decision I make—architecture, features, performance—is driven by real use cases and real constraints. I focus on building software that solves actual problems, scales when needed, and delivers measurable value in the real world.
              </motion.p>
            </motion.div>

            {/* Divider line */}
            <div className="w-full max-w-[620px] h-[1px] bg-white/10 mb-16" />

            {/* Experience Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full flex flex-col items-start mb-16 antialiased"
            >
              <motion.span
                variants={fadeUp}
                className="text-[10px] md:text-[11px] font-[200] tracking-[0.2em] text-white/35 uppercase block mb-3"
              >
                02 / HISTORY
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-quicksand text-[24px] lg:text-[28px] font-[200] tracking-[0.08em] uppercase text-white/90 mb-8"
              >
                Experience
              </motion.h2>

              <motion.div variants={fadeUp} className="w-full max-w-[620px]">
                <h3 className="text-[14px] md:text-[15px] font-[400] text-white/85 uppercase tracking-wider mb-2">
                  Self-Taught Full-Stack Developer
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[1.7] text-white/50 font-[300] mb-6">
                  1+ year of hands-on freelance experience building real-world web applications for small businesses, startups, and individual clients.
                </p>

                <p className="text-[13px] md:text-[14px] font-[400] text-white/70 uppercase tracking-wide mb-4">
                  Within this experience, I have worked on:
                </p>

                <ul className="space-y-4 text-[13px] md:text-[14px] leading-[1.8] text-white/60 font-[300] pl-1">
                  {[
                    "Building responsive front-end interfaces using React, Next.js, HTML, CSS, and Tailwind",
                    "Developing back-end systems with Node.js, Express, REST APIs, and authentication",
                    "Working with databases including MongoDB and SQL-based systems",
                    "Delivering complete projects independently—from planning and development to deployment",
                    "Collaborating with non-technical clients to translate business needs into functional products",
                    "Maintaining and improving existing applications based on real user feedback",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-white/20 mt-1 select-none font-serif">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Divider line */}
            <div className="w-full max-w-[620px] h-[1px] bg-white/10 mb-16" />

            {/* Technical Focus Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full flex flex-col items-start mb-16 antialiased"
            >
              <motion.span
                variants={fadeUp}
                className="text-[10px] md:text-[11px] font-[200] tracking-[0.2em] text-white/35 uppercase block mb-3"
              >
                03 / ALIGNMENT
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-quicksand text-[24px] lg:text-[28px] font-[200] tracking-[0.08em] uppercase text-white/90 mb-8"
              >
                Technical Focus
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[14px] md:text-[15px] leading-[2] text-white/55 font-[300] max-w-[620px] mb-8"
              >
                Rather than chasing every trending framework, I focus my studies and architectural decisions on foundational software principles: clean abstraction boundaries, strong typing, stateless logic, and high-performance I/O loops.
              </motion.p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-[620px]">
                {[
                  { title: "MERN Stack", desc: "Solid experience in MongoDB, Express, React, and Node.js." },
                  { title: "Real-time systems", desc: "Event-driven asynchronous networking and socket loops." },
                  { title: "APIs & Auth", desc: "Secure endpoint design, session management, and JWT flows." },
                  { title: "Architecture", desc: "Clean modular separation of concerns and database models." },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex flex-col items-start">
                    <h4 className="text-[13px] font-[400] text-white/80 uppercase tracking-wider mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[12px] leading-[1.6] text-white/45 font-[300]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Closing / Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="w-full flex flex-col items-start pt-4 antialiased"
            >
              <p className="font-klee italic text-[18px] md:text-[20px] leading-[1.6] text-white/85 max-w-[620px] mb-8">
                Let&apos;s build something that serves a clear, practical purpose in the real world.
              </p>
              <Link
                href="/contact"
                className="group relative text-[13px] font-[400] text-white/70 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300 antialiased"
              >
                Get in touch
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/40 transition-colors duration-300" />
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 40% Width (col-span-5) - Desktop Sticky Only */}
          <div className="hidden lg:block lg:col-span-5 w-full lg:sticky lg:top-24 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[460px] aspect-[4/5] overflow-hidden bg-neutral-950 border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.3)] group"
            >
              <Image
                src="/about_portrait.png"
                alt="Mohammed Nihal portrait"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                className="object-cover grayscale contrast-[1.12] brightness-[0.92] transition-all duration-700 group-hover:scale-[1.02] group-hover:contrast-[1.20]"
              />
            </motion.div>
            
            {/* Minimal editorial tag under the image */}
            <div className="w-full max-w-[460px] flex justify-between items-center mt-4 text-[10px] tracking-[0.15em] text-white/25 uppercase font-[300]">
              <span>Mohammed Nihal</span>
              <span>Based in India</span>
            </div>
          </div>

        </div>
      </div>
    </motion.main>
  );
}
