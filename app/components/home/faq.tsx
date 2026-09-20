'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: '1. Ile osób może nocować w Sen Topoli?',
    answer:
      'W Sen Topoli znajdują się dwa całoroczne domy. Dom Czerwony przeznaczony jest dla maksymalnie 6 osób, a Dom Zielony dla maksymalnie 4 osób. Istnieje również możliwość wynajęcia całego obiektu na wyłączność.',
  },
  {
    question: '2. Czy można wynająć cały obiekt tylko dla siebie?',
    answer:
      'Tak. Można wynająć oba domy na wyłączność, co daje Gościom pełną prywatność, dostęp do całej przestrzeni, sauny, pomostu, jeziora i miejsca na wspólny odpoczynek. To świetna opcja dla rodzin, grup przyjaciół, kameralnych spotkań i warsztatów.',
  },
  {
    question: '3. Czy sauna jest w cenie pobytu?',
    answer:
      'Tak, sauna zewnętrzna jest dostępna dla Gości zgodnie z zasadami korzystania obowiązującymi w obiekcie. Szczegółowe instrukcje dotyczące sauny Goście otrzymują przed przyjazdem lub znajdują je na miejscu w przewodniku pobytu.',
  },
  {
    question: '4. Czy domy mają dostęp do jeziora i pomostu?',
    answer:
      'Tak. Sen Topoli znajduje się nad Jeziorem Chełmżyńskim, a Goście mają dostęp do jeziora, pomostu oraz przestrzeni wypoczynkowej przy wodzie. Korzystanie z jeziora i pomostu odbywa się na własną odpowiedzialność, zgodnie z zasadami bezpieczeństwa.',
  },
  {
    question: '5. Czy można przyjechać z psem?',
    answer:
      'Tak, pobyt ze zwierzęciem jest możliwy po wcześniejszym zgłoszeniu i akceptacji. Prosimy o pilnowanie zwierząt, zachowanie czystości oraz niewpuszczanie ich na łóżka i tekstylia, jeśli nie zostało to wcześniej ustalone.',
  },
  {
    question: '6. Co znajduje się w cenie pobytu?',
    answer:
      'W cenie pobytu Goście mają dostęp m.in. do sauny zewnętrznej, pomostu, plaży, rowerów, SUP, grilla, miejsca na ognisko, drewna do kominka, leżaków, Wi-Fi, klimatyzacji, parkingu oraz w pełni wyposażonej kuchni.',
  },
  {
    question: '7. Czy w domach jest kominek i klimatyzacja?',
    answer:
      'Tak. Oba domy mają kominek, klimatyzację, dwie sypialnie, widok na jezioro i pełne wyposażenie potrzebne do komfortowego pobytu przez cały rok.',
  },
  {
    question: '8. Czy w Sen Topoli można organizować imprezy?',
    answer:
      'Nie. Sen Topoli jest miejscem spokojnego wypoczynku, dlatego nie organizujemy imprez, głośnych przyjęć ani spotkań zakłócających ciszę i komfort okolicy. Obiekt jest idealny na rodzinny pobyt, odpoczynek z przyjaciółmi, warsztaty, jogę i kameralne spotkania w naturze.',
  },
  {
    question: '9. Czy Sen Topoli jest dobrym miejscem na pobyt poza sezonem letnim?',
    answer:
      'Tak. Sen Topoli to miejsce całoroczne. Latem można korzystać z jeziora, plaży, SUP i pomostu, jesienią ze spacerów, grzybobrania i wieczorów przy kominku, zimą z sauny, morsowania, paleniska i spokojnych wieczorów, a wiosną z rowerów, spacerów i budzącej się natury.',
  },
  {
    question: '10. Jak wygląda zameldowanie i kontakt z obsługą?',
    answer:
      'Szczegóły zameldowania, kody dostępu oraz instrukcje pobytu Goście otrzymują przed przyjazdem. W razie pytań lub awarii prosimy o kontakt z obsługą obiektu. Zależy nam, aby pobyt był spokojny, wygodny i dobrze zorganizowany od pierwszej wiadomości.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center space-y-3">
          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            ODPOWIEDZI NA PYTANIA
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal">
            Najczęściej zadawane pytania
          </h2>
          <div className="w-16 h-[1px] bg-[#8c6d3b]/40 mx-auto my-3" />
        </div>

        {/* LISTA PYTAŃ I ODPOWIEDZI (AKORDEON) */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/70 border border-neutral-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8c6d3b]/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base md:text-lg font-serif text-neutral-900 font-medium">
                    {item.question}
                  </span>
                  
                  {/* PLUS / MINUS IKONA */}
                  <div className="w-8 h-8 rounded-full bg-[#f6f3ed] flex items-center justify-center shrink-0 text-[#8c6d3b] transition-transform duration-300">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={isOpen ? 'M5 12h14' : 'M12 5v14m-7-7h14'}
                      />
                    </svg>
                  </div>
                </button>

                {/* ODPOWIEDŹ Z ROZWIJANĄ ANIMACJĄ */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6 px-6'
                      : 'grid-rows-[0fr] opacity-0 px-6'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-neutral-600 font-sans font-light leading-relaxed pt-2 border-t border-neutral-100">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}