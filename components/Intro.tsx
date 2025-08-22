'use client';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

type Props = {
  duration?: number;      // jak długo intro jest widoczne
  logoSrc?: string;       // ścieżka do logo w /public
  onFinish?: () => void;  // callback po zakończeniu
};

export default function Intro({
  duration = 8000,
  logoSrc = '/logo.png',
  onFinish,
}: Props) {
  const [show, setShow] = useState(true);
  const [canSkip, setCanSkip] = useState(false);
  const prefersReduced = useReducedMotion();

  const finish = useCallback(() => {
    setShow(false);
    onFinish?.();
  }, [onFinish]);

  useEffect(() => {
    const s = setTimeout(() => setCanSkip(true), 1200); // po ~1.2s można pominąć
    const t = setTimeout(finish, duration);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && canSkip && finish();
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(s); clearTimeout(t); window.removeEventListener('keydown', onKey); };
  }, [duration, finish, canSkip]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070707]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden
        >
          {/* subtelne złote poświaty */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(560px 220px at 15% 0%, rgba(212,175,55,0.12), transparent), radial-gradient(460px 200px at 85% 20%, rgba(255,204,102,0.10), transparent)',
            }}
          />

          <div className="text-center px-6">
            {/* LOGO — powolny wjazd + fade/scale */}
            <motion.img
              src={logoSrc}
              alt="GUT GROUP logo"
              className="mx-auto mb-4"
              style={{ width: 120, height: 120, objectFit: 'contain' }}
              initial={prefersReduced ? { opacity: 0 } : { y: 30, opacity: 0, scale: 0.96 }}
              animate={prefersReduced ? { opacity: 1 } : { y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: prefersReduced ? 0.25 : 1.6, ease: 'easeOut' }}
            />

            {/* napisy */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight gold-text mb-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReduced ? 0.05 : 0.3 }}
            >
              GUT GROUP
            </motion.h1>
            <motion.p
              className="text-[16px] md:text-[18px] text-[#bbbbbb]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: prefersReduced ? 0.1 : 0.45 }}
            >
              Technologia • Drony • Moto — standard premium
            </motion.p>

            {/* delikatny glow pod logo */}
            <motion.div
              className="mx-auto mt-4 h-10 w-56 rounded-full blur-2xl"
              style={{ background: 'linear-gradient(120deg,#d4af37,#ffcc66)', opacity: 0.25 }}
              animate={prefersReduced ? { opacity: 0.22 } : { opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </div>

          {/* przycisk „Pomiń intro” */}
          {canSkip && (
            <button
              onClick={finish}
              className="absolute right-5 bottom-5 px-4 py-2 rounded-xl border border-[#2a2a2a] text-sm hover:border-[#3a3a3a]"
            >
              Pomiń intro (Esc)
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
