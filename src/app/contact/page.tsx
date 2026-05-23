"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import FooterLinks from "@/components/sections/FooterLinks";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const contactLinks = [
    { label: "Email", icon: "mdi:email-outline", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "LinkedIn", icon: "mdi:linkedin", value: "mohammednihalk6061", href: siteConfig.linkedin },
    { label: "GitHub", icon: "mdi:github", value: "NIHALMNK", href: siteConfig.github },
    { label: "Instagram", icon: "mdi:instagram", value: "@nihal_mnk", href: siteConfig.instagram },
  ];

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
          CONTACT
        </h1>
        <p className="mt-4 text-xs md:text-sm tracking-[0.2em] font-light text-neutral-500 uppercase">
          Let&apos;s Build Something Scalable
        </p>
        <div className="w-full h-[1px] bg-neutral-900 mt-12 mb-16" />
      </div>

      {/* Contact Content Grid */}
      <div className="px-6 md:px-12 lg:px-20 w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Direct Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 flex flex-col gap-10"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-[10px] tracking-[0.3em] font-light text-neutral-500 uppercase">
                INQUIRIES & COLLABORATION
              </h2>
              <p className="text-xs md:text-[13px] text-neutral-500 leading-relaxed font-light tracking-wide max-w-md">
                I am currently open to freelance opportunities, contract MERN stack roles, and backend architectural consulting. Feel free to reach out via email or any of my professional channels.
              </p>
            </div>

            {/* Structured Contact Link Cards */}
            <div className="flex flex-col gap-6">
              {contactLinks.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between py-4 border-b border-neutral-950 hover:border-neutral-900/60 transition-colors duration-300 w-full"
                  >
                    <div className="flex items-center gap-4">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-300 transition-colors duration-300" />
                      <div className="flex flex-col">
                        <span className="text-[10px] tracking-[0.2em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300 uppercase">
                          {item.label}
                        </span>
                        <span className="text-xs md:text-sm font-light text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 mt-1">
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <Icon icon="feather:arrow-up-right" className="w-3.5 h-3.5 text-neutral-700 group-hover:text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Mini Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 flex flex-col gap-8 w-full max-w-md lg:pt-0"
          >
            <h2 className="text-[10px] tracking-[0.3em] font-light text-neutral-500 uppercase">
              SEND A DIRECT MESSAGE
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-1 border-b border-neutral-950 pb-2 focus-within:border-neutral-800 transition-colors duration-300">
                <label htmlFor="name" className="text-[8px] tracking-[0.2em] text-neutral-600 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  autoComplete="off"
                  className="bg-transparent border-none text-neutral-300 text-xs font-light tracking-wide focus:outline-none w-full h-8 pt-1"
                />
              </div>

              <div className="flex flex-col gap-1 border-b border-neutral-950 pb-2 focus-within:border-neutral-800 transition-colors duration-300">
                <label htmlFor="email" className="text-[8px] tracking-[0.2em] text-neutral-600 uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="off"
                  className="bg-transparent border-none text-neutral-300 text-xs font-light tracking-wide focus:outline-none w-full h-8 pt-1"
                />
              </div>

              <div className="flex flex-col gap-1 border-b border-neutral-950 pb-2 focus-within:border-neutral-800 transition-colors duration-300">
                <label htmlFor="message" className="text-[8px] tracking-[0.2em] text-neutral-600 uppercase">
                  Message Details
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  autoComplete="off"
                  className="bg-transparent border-none text-neutral-300 text-xs font-light tracking-wide focus:outline-none w-full resize-none pt-2 min-h-16"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full md:w-fit px-8 py-3 rounded-full border border-neutral-900 bg-neutral-950/20 hover:border-neutral-800 hover:text-neutral-200 text-[10px] tracking-[0.2em] font-light text-neutral-500 hover:bg-neutral-950 transition-all duration-300 uppercase"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Area */}
      <FooterLinks />
    </motion.main>
  );
}
