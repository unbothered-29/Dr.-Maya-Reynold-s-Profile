import React from 'react';
import { siteImages } from '../data/homepage';

export const HonoringSection: React.FC = () => {
  return (
    <section
      id="honoring-section"
      aria-label="Honoring where you've been"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between">
        
        {/* Left Column: Image touching the left side of the screen with very slightly decreased width */}
        <div className="w-full md:w-[54.5%] lg:w-[53.5%] xl:w-[52.5%] 2xl:w-[52.5%] max-w-[850px] xl:max-w-[920px] 2xl:max-w-[980px] flex-shrink-0">
          <div className="w-full overflow-hidden shadow-none bg-white">
            <img
              id="honoring-family-image"
              src={siteImages.honoringFamily || siteImages.heroFamily}
              alt="Family standing hand-in-hand in ocean surf, viewed from behind looking towards horizon"
              className="w-full h-[330px] sm:h-[395px] md:h-[435px] lg:h-[475px] xl:h-[505px] 2xl:h-[535px] object-cover object-center select-none opacity-[0.89] contrast-[0.96] brightness-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Editorial Heading moved a bit further to the right with very slightly decreased font size */}
        <div className="w-full md:flex-1 flex flex-col justify-end items-start pl-8 sm:pl-10 md:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-6 md:pr-4 lg:pr-6 xl:pr-8 pb-0 sm:pb-0.5 md:pb-1 lg:pb-2 pt-8 md:pt-0 transform translate-y-1 sm:translate-y-2 md:translate-y-3">
          <div className="w-full max-w-[595px] text-left">
            <h2
              id="honoring-heading"
              className="font-beaufort font-[300] tracking-[-0.01em] text-[rgb(43,43,43)] text-left leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] xl:leading-[65px]"
              style={{
                fontFamily: "'beaufort-pro', serif",
                fontSize: 'clamp(25px, 2.95vw, 50.5px)',
              }}
            >
              <span className="block whitespace-nowrap">
                Honoring where you’ve been
              </span>
              <span className="block whitespace-nowrap mt-1 lg:mt-0.5">
                <span
                  id="honoring-ampersand"
                  className="font-printed-moments font-[300] not-italic text-[rgb(134,179,179)] leading-[38px] mr-2.5 sm:mr-3.5 inline-block select-none transform translate-y-[-2px]"
                  style={{
                    fontFamily: "'PrintedMoments', cursive",
                    fontSize: 'clamp(25px, 2.95vw, 50.5px)',
                  }}
                >
                  &
                </span>
                helping shape where you’re
              </span>
              <span className="block whitespace-nowrap mt-1 lg:mt-0.5">
                headed.
              </span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
};
