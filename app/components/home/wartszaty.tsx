'use client';

import Image from 'next/image';

export default function Warsztaty() {
  return (
    <section id="warsztaty" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEWA KOLUMNA: TREŚĆ I PRZYCISK */}
        <div className="lg:col-span-5 space-y-6 relative z-10">
          
          {/* LOGO MIEJSCA */}
          <div className="flex items-center space-x-2">
            <div className="relative w-5 h-8">
              <Image src="/logo.svg" alt="Sen Topoli Logo" fill className="object-contain" />
            </div>
            <div className="text-[10px] tracking-[0.2em] font-serif uppercase text-neutral-800 font-medium">
              Sen Topoli <br />
              <span className="text-[7px] text-neutral-500 font-sans tracking-[0.25em]">Domy nad jeziorem</span>
            </div>
          </div>

          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            6. WARSZTATY W SEN TOPOLI
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal leading-tight">
            Warsztaty <br /> w Sen Topoli
          </h2>

          {/* MOTYW GAŁĄZKI */}
          <div className="text-[#8c6d3b] opacity-80 pt-1">
            <svg className="w-12 h-4" fill="currentColor" viewBox="0 0 100 20">
              <path d="M10,10 Q30,0 50,10 Q70,20 90,10 M30,5 Q35,0 40,5 M60,15 Q65,20 70,15" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <p className="text-sm md:text-base text-neutral-600 font-sans font-light leading-relaxed pt-2">
            Sen Topoli to przestrzeń dla kameralnych spotkań, jogi, warsztatów, rozwoju i odpoczynku w naturze. 
            Dwa domy, jezioro, sauna i spokojne otoczenie tworzą dobre warunki do zatrzymania się, regeneracji i wspólnego czasu.
          </p>

          <div className="pt-4">
            <a
              href="#kontakt"
              className="inline-block bg-[#8c6d3b] hover:bg-[#73582e] text-white transition-colors duration-300 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-light rounded-sm shadow-sm"
            >
              Dowiedz się więcej
            </a>
          </div>

        </div>

        {/* PRAWA KOLUMNA: ASYMETRYCZNA GALERIA ZDJĘĆ */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-stretch">
          
          {/* ZDJĘCIE GŁÓWNE: JOGA / RETREAT W ŚRODKU */}
          <div className="col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop"
              alt="Joga i warsztaty we wnętrzu Sen Topoli"
              fill
              sizes="(max-width: 1024px) 70vw, 40vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* ZDJĘCIE BOCZNE: SAUNA / WIDOK NA NATURĘ */}
          <div className="col-span-4 relative aspect-[1/2] rounded-3xl overflow-hidden shadow-lg border border-white/60 my-auto h-[90%]">
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
              alt="Widok na naturę i saunę"
              fill
              sizes="(max-width: 1024px) 30vw, 20vw"
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>

      </div>
    </section>
  );
}