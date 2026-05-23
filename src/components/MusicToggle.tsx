"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { subscribeToMusicState, toggleMusic } from "@/lib/music";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Subscribe to single global playback state changes for real-time UI synchronization
    const unsubscribe = subscribeToMusicState((state) => {
      setIsPlaying(state);
    });

    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    toggleMusic();
  };

  // Prevent hydration mismatch by rendering a matching structural shell until client-side hydration completes
  if (!mounted) {
    return (
      <div className="flex items-center gap-2.5 p-6 md:p-8 select-none opacity-30">
        <Icon icon="lucide:volume-x" className="w-3.5 h-3.5 text-neutral-600" />
        <div className="h-5 w-10 rounded-full border border-neutral-800 bg-neutral-950 p-0.5" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 p-6 md:p-8 select-none">
      {/* Subtle audio waves icon */}
      <Icon
        icon={isPlaying ? "lucide:volume-2" : "lucide:volume-x"}
        className={`w-3.5 h-3.5 transition-colors duration-500 ${
          isPlaying ? "text-[#d8d8d8] opacity-80" : "text-[#5f5f5f] opacity-40"
        }`}
      />

      <button
        onClick={handleToggle}
        className={`group relative flex h-5 w-10 cursor-pointer items-center rounded-full border p-0.5 transition-all duration-500 focus:outline-none ${
          isPlaying
            ? "border-[#d8d8d8]/30 bg-neutral-900 shadow-[0_0_12px_rgba(255,255,255,0.05)]"
            : "border-neutral-800 bg-neutral-950 opacity-50 hover:opacity-80"
        }`}
        aria-label="Toggle ambient audio loop"
      >
        <motion.div
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className={`h-3.5 w-3.5 rounded-full transition-colors duration-500 ${
            isPlaying ? "bg-[#d8d8d8]" : "bg-neutral-600 group-hover:bg-neutral-400"
          }`}
          style={{
            marginLeft: isPlaying ? "auto" : "0",
            marginRight: isPlaying ? "0" : "auto",
          }}
        />
      </button>
    </div>
  );
}
