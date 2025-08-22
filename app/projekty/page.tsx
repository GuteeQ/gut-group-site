
'use client';
import Link from 'next/link';

const projects = [
  { key:'gutcode', name:'GUTCODE.PL', desc:'Aplikacje mobilne i nowoczesne strony WWW. Wydajność, UI/UX, skalowalność.', url:'https://gutcode.pl' },
  { key:'latamy', name:'LATAMYWYSOKO.PL', desc:'Inspekcje, ujęcia reklamowe, nieruchomości i eventy – dronem w całej Polsce.', url:'https://latamywysoko.pl' },
  { key:'moto', name:'GUT MOTO Community', desc:'Budujemy społeczność motoryzacyjną, zloty i akcesoria (wkrótce).', url:null },
  { key:'detail', name:'GUT Detailing', desc:'Detailing / ochrona lakieru — start w przygotowaniu.', url:null },
];

export default function Page(){
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Nasze projekty</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.key} className="card">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs tracking-widest text-[#b9a15a]">Projekt</div>
                <div className="text-xl md:text-2xl font-bold mt-1">{p.name}</div>
              </div>
              {!p.url && <div className="text-[10px] px-2 py-1 rounded-md border border-[#3a3a3a] text-[#b7b7b7]">Wkrótce</div>}
            </div>
            <p className="mt-4 text-[#cfcfcf]">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              {p.url ? (
                <a href={p.url} target="_blank" className="px-4 py-2 rounded-lg gradient-gold text-black">Przejdź do strony projektu</a>
              ) : (
                <span className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-[#9e9e9e]">Strona w przygotowaniu</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/" className="underline-offset-4 hover:underline">Wróć</Link>
      </div>
    </div>
  );
}
