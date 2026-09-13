'use client';

import React from 'react';
import { siteImages, heroContent } from '@/data/homepage';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#F7F5F1]"
    >
      {/* Desktop Asymmetric Editorial Composition (>= 1024px) */}
      <div className="hidden lg:flex w-full pt-[30px] xl:pt-[34px] pb-[34px] lg:pb-[38px] xl:pb-[42px] relative justify-between">
        {/* Left Column: Dr. Maya Reynolds Portrait */}
        <div className="w-[33%] xl:w-[34%] 2xl:w-[34.5%] max-w-[520px] min-w-[340px] h-[560px] lg:h-[580px] xl:h-[600px] flex-shrink-0 overflow-hidden relative">
          <img
            id="hero-family-image"
            src={siteImages.heroFamily}
            alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
            className="w-full h-full object-cover object-[center_18%] coastal-film-image"
            loading="eager"
          />
        </div>

        {/* Center Column: Text Composition with generous spacing and strict left alignment on single axis */}
        <div className="flex-1 min-w-0 pl-12 lg:pl-[96px] xl:pl-[128px] 2xl:pl-[156px] pr-4 lg:pr-6 xl:pr-8 text-left pt-0.5 relative z-20 flex flex-col justify-start items-start">
          {/* Eyebrow - In Source Sans 3, Taupe Gray */}
          <div id="hero-eyebrow" className="w-full max-w-[600px] text-left lg:pt-[24px] xl:pt-[28px]">
            <p className="desktop-eyebrow text-[#756C67] leading-[27px]">
              {heroContent.eyebrow}
            </p>
          </div>

          {/* Headline - In Cormorant Garamond */}
          <div className="lg:mt-[176px] xl:mt-[188px] 2xl:mt-[198px] w-full max-w-[840px] text-left">
            <h1
              id="hero-headline"
              className="desktop-h1 tracking-tight text-[#302A29] text-left"
            >
              <span className="block whitespace-nowrap">Feel more grounded</span>
              <span className="inline-flex items-baseline whitespace-nowrap">
                <span>and like</span>{' '}
                <span
                  id="hero-yourself-accent"
                  className="font-script-accent text-[#5A3E4B] font-[400] not-italic inline-block relative -top-[2px] ml-3 lg:ml-3.5 xl:ml-4 text-[66px] lg:text-[72px] xl:text-[78px]"
                  style={{
                    fontFamily: "'Allura', cursive",
                    lineHeight: '42px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                  }}
                >
                  yourself again
                </span>
                <span className="text-[#302A29] font-serif-heading">.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle - Source Sans 3 Taupe Gray */}
          <div className="mt-[26px] lg:mt-[30px] xl:mt-[34px] w-full text-left max-w-2xl">
            <p
              id="hero-subheading"
              className="desktop-body text-[#756C67] whitespace-normal xl:whitespace-nowrap text-left"
            >
              {heroContent.subheading}
            </p>
          </div>

          {/* Hero CTA: Underlined text link where line remains and smoothly decreases/disappears on hover */}
          <div className="mt-[32px] lg:mt-[48px] xl:mt-[56px] text-left">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onBookClick}
              className="group inline-flex flex-col items-start bg-transparent border-0 p-0 cursor-pointer select-none"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              <span className="font-sans lg:text-[10px] xl:text-[10.5px] uppercase tracking-[0.20em] text-[#302A29] font-medium group-hover:text-[#5A3E4B] transition-colors duration-200">
                {heroContent.ctaText}
              </span>
              <span className="h-[1px] bg-[#302A29] w-full group-hover:w-0 group-hover:opacity-0 transition-all duration-1000 ease-in-out mt-1" />
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
            <div className="absolute inset-0 bg-[#5A3E4B]/[0.05] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Flow (< 1024px) with px-[6vw] gutter */}
      <div className="lg:hidden px-[6vw] pt-[48px] min-[390px]:pt-[56px] pb-10 flex flex-col text-left">
        {/* Eyebrow in Montserrat / Source Sans 3 */}
        <div id="mobile-hero-eyebrow" className="w-full text-left">
          <p
            className="text-[12px] min-[375px]:text-[13px] uppercase tracking-[0.14em] font-sans-body text-[#756C67] font-normal leading-[24px] min-[375px]:leading-[26px]"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            {heroContent.eyebrow}
          </p>
        </div>

        {/* Headline in Cormorant Garamond & Allura */}
        <h1
          id="mobile-hero-headline"
          className="font-serif-heading text-[36px] min-[390px]:text-[40px] sm:text-[46px] md:text-[54px] leading-tight text-[#302A29] font-normal tracking-tight mt-[32px] min-[390px]:mt-[40px]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          <span className="block whitespace-nowrap">Feel more</span>
          <span className="block whitespace-nowrap">grounded and like</span>
          <span className="inline-flex items-baseline whitespace-nowrap">
            <span
              className="font-script-accent text-[#5A3E4B] font-[400] not-italic inline-block select-none align-baseline"
              style={{
                fontFamily: "'Allura', cursive",
                fontSize: 'clamp(48px, 12.5vw, 62px)',
                lineHeight: '0.85',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              yourself again
            </span>
            <span className="text-[#302A29] font-serif-heading">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="mobile-hero-subheading"
          className="font-sans-body text-[15px] leading-[1.8] text-[#756C67] font-normal mt-6 sm:mt-7 max-w-[500px]"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          {heroContent.subheading}
        </p>

        {/* Hero CTA Mobile: Underlined text link where line remains and smoothly decreases/disappears on hover */}
        <div className="mt-7 sm:mt-8 text-left">
          <button
            id="mobile-hero-cta-btn"
            type="button"
            onClick={onBookClick}
            className="group inline-flex flex-col items-start bg-transparent border-0 p-0 cursor-pointer select-none"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            <span className="font-sans text-[12.5px] sm:text-[13px] uppercase tracking-[0.16em] text-[#302A29] font-medium group-hover:text-[#5A3E4B] transition-colors duration-200">
              {heroContent.ctaText}
            </span>
            <span className="h-[1.25px] bg-[#302A29] w-full group-hover:w-0 group-hover:opacity-0 transition-all duration-1000 ease-in-out mt-1.5" />
          </button>
        </div>

        {/* Hero Photos Composition below CTA on Mobile - touching both left and right edges */}
        <div className="-mx-6 sm:-mx-10 mt-9 sm:mt-11 flex items-end justify-between gap-4 sm:gap-6 h-[310px] min-[390px]:h-[345px] sm:h-[410px] md:h-[460px]">
          {/* Left Primary Photo (Dr. Maya Reynolds Portrait) */}
          <div className="w-[72%] sm:w-[73%] h-full overflow-hidden flex-shrink-0">
            <img
              src={siteImages.heroFamily}
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
              className="w-full h-full object-cover object-[center_15%] coastal-film-image"
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
