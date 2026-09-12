import React from 'react';
import { siteImages } from '@/data/homepage';

export const HonoringSection: React.FC = () => {
  return (
    <section
      id="honoring-section"
      aria-label="Honoring where you've been"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-[#F7F5F1] lg:bg-white overflow-hidden"
    >
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <div className="w-full flex lg:hidden flex-col items-center justify-between">
        
        {/* Image Column: Padded on mobile as before, flush-left on web view */}
        <div className="w-full flex-shrink-0 pl-6 sm:pl-10 pr-0 pb-0">
          <div className="w-full overflow-hidden shadow-none bg-[#F7F5F1] flex justify-end">
            <img
              id="honoring-family-image-mobile"
              src={siteImages.honoringFamily || siteImages.heroFamily}
              alt="Family standing hand-in-hand in ocean surf, viewed from behind looking towards horizon"
              className="block w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover object-center select-none opacity-[0.92] contrast-[0.98] brightness-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Heading Column */}
        <div className="w-full flex flex-col justify-end items-start px-6 sm:px-10 pt-6 sm:pt-8 pb-0 sm:pb-1">
          <div className="w-full max-w-[640px] text-left">
            <h2
              id="honoring-heading-mobile"
              className="font-playfair font-normal not-italic tracking-[-0.01em] text-[#302B2A] text-left text-[30px] min-[400px]:text-[34px] sm:text-[40px] leading-[1.2]"
            >
              {/* Mobile View Headline (< lg): Preserved exactly as before */}
              <span className="block">
                <span className="block whitespace-nowrap">
                  Honoring where you’ve
                </span>
                <span className="block whitespace-nowrap mt-1">
                  been
                  <span
                    id="honoring-ampersand-mobile"
                    className="font-allura not-italic text-[#B98D8D] mx-2 sm:mx-2.5 inline-block select-none transform translate-y-[-2px] text-[36px] min-[400px]:text-[40px] sm:text-[48px] leading-[1]"
                  >
                    &
                  </span>
                  helping shape
                </span>
                <span className="block whitespace-nowrap mt-1">
                  where you’re headed.
                </span>
              </span>
            </h2>
          </div>
        </div>

      </div>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <div className="hidden lg:flex w-full flex-row items-end justify-between">
        
        {/* Left Column: Image touching the left side of the screen */}
        <div className="w-full lg:w-[53.5%] xl:w-[52.5%] 2xl:w-[52.5%] max-w-[850px] xl:max-w-[920px] 2xl:max-w-[980px] flex-shrink-0">
          <div className="w-full overflow-hidden shadow-none bg-white">
            <img
              id="honoring-family-image-desktop"
              src={siteImages.honoringFamily || siteImages.heroFamily}
              alt="Family standing hand-in-hand in ocean surf, viewed from behind looking towards horizon"
              className="w-full lg:h-[475px] xl:h-[505px] 2xl:h-[535px] object-cover object-center select-none opacity-[0.89] contrast-[0.96] brightness-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Editorial Heading */}
        <div className="w-full lg:flex-1 flex flex-col justify-end items-start lg:pl-12 xl:pl-16 lg:pr-6 xl:pr-8 lg:pb-2 lg:transform lg:translate-y-3">
          <div className="w-full max-w-[595px] text-left">
            <h2
              id="honoring-heading-desktop"
              className="font-beaufort font-[300] not-italic tracking-[-0.01em] text-[rgb(43,43,43)] text-left lg:text-[38px] xl:text-[48px] lg:leading-[62px]"
              style={{
                fontFamily: "'beaufort-pro', serif",
                color: 'rgb(43, 43, 43)',
                fontWeight: 300,
                fontStyle: 'normal',
              }}
            >
              <span className="block whitespace-nowrap">
                Honoring where you’ve been
              </span>
              <span className="block whitespace-nowrap mt-0.5">
                <span
                  id="honoring-ampersand-desktop"
                  className="font-printed-moments font-[300] not-italic text-[rgb(134,179,179)] mr-3.5 inline-block select-none transform translate-y-[-2px] lg:text-[42px] xl:text-[48px] leading-[1]"
                  style={{
                    fontFamily: "'PrintedMoments', cursive",
                    color: 'rgb(134, 179, 179)',
                    fontWeight: 300,
                    fontStyle: 'normal',
                  }}
                >
                  &
                </span>
                helping shape where you’re
              </span>
              <span className="block whitespace-nowrap mt-0.5">
                headed.
              </span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};
