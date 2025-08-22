'use client';
import Intro from '../components/Intro';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fakeClients = ['GUTCODE', 'BRAK'];

export default function Page() {
  return (
    <div className="relative">
      <Intro />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* LEWA — tekst */}
        <div>
          <div className="uppercase tracking-[.35em] text-sm text-[#b9a15a] mb-4">
            Technologia • Drony • Moto
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6">
            Łączymy trzy światy w jedną, <span className="gold-text">luksusową</span> markę
          </h1>
          <p className="mb-8 text-[#c9c9c9]">
            GUT GROUP to nowoczesna firma łącząca świat technologii, dronów i motoryzacji.
            Zajmujemy się tworzeniem aplikacji mobilnych i stron internetowych, realizujemy ujęcia dronem
            oraz produkujemy unikalny content motoryzacyjny. Już wkrótce otwieramy sklep z akcesoriami oraz budujemy
            społeczność pasjonatów motoryzacji. 🚀
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" className="px-5 py-3 rounded-xl font-semibold gradient-gold text-black">Napisz do nas</Link>
            <Link href="/projekty" className="px-5 py-3 rounded-xl font-semibold border border-[#2a2a2a] hover:border-[#3a3a3a]">Wyceń swój pomysł</Link>
          </div>

          <div className="mt-10 text-sm text-[#9f9f9f]">Zaufali nam:</div>
          <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-3 opacity-80">
            {fakeClients.map(c => (
              <div key={c} className="text-center px-3 py-2 rounded-lg border border-[#1f1f1f] bg-[#121212]">
                <span className="text-xs tracking-widest">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PRAWA — DUŻE pływające logo, bez napisu */}
        <div className="relative h-[360px] md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl border border-[#1f1f1f] bg-[#121212] overflow-hidden flex items-center justify-center">
            {/* złota poświata pod logo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(560px 260px at 50% 45%, rgba(212,175,55,0.12), transparent), radial-gradient(520px 300px at 60% 60%, rgba(255,204,102,0.08), transparent)',
              }}
            />
            <motion.img
              src="/logo.png"
              alt="GUT GROUP"
              className="mx-auto"
              // bardzo duże, ale z limitem szerokości
              style={{ width: 'min(90%, 560px)', height: 'auto', objectFit: 'contain' }}
              initial={{ y: 10, opacity: 0.95, scale: 0.98 }}
              animate={{ y: [10, -10, 10], opacity: 1, scale: 1 }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </div>
      </div>

      {/* PROJEKTY */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Nasze projekty</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { k: 'gutcode', name: 'GUTCODE.PL', tag: 'Aplikacje mobilne i strony internetowe.', href: '/projekty' },
            { k: 'latamy',  name: 'LATAMYWYSOKO.PL', tag: 'Usługi dronem w całej Polsce.', href: '/projekty' },
            { k: 'moto',    name: 'GEAR UP', tag: 'Społeczność, zloty, akcesoria.', href: '/projekty' },
            { k: 'detail',  name: 'GUT GARAGE', tag: 'Detailing / ochrona lakieru (wkrótce)', href: '/projekty' }
          ].map(p => (
            <div key={p.k} className="card hover:-translate-y-1 transition-transform">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs tracking-widest text-[#b9a15a]">Projekt</div>
                  <div className="text-xl md:text-2xl font-bold mt-1">{p.name}</div>
                  <div className="text-sm text-[#bdbdbd] mt-1">{p.tag}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Link href={p.href} className="text-sm px-4 py-2 rounded-lg border border-[#2a2a2a]">Szczegóły</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
