'use client';
import { useMemo, useState } from 'react';

export default function Page(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [msg,setMsg]=useState('');
  const mailto = useMemo(()=>{
    const subject = encodeURIComponent('GUT GROUP — zapytanie');
    const body = encodeURIComponent(`Imię i nazwisko: ${name}\nE‑mail: ${email}\n\nWiadomość:\n${msg}`);
    return `mailto:biuro@gutgroup.pl?subject=${subject}&body=${body}`;
  },[name,email,msg]);

  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mb-2">SKONTAKTUJ SIĘ Z NAMI</h2>
      <p className="mb-6 text-[#bdbdbd]">Jesteśmy dostępni od poniedziałku do piątku, 9:00 – 22:00</p>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="card">
          <form onSubmit={(e)=>{e.preventDefault(); window.location.href=mailto;}} className="grid gap-4">
            <label className="grid gap-2 text-sm"><span>IMIĘ I NAZWISKO</span>
              <input className="input" value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm"><span>E‑MAIL</span>
              <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
            <label className="grid gap-2 text-sm"><span>WIADOMOŚĆ</span>
              <textarea rows={5} className="input" value={msg} onChange={e=>setMsg(e.target.value)} />
            </label>
            <button type="submit" className="mt-2 px-5 py-3 rounded-xl font-semibold gradient-gold text-black">WYŚLIJ</button>
          </form>
        </div>
        <div className="card">
          <div className="space-y-3">
            <div className="text-sm">GUT GROUP</div>
            <div className="text-sm text-[#bdbdbd]">Warszawa, Poland</div>
            <div className="text-sm text-[#bdbdbd]">Godziny: Pn–Pt 9:00–22:00</div>
            <div className="h-[1px] bg-[#222] my-4" />
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/48666290386" target="_blank" className="px-4 py-2 rounded-lg border border-[#2a2a2a]">WHATSAPP</a>
              <a href="https://www.linkedin.com/in/wiktor-gut-23ab7a2a9" target="_blank" className="px-4 py-2 rounded-lg border border-[#2a2a2a]">LINKEDIN</a>
              <a href="mailto:biuro@gutgroup.pl" className="px-4 py-2 rounded-lg border border-[#2a2a2a]">E‑MAIL</a>
              <a href="tel:+48666290386" className="px-4 py-2 rounded-lg border border-[#2a2a2a]">+48 666 290 386</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
