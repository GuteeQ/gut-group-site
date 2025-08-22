
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'GUT GROUP — Tech • Drones • Automotive',
  description: 'Nowoczesna firma łącząca świat technologii, dronów i motoryzacji.',
};

const Nav = () => (
  <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-[#151515]">
    <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="GUT GROUP" className="w-9 h-9 rounded-xl" />
        <div className="gold-text text-lg">GUT GROUP</div>
      </div>
      <nav className="hidden md:flex items-center gap-2">
        <Link className="navbtn" href="/">Strona główna</Link>
        <Link className="navbtn" href="/projekty">Projekty</Link>
        <Link className="navbtn" href="/onas">O nas</Link>
        <Link className="navbtn" href="/kontakt">Kontakt</Link>
        <Link className="navbtn" href="/sklep">Sklep</Link>
      </nav>
      <div className="flex items-center gap-2">
        <a href="https://wa.me/48666290386" target="_blank" className="hidden md:inline px-4 py-2 rounded-xl font-semibold gradient-gold text-black">WhatsApp</a>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-[#151515] py-8 text-sm text-[#a9a9a9]">
    <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-6">
      <div>
        <div className="gold-text mb-2">GUT GROUP</div>
        <div>GUT GROUP Sp. z o.o.</div>
        <div>ul. Przykładowa 1</div>
        <div>00-000 Warszawa</div>
      </div>
      <div>
        <div className="mb-2">Nawigacja</div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/" className="underline-offset-4 hover:underline">Strona główna</Link>
          <Link href="/projekty" className="underline-offset-4 hover:underline">Projekty</Link>
          <Link href="/onas" className="underline-offset-4 hover:underline">O nas</Link>
          <Link href="/kontakt" className="underline-offset-4 hover:underline">Kontakt</Link>
          <Link href="/sklep" className="underline-offset-4 hover:underline">Sklep</Link>
        </div>
      </div>
      <div>
        <div className="mb-2">Kontakt</div>
        <div className="flex flex-col gap-2">
          <a href="mailto:biuro@gutgroup.pl" className="underline-offset-4 hover:underline">biuro@gutgroup.pl</a>
          <a href="https://wa.me/48666290386" target="_blank" className="underline-offset-4 hover:underline">WhatsApp</a>
          <a href="https://www.linkedin.com/in/wiktor-gut-23ab7a2a9" target="_blank" className="underline-offset-4 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-5 mt-6 text-xs text-[#6f6f6f]">© {new Date().getFullYear()} GUT GROUP</div>
  </footer>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Nav />
        <main className="max-w-7xl mx-auto px-5 py-10 md:py-14">{children}</main>
        <Footer />
        <a href="https://wa.me/48666290386" target="_blank" className="fixed right-5 bottom-5 px-4 py-3 rounded-2xl font-semibold shadow-lg border border-[#2a2a2a] gradient-gold text-black">WhatsApp</a>
      </body>
    </html>
  );
}
