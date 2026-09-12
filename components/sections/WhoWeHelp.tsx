import React from 'react';
import { whoWeHelpItems } from '@/data/homepage';

export const WhoWeHelp: React.FC = () => {
  return (
    <section
      id="who-we-help"
      className="relative w-full py-14 md:py-24 lg:pt-28 xl:pt-32 lg:pb-32 bg-[#E8E1D9] lg:bg-white"
    >
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <div className="w-full max-w-[1500px] mx-auto px-[6vw] md:px-[4vw] lg:hidden">
        {/* Section Title: "Who we" in Playfair + "help" in Allura script #593D4B */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2
            id="who-we-help-title-mobile"
            className="font-serif-heading text-[38px] sm:text-[46px] md:text-[56px] font-normal leading-[1.2] tracking-tight text-[#302B2A] text-left"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span>Who we</span>
            <span
              className="inline-block ml-4 sm:ml-5 md:ml-7 font-script-accent font-normal text-[#593D4B] not-italic text-[48px] sm:text-[58px] md:text-[68px]"
              style={{ fontFamily: "'Allura', cursive" }}
            >
              help
            </span>
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-20 md:gap-8 items-start">
          {whoWeHelpItems.map((item) => {
            return (
              <article
                key={item.id}
                id={`who-we-help-mobile-${item.id}`}
                className="flex flex-col text-left"
              >
                {/* Image card with rounded-sm, mb-6 */}
                <div className="w-[98%] max-w-[420px] md:w-full md:max-w-none mx-auto md:mx-0 overflow-hidden mb-10">
                  <div className="w-full aspect-[10/9] overflow-hidden rounded-sm bg-[#D8C8C8]/50 shadow-sm">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover opacity-95 transition-transform duration-500 hover:scale-[1.02] hover:opacity-100 ${
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

                {/* H3 Title in Playfair Display */}
                <h3
                  className="font-serif-heading text-2xl md:text-3xl font-normal leading-snug text-[#302B2A] tracking-normal mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                {/* Paragraph in Montserrat Taupe Gray */}
                <p
                  className="font-sans-body text-base leading-[1.7] text-[#756D68] font-normal"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <div className="hidden lg:block w-full max-w-[1500px] mx-auto lg:px-[4vw]">
        {/* Section Title */}
        <div className="mb-14">
          <h2
            id="who-we-help-title-desktop"
            className="font-beaufort lg:text-[52px] xl:text-[54px] leading-tight text-[#2B2B2B] font-[300] tracking-[-0.01em] text-left"
          >
            <span>Who we</span>
            <span className="inline-block md:ml-5 font-printed-moments font-[300] text-[#86B3B3] not-italic">
              help
            </span>
          </h2>
        </div>

        {/* 3-Column Grid: Indented by 12.5% on desktop (col 5 of 24) matching the exact left/right spacing in reference figure, with 20px between cards */}
        <div className="w-full md:ml-[12.5%] md:w-[87.5%] grid grid-cols-3 md:gap-[20px] items-start">
          {whoWeHelpItems.map((item) => {
            return (
              <article
                key={item.id}
                id={`who-we-help-desktop-${item.id}`}
                className="flex flex-col text-left"
              >
                {/* Image card with exact 4/5 portrait aspect ratio matching reference figure */}
                <div className="w-full overflow-hidden md:mb-10">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02] ${
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

                {/* Subtitle in Beaufort Pro matching Squarespace heading 4 (1.7rem = 25.5px) */}
                <h3 className="font-beaufort md:text-[25.5px] leading-tight text-[#2B2B2B] font-[300] tracking-normal md:mb-[26px]">
                  {item.title}
                </h3>

                {/* Descriptive Paragraph in Muli Light with exact 16.5px (1.1rem) font size and 1.8em leading matching reference figure */}
                <p className="font-muli md:text-[16.5px] leading-[1.8] text-[#2B2B2B] font-[300] tracking-[0em]">
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
