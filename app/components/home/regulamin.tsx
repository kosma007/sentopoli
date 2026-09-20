'use client';

import { useState } from 'react';

const rules = [
  {
    number: '01',
    title: 'Postanowienia ogólne',
    content: [
      'Regulamin określa zasady świadczenia usług, odpowiedzialności oraz przebywania na terenie obiektu Sen Topoli.',
      'Dokonanie rezerwacji oraz zameldowanie jest równoznaczne z zapoznaniem się i akceptacją niniejszego Regulaminu.',
      'Domy wynajmowane są na doby. Doba hotelowa rozpoczyna się o godzinie 15:00 w dniu przyjazdu, a kończy o godzinie 11:00 w dniu wyjazdu.',
    ],
  },
  {
    number: '02',
    title: 'Cisza nocna i charakter pobytu',
    content: [
      'W obiekcie obowiązuje cisza nocna w godzinach od 22:00 do 6:00.',
      'Sen Topoli jest miejscem kameralnego wypoczynku w naturze. Na terenie obiektu obowiązuje bezwzględny zakaz organizowania imprez, wieczorów kawalerskich, panieńskich oraz głośnych spotkań zakłócających spokój okolicy.',
      'W przypadku interwencji policji lub skarg sąsiadów zastrzegamy sobie prawo do natychmiastowego rozwiązania umowy bez zwrotu kosztów.',
    ],
  },
  {
    number: '03',
    title: 'Zasady bezpieczeństwa i ppoż.',
    content: [
      'Wewnątrz domów obowiązuje bezwzględny zakaz palenia tytoniu, papierosów elektronicznych oraz wyrobów tytoniowych.',
      'Używanie kominka powinno odbywać się zgodnie z instrukcją. Prosimy o zachowanie szczególnej ostrożności i niedostawianie łatwopalnych przedmiotów do obudowy kominka.',
      'Palenie ognisk oraz grilla dozwolone jest wyłącznie w miejscach do tego wyznaczonych.',
    ],
  },
  {
    number: '04',
    title: 'Strefa Wellness & Sauna',
    content: [
      'Korzystanie z sauny zewnętrznej i balii odbywa się na własną odpowiedzialność Gości.',
      'Przed skorzystaniem z sauny należy zapoznać się z instrukcją obsługi dostępną w przewodniku dla Gości.',
      'Dzieci mogą przebywać w saunie wyłącznie pod opieką osób dorosłych.',
    ],
  },
  {
    number: '05',
    title: 'Dostęp do jeziora, pomostu i sprzętu wodnego',
    content: [
      'Korzystanie z pomostu, plaży, kajaków oraz desek SUP odbywa się na własną odpowiedzialność.',
      'Osoby nieletnie mogą korzystać ze sprzętu wodnego oraz przebywać na pomoście wyłącznie w kamizelkach asekuracyjnych i pod opieką dorosłych.',
      'Po zakończeniu korzystania ze sprzętu wodnego należy odłożyć go na wyznaczone miejsce i zabezpieczyć.',
    ],
  },
  {
    number: '06',
    title: 'Pobyt ze zwierzętami',
    content: [
      'Pobyt ze zwierzętami domowymi jest możliwy wyłącznie po wcześniejszym zgłoszeniu i uzyskaniu zgody.',
      'Właściciel zwierzęcia ponosi pełną odpowiedzialność za wszelkie szkody wyrządzone przez zwierzę.',
      'Prosimy o sprzątanie po swoich pupilach oraz niewpuszczanie ich na łóżka i kanapy.',
    ],
  },
  {
    number: '07',
    title: 'Odpowiedzialność za szkody',
    content: [
      'Gość ponosi pełną odpowiedzialność finansową за uszkodzenie lub zniszczenie wyposażenia i urządzeń technicznych obiektu z jego winy.',
      'O wszelkich usterkach lub szkodach powstałych w trakcie pobytu należy niezwłocznie poinformować obsługę.',
    ],
  },
];

export default function RegulaminPobytu() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section id="regulamin" className="w-full bg-[#f6f3ed] py-20 px-4 md:px-8 text-neutral-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* NAGŁÓWEK */}
        <div className="text-center space-y-3">
          <p className="text-xs tracking-[0.25em] text-[#8c6d3b] uppercase font-light">
            SEN TOPOLI
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 font-normal">
            Regulamin pobytu
          </h2>
          <div className="w-16 h-[1px] bg-[#8c6d3b]/40 mx-auto my-3" />
          <p className="text-xs md:text-sm text-neutral-600 font-sans font-light max-w-lg mx-auto leading-relaxed">
            Troszczymy się o komfort, bezpieczeństwo i spokój wszystkich naszych Gości. Prosimy o zapoznanie się z poniższymi zasadami.
          </p>
        </div>

        {/* LISTA PUNKTÓW REGULAMINU */}
        <div className="space-y-4">
          {rules.map((rule, index) => {
            const isOpen = openSection === index;
            return (
              <div
                key={index}
                className="bg-white/70 border border-neutral-200/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8c6d3b]/40 shadow-sm"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-serif text-[#8c6d3b] tracking-widest font-semibold">
                      {rule.number}
                    </span>
                    <h3 className="text-base md:text-lg font-serif text-neutral-900 font-medium">
                      {rule.title}
                    </h3>
                  </div>

                  {/* IKONA ROZWIJANIA */}
                  <div className="w-8 h-8 rounded-full bg-[#f6f3ed] flex items-center justify-center shrink-0 text-[#8c6d3b]">
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* TREŚĆ PUNKTU */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6 px-6'
                      : 'grid-rows-[0fr] opacity-0 px-6'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 pt-2 border-t border-neutral-100">
                      {rule.content.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start space-x-3 text-xs md:text-sm text-neutral-600 font-sans font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3b] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* STOPKA POD REGULAMINEM */}
        <div className="text-center pt-6 text-xs text-neutral-500 font-light">
          W razie jakichkolwiek pytań dotyczących regulaminu zachęcamy do kontaktowania się z nami telefonicznie lub e-mailowo przed przyjazdem.
        </div>

      </div>
    </section>
  );
}