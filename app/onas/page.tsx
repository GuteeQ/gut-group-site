export default function Page() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Kim jesteśmy</h2>

      {/* Zdjęcie u góry */}
      <div className="card w-full max-w-2xl h-[280px] md:h-[360px] mb-6 flex items-center justify-center">
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#141414] to-[#0e0e0f] border border-[#1f1f1f] flex items-center justify-center">
          <span className="text-[#8a8a8a] text-sm">Zdjęcie zespołu — podmienimy na realne</span>
        </div>
      </div>

      {/* Opis pod spodem */}
      <div className="card max-w-2xl">
        <p className="text-[#d2d2d2] leading-relaxed">
          GUT GROUP to nowoczesna firma łącząca świat technologii, dronów i motoryzacji. 
          Zajmujemy się tworzeniem aplikacji mobilnych i stron internetowych, realizujemy 
          ujęcia dronem oraz produkujemy unikalny content motoryzacyjny. 
          Już wkrótce otwieramy sklep z akcesoriami oraz budujemy społeczność pasjonatów motoryzacji. 🚀
        </p>
      </div>
    </div>
  );
}
