import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { submitToGoogleSheet } from '../googleSheets';
import { MessageSquare, Send, CheckCircle, Loader2, Sparkles } from 'lucide-react';

export const Guestbook: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitToGoogleSheet('wish', {
        name: formData.name,
        message: formData.message,
        timestamp: new Date().toLocaleString(),
      });

      setStatus('success');
      setFormData({ name: '', message: '' });

      // Reset status after 5 seconds to allow more messages
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending wish:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 relative py-16">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-primary/60" />
            <MessageSquare className="w-5 h-5 text-brand-primary" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-primary/60" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-display text-stone-800 tracking-tight mb-4 drop-shadow-sm">
            Wedding <span className="italic text-brand-primary font-light">Wishes</span>
          </h2>
          <p className="text-stone-500/90 font-serif text-lg italic max-w-lg mx-auto leading-relaxed">
            Your warm blessings mean the world to us. Please leave a message for us to cherish as we begin our forever.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="bg-white/60 backdrop-blur-3xl p-8 sm:p-12 rounded-[2.5rem] border border-white shadow-[0_30px_60px_rgba(150,123,182,0.1)] overflow-hidden relative">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary/20 via-brand-primary to-brand-primary/20" />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-display text-stone-800 mb-2">Thank You!</h3>
                <p className="text-stone-500 font-serif italic text-lg">Your beautiful message has been saved in our hearts.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary/70 mb-3 ml-2">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="E.g., John Doe"
                    className="w-full bg-white/80 px-6 py-4 rounded-full border border-brand-primary/20 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/40 outline-none transition-all duration-300 font-serif italic text-lg shadow-inner placeholder:text-stone-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Sparkles className="absolute right-6 top-[3.25rem] w-4 h-4 text-brand-primary/20" />
                </div>

                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary/70 mb-3 ml-2">Message & Wishes</label>
                  <textarea
                    required
                    placeholder="Write your message here..."
                    className="w-full bg-white/80 px-8 py-6 rounded-[2rem] border border-brand-primary/20 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary/40 outline-none transition-all duration-300 h-40 resize-none font-serif italic text-lg shadow-inner placeholder:text-stone-300"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="pt-4">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-brand-primary text-white py-5 rounded-full font-sans tracking-[0.4em] font-bold text-[11px] uppercase hover:bg-brand-primary-deep transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 group"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Send Wishes</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
