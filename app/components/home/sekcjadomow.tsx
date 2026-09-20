'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    text: '2 sypialnie',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    text: 'kominek',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    text: 'klimatyzacja',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    text: 'widok na jezioro',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 001.09-.124M3 15a4 4 0 014-4h14M3 15l4-8 4 8m0 0l4-8 4 8" />
      </svg>
    ),
  },
  {
    text: 'w pełni wyposażony dom',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    text: 'dostęp do sauny, pomostu i atrakcji na miejscu',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21a9 9 0 110-18 9 9 0 010 18z" />
      </svg>
    ),
  },
];

export default function SekcjaDomow() {
  return (
    <section id="domy" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            2. SEKCJA DOMÓW
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 font-normal">
            Wybierz swój dom nad jeziorem
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
            Dwa całoroczne domy w tym samym wysokim standardzie, z tym samym wyposażeniem 
            i dostępem do sauny, pomostu oraz atrakcji na miejscu.
          </p>
        </div>

        {/* KAFELKI Z DOMAMI (3 KOLUMNY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* KOLUMNA LEWA: DOM CZERWONY */}
          <div className="lg:col-span-4 bg-white/60 border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-serif text-neutral-900">Dom Czerwony</h3>
                <div className="w-12 h-[1px] bg-[#8c6d3b]/40 mx-auto my-2"></div>
                <p className="text-xs tracking-widest text-neutral-600 font-light uppercase">
                  maksymalnie <span className="font-semibold text-neutral-900">6 osób</span>
                </p>
              </div>

              {/* ZDJĘCIE GŁÓWNE */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/domczerwony.png"
                  alt="Dom Czerwony nad jeziorem"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* MINIATURKI (3 ZDJĘCIA) */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <Image src="/zielony1.png" alt="Wnętrze" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <Image src="/zielony1.png" alt="Sypialnia" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <Image src="/zielony1.png" alt="Widok" fill className="object-cover" />
                </div>
              </div>
            </div>

            <Link
              href="#rezerwacja-czerwony"
              className="block w-full text-center bg-[#8c6d3b] hover:bg-[#785c30] text-white py-3.5 rounded-lg text-xs font-medium tracking-[0.2em] uppercase transition-colors"
            >
              ZOBACZ DOM CZERWONY
            </Link>
          </div>

          {/* KOLUMNA ŚRODKOWA: CO JE ŁĄCZY */}
          <div className="lg:col-span-4 bg-[#ede8de]/80 border border-[#e0d8c8] rounded-2xl p-6 flex flex-col justify-between space-y-6 text-center">
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-xs tracking-[0.2em] text-[#8c6d3b] uppercase">★ ★ ★</p>
                <h3 className="text-lg font-serif text-neutral-900 tracking-widest uppercase">
                  TO JE ŁĄCZY
                </h3>
              </div>

              <ul className="space-y-5 text-left text-xs font-light text-neutral-700 max-w-xs mx-auto">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="flex-shrink-0 p-1.5 bg-white/70 rounded-full shadow-sm">
                      {item.icon}
                    </span>
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ELEMENT DEKORACYJNY */}
            <div className="text-neutral-400 text-xs font-serif italic pt-4">
              — Równowaga i Komfort —
            </div>
          </div>

          {/* KOLUMNA PRAWA: DOM ZIELONY */}
          <div className="lg:col-span-4 bg-white/60 border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-serif text-neutral-900">Dom Zielony</h3>
                <div className="w-12 h-[1px] bg-[#8c6d3b]/40 mx-auto my-2"></div>
                <p className="text-xs tracking-widest text-neutral-600 font-light uppercase">
                  maksymalnie <span className="font-semibold text-neutral-900">4 osoby</span>
                </p>
              </div>

              {/* ZDJĘCIE GŁÓWNE */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/domzielony.png"
                  alt="Dom Zielony nad jeziorem"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* MINIATURKI (3 ZDJĘCIA) */}
              <div className="grid grid-cols-3 gap-2">
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <Image src="/zielony1.png" alt="Wnętrze" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <Image src="/zielony1.png" alt="Sypialnia" fill className="object-cover" />
                </div>
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <Image src="/zielony1.png" alt="Widok" fill className="object-cover" />
                </div>
              </div>
            </div>

            <Link
              href="#rezerwacja-zielony"
              className="block w-full text-center bg-[#8c6d3b] hover:bg-[#785c30] text-white py-3.5 rounded-lg text-xs font-medium tracking-[0.2em] uppercase transition-colors"
            >
              ZOBACZ DOM ZIELONY
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}