import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          <div className="mb-12 sm:mb-16 relative group">
             {/* Beautiful ambient glow */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-gold/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />
             
             {/* Main Image Frame */}
             <div className="relative rounded-2xl overflow-hidden border-[8px] sm:border-[12px] border-white shadow-[0_20px_50px_rgba(70,130,180,0.15)] bg-brand-champagne transform transition-transform duration-700 group-hover:-translate-y-2">
               <img 
                 src="/WhatsApp Image 2026-06-10 at 14.48.13 (1).jpeg" 
                 alt="Our Story Collection" 
                 className="w-full h-auto object-cover max-h-[80vh] sm:max-h-[70vh]" 
               />
               <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] pointer-events-none" />
             </div>
          </div>
          
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-pink/60" />
            <Heart className="w-8 h-8 text-brand-pink fill-brand-pink/30 animate-pulse drop-shadow-sm" />
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-pink/60" />
          </div>
          
          <p className="text-3xl sm:text-5xl font-serif text-stone-800 leading-relaxed sm:leading-loose drop-shadow-sm max-w-3xl mx-auto px-4">
            අවුරුදු 7ක අපේ ආදර කතාවේ ♥️🥹<br/>
            ලස්සනම දවසට ආදරෙන් ආරධනා … ♥️💐🥹
          </p>
        </motion.div>
      </div>
    </div>
  );
};
