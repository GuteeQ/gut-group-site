'use client';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

type Props = {
  logoDuration?: number;   // ms – czas wjazdu logo (ETAP 1)
  textDuration?: number;   // ms – czas wyświetlenia napisu (ETAP 2)
  logoSrc?: string;
  onFinish?: () => void;
};

export default function Intro({
  logoDuration = 5000,
  textDuration = 5000,
  logoSrc = '/logo.png',
  onFinish,
}: Props) {
  const [show, setShow] = useState(true);
  const [stage, setStage] = useState<'logo' | 'text'>('logo');
  const [canSkip, setCanSkip] = useState(false);
  const prefersReduced = useReducedMotion();

  const finish = useCallback(() => {
    setShow(false);
    onFinish?.();
  }, [onFinish]);

  useEffect(() => {
    const s = setTimeout(() => setCanSkip(true), 1000);
    const toText = setTimeout(() => setStage('text'), prefersReduced ? 200 : logoDuration);
    const end = setTimeout(
      finish,
      (prefersReduced ? 200 : logoDuration) + (prefersReduced ? 500 : textDuration)
    );
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && canSkip && finish();
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(s); clearTimeout(toText); clearTimeout(end); window.removeEventListener('keydown', onKey); };
  }, [logoDuration, textDuration, prefersReduced, canSkip, finish]);

  const logoAnim = prefersReduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { y: 40, opacity: 0, scale: 0.9 }, animate: { y: 0, opacity: 1, scale: 1 } };

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
          {/* subtelna złota poświata */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(680px 260px at 20% 0%, rgba(212,175,55,0.12), transparent), radial-gradient(560px 240px at 80% 20%, rgba(255,204,102,0.10), transparent)',
            }}
          />

          <div className="text-center px-6">
            {/* ETAP 1: logo — duże i wyraźne */}
            <motion.img
              src={logoSrc}
              alt="GUT GROUP logo"
              className="mx-auto mb-6"
              style={{
                width: 'min(70vw, 360px)',   // duże na wejściu
                height: 'auto',
                objectFit: 'contain',
              }}
              initial={logoAnim.initial}
              animate={logoAnim.animate}
              transition={{ duration: prefersReduced ? 0.25 : logoDuration / 1000, ease: 'easeOut' }}
            />

            {/* Komunikat ładowania tylko w ETAPIE 1 */}
            {stage === 'logo' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-[#bdbdbd]"
              >
                Ładowanie strony…
              </motion.div>
            )}

            {/* ETAP 2: napisy pod logo */}
            <AnimatePresence>
              {stage === 'text' && (
                <motion.div
                  key="caption"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gold-text mb-2">
                    GUT GROUP
                  </h1>
                  <p className="text-[16px] md:text-[18px] text-[#bbbbbb]">
                    Technologia • Drony • Moto — standard premium
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* delikatny glow pod logo */}
            <motion.div
              className="mx-auto mt-5 h-10 w-[280px] md:w-[360px] rounded-full blur-2xl"
              style={{ background: 'linear-gradient(120deg,#d4af37,#ffcc66)', opacity: 0.24 }}
              animate={prefersReduced ? { opacity: 0.22 } : { opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </div>

          {/* Pomiń intro */}
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
