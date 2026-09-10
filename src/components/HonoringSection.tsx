import React from 'react';
import { siteImages } from '../data/homepage';

export const HonoringSection: React.FC = () => {
  return (
    <section
      id="honoring-section"
      aria-label="Honoring where you've been"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-end">
          
          {/* Left: Authentic Family in Ocean Waters Photo */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-start">
            <div className="w-full overflow-hidden shadow-sm">
              <img
                id="honoring-family-image"
                src={siteImages.heroFamily}
                alt="Family standing hand-in-hand in ocean surf, viewed from behind looking towards horizon"
                className="w-full h-auto aspect-[16/10.2] object-cover object-center select-none hover:scale-[1.01] transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Editorial Heading anchored towards lower portion */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end text-left pb-2 sm:pb-4 lg:pb-6 xl:pb-8">
            <h2
              id="honoring-heading"
              className="font-beaufort text-[32px] sm:text-[38px] md:text-[44px] lg:text-[46px] xl:text-[52px] leading-[1.24] lg:leading-[1.22] font-[300] tracking-[-0.015em] text-[rgb(43,43,43)]"
            >
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Honoring where you’ve been
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap mt-0.5">
                <span
                  id="honoring-ampersand"
                  className="font-cormorant italic text-[#7EAEA9] font-[300] text-[1.15em] mr-2 inline-block select-none transform translate-y-[-1px]"
                  style={{ fontFamily: "'Cormorant Garamond', 'Cormorant Infant', 'PrintedMoments', Georgia, serif" }}
                >
                  &
                </span>
                helping shape where you’re
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap mt-0.5">
                headed.
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};
