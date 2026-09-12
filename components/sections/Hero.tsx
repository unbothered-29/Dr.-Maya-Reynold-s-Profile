'use client';

import React from 'react';
import { siteImages } from '@/data/homepage';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#F6F4F0]"
    >
      {/* Desktop Asymmetric Editorial Composition (>= 1024px) */}
      <div className="hidden lg:flex w-full pt-[30px] xl:pt-[34px] pb-[34px] lg:pb-[38px] xl:pb-[42px] relative justify-between">
        {/* Left Column: Authentic Family Beach Image cropped to end at shorts/sand baseline */}
        <div className="w-[33%] xl:w-[34%] 2xl:w-[34.5%] max-w-[520px] min-w-[340px] h-[560px] lg:h-[580px] xl:h-[600px] flex-shrink-0 overflow-hidden relative">
          <img
            id="hero-family-image"
            src={siteImages.heroFamily}
            alt="Family walking on a peaceful sandy beach in soft coastal light"
            className="w-full h-full object-cover object-[52%_15%] coastal-film-image"
            loading="eager"
          />
        </div>

        {/* Center Column: Text Composition with generous spacing and strict left alignment on single axis */}
        <div className="flex-1 min-w-0 pl-12 lg:pl-[84px] xl:pl-[108px] 2xl:pl-[124px] pr-6 lg:pr-8 xl:pr-12 text-left pt-0.5 relative z-20 flex flex-col justify-start items-start">
          {/* Eyebrow - Exactly 2 lines in Muli rgb(43, 43, 43), uppercase tracking-[0.12em] */}
          <div id="hero-eyebrow" className="w-full max-w-[500px] text-left">
            <p
              className="text-[14px] lg:text-[15px] uppercase tracking-[0.12em] font-sans-clean text-[#2B2B2B]/80 font-[300] leading-[27px]"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
              <span className="block">PARK & ACROSS CA</span>
            </p>
          </div>

          {/* Headline - In Cormorant Infant / beaufort-pro 300 58px / 75px rgb(43, 43, 43) */}
          <div className="mt-[116px] lg:mt-[126px] xl:mt-[136px] w-full max-w-[840px] text-left">
            <h1
              id="hero-headline"
              className="font-serif-editorial text-[44px] lg:text-[54px] xl:text-[58px] font-light leading-tight xl:leading-[75px] tracking-tight text-[#2B2B2B] text-left"
              style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">Rebuild your foundation on</span>
              <span className="block whitespace-nowrap">solid ground and finally begin</span>
              <span className="block whitespace-nowrap">
                to{' '}
                <span
                  id="hero-thrive-accent"
                  className="font-thrive-script text-[#86B3B3] font-[300] not-italic inline-block relative -top-[1px] ml-3.5 lg:ml-4 xl:ml-[18px]"
                  style={{
                    fontFamily: "'PrintedMoments', cursive",
                    fontSize: '60px',
                    lineHeight: '42px',
                    color: '#86B3B3',
                    fontWeight: 300,
                    fontStyle: 'normal',
                  }}
                >
                  thrive
                </span>
                <span className="text-[#2B2B2B] font-serif-editorial">.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle - Body Large / text-base md:text-lg font-light leading-[1.8] */}
          <div className="mt-[26px] lg:mt-[30px] xl:mt-[34px] w-full text-left max-w-2xl">
            <p
              id="hero-subheading"
              className="font-sans-clean text-base lg:text-[17px] leading-[1.8] text-[#2B2B2B]/85 font-light whitespace-normal xl:whitespace-nowrap text-left"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Button Style: Custom Squarespace Primary Button with underline animation */}
          <div className="mt-[32px] lg:mt-[38px] xl:mt-[42px] text-left">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onBookClick}
              className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0 select-none"
            >
              <span className="font-sans-clean text-xs lg:text-sm uppercase tracking-wider text-[#2B2B2B] font-normal group-hover:opacity-75 transition-opacity">
                BOOK AN APPOINTMENT
              </span>
              <span className="w-full h-[1px] bg-[#2B2B2B] mt-[4px] group-hover:opacity-75 transition-all" />
            </button>
          </div>
        </div>

        {/* Right Column: Ocean Waves Photograph top-aligned with headline and bottom-aligned with left photo */}
        <div className="w-[130px] lg:w-[145px] xl:w-[160px] 2xl:w-[175px] h-[560px] lg:h-[580px] xl:h-[600px] flex-shrink-0 overflow-hidden relative">
          <div className="w-full h-[412px] lg:h-[426px] xl:h-[440px] mt-[148px] lg:mt-[154px] xl:mt-[160px] overflow-hidden relative">
            <img
              id="hero-ocean-image"
              src={siteImages.heroOceanNarrow}
              alt="Washed coastal ocean waves in pale sand tones"
              className="w-full h-full object-cover object-[87%_56%] coastal-film-image"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#4A7272]/[0.08] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Flow (< 1024px) with px-[6vw] gutter */}
      <div className="lg:hidden px-[6vw] pt-[48px] min-[390px]:pt-[56px] pb-10 flex flex-col text-left">
        {/* Eyebrow - Exactly 2 lines matching user reference screenshot */}
        <div id="mobile-hero-eyebrow" className="w-full text-left">
          <p
            className="text-[12px] min-[375px]:text-[13px] uppercase tracking-[0.12em] font-sans-clean text-[#2B2B2B]/75 font-normal leading-[24px] min-[375px]:leading-[26px]"
            style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
          >
            <span className="block whitespace-nowrap">ONLINE & IN-PERSON COUNSELING IN</span>
            <span className="block whitespace-nowrap">NEWBURY PARK & ACROSS CA</span>
          </p>
        </div>

        {/* Headline - Exactly matching the user reference screenshot */}
        <h1
          id="mobile-hero-headline"
          className="font-serif-editorial text-[36px] min-[390px]:text-[40px] sm:text-[46px] md:text-[54px] leading-tight text-[#2B2B2B] font-light tracking-tight mt-[32px] min-[390px]:mt-[40px]"
          style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
        >
          <span className="block whitespace-nowrap">Rebuild your</span>
          <span className="block whitespace-nowrap">foundation on solid</span>
          <span className="block whitespace-nowrap">ground and finally</span>
          <span className="inline-flex items-baseline whitespace-nowrap">
            <span>begin to</span>{' '}
            <span
              className="font-thrive-script text-[#86B3B3] font-[300] not-italic inline-block ml-3.5 min-[390px]:ml-4 sm:ml-5 select-none align-baseline"
              style={{
                fontFamily: "'PrintedMoments', cursive",
                fontSize: 'clamp(44px, 11.5vw, 56px)',
                lineHeight: '0.85',
                color: '#86B3B3',
                fontWeight: 300,
                fontStyle: 'normal',
              }}
            >
              thrive
            </span>
            <span className="text-[#2B2B2B] font-serif-editorial">.</span>
          </span>
        </h1>

        {/* Subtitle - Exactly matching the 2-line break with leading-[1.8] */}
        <p
          id="mobile-hero-subheading"
          className="font-sans-clean text-[15px] leading-[1.8] text-[#2B2B2B]/85 font-light mt-6 sm:mt-7 max-w-[500px]"
          style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
        >
          <span className="block">Specialized therapy for adults, couples, teens,</span>
          <span className="block">and children to reflect, heal, and grow.</span>
        </p>

        {/* Button Style with Underline */}
        <div className="mt-7 sm:mt-8">
          <button
            id="mobile-hero-cta-btn"
            type="button"
            onClick={onBookClick}
            className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0 select-none"
          >
            <span className="font-sans-clean text-xs min-[390px]:text-sm uppercase tracking-wider text-[#2B2B2B] font-normal group-hover:opacity-75 transition-opacity">
              BOOK AN APPOINTMENT
            </span>
            <span className="w-full h-[1px] bg-[#2B2B2B] mt-[4px]" />
          </button>
        </div>

        {/* Hero Photos Composition below CTA on Mobile - touching both left and right edges */}
        <div className="-mx-6 sm:-mx-10 mt-9 sm:mt-11 flex items-end justify-between gap-4 sm:gap-6 h-[310px] min-[390px]:h-[345px] sm:h-[410px] md:h-[460px]">
          {/* Left Primary Photo (Family Beach Walking - touching left edge) */}
          <div className="w-[72%] sm:w-[73%] h-full overflow-hidden flex-shrink-0">
            <img
              src={siteImages.heroFamily}
              alt="Family walking on a peaceful sandy beach in soft coastal light"
              className="w-full h-full object-cover object-[48%_8%] coastal-film-image"
              loading="eager"
            />
          </div>

          {/* Right Secondary Photo (Coastal Waves - touching right edge, vertically offset downwards) */}
          <div className="w-[22%] sm:w-[21%] h-[58%] sm:h-[60%] overflow-hidden flex-shrink-0">
            <img
              src={siteImages.heroOceanNarrow}
              alt="Washed coastal ocean waves in pale sand tones"
              className="w-full h-full object-cover object-[80%_center] coastal-film-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
