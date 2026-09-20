'use client';

import Image from 'next/image';

const includedItems = [
  {
    title: 'sauna zewnętrzna',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1v2.5M4 7l2-1M4 7l2 1M4 7v2.5M12 21a9 9 0 110-18 9 9 0 010 18z" />
      </svg>
    ),
  },
  {
    title: 'pomost',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 19h16M4 15h16M7 11v8M17 11v8M3 11h18" />
      </svg>
    ),
  },
  {
    title: 'plaża i leżaki',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M18.364 18.364l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: 'rowery',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'SUP',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2v20M9 6h6M8 18c2 2 6 2 8 0" />
      </svg>
    ),
  },
  {
    title: 'grill',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: 'ognisko',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: 'drewno do kominka',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Wi-Fi',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: 'klimatyzacja',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'parking',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 4h6a4 4 0 014 4 4 4 0 01-4 4H5V4zm0 8v8" />
      </svg>
    ),
  },
  {
    title: 'wyposażona kuchnia',
    icon: (
      <svg className="w-9 h-9 text-[#8c6d3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function WCenie() {
  return (
    <section id="wyposazenie" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            3. WYPOSAŻENIE
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal">
            W cenie pobytu
          </h2>
          <div className="w-16 h-[1px] bg-[#8c6d3b]/40 mx-auto my-3"></div>
        </div>

        {/* SIATKA UDOGODNIEŃ (6 KOLUMN NA DUŻYCH EKRANACH, 3 NA ŚREDNICH, 2 NA MOBILNYCH) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {includedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/40 border border-neutral-200/60 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:bg-white/80 transition-all duration-300 hover:shadow-sm group"
            >
              <div className="p-3 bg-[#f0ebd9]/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-light text-neutral-700 tracking-wider lowercase font-sans leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* LOGO SEN TOPOLI NA DOLE SEKCJI */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-2 opacity-80">
          <div className="relative w-6 h-9">
            <Image
              src="/logo.svg"
              alt="Sen Topoli Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <span className="block text-xs font-serif tracking-[0.25em] text-neutral-900 uppercase">
              SEN TOPOLI
            </span>
            <span className="block text-[8px] tracking-[0.3em] text-neutral-500 font-sans uppercase">
              DOMY NAD JEZIOREM
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}