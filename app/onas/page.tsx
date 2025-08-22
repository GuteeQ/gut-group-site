export default function Page(){
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">Kim jesteśmy</h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="card h-[280px] md:h-[360px] flex items-center justify-center">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#141414] to-[#0e0e0f] border border-[#1f1f1f] flex items-center justify-center">
            <span className="text-[#8a8a8a] text-sm">Zdjęcie zespołu — podmienimy na realne</span>
          </div>
        </div>
        <div className="card">
          <p className="text-[#d2d2d2]">
            GUT GROUP to nowoczesna firma łącząca świat technologii, dronów i motoryzacji. Zajmujemy się tworzeniem
            aplikacji mobilnych i stron internetowych, realizujemy ujęcia dronem oraz produkujemy unikalny content
            motoryzacyjny. Już wkrótce otwieramy sklep z akcesoriami oraz budujemy społeczność pasjonatów motoryzacji. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
