import React from 'react';
import { siteImages } from '@/data/homepage';

export const HonoringSection: React.FC = () => {
  return (
    <section
      id="honoring-section"
      aria-label="Honoring where you've been"
      className="relative w-full py-12 sm:py-16 md:py-24 lg:py-28 xl:py-32 bg-white overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-end justify-between">
        
        {/* Right Column: Image with padding on mobile */}
        <div className="w-full md:w-[65%] lg:w-[65%] xl:w-[65%] 2xl:w-[65%] flex-shrink-0 pl-6 sm:pl-10 md:pl-0 pr-0">
          <div className="w-full overflow-hidden shadow-none bg-white flex justify-end">
            <img
              id="honoring-family-image"
              src={siteImages.honoringFamily || siteImages.heroFamily}
              alt="Family standing hand-in-hand in ocean surf, viewed from behind looking towards horizon"
              className="w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[580px] xl:h-[620px] 2xl:h-[680px] object-cover object-center select-none opacity-[0.89] contrast-[0.96] brightness-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Left Column: Editorial Heading */}
        <div className="w-full md:flex-1 flex flex-col justify-end items-start px-6 sm:px-10 md:pl-16 lg:pl-24 xl:pl-32 md:pr-4 lg:pr-6 xl:pr-8 pt-4 md:pt-0 pb-0 sm:pb-0.5 md:pb-1 lg:pb-2 md:transform md:translate-y-3">
          <div className="w-full max-w-[595px] text-left">
            <h2
              id="honoring-heading"
              className="font-beaufort font-[300] not-italic tracking-[-0.01em] text-[rgb(43,43,43)] text-left text-[34px] min-[400px]:text-[38px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.24] md:leading-[1.1]"
              style={{
                fontFamily: "'beaufort-pro', serif",
                color: 'rgb(43, 43, 43)',
                fontWeight: 300,
                fontStyle: 'normal',
              }}
            >
              <span className="block whitespace-nowrap">
                Honoring where you’ve
              </span>
              <span className="block whitespace-nowrap mt-1 lg:mt-0.5">
                been
                <span
                  id="honoring-ampersand"
                  className="font-printed-moments font-[300] not-italic text-[rgb(134,179,179)] mx-2.5 sm:mx-3.5 inline-block select-none transform translate-y-[-4px] text-[38px] min-[400px]:text-[42px] sm:text-[50px] md:text-[58px] lg:text-[66px] leading-[1]"
                  style={{
                    fontFamily: "'PrintedMoments', cursive",
                    color: 'rgb(134, 179, 179)',
                    fontWeight: 300,
                    fontStyle: 'normal',
                  }}
                >
                  &
                </span>
                helping shape
              </span>
              <span className="block whitespace-nowrap mt-1 lg:mt-0.5">
                where you’re headed.
              </span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};
