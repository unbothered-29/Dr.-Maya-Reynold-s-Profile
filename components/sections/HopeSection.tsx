import React from 'react';
import { hopeContent, siteImages } from '@/data/homepage';

export const HopeSection: React.FC = () => {
  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <section
        id="about-mobile"
        className="relative w-full bg-[#F7F5F1] overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-16 md:py-24 lg:hidden"
      >
        <div className="w-full max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
          <div className="flex flex-col text-left">
            <h2
              id="mobile-hope-headline"
              className="font-serif text-[clamp(32px,8.8vw,42px)] sm:text-[46px] md:text-[52px] leading-[1.38] min-[390px]:leading-[1.42] text-[#302A29] font-normal tracking-[-0.01em]"
            >
              {hopeContent.headline}
            </h2>

            <p
              id="mobile-hope-paragraph-1"
              className="mt-[22px] min-[390px]:mt-[26px] sm:mt-[30px] font-sans text-base font-normal leading-[1.8] text-[#756C67]"
            >
              {hopeContent.paragraph1}
            </p>

            <div className="my-8 sm:my-10 w-full overflow-hidden rounded-sm">
              <img
                id="mobile-hope-ocean-image"
                src={siteImages.hopeOcean}
                alt="Young woman in thoughtful contemplation"
                className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover object-center select-none shadow-sm opacity-85 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p
              id="mobile-hope-paragraph-2"
              className="font-sans text-base font-normal leading-[1.8] text-[#756C67]"
            >
              {hopeContent.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <section
        id="about-desktop"
        className="relative hidden lg:block w-full bg-[#F7F5F1] overflow-hidden lg:pt-20 xl:pt-24 lg:pb-20"
      >
        <div className="w-full lg:pl-20 xl:pl-28 2xl:pl-36 lg:pr-0">
          <div className="flex flex-row items-start justify-between gap-12 xl:gap-16 2xl:gap-20">
            {/* Left Area: Headline + Two-Column Text Composition */}
            <div className="flex-1 min-w-0 pr-6 xl:pr-12 pt-24 xl:pt-[110px] 2xl:pt-[120px] max-w-[920px]">
              
              <h2
                id="hope-headline-desktop"
                className="desktop-section-heading text-[#302A29] tracking-tight text-left max-w-[800px]"
              >
                {hopeContent.headline}
              </h2>

              {/* Two-Column Text Grid */}
              <div className="mt-[52px] grid grid-cols-2 gap-12 xl:gap-14 text-left items-start">
                {/* Left Column: Paragraph 1 */}
                <div className="flex flex-col justify-start w-full lg:max-w-[560px] xl:max-w-[620px]">
                  <p
                    id="hope-paragraph-1-desktop"
                    className="desktop-body-long text-[#302A29]"
                  >
                    {hopeContent.paragraph1}
                  </p>
                </div>

                {/* Right Column: Paragraph 2 */}
                <div className="flex flex-col justify-start w-full lg:max-w-[560px] xl:max-w-[620px]">
                  <p
                    id="hope-paragraph-2-desktop"
                    className="desktop-body-long text-[#302A29]"
                  >
                    {hopeContent.paragraph2}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Ocean Waves Photograph positioned to screen right edge */}
            <div className="w-[31vw] min-w-[380px] max-w-[500px] xl:max-w-[530px] 2xl:max-w-[560px] flex-shrink-0 self-start">
              <div className="w-full h-[590px] xl:h-[615px] 2xl:h-[640px] overflow-hidden relative">
                <img
                  id="hope-ocean-image-desktop"
                  src={siteImages.hopeOcean}
                  alt="Young woman in thoughtful contemplation"
                  className="w-full h-full object-cover object-center select-none opacity-85 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
