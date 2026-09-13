import React from 'react';
import { siteImages } from '@/data/homepage';

export const HonoringSection: React.FC = () => {
  return (
    <section
      id="honoring-section"
      aria-label="Honoring where you've been"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-[#F7F5F1] lg:bg-[#F7F5F1] overflow-hidden"
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
              src={siteImages.honoringFamily}
              alt="Books on the healing process and restoring yourself beside an armchair in warm sunlight"
              className="block w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover object-[center_38%] select-none shadow-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Heading Column */}
        <div className="w-full flex flex-col justify-end items-start px-6 sm:px-10 pt-6 sm:pt-8 pb-0 sm:pb-1">
          <div className="w-full max-w-[640px] text-left">
            <h2
              id="honoring-heading-mobile"
              className="font-playfair font-normal not-italic tracking-[-0.01em] text-[#302A29] text-left text-[30px] min-[400px]:text-[34px] sm:text-[40px] leading-[1.2]"
            >
              <span className="block">
                <span>Helping you understand what’s happening</span>{' '}
                <span className="block mt-1">and move toward a more</span>{' '}
                <span className="inline-flex items-baseline whitespace-nowrap mt-1">
                  <span>sustainable way of</span>{' '}
                  <span
                    id="honoring-living-mobile"
                    className="font-allura not-italic text-[#5A3E4B] ml-2 sm:ml-2.5 inline-block select-none transform translate-y-[-2px] text-[36px] min-[400px]:text-[40px] sm:text-[48px] leading-[1]"
                    style={{ fontFamily: "'Allura', cursive", color: '#5A3E4B' }}
                  >
                    living
                  </span>
                  <span className="text-[#302A29]">.</span>
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
          <div className="w-full overflow-hidden shadow-none bg-[#F7F5F1]">
            <img
              id="honoring-family-image-desktop"
              src={siteImages.honoringFamily}
              alt="Books on the healing process and restoring yourself beside an armchair in warm sunlight"
              className="w-full lg:h-[475px] xl:h-[505px] 2xl:h-[535px] object-cover object-[center_38%] select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Editorial Heading */}
        <div className="w-full lg:flex-1 flex flex-col justify-end items-start lg:pl-12 xl:pl-16 lg:pr-6 xl:pr-8 lg:pb-2 lg:transform lg:translate-y-3">
          <div className="w-full max-w-[640px] text-left">
            <h2
              id="honoring-heading-desktop"
              className="font-serif-heading text-[42px] xl:text-[52px] 2xl:text-[58px] leading-[1.08] text-[#302A29] text-left"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">
                Helping you understand
              </span>
              <span className="block whitespace-nowrap mt-0.5">
                what’s happening and move
              </span>
              <span className="block whitespace-nowrap mt-0.5">
                toward a more sustainable
              </span>
              <span className="inline-flex items-baseline whitespace-nowrap mt-0.5">
                <span>way of</span>{' '}
                <span
                  id="honoring-living-desktop"
                  className="font-script-accent not-italic text-[#5A3E4B] ml-3.5 inline-block select-none transform translate-y-[-2px] text-[48px] xl:text-[58px] 2xl:text-[64px] leading-[1]"
                  style={{
                    fontFamily: "'Allura', cursive",
                    fontStyle: 'normal',
                    color: '#5A3E4B',
                  }}
                >
                  living
                </span>
                <span className="text-[#302A29]">.</span>
              </span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};
