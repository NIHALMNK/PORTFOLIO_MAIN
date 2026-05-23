"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="flex items-center justify-end p-6 md:p-8">
      <button
        onClick={() => setIsDark(!isDark)}
        className="group relative flex h-6 w-12 cursor-pointer items-center rounded-full border border-neutral-800 bg-neutral-950 p-0.5 transition-colors duration-300 hover:border-neutral-700"
        aria-label="Toggle visual mode"
      >
        <motion.div
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="h-4.5 w-4.5 rounded-full bg-neutral-400 group-hover:bg-neutral-200"
          style={{
            marginLeft: isDark ? "auto" : "0",
            marginRight: isDark ? "0" : "auto",
          }}
        />
      </button>
    </div>
  );
}
