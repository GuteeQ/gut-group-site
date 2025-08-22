export default function Page() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">Kim jesteśmy</h2>

      {/* sekcja logo + opis */}
      <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-5xl mb-10 text-left">
        {/* Logo po lewej */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="GUT GROUP"
            className="w-40 h-40 md:w-56 md:h-56 opacity-95"
          />
        </div>

        {/* Opis po prawej */}
        <div className="card p-6">
          <p className="text-[#d2d2d2] leading-relaxed text-base md:text-lg">
            GUT GROUP to nowoczesna firma łącząca świat technologii, dronów i motoryzacji. 
            Zajmujemy się tworzeniem aplikacji mobilnych i stron internetowych, realizujemy 
            ujęcia dronem oraz produkujemy unikalny content motoryzacyjny. 
            Już wkrótce otwieramy sklep z akcesoriami oraz budujemy społeczność pasjonatów motoryzacji. 🚀
          </p>
        </div>
      </div>

      {/* zdjęcie pod spodem */}
      <div className="card w-full max-w-4xl h-[280px] md:h-[360px] flex items-center justify-center">
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#141414] to-[#0e0e0f] border border-[#1f1f1f] flex items-center justify-center">
          <span className="text-[#8a8a8a] text-sm">
            Zdjęcie zespołu — podmienimy na realne
          </span>
        </div>
      </div>
    </div>
  );
}
