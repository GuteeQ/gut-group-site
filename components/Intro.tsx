'use client';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

type Props = {
  duration?: number;      // łączny czas intro (ms)
  logoSrc?: string;       // ścieżka do logo w /public
  onFinish?: () => void;  // callback po zakończeniu
};

export default function Intro({
  duration = 15000,
  logoSrc = '/logo.svg',
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
    // pozwól pominąć po 2 s
    const s = setTimeout(() => setCanSkip(true), 2000);
    // automatyczne zamknięcie po 'duration'
    const t = setTimeout(finish, duration);
    // ESC = pomiń
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && canSkip && finish();
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(s);
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [duration, finish, canSkip]);

  // dla osób z ograniczonymi animacjami — skracamy do 1s i bez rysowania
  const drawTotal = prefersReduced ? 0 : 15000;
  const circleDur = prefersReduced ? 0 : 9000;
  const gDur = prefersReduced ? 0 : 6000;
  const gDelay = prefersReduced ? 0 : 9000;
  const logoDelay = prefersReduced ? 0 : 12200;

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
          {/* złote poświaty w tle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(600px 200px at 10% 0%, rgba(212,175,55,0.12), transparent), radial-gradient(420px 180px at 90% 20%, rgba(255,204,102,0.10), transparent)',
            }}
          />
          <motion.div className="flex flex-col items-center gap-6">
            {/* animowane rysowanie znaku (placeholder kształtu) */}
            <motion.svg
              width="220"
              height="220"
              viewBox="0 0 100 100"
              className="drop-shadow-[0_0_25px_rgba(255,204,102,0.25)]"
            >
              <defs>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#ffcc66" />
                </linearGradient>
              </defs>
              <motion.path
                d="M50 8 C72 8 92 24 92 48 C92 74 72 92 50 92 C28 92 8 74 8 48 C8 24 28 8 50 8 Z"
                fill="none"
                stroke="url(#gold)"
                strokeWidth="2.5"
                strokeDasharray="300"
                initial={{ strokeDashoffset: 300 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: circleDur / 1000, ease: 'easeInOut' }}
              />
              <motion.path
                d="M56 30 H40 a14 14 0 1 0 0 40 h20 v-16 h-12"
                fill="none"
                stroke="url(#gold)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: gDur / 1000, delay: gDelay / 1000, ease: 'easeInOut' }}
              />
            </motion.svg>

            {/* prawdziwe logo SVG z /public po „rysowaniu” */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(6px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: prefersReduced ? 0.2 : 1.2, delay: logoDelay / 1000 }}
              className="text-center"
            >
              <motion.img
                src={logoSrc}
                alt="GUT GROUP logo"
                className="w-24 h-24 mx-auto mb-3"
                initial={{ scale: 0.94 }}
                animate={{ scale: [0.94, 1, 0.995, 1] }}
                transition={{ duration: 1.4, times: [0, 0.5, 0.8, 1] }}
              />
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gold-text mb-2">
                GUT GROUP
              </h1>
              <p className="text-[16px] md:text-[18px] text-[#bbbbbb]">
                Technologia • Drony • Moto — standard premium
              </p>

              {/* subtelny złoty glow pulsujący pod logo */}
              <motion.div
                className="mx-auto mt-4 h-10 w-56 rounded-full blur-2xl"
                style={{ background: 'linear-gradient(120deg,#d4af37,#ffcc66)', opacity: 0.25 }}
                animate={{ opacity: [0.18, 0.28, 0.18] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

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
