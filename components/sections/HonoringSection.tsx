import React from 'react';
import { siteImages } from '@/data/homepage';

export const HonoringSection: React.FC = () => {
  return (
    <section
      id="honoring-section"
      aria-label="Honoring where you've been"
      className="relative w-full py-12 sm:py-16 md:py-24 lg:py-28 xl:py-32 bg-white overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between">
        
        {/* Left Column: Image touching the left side of the screen */}
        <div className="w-full md:w-[54.5%] lg:w-[53.5%] xl:w-[52.5%] 2xl:w-[52.5%] max-w-[850px] xl:max-w-[920px] 2xl:max-w-[980px] flex-shrink-0">
          <div className="w-full overflow-hidden shadow-none bg-white">
            <img
              id="honoring-family-image"
              src={siteImages.honoringFamily || siteImages.heroFamily}
              alt="Family standing hand-in-hand in ocean surf, viewed from behind looking towards horizon"
              className="w-full h-[260px] sm:h-[340px] md:h-[435px] lg:h-[475px] xl:h-[505px] 2xl:h-[535px] object-cover object-center select-none opacity-[0.89] contrast-[0.96] brightness-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Editorial Heading */}
        <div className="w-full md:flex-1 flex flex-col justify-end items-start px-6 sm:px-10 md:pl-8 lg:pl-12 xl:pl-16 md:pr-4 lg:pr-6 xl:pr-8 pb-0 sm:pb-0.5 md:pb-1 lg:pb-2 pt-8 md:pt-0 md:transform md:translate-y-3">
          <div className="w-full max-w-[595px] text-left">
            <h2
              id="honoring-heading"
              className="font-beaufort font-[300] not-italic tracking-[-0.01em] text-[rgb(43,43,43)] text-left text-[30px] min-[400px]:text-[34px] sm:text-[40px] md:text-[48px] leading-[1.24] md:leading-[62px]"
              style={{
                fontFamily: "'beaufort-pro', serif",
                color: 'rgb(43, 43, 43)',
                fontWeight: 300,
                fontStyle: 'normal',
              }}
            >
              <span className="block whitespace-normal md:whitespace-nowrap">
                Honoring where you’ve been
              </span>
              <span className="block whitespace-normal md:whitespace-nowrap mt-1 lg:mt-0.5">
                <span
                  id="honoring-ampersand"
                  className="font-printed-moments font-[300] not-italic text-[rgb(134,179,179)] mr-2.5 sm:mr-3.5 inline-block select-none transform translate-y-[-2px] text-[34px] min-[400px]:text-[38px] sm:text-[42px] md:text-[48px] leading-[1]"
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
              <span className="block whitespace-normal md:whitespace-nowrap mt-1 lg:mt-0.5">
                headed.
              </span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};
