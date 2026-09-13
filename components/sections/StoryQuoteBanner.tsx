'use client';

import React from 'react';
import { statementContent } from '@/data/homepage';

export const StoryQuoteBanner: React.FC = () => {
  const imgSrc = statementContent.image || '/images/deserve-a-place.png';

  return (
    <section className="w-full bg-[#F7F5F1] lg:bg-transparent pb-0">
      
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <div
        id="story-quote-banner-mobile"
        aria-labelledby="story-quote-heading-mobile"
        className="relative lg:hidden w-full min-h-[52vh] sm:min-h-[58vh] md:min-h-[440px] overflow-hidden bg-[#392831] pt-28 pb-12 sm:pb-14 md:pb-16 px-6 sm:px-10 md:px-14 flex flex-col justify-end items-start text-left"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={imgSrc}
            alt="A woman resting peacefully in a sunlit room by the window"
            className="w-full h-full object-cover object-[78%_50%]"
            referrerPolicy="no-referrer"
          />
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-xl md:max-w-[560px] text-left flex flex-col items-start">
          <h2
            id="story-quote-heading-mobile"
            className="font-serif text-[28px] min-[390px]:text-[32px] sm:text-[38px] md:text-[38px] font-normal leading-[1.25] md:leading-[1.2] tracking-tight text-[#F7F5F1] select-text text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            {statementContent.quote}
          </h2>
          <div className="w-12 h-[2px] bg-[#B88B89] mt-5 sm:mt-6" />
        </div>
      </div>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <div
        id="story-quote-banner-desktop"
        aria-labelledby="story-quote-heading-desktop"
        className="relative hidden lg:flex w-full overflow-hidden bg-[#392831] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[620px] flex-col justify-end items-start"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={imgSrc}
            alt="A woman resting peacefully in a sunlit room by the window"
            className="w-full h-full object-cover object-[85%_50%]"
            referrerPolicy="no-referrer"
          />
          {/* Black overlay previously present */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.44)' }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto lg:px-16 xl:px-24 2xl:px-28 pb-14 lg:pb-16 xl:pb-20 pt-40 text-left">
          <div className="max-w-[620px] xl:max-w-[700px] text-left">
            <h2
              id="story-quote-heading-desktop"
              className="desktop-section-heading text-[#F7F5F1] tracking-tight text-left select-text leading-[1.14] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            >
              {statementContent.quote}
            </h2>
          </div>
        </div>
      </div>

    </section>
  );
};

