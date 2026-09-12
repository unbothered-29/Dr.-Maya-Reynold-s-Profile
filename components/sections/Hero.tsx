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
      className="relative w-full overflow-hidden bg-[#F7F5F1]"
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
          {/* Eyebrow - In Montserrat, Taupe Gray */}
          <div id="hero-eyebrow" className="w-full max-w-[500px] text-left">
            <p
              className="text-[13px] lg:text-[14px] uppercase tracking-[0.14em] font-sans-body text-[#756D68] font-[400] leading-[27px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
              <span className="block">PARK & ACROSS CA</span>
            </p>
          </div>

          {/* Headline - In Playfair Display 400 Espresso */}
          <div className="mt-[116px] lg:mt-[126px] xl:mt-[136px] w-full max-w-[840px] text-left">
            <h1
              id="hero-headline"
              className="font-serif-heading text-[44px] lg:text-[54px] xl:text-[58px] font-normal leading-tight xl:leading-[75px] tracking-tight text-[#302B2A] text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">Rebuild your foundation on</span>
              <span className="block whitespace-nowrap">solid ground and finally begin</span>
              <span className="block whitespace-nowrap">
                to{' '}
                <span
                  id="hero-thrive-accent"
                  className="font-script-accent text-[#B98D8D] font-[400] not-italic inline-block relative -top-[2px] ml-3.5 lg:ml-4 xl:ml-[18px]"
                  style={{
                    fontFamily: "'Allura', cursive",
                    fontSize: '66px',
                    lineHeight: '42px',
                    color: '#B98D8D',
                    fontWeight: 400,
                    fontStyle: 'normal',
                  }}
                >
                  thrive
                </span>
                <span className="text-[#302B2A] font-serif-heading">.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle - Montserrat / text-base md:text-lg Taupe Gray */}
          <div className="mt-[26px] lg:mt-[30px] xl:mt-[34px] w-full text-left max-w-2xl">
            <p
              id="hero-subheading"
              className="font-sans-body text-base lg:text-[17px] leading-[1.8] text-[#756D68] font-normal whitespace-normal xl:whitespace-nowrap text-left"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Button Style: Primary Pill Button in Deep Plum matching design specification */}
          <div className="mt-[32px] lg:mt-[38px] xl:mt-[42px] text-left">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onBookClick}
              className="btn-pill-primary"
            >
              SCHEDULE A CONSULTATION
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
            <div className="absolute inset-0 bg-[#593D4B]/[0.05] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Flow (< 1024px) with px-[6vw] gutter */}
      <div className="lg:hidden px-[6vw] pt-[48px] min-[390px]:pt-[56px] pb-10 flex flex-col text-left">
        {/* Eyebrow in Montserrat */}
        <div id="mobile-hero-eyebrow" className="w-full text-left">
          <p
            className="text-[12px] min-[375px]:text-[13px] uppercase tracking-[0.14em] font-sans-body text-[#756D68] font-normal leading-[24px] min-[375px]:leading-[26px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="block whitespace-nowrap">ONLINE & IN-PERSON COUNSELING IN</span>
            <span className="block whitespace-nowrap">NEWBURY PARK & ACROSS CA</span>
          </p>
        </div>

        {/* Headline in Playfair Display & Allura */}
        <h1
          id="mobile-hero-headline"
          className="font-serif-heading text-[36px] min-[390px]:text-[40px] sm:text-[46px] md:text-[54px] leading-tight text-[#302B2A] font-normal tracking-tight mt-[32px] min-[390px]:mt-[40px]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <span className="block whitespace-nowrap">Rebuild your</span>
          <span className="block whitespace-nowrap">foundation on solid</span>
          <span className="block whitespace-nowrap">ground and finally</span>
          <span className="inline-flex items-baseline whitespace-nowrap">
            <span>begin to</span>{' '}
            <span
              className="font-script-accent text-[#B98D8D] font-[400] not-italic inline-block ml-3.5 min-[390px]:ml-4 sm:ml-5 select-none align-baseline"
              style={{
                fontFamily: "'Allura', cursive",
                fontSize: 'clamp(48px, 12.5vw, 62px)',
                lineHeight: '0.85',
                color: '#B98D8D',
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            >
              thrive
            </span>
            <span className="text-[#302B2A] font-serif-heading">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="mobile-hero-subheading"
          className="font-sans-body text-[15px] leading-[1.8] text-[#756D68] font-normal mt-6 sm:mt-7 max-w-[500px]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="block">Specialized therapy for adults, couples, teens,</span>
          <span className="block">and children to reflect, heal, and grow.</span>
        </p>

        {/* Primary Pill Button */}
        <div className="mt-7 sm:mt-8">
          <button
            id="mobile-hero-cta-btn"
            type="button"
            onClick={onBookClick}
            className="btn-pill-primary"
          >
            SCHEDULE A CONSULTATION
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
