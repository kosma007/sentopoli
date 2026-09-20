'use client';

import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'O NAS', href: '#o-nas' },
  { name: 'DOMY', href: '#domy' },
  { name: 'WYPOSAŻENIE', href: '#wyposazenie' },
  { name: 'ATRAKCJE', href: '#atrakcje' },
  { name: 'OKOLICA', href: '#okolica' },
  { name: 'WARSZTATY', href: '#warsztaty' },
  { name: 'KONTAKT', href: '#kontakt' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f6f3ed] text-neutral-800 border-t border-black/5 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-300/60">
        
        {/* KOLUMNA 1: LOGO I OPIS */}
        <div className="md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-12 flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Sen Topoli Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-serif tracking-[0.2em] text-neutral-900 font-normal">
                SEN TOPOLI
              </span>
              <span className="text-[9px] tracking-[0.25em] text-neutral-500 font-sans uppercase">
                DOMY NAD JEZIOREM
              </span>
            </div>
          </Link>
          <p className="text-xs text-neutral-600 font-light leading-relaxed">
            Kameralny wypoczynek w otoczeniu natury i jeziora. Wyjątkowe domy stworzone z myślą o pełnym relaksie.
          </p>
        </div>

        {/* KOLUMNA 2: MENU NAWIGACJI */}
        <div className="space-y-3">
          <h4 className="text-xs font-serif tracking-[0.2em] text-neutral-900 uppercase">
            Nawigacja
          </h4>
          <ul className="space-y-2 text-xs font-light text-neutral-600 tracking-wider">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-black transition-colors duration-200 uppercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLUMNA 3: KONTAKT */}
        <div className="space-y-3">
          <h4 className="text-xs font-serif tracking-[0.2em] text-neutral-900 uppercase">
            Kontakt
          </h4>
          <div className="space-y-2 text-xs font-light text-neutral-600 leading-relaxed">
            <p>
              <span className="block font-normal text-neutral-800">Telefon:</span>
              <a href="tel:+48123456789" className="hover:text-black transition-colors">
                +48 123 456 789
              </a>
            </p>
            <p>
              <span className="block font-normal text-neutral-800">E-mail:</span>
              <a href="mailto:kontakt@sentopoli.pl" className="hover:text-black transition-colors">
                kontakt@sentopoli.pl
              </a>
            </p>
            <p>
              <span className="block font-normal text-neutral-800">Adres:</span>
              ul. Jeziorna 12<br />
              00-000 Miejscowość
            </p>
          </div>
        </div>

        {/* KOLUMNA 4: REZERWACJA & SOCIAL MEDIA */}
        <div className="space-y-4">
          <h4 className="text-xs font-serif tracking-[0.2em] text-neutral-900 uppercase">
            Rezerwacja
          </h4>
          <p className="text-xs text-neutral-600 font-light">
            Masz pytania o terminy? Skontaktuj się z nami lub sprawdź dostępność online.
          </p>
          <Link
            href="#rezerwacja"
            className="inline-block bg-[#8c6d3b] hover:bg-[#785c30] text-white px-5 py-2.5 rounded-sm transition-colors duration-200 text-[11px] font-medium tracking-widest uppercase"
          >
            SPRAWDŹ DOSTĘPNOŚĆ
          </Link>
        </div>

      </div>

      {/* STOPKA DOLNA: COPYRIGHT & SOCIAL MEDIA */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-light space-y-4 sm:space-y-0">
        <p>
          © {new Date().getFullYear()} Sen Topoli. Wszelkie prawa zastrzeżone.
        </p>
        
        {/* MEDIA SPOŁECZNOŚCIOWE */}
        <div className="flex space-x-6 tracking-widest uppercase">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}