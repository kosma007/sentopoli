'use client';

import Image from 'next/image';

const targetGroups = [
  {
    title: 'Dla rodzin',
    description: 'Bezpieczna przestrzeń, jezioro, natura, plaża, spokojne otoczenie i możliwość wspólnego czasu bez pośpiechu.',
    // NOWY DZIAŁAJĄCY LINK DO ZDJĘCIA RODZINY:
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Dla par',
    description: 'Cisza, sauna, kominek, zachody słońca, romantyczne wieczory i odpoczynek tylko we dwoje.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Dla przyjaciół',
    description: 'Dwa domy, wspólne wieczory, grill, ognisko, sauna, pomost i możliwość wynajęcia całego obiektu na wyłączność.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Dla twórców',
    description: 'Spokojna przestrzeń do pisania, planowania, pracy kreatywnej, fotografii, nagrywania treści, odpoczynku od bodźców i szukania inspiracji w naturze.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Dla miłośników natury',
    description: 'Jezioro, las, spacery, rowery, ptaki, świeże powietrze i rytm dnia blisko przyrody.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Dla osób z psem',
    description: 'Pobyt ze zwierzęciem po wcześniejszej zgodzie, bliskość spacerów, natury i spokojnego otoczenia.',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Dla organizatorów warsztatów',
    description: 'Kameralna przestrzeń na jogę, retreaty, spotkania kobiece, warsztaty rozwojowe, wyjazdy oddechowe.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
  },
];

export default function DlaKogo() {
  return (
    <section id="dla-kogo" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            5. PRZEZNACZENIE
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal">
            Dla kogo jest Sen Topoli?
          </h2>
          <div className="w-16 h-[1px] bg-[#8c6d3b]/40 mx-auto my-3"></div>
        </div>

        {/* SIATKA KAFELKÓW (RESPONSYWNA SIATKA 1-4 KOLUMN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {targetGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white/60 border border-neutral-200/80 rounded-2xl p-4 flex flex-col space-y-4 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              {/* ZDJĘCIE Z ZAOKRĄGLONYMI ROGAMI */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-200">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* TREŚĆ KAFELKA */}
              <div className="flex flex-col items-center text-center p-2 flex-grow justify-between space-y-2">
                {/* MOTYW GAŁĄZKI */}
                <div className="text-[#8c6d3b] opacity-70">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C14 8 11 10 11 13C11 16 9 18 6 19C9 19 12 17 12 14C12 11 14 9 17 8Z" />
                  </svg>
                </div>

                <h3 className="text-xl font-serif text-neutral-900 font-normal">
                  {group.title}
                </h3>

                <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}