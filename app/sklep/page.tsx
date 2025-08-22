// app/sklep/page.tsx
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  short: string;
  price?: string; // opcjonalnie – przy "SOON" nie pokazujemy konkretu
  tag?: string;   // np. "SOON"
  img?: string;   // ścieżka do obrazka w /public – na razie niepotrzebna
};

const products: Product[] = [
  {
    id: "gut-cap",
    name: "Czapka GUT — premium",
    short: "Czarna, złote logo, unisex.",
    price: "SOON",
    tag: "SOON",
  },
  {
    id: "gut-hoodie",
    name: "Bluza GUT — hoodie",
    short: "Czarna, haft 3D, limitowana.",
    price: "SOON",
    tag: "SOON",
  },
  {
    id: "moto-plate",
    name: "Rama tablicy — GUT MOTO",
    short: "Slim, czarna, uv‑resistant.",
    price: "SOON",
    tag: "SOON",
  },
  {
    id: "detail-kit",
    name: "Zestaw detailingu — Start",
    short: "Szampon, quick detailer, mikrofibra.",
    price: "SOON",
    tag: "SOON",
  },
  {
    id: "keytag",
    name: "Brelok GUT — keytag",
    short: "Złote przeszycia, metal.",
    price: "SOON",
    tag: "SOON",
  },
  {
    id: "airfresh",
    name: "Odświeżacz GUT — Black Gold",
    short: "Zapach premium, długo się utrzymuje.",
    price: "SOON",
    tag: "SOON",
  },
];

export const metadata = {
  title: "Sklep — GUT GROUP",
  description:
    "Sklep GUT GROUP — akcesoria samochodowe i firmowe. Produkty już wkrótce.",
};

const Placeholder = () => (
  <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[#242424] bg-[#111]">
    <div
      className="absolute inset-0 opacity-25"
      style={{
        background:
          "radial-gradient(380px 160px at 20% 0%, rgba(212,175,55,.35), transparent), radial-gradient(280px 120px at 90% 100%, rgba(255,204,102,.22), transparent)",
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-sm tracking-widest text-[#c9b06a]">SOON</span>
    </div>
  </div>
);

export default function ShopPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold mb-3">Sklep</h1>
      <p className="mb-8 text-[#cfcfcf]">
        Pracujemy nad akcesoriami samochodowymi i firmowymi. Poniżej zajawki
        produktów — <span className="gold-text">SOON</span>.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="card flex flex-col">
            <Placeholder />

            <div className="mt-4 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
                {p.tag && (
                  <span className="text-[10px] px-2 py-1 rounded-md border border-[#3a3a3a] text-[#b7b7b7]">
                    {p.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-[#bdbdbd]">{p.short}</p>
              <div className="mt-3 text-sm text-[#c9b06a]">
                {p.price === "SOON" ? "Cena: SOON" : `Cena: ${p.price}`}
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <Link
                href="/kontakt"
                className="px-4 py-2 rounded-lg border border-[#2a2a2a]"
                title="Napisz do nas – damy znać, gdy produkt będzie dostępny"
              >
                Powiadom mnie
              </Link>
              <button
                disabled
                className="px-4 py-2 rounded-lg opacity-40 cursor-not-allowed border border-[#2a2a2a]"
                title="Wkrótce dostępne"
              >
                Dodaj do koszyka
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-[#9a9a9a]">
        Szukasz czegoś konkretnego?{" "}
        <Link href="/kontakt" className="underline underline-offset-4">
          Napisz do nas
        </Link>{" "}
        – damy priorytet Twojemu produktowi.
      </div>
    </div>
  );
}
