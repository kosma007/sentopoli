'use client';

import Image from 'next/image';
import Link from 'next/link';

const houses = [
  {
    id: 'dom-1',
    title: 'Dom Sosnowy',
    subtitle: 'Kameralny & Blisko Natury',
    capacity: 'Dla 4-6 osób',
    description: 'Przestronny, dwupoziomowy dom z dużą przeszkloną ścianą, z której rozpościera się widok na las i jezioro. Wyposażony w kominek, prywatny taras oraz wyjście na pomost.',
    features: ['Prywatny taras', 'Kominek w salonie', 'Anek kuchenny', 'Prywatny pomost', 'Wi-Fi & Miejsce do pracy'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'dom-2',
    title: 'Dom Świerkowy',
    subtitle: 'Relaks & Strefa Wellness',
    capacity: 'Dla 4-6 osób',
    description: 'Zaprojektowany z myślą o maksymalnym odpoczynku i głębokim wyciszeniu. Posiada bezpośrednie przejście do strefy z sauną oraz przestronną strefę dzienną do wspólnych wieczorów.',
    features: ['Bezpośredni dostęp do sauny', 'Kominek', 'Taras z widokiem na zachód słońca', 'Duży stół biesiadny', 'Grill i palenisko'],
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1000&auto=format&fit=crop',
  },
];

const amenities = [
  { name: 'Prywatne jezioro i pomost', icon: '🌊' },
  { name: 'Sauna fińska', icon: '🔥' },
  { name: 'Kominek w każdym domu', icon: '🪵' },
  { name: 'Kajaki & SUP-y', icon: '🛶' },
  { name: 'Miejsce na ognisko', icon: '✨' },
  { name: 'Szybkie Wi-Fi', icon: '📶' },
];

export default function DomyPage() {
  return (
    <main className="w-full bg-[#f6f3ed] min-h-screen text-neutral-800">
      
      {/* BANNER GŁÓWNY / HERO */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
          alt="Domy w Sen Topoli"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white space-y-4 px-4 max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase font-light text-neutral-200">
            NASZE OBIEKTY
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight">
            Domy nad jeziorem
          </h1>
          <div className="w-12 h-[1px] bg-white/60 mx-auto my-3" />
          <p className="text-sm md:text-base font-sans font-light text-neutral-200 max-w-xl mx-auto">
            Dwa caloroczne domy z drewnianym wykończeniem, nowoczesnymi udogodnieniami i niepowtarzalnym widokiem na naturę.
          </p>
        </div>
      </section>

      {/* SEKCJA LISTY DOMÓW */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-24">
        
        {houses.map((house, index) => (
          <div
            key={house.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* ZDJĘCIE DOMU */}
            <div
              className={`md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-neutral-200/60 ${
                index % 2 === 1 ? 'md:order-2' : 'md:order-1'
              }`}
            >
              <Image
                src={house.image}
                alt={house.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* OPIS DOMU */}
            <div
              className={`md:col-span-6 space-y-6 ${
                index % 2 === 1 ? 'md:order-1' : 'md:order-2'
              }`}
            >
              <div>
                <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
                  {house.subtitle} • {house.capacity}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 font-normal mt-1">
                  {house.title}
                </h2>
              </div>

              <p className="text-sm md:text-base text-neutral-600 font-sans font-light leading-relaxed">
                {house.description}
              </p>

              {/* LISTA ZALET */}
              <ul className="space-y-2 pt-2">
                {house.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-3 text-xs md:text-sm text-neutral-700 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3b]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/#kontakt"
                  className="inline-block bg-[#8c6d3b] hover:bg-[#73582e] text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-light rounded-sm shadow-sm"
                >
                  Zapytaj o rezerwację
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* SEKCJA UDOGODNIEŃ */}
        <div className="pt-16 border-t border-neutral-200/80">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <h3 className="text-2xl md:text-4xl font-serif text-neutral-900 font-normal">
              Wspólne udogodnienia
            </h3>
            <p className="text-xs text-[#8c6d3b] uppercase tracking-[0.2em] font-light">
              Wszystko, czego potrzebujesz na miejscu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/60 p-6 rounded-xl border border-neutral-200/80 text-center space-y-2 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="font-serif text-sm md:text-base text-neutral-800">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WEZWANIE DO DZIAŁANIA / CTA */}
        <div className="bg-white/80 rounded-2xl p-8 md:p-14 text-center border border-neutral-200/80 space-y-6">
          <h3 className="text-2xl md:text-4xl font-serif text-neutral-900 font-normal">
            Wynajmij oba domy na wyłączność
          </h3>
          <p className="text-xs md:text-sm text-neutral-600 font-light max-w-lg mx-auto leading-relaxed">
            Planujesz wyjazd dla większej grupy, warsztaty lub rodzinny zjazd? Możesz wynająć cały teren Sen Topoli tylko dla siebie.
          </p>
          <div className="pt-2">
            <Link
              href="/#kontakt"
              className="inline-block bg-[#8c6d3b] hover:bg-[#73582e] text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-light rounded-sm shadow-sm"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}