"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail } from "./actions";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ status: "success" | "error" | null; text: string }>({
    status: null,
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear feedback on type
    if (feedback.status) {
      setFeedback({ status: null, text: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ status: null, text: "" });

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setFeedback({ status: "success", text: result.message });
        // Clear form
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFeedback({ status: "error", text: result.message });
      }
    } catch (err) {
      setFeedback({
        status: "error",
        text: "Could not establish connection to the server action.",
      });
    } finally {
      setLoading(false);
    }
  };

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
        
        {/* Editorial Split Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start w-full">
          
          {/* LEFT COLUMN: col-span-5 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 w-full flex flex-col items-start"
          >
            <motion.span
              variants={fadeUp}
              className="text-[10px] md:text-[11px] font-[200] tracking-[0.2em] text-white/35 uppercase block mb-3 antialiased"
            >
              01 / GET IN TOUCH
            </motion.span>
            
            <motion.h1
              variants={fadeUp}
              className="font-quicksand text-[48px] md:text-[72px] lg:text-[100px] xl:text-[110px] font-[200] tracking-[0.08em] uppercase text-white/90 antialiased leading-none mb-8 select-none"
            >
              Contact
            </motion.h1>

            <motion.div variants={fadeUp} className="w-full h-[1px] bg-white/10 mb-8 lg:mb-12" />

            <motion.p
              variants={fadeUp}
              className="font-klee italic text-[18px] md:text-[22px] leading-[1.6] text-white/85 tracking-wide max-w-[460px] mb-12 antialiased"
            >
              Available for freelance work, collaborations, and backend-focused product development.
            </motion.p>

            {/* Quick Metadata Info */}
            <motion.div variants={fadeUp} className="space-y-6 w-full text-[13px] font-[300] tracking-[0.02em] text-white/60">
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase mb-1 font-[300]">Inquiries</span>
                <a
                  href="mailto:mohammednihal.dev@gmail.com"
                  className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/15 hover:decoration-white/30 transition-colors duration-300 antialiased"
                >
                  mohammednihal.dev@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase mb-1 font-[300]">Location</span>
                <span className="text-white/75">India / GMT +5:30 (Remote available)</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase mb-1 font-[300]">Availability</span>
                <span className="flex items-center gap-2 text-white/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active contracts open for Q2/Q3 2026
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (FORM): col-span-6 starting at col-7 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6 lg:col-start-7 w-full flex flex-col pt-4 lg:pt-16"
          >
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-8">
              
              {/* 1. Full Name */}
              <div className="flex flex-col w-full relative">
                <label className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2 font-[300]">
                  Full Name <span className="text-white/20">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="E.G. MOHAMMED NIHAL"
                  disabled={loading}
                  className="w-full bg-transparent rounded-none border-b border-t-0 border-x-0 border-white/10 focus:border-white/40 focus:ring-0 focus:outline-none text-[13px] text-white/80 placeholder:text-white/15 pb-3 transition-colors duration-300 uppercase tracking-wider font-[300]"
                />
              </div>

              {/* 2. Email */}
              <div className="flex flex-col w-full relative">
                <label className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2 font-[300]">
                  Email Address <span className="text-white/20">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E.G. NIHAL@EXAMPLE.COM"
                  disabled={loading}
                  className="w-full bg-transparent rounded-none border-b border-t-0 border-x-0 border-white/10 focus:border-white/40 focus:ring-0 focus:outline-none text-[13px] text-white/80 placeholder:text-white/15 pb-3 transition-colors duration-300 uppercase tracking-wider font-[300]"
                />
              </div>

              {/* 3. Phone */}
              <div className="flex flex-col w-full relative">
                <label className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2 font-[300]">
                  Phone Number <span className="text-white/20">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="E.G. +91 98765 43210"
                  disabled={loading}
                  className="w-full bg-transparent rounded-none border-b border-t-0 border-x-0 border-white/10 focus:border-white/40 focus:ring-0 focus:outline-none text-[13px] text-white/80 placeholder:text-white/15 pb-3 transition-colors duration-300 uppercase tracking-wider font-[300]"
                />
              </div>

              {/* 4. Message */}
              <div className="flex flex-col w-full relative">
                <label className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2 font-[300]">
                  Your Message <span className="text-white/20">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="DESCRIBE YOUR SYSTEM ARCHITECTURE OR PROJECT GOALS..."
                  disabled={loading}
                  className="w-full bg-transparent rounded-none border-b border-t-0 border-x-0 border-white/10 focus:border-white/40 focus:ring-0 focus:outline-none text-[13px] text-white/80 placeholder:text-white/15 pb-3 transition-colors duration-300 uppercase tracking-wider font-[300] resize-none leading-relaxed"
                />
              </div>

              {/* Inline Feedback Alerts */}
              <AnimatePresence mode="wait">
                {feedback.status && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`text-[12px] font-[300] tracking-wide ${
                      feedback.status === "success" ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {feedback.text}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="w-full pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative px-8 py-3.5 border border-white/10 hover:border-white/35 bg-transparent text-[11px] font-[400] text-white/70 hover:text-white uppercase tracking-[0.15em] transition-all duration-300 select-none cursor-pointer focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </motion.main>
  );
}
