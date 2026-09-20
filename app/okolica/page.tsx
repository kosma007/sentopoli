'use client';

import Image from 'next/image';
import Link from 'next/link';

const attractions = [
  {
    title: 'Jezioro Chełmżyńskie',
    category: 'Natura & Woda',
    description: 'Malowniczy akwen idealny na kajaki, deski SUP, wędkarstwo oraz orzeźwiające kąpiele w czystej wodzie. Idealne miejsce na podziwianie wschodów i zachodów słońca.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Lasy i Szlaki Rowerowe',
    category: 'Aktywność',
    description: 'Bezpośrednie otoczenie lasów zachęca do pieszych wędrówek, biegania oraz wycieczek rowerowych. Jesienią okoliczne lasy stają się rajem dla grzybiarzy.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Zabytkowa Chełmża',
    category: 'Kultura & Historia',
    description: 'Urokliwe miasteczko położone zaledwie kilka minut od obiektu. Warto odwiedzić imponującą Gotycką Konkatedrę, przespacerować się rynkiem oraz urokliwą bulwarową promenadą.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Toruń – Miasto Kopernika',
    category: 'Jednodniowa Wycieczka',
    description: 'Zaledwie 25 km od Sen Topoli znajduje się wpisany na listę UNESCO Toruń. Słynny ze swojej średniowiecznej starówki, pachnących pierników i bogatej oferty gastronomicznej.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop',
  },
];

export default function OkolicaPage() {
  return (
    <main className="w-full bg-[#f6f3ed] min-h-screen text-neutral-800">
      
      {/* BANNER GŁÓWNY / HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
          alt="Okolica Sen Topoli - Jezioro i Natura"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white space-y-4 px-4 max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase font-light text-neutral-200">
            OTOCZENIE I ATRAKCJE
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight">
            Odkryj okolicę
          </h1>
          <div className="w-12 h-[1px] bg-white/60 mx-auto my-3" />
          <p className="text-sm md:text-base font-sans font-light text-neutral-200 max-w-xl mx-auto">
            Sen Topoli to doskonała baza wypadowa – zarówno na błogi relaks nad wodą, jak i aktywne poznawanie uroków regionu.
          </p>
        </div>
      </section>

      {/* SEKCJA WPROWADZAJĄCA */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-20">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            BLISKOŚĆ NATURY & ZABYTKÓW
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal">
            Miejsce, w którym nie sposób się nudzić
          </h2>
          <div className="w-16 h-[1px] bg-[#8c6d3b]/40 mx-auto my-3" />
          <p className="text-sm md:text-base text-neutral-600 font-sans font-light leading-relaxed">
            Niezależnie od tego, czy szukasz ciszy pośród leśnych ścieżek, marzysz o sportach wodnych, czy chcesz zwiedzić zabytkowe zakątki Ziemi Chełmińskiej – w okolicy znajdziesz wszystko, czego potrzebujesz.
          </p>
        </div>

        {/* KARTY ATRAKCJI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 border border-neutral-200/80 rounded-2xl overflow-hidden flex flex-col hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <span className="text-xs tracking-[0.2em] text-[#8c6d3b] uppercase font-light">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif text-neutral-900 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 font-sans font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MAPA I WSKAZÓWKI */}
        <div className="bg-white/80 rounded-2xl p-8 md:p-12 border border-neutral-200/80 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-neutral-900">Sklepy i Restauracje</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Najbliższe sklepy spożywcze oraz lokalne restauracje znajdują się w odległości zaledwie kilku minut jazdy samochodem (Chełmża).
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg text-neutral-900">Sprzęt Wodny</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Na miejscu na naszych Gości czekają deski SUP i kajaki. Nad jeziorem działają również wypożyczalnie sprzętu żeglarskiego.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-lg text-neutral-900">Dojazd i Komunikacja</h4>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Wygodny dojazd drogą krajową DK91 lub autostradą A1. Obiekt oferuje bezpłatny, ogrodzony parking dla Gości.
              </p>
            </div>
          </div>
        </div>

        {/* WEZWANIE DO DZIAŁANIA / CTA */}
        <div className="text-center space-y-6 pt-4">
          <h3 className="text-2xl md:text-4xl font-serif text-neutral-900 font-normal">
            Zaplanuj swój wypoczynek w Sen Topoli
          </h3>
          <p className="text-xs md:text-sm text-neutral-600 font-light max-w-lg mx-auto">
            Rezerwuj bezpośrednio i ciesz się bliskością natury przez cały rok.
          </p>
          <div>
            <Link
              href="/#kontakt"
              className="inline-block bg-[#8c6d3b] hover:bg-[#73582e] text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-light rounded-sm shadow-sm"
            >
              Sprawdź wolne terminy
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}