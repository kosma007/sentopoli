'use client';

import Image from 'next/image';

const seasons = [
  {
    name: 'WIOSNA',
    description: 'spacery, rowery, świeże powietrze, budząca się natura',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    name: 'LATO',
    description: 'kąpiele, plaża, SUP, kajaki, pomost, leżaki, długie wieczory',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'JESIEŃ',
    description: 'wędkarstwo, grzyby, spacery, pieczenie ziemniaków, robienie ludzików z darów lasu, kominek, wieczory filmowe',
    image: 'https://images.unsplash.com/photo-1507181179412-1e89099e8f92?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    name: 'ZIMA',
    description: 'sauna, śnieg, morsowanie, palenisko, kominek, sanki, lepienie bałwana',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-5 h-5 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m9-9H3m15.364 6.364L5.636 5.636m12.728 0L5.636 18.364" />
      </svg>
    ),
  },
];

export default function CzteryPoryRoku() {
  return (
    <section id="pory-roku" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-xs font-serif tracking-[0.25em] text-neutral-800 uppercase">
              SEN TOPOLI
            </span>
          </div>
          <div className="w-8 h-[1px] bg-[#8c6d3b]/40 mx-auto"></div>
          
          <h2 className="text-2xl md:text-4xl font-serif text-neutral-900 font-normal tracking-wide pt-2">
            8. 4 PORY ROKU W SEN TOPOLI
          </h2>
        </div>

        {/* SIATKA 4 KOLUMN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {seasons.map((season, index) => (
            <div
              key={index}
              className="bg-white/50 border border-neutral-200/70 rounded-lg overflow-hidden flex flex-col hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              {/* KADR ZDJĘCIA PORI ROKU */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={season.image}
                  alt={`Sen Topoli - ${season.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* OPIS POD ZDJĘCIEM Z IKONĄ NA ŚRODKU */}
              <div className="relative pt-8 pb-6 px-4 flex flex-col items-center text-center flex-grow space-y-2">
                
                {/* OKRĄGŁA IKONA NA NAŁOŻENIU (NA GRANICY ZDJĘCIA I TEKSTU) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#f6f3ed] border border-neutral-200/80 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {season.icon}
                </div>

                <h3 className="text-lg font-serif text-neutral-900 tracking-widest font-medium uppercase pt-1">
                  {season.name}
                </h3>

                <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                  {season.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}