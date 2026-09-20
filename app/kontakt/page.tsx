'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj dodaj obsługę wysyłki formularza (np. API Route lub zewnętrzny serwis)
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą najszybciej jak to możliwe.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="w-full bg-[#f6f3ed] min-h-screen text-neutral-800">
      
      {/* BANNER GŁÓWNY / HERO */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1600&auto=format&fit=crop"
          alt="Kontakt - Sen Topoli"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white space-y-4 px-4 max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase font-light text-neutral-200">
            MASZ PYTANIA?
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-normal leading-tight">
            Skontaktuj się z nami
          </h1>
          <div className="w-12 h-[1px] bg-white/60 mx-auto my-3" />
          <p className="text-sm md:text-base font-sans font-light text-neutral-200 max-w-xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Chętnie odpowiemy na wszystkie pytania i pomożemy zaplanować Twój pobyt.
          </p>
        </div>
      </section>

      {/* SEKCJA Z FORMULARZEM I DANYMI KONTAKTOWYMI */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEWA KOLUMNA: DANE KONTAKTOWE */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
                DANE KONTAKTOWE
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 font-normal">
                Porozmawiajmy o Twoim przyjeździe
              </h2>
              <div className="w-16 h-[1px] bg-[#8c6d3b]/40 my-2" />
            </div>

            <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed">
              Szukasz wolnego terminu, chcesz zorganizować warsztaty lub wynająć oba domy na wyłączność? Napisz do nas lub zadzwoń.
            </p>

            <div className="space-y-6 pt-2">
              
              {/* TELEFON */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-[#8c6d3b] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-light">Telefon</h3>
                  <a href="tel:+48123456789" className="text-base font-serif text-neutral-900 hover:text-[#8c6d3b] transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-[#8c6d3b] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-light">E-mail</h3>
                  <a href="mailto:kontakt@sentopoli.pl" className="text-base font-serif text-neutral-900 hover:text-[#8c6d3b] transition-colors">
                    kontakt@sentopoli.pl
                  </a>
                </div>
              </div>

              {/* LOKALIZACJA */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-[#8c6d3b] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-neutral-500 font-light">Lokalizacja</h3>
                  <p className="text-base font-serif text-neutral-900">
                    Sen Topoli, Malownicze Jezioro<br />
                    88-100 Okolice Inowrocławia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* PRAWA KOLUMNA: FORMULARZ KONTAKTOWY */}
          <div className="lg:col-span-7 bg-white/80 p-8 md:p-10 rounded-2xl border border-neutral-200/80 shadow-sm">
            <h3 className="text-2xl font-serif text-neutral-900 mb-6 font-normal">
              Napisz wiadomość
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* IMIĘ I NAZWISKO */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-neutral-600 font-light block">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="np. Jan Kowalski"
                    className="w-full bg-[#f6f3ed]/50 border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c6d3b] transition-colors"
                  />
                </div>

                {/* ADRES EMAIL */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-neutral-600 font-light block">
                    Adres e-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jan@example.com"
                    className="w-full bg-[#f6f3ed]/50 border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c6d3b] transition-colors"
                  />
                </div>
              </div>

              {/* TELEFON */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-600 font-light block">
                  Numer telefonu
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+48 000 000 000"
                  className="w-full bg-[#f6f3ed]/50 border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c6d3b] transition-colors"
                />
              </div>

              {/* WIADOMOŚĆ */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-600 font-light block">
                  Treść wiadomości *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Napisz interesujący Cię termin lub zadaj pytanie..."
                  className="w-full bg-[#f6f3ed]/50 border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8c6d3b] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8c6d3b] hover:bg-[#73582e] text-white transition-colors duration-300 py-4 text-xs tracking-[0.2em] uppercase font-sans font-light rounded-md shadow-sm"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>

        </div>

        {/* MAPA / SEKCJA DOJAZDU */}
        <div className="pt-12 border-t border-neutral-200/80 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 font-normal">
              Jak do nas dojechać?
            </h3>
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em]">
              Kameralny zakątek otoczony naturą
            </p>
          </div>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm relative bg-neutral-200">
            {/* Przykładowe podpięcie pod Google Maps iframe */}
            <iframe
              title="Lokalizacja Sen Topoli"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154480.20786576088!2d18.150000000000002!3d52.790000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703328e93ba4313%3A0xc34b3e34b9cfbc0!2sInowroc%C5%82aw!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </section>
    </main>
  );
}