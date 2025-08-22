
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Intro({ duration = 15000 }: { duration?: number }){
  const [show, setShow] = useState(true);
  useEffect(()=>{
    const t = setTimeout(()=>setShow(false), duration);
    return ()=>clearTimeout(t);
  },[duration]);
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070707]">
          <div className="absolute inset-0 pointer-events-none" style={{background:
            'radial-gradient(600px 200px at 10% 0%, rgba(212,175,55,0.12), transparent), radial-gradient(400px 160px at 90% 20%, rgba(255,204,102,0.10), transparent)'}}/>
          <motion.div initial={{opacity:1}} animate={{opacity:1}} className="flex flex-col items-center gap-6">
            <motion.svg width="220" height="220" viewBox="0 0 100 100" className="drop-shadow-[0_0_25px_rgba(255,204,102,0.25)]">
              <defs>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#ffcc66" />
                </linearGradient>
              </defs>
              <motion.path d="M50 8 C72 8 92 24 92 48 C92 74 72 92 50 92 C28 92 8 74 8 48 C8 24 28 8 50 8 Z"
                fill="none" stroke="url(#gold)" strokeWidth="2.5" strokeDasharray="300"
                initial={{strokeDashoffset:300}} animate={{strokeDashoffset:0}}
                transition={{duration:9, ease:'easeInOut'}}/>
              <motion.path d="M56 30 H40 a14 14 0 1 0 0 40 h20 v-16 h-12"
                fill="none" stroke="url(#gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="200" initial={{strokeDashoffset:200}} animate={{strokeDashoffset:0}}
                transition={{duration:6, delay:9, ease:'easeInOut'}}/>
            </motion.svg>
            <motion.div initial={{opacity:0, filter:'blur(6px)'}} animate={{opacity:1, filter:'blur(0px)'}} transition={{duration:1.2, delay:12.2}} className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gold-text mb-2">GUT GROUP</h1>
              <p className="text-[16px] md:text-[18px] text-[#bbbbbb]">Technologia • Drony • Moto — standard premium</p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
