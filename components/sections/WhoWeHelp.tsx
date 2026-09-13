import React from 'react';
import { whoWeHelpItems } from '@/data/homepage';

export const WhoWeHelp: React.FC = () => {
  return (
    <section
      id="who-we-help"
      className="relative w-full py-14 md:py-24 lg:pt-28 xl:pt-32 lg:pb-32 bg-[#E7DED4] lg:bg-[#F7F5F1]"
    >
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <div className="w-full max-w-[1500px] mx-auto px-[6vw] md:px-10 lg:hidden">
        {/* Section Title: "Who we" in Playfair + "help" in Allura script #5A3E4B */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h2
            id="who-we-help-title-mobile"
            className="font-serif-heading text-[38px] sm:text-[46px] md:text-[48px] font-normal leading-[1.2] tracking-tight text-[#302A29] text-left"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            <span>Who I</span>
            <span
              className="inline-block ml-4 sm:ml-5 md:ml-6 font-script-accent font-normal text-[#5A3E4B] not-italic text-[48px] sm:text-[58px] md:text-[60px]"
              style={{ fontFamily: "'Allura', cursive" }}
            >
              help
            </span>
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-20 md:gap-6 items-start">
          {whoWeHelpItems.map((item) => {
            return (
              <article
                key={item.id}
                id={`who-we-help-mobile-${item.id}`}
                className="flex flex-col text-left"
              >
                {/* Image card with rounded-sm, mb-6 */}
                <div className="w-[98%] max-w-[420px] md:w-full md:max-w-none mx-auto md:mx-0 overflow-hidden mb-10 md:mb-6">
                  <div className="w-full aspect-[10/9] overflow-hidden rounded-sm bg-[#D9C9C9]/50 shadow-sm">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover opacity-95 transition-transform duration-500 hover:scale-[1.02] hover:opacity-100 ${
                        item.id === 'adults'
                          ? 'object-[center_15%]'
                          : item.id === 'professionals'
                          ? 'object-[center_20%]'
                          : item.id === 'trauma'
                          ? 'object-center'
                          : 'object-center'
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* H3 Title in Playfair Display */}
                <h3
                  className="font-serif-heading text-2xl md:text-[22px] font-normal leading-snug text-[#302A29] tracking-normal mb-6 md:mb-3.5"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                {/* Paragraph in Montserrat Taupe Gray */}
                <p
                  className="font-sans-body text-base md:text-[14px] leading-[1.7] md:leading-[1.65] text-[#756C67] font-normal"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
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
            className="desktop-section-heading text-[#302A29] tracking-tight text-left"
          >
            <span>Who I</span>
            <span
              className="inline-block md:ml-5 font-script-accent text-[64px] xl:text-[72px] font-normal text-[#5A3E4B] not-italic"
              style={{ fontFamily: "'Allura', cursive" }}
            >
              help
            </span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="w-full md:ml-[12.5%] md:w-[87.5%] grid grid-cols-3 md:gap-[20px] items-start">
          {whoWeHelpItems.map((item) => {
            return (
              <article
                key={item.id}
                id={`who-we-help-desktop-${item.id}`}
                className="flex flex-col text-left"
              >
                {/* Image card with exact 4/5 portrait aspect ratio */}
                <div className="w-full overflow-hidden md:mb-10">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02] ${
                        item.id === 'adults'
                          ? 'object-[center_15%]'
                          : item.id === 'professionals'
                          ? 'object-[center_20%]'
                          : item.id === 'trauma'
                          ? 'object-center'
                          : 'object-center'
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <h3 className="desktop-service-title font-medium text-[#302A29] tracking-normal md:mb-[26px]">
                  {item.title}
                </h3>

                <p className="desktop-body text-[#302A29] tracking-[0em]">
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
