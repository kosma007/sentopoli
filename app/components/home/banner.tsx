'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-start overflow-hidden bg-neutral-900">
      {/* TŁO - Zdjęcie z lotu ptaka / perspektywa jeziora */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/baner.png" // Podmień na swoje ujęcie z lotu ptaka
          alt="Sen Topoli - Domy nad jeziorem"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradient przyciemniający lewą stronę, aby napisy były idealnie czytelne */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      </div>

      {/* TREŚĆ BLAU BANNERA */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
        <div className="max-w-2xl space-y-6 text-white">
          
          {/* MAŁY NAGŁÓWEK / TAG */}
          <div className="flex items-center space-x-3 text-xs tracking-[0.25em] text-[#d4af37] font-light uppercase">
            <span>1. JEZIORO I KOMFORT</span>
            <span className="inline-block w-8 h-[1px] bg-[#d4af37]/60"></span>
          </div>

          {/* GŁÓWNY MOCNY KOMUNIKAT (H1) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] tracking-tight font-normal text-amber-50/95">
            Dwa całoroczne domy nad jeziorem z sauną, plażą i pomostem
          </h1>

          {/* PODTYTUŁ / OPIS */}
          <p className="text-sm md:text-base font-light text-neutral-200 leading-relaxed max-w-xl">
            Spokojny odpoczynek blisko natury, z dala od codziennego pośpiechu. 
            Poznaj przestrzeń stworzoną do pełnego relaksu, równowagi i komfortu.
          </p>

          {/* PRZYCISK CALL TO ACTION */}
          <div className="pt-4">
            <Link
              href="#rezerwacja"
              className="inline-block bg-[#8c6d3b] hover:bg-[#785c30] text-white px-8 py-4 rounded-sm transition-all duration-300 text-xs font-medium tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              SPRAWDŹ DOSTĘPNOŚĆ
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}