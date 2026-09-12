import React from 'react';
import { whoWeHelpItems } from '@/data/homepage';

export const WhoWeHelp: React.FC = () => {
  return (
    <section
      id="who-we-help"
      className="relative w-full py-14 md:py-24 lg:py-28 bg-[#FFFFFF]"
    >
      <div className="w-full max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        {/* Section Title: "Who we" in serif + "help" in PrintedMoments script #86B3B3 */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2
            id="who-we-help-title"
            className="font-serif-editorial text-[38px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-light leading-[1.2] tracking-tight text-[#2B2B2B] text-left"
            style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
          >
            <span>Who we</span>
            <span className="inline-block ml-5 sm:ml-6 md:ml-8 lg:ml-10 font-printed-moments font-[300] text-[#86B3B3] not-italic">
              help
            </span>
          </h2>
        </div>

        {/* 3-Card Grid: Desktop (grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10) | Mobile (grid-cols-1 gap-10) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-20 md:gap-8 lg:gap-10 items-start">
          {whoWeHelpItems.map((item) => {
            return (
              <article
                key={item.id}
                id={`who-we-help-${item.id}`}
                className="flex flex-col text-left"
              >
                {/* Image card with exact 4/5 portrait aspect ratio, rounded-sm, mb-6 */}
                <div className="w-[98%] max-w-[420px] md:w-full md:max-w-none mx-auto md:mx-0 overflow-hidden mb-10">
                  <div className="w-full aspect-[10/9] overflow-hidden rounded-sm bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-[1.02] hover:opacity-100 ${
                        item.id === 'adults'
                          ? 'object-[50%_65%]'
                          : item.id === 'children-teens'
                          ? 'object-[50%_55%]'
                          : 'object-center'
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* H4 Title: text-lg md:text-2xl font-normal font-serif mb-2 */}
                <h3
                  className="font-serif-editorial text-2xl md:text-3xl font-normal leading-snug text-[#2B2B2B] tracking-normal mb-8"
                  style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                {/* Paragraph: text-sm leading-[1.7] font-light text-[#2B2B2B]/85 */}
                <p
                  className="font-sans-clean text-base leading-[1.7] text-[#2B2B2B]/85 font-light"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
