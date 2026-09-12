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
      className="relative w-full overflow-hidden bg-[#F6F4EE]"
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
          {/* Eyebrow - Exactly 2 lines in Muli 300 rgb(43, 43, 43), 15px / 27px */}
          <div id="hero-eyebrow" className="w-full max-w-[500px] text-left">
            <p
              className="text-[15px] uppercase tracking-[0.13em] font-sans-clean text-[rgb(43,43,43)] font-[300] leading-[27px]"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
              <span className="block">PARK & ACROSS CA</span>
            </p>
          </div>

          {/* Headline - In beaufort-pro 300 60px / 75px rgb(43, 43, 43) */}
          <div className="mt-[116px] lg:mt-[126px] xl:mt-[136px] w-full max-w-[840px] text-left">
            <h1
              id="hero-headline"
              className="font-serif-editorial text-[44px] lg:text-[54px] xl:text-[60px] font-[300] leading-[1.22] xl:leading-[75px] tracking-[-0.01em] text-[rgb(43,43,43)] text-left"
              style={{ fontFamily: "'beaufort-pro', serif" }}
            >
              <span className="block whitespace-nowrap">Rebuild your foundation on</span>
              <span className="block whitespace-nowrap">solid ground and finally begin</span>
              <span className="block whitespace-nowrap">
                to{' '}
                <span
                  id="hero-thrive-accent"
                  className="font-thrive-script text-[rgb(134,179,179)] font-[300] not-italic inline-block relative -top-[1px] ml-1"
                  style={{
                    fontFamily: "'PrintedMoments', cursive",
                    fontSize: '60px',
                    lineHeight: '42px',
                    color: 'rgb(134, 179, 179)',
                    fontWeight: 300,
                    fontStyle: 'normal',
                  }}
                >
                  thrive
                </span>
                <span className="text-[rgb(43,43,43)] font-serif-editorial">.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle - In Muli 300, 17px, rgb(43, 43, 43) strictly aligned left */}
          <div className="mt-[28px] lg:mt-[32px] xl:mt-[36px] w-full text-left">
            <p
              id="hero-subheading"
              className="font-sans-clean text-[16px] lg:text-[17px] leading-[28px] text-[rgb(43,43,43)] font-[300] whitespace-normal xl:whitespace-nowrap text-left"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Minimal Understated CTA with perfectly aligned Underline strictly on left axis */}
          <div className="mt-[36px] lg:mt-[42px] xl:mt-[46px] text-left">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onBookClick}
              className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0 select-none"
            >
              <span className="font-sans-clean text-[12.5px] xl:text-[13px] uppercase tracking-[0.14em] text-[rgb(43,43,43)] font-normal group-hover:text-black transition-colors">
                BOOK AN APPOINTMENT
              </span>
              <span className="w-full h-[1px] bg-[#515151] mt-[6px] transition-all duration-300" />
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

      {/* Mobile & Tablet Responsive Flow (< 1024px) */}
      <div className="lg:hidden px-6 sm:px-10 pt-8 sm:pt-10 pb-10 flex flex-col text-left space-y-6 sm:space-y-7">
        {/* Eyebrow */}
        <div id="mobile-hero-eyebrow" className="max-w-[440px]">
          <p
            className="text-[13.5px] sm:text-[15px] uppercase tracking-[0.12em] font-sans-clean text-[rgb(43,43,43)] font-[300] leading-[25px] sm:leading-[27px]"
            style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
          >
            <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
            <span className="block">PARK & ACROSS CA</span>
          </p>
        </div>

        {/* Headline */}
        <h1
          id="mobile-hero-headline"
          className="font-serif-editorial text-[32px] min-[400px]:text-[36px] sm:text-[46px] md:text-[52px] leading-[1.22] text-[rgb(43,43,43)] font-[300] tracking-[-0.01em]"
          style={{ fontFamily: "'beaufort-pro', serif" }}
        >
          <span className="block">Rebuild your foundation on</span>
          <span className="block">solid ground and finally begin</span>
          <span className="block">
            to{' '}
            <span
              className="font-thrive-script text-[rgb(134,179,179)] font-[300] not-italic inline-block ml-1"
              style={{
                fontFamily: "'PrintedMoments', cursive",
                fontSize: 'clamp(40px, 9vw, 56px)',
                lineHeight: '38px',
                color: 'rgb(134, 179, 179)',
                fontWeight: 300,
                fontStyle: 'normal',
              }}
            >
              thrive
            </span>
            <span className="text-[rgb(43,43,43)] font-serif-editorial">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="mobile-hero-subheading"
          className="font-sans-clean text-[15.5px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-[rgb(43,43,43)] font-[300] max-w-[540px]"
          style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
        >
          Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
        </p>

        {/* Minimal Understated CTA with Underline */}
        <div className="pt-1">
          <button
            id="mobile-hero-cta-btn"
            type="button"
            onClick={onBookClick}
            className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0 select-none"
          >
            <span className="font-sans-clean text-[12.5px] uppercase tracking-[0.14em] text-[rgb(43,43,43)] font-normal group-hover:text-black transition-colors">
              BOOK AN APPOINTMENT
            </span>
            <span className="w-full h-[1px] bg-[#515151] mt-[6px]" />
          </button>
        </div>

        {/* Hero Photos Side-by-Side below CTA on Mobile */}
        <div className="w-full pt-4 sm:pt-6 flex gap-3 sm:gap-4 h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden">
          <div className="flex-[7] h-full overflow-hidden">
            <img
              src={siteImages.heroFamily}
              alt="Family walking on a peaceful sandy beach in soft coastal light"
              className="w-full h-full object-cover object-[52%_15%] coastal-film-image"
              loading="eager"
            />
          </div>
          <div className="flex-[3] h-full overflow-hidden">
            <img
              src={siteImages.heroOceanNarrow}
              alt="Washed coastal ocean waves in pale sand tones"
              className="w-full h-full object-cover object-[87%_56%] coastal-film-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
