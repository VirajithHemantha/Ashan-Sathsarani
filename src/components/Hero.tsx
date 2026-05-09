import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ivory/50">

      {/* Background Image with Parallax & Elegant Overlay */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: y1, scale }}
      >
        <img
          src="/pre/FB_IMG_1777906609176.jpg.jpeg"
          className="w-full h-full object-cover"
          alt="Wedding Background"
        />
        {/* Subtle Dark Overlay to balance visibility and readability */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Central Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="text-[9px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[1em] text-brand-primary-light font-bold mb-8 sm:mb-12 block drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.8em" }}
          transition={{ delay: 1, duration: 2 }}
        >
          Save the Date
        </motion.span>

        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white text-5xl sm:text-8xl lg:text-[9rem] font-display tracking-tight sm:tracking-normal drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] mb-8 sm:mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-brand-primary-light/40 uppercase tracking-[0.15em] sm:tracking-widest">
            Hasintha
          </span>
          <span className="italic font-light text-brand-primary-light text-4xl sm:text-6xl lg:text-7xl drop-shadow-[0_0_20px_rgba(70,130,180,0.4)] leading-none select-none">
            &
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-brand-primary-light/40 uppercase tracking-[0.15em] sm:tracking-widest">
            Sithara
          </span>
        </h1>

        <motion.div
          className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary-light to-transparent mx-auto mt-6 mb-10 sm:mb-12 shadow-[0_0_20px_rgba(70,130,180,0.8)]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "6rem", opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        />

        <div className="space-y-4 sm:space-y-6">
          <motion.p
            className="text-white font-serif italic text-xl sm:text-3xl tracking-[0.15em] sm:tracking-[0.3em] drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            27 . 07 . 2026
          </motion.p>

          <motion.span
            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/80 font-medium block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.5 }}
          >
            Shamia Hotel • Mirigama
          </motion.span>
        </div>
      </motion.div>

      {/* Persistent subtle falling petals in background */}
      <div className="absolute inset-0 z-[5] opacity-60">
        <FloatingPetals />
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.4em] text-blue-100 font-semibold drop-shadow-md">Discover</span>
        <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-brand-primary/60 to-transparent animate-bounce" />
      </motion.div>

    </div>
  );
};
