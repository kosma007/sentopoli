'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ONasPage() {
  return (
    <main className="w-full bg-[#f6f3ed] min-h-screen text-neutral-800">
      
      {/* BANNER GŁÓWNY / HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1600&auto=format&fit=crop"
          alt="Sen Topoli - Otoczenie i Natura"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center text-white space-y-4 px-4 max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase font-light text-neutral-200">
            NASZA HISTORIA I PASJA
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight">
            Poznaj Sen Topoli
          </h1>
          <div className="w-12 h-[1px] bg-white/60 mx-auto my-3" />
          <p className="text-sm md:text-base font-sans font-light text-neutral-200 max-w-xl mx-auto">
            Miejsce stworzone z miłości do natury, spokoju i celebrowania kameralnych chwil nad jeziorem.
          </p>
        </div>
      </section>

      {/* SEKCJA HISTORII / WPROWADZENIE */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-7 space-y-6">
            <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
              JAK TO SIĘ ZACZĘŁO
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal leading-snug">
              Oaza spokoju tuż nad brzegiem jeziora
            </h2>
            <div className="w-16 h-[1px] bg-[#8c6d3b]/40 my-2" />
            
            <p className="text-sm md:text-base text-neutral-600 font-sans font-light leading-relaxed">
              Sen Topoli powstał z pragnienia stworzenia przestrzeni, w której czas zwalnia bieg. 
              Szukaliśmy miejsca, gdzie szum drzew i widok na tafles jeziora zastępują codzienny hałas i pośpiech.
            </p>
            <p className="text-sm md:text-base text-neutral-600 font-sans font-light leading-relaxed">
              Zbudowaliśmy dwa całoroczne domy, wplatając je w naturalne otoczenie lasu i linii brzegowej. 
              Dbamy o każdy detal – od ciepłych drewnianych wykończeń, przez prywatne sauny, po widok na zachody słońca bezpośrednio z tarasu.
            </p>
          </div>

          <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-neutral-200/60">
            <Image
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop"
              alt="Las i natura wokół Sen Topoli"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* DLACZEGO SEN TOPOLI / WARTOŚCI */}
        <div className="pt-12 border-t border-neutral-200/80">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <h3 className="text-2xl md:text-4xl font-serif text-neutral-900 font-normal">
              Co tworzy klimat tego miejsca?
            </h3>
            <p className="text-xs text-[#8c6d3b] uppercase tracking-[0.2em] font-light">
              Wartości, którymi się kierujemy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 p-8 rounded-2xl border border-neutral-200/80 text-center space-y-4 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto text-[#8c6d3b] flex items-center justify-center bg-[#f6f3ed] rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-neutral-900 font-normal">Bliskość natury</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Prywatny dostęp do jeziora, las, świeże powietrze i poranki przy śpiewie ptaków.
              </p>
            </div>

            <div className="bg-white/60 p-8 rounded-2xl border border-neutral-200/80 text-center space-y-4 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto text-[#8c6d3b] flex items-center justify-center bg-[#f6f3ed] rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-neutral-900 font-normal">Kameralność i wygoda</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Tylko dwa domy, pełne wyposażenie, kominek oraz prywatna sauna dająca głęboki relaks.
              </p>
            </div>

            <div className="bg-white/60 p-8 rounded-2xl border border-neutral-200/80 text-center space-y-4 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mx-auto text-[#8c6d3b] flex items-center justify-center bg-[#f6f3ed] rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-neutral-900 font-normal">Odpoczynek całoroczny</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Niezależnie od pory roku – letnie kąpiele, jesienne grzybobrania czy zimowe wieczory przy kominku.
              </p>
            </div>
          </div>
        </div>

        {/* WEZWANIE DO DZIAŁANIA / CTA */}
        <div className="bg-white/80 rounded-2xl p-8 md:p-14 text-center border border-neutral-200/80 space-y-6">
          <h3 className="text-2xl md:text-4xl font-serif text-neutral-900 font-normal">
            Zaplanuj swój czas w Sen Topoli
          </h3>
          <p className="text-xs md:text-sm text-neutral-600 font-light max-w-lg mx-auto leading-relaxed">
            Sprawdź wolne terminy i przeżyj niezapomniane chwile w otoczeniu ciszy i natury.
          </p>
          <div className="pt-2">
            <Link
              href="/#kontakt"
              className="inline-block bg-[#8c6d3b] hover:bg-[#73582e] text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-light rounded-sm shadow-sm"
            >
              Rezerwuj pobyt
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}