'use client';

import Image from 'next/image';

export default function WynajemWylacznosc() {
  return (
    <section id="wynajem-wylacznosc" className="w-full bg-[#1e231f] text-neutral-100 py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* NAGŁÓWEK I TREŚĆ */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-xs tracking-[0.3em] text-[#c2a269] uppercase font-light">
            WYNAJEM CAŁEGO OBIEKTU
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-wide text-[#f6f3ed]">
            Wynajmij cały obiekt <br className="hidden sm:inline" /> tylko dla siebie
          </h2>
          
          <div className="w-16 h-[1px] bg-[#c2a269]/50 mx-auto my-6"></div>

          <p className="text-base md:text-lg text-neutral-300 font-light font-sans leading-relaxed max-w-2xl mx-auto">
            Dwa domy, jezioro, sauna, pomost i prywatna przestrzeń dla Ciebie i Twoich bliskich.
          </p>

          <div className="pt-4">
            <a
              href="#rezerwacja"
              className="inline-block border border-[#c2a269] text-[#c2a269] hover:bg-[#c2a269] hover:text-[#1e231f] transition-all duration-300 px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans rounded-sm"
            >
              Zapytaj o rezerwację na wyłączność
            </a>
          </div>
        </div>

        {/* GALERIA DWÓCH KADRÓW (NAWIĄZANIE DO ZDJĘĆ WYCIĘTYCH Z MAKIETY) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* ZDJĘCIE 1: WIDOK Z GÓRY / WIECZORNY KOMPLEKS */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
            <Image
              src="/noc2.png"
              alt="Cały obiekt Sen Topoli nocą z lotu ptaka"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            <div className="absolute bottom-4 left-6 text-xs text-neutral-300 font-sans tracking-widest uppercase">
              Dwa domy & strefa rekreacyjna
            </div>
          </div>

          {/* ZDJĘCIE 2: PLAŻA I POMOST Z TABLICZKĄ */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
            <Image
              src="/plaza.png"
              alt="Prywatna plaża i pomost Sen Topoli"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            <div className="absolute bottom-4 left-6 text-xs text-neutral-300 font-sans tracking-widest uppercase">
              Prywatna plaża nad jeziorem
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}