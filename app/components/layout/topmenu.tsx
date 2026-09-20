'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'O NAS', href: '/onas' },
  { name: 'DOMY', href: '/domy' },
  { name: 'WYPOSAŻENIE', href: '#wyposazenie' },
  { name: 'ATRAKCJE', href: '#atrakcje' },
  { name: 'OKOLICA', href: '/okolica' },
  { name: 'WARSZTATY', href: '#warsztaty' },
  { name: 'KONTAKT', href: '/kontakt' },
];

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#f6f3ed] border-b border-black/5 px-4 md:px-8 py-3 tracking-widest text-xs font-light text-neutral-700 uppercase">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Zamień src na ścieżkę do swojego pliku logo w folderze /public */}
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
            <span className="text-[9px] tracking-[0.25em] text-neutral-500 font-sans">
              DOMY NAD JEZIOREM
            </span>
          </div>
        </Link>

        {/* NAWIGACJA DESKTOP */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-black transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* PRZYCISK SPRAWDŹ DOSTĘPNOŚĆ (DESKTOP) */}
        <div className="hidden lg:block">
          <Link
            href="#rezerwacja"
            className="inline-block bg-[#8c6d3b] hover:bg-[#785c30] text-white px-5 py-2.5 rounded-sm transition-colors duration-200 text-[11px] font-medium tracking-widest"
          >
            SPRAWDŹ DOSTĘPNOŚĆ
          </Link>
        </div>

        {/* PRZYCISK MENU MOBILNEGO */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-700 hover:text-black focus:outline-none"
          aria-label="Otwórz menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* DROPDOWN MENU MOBILNE */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-neutral-200/60 pt-4 flex flex-col space-y-3 text-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#rezerwacja"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full bg-[#8c6d3b] text-white py-2.5 text-[11px] font-medium tracking-widest"
            >
              SPRAWDŹ DOSTĘPNOŚĆ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}