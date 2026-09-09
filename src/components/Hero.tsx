import React from 'react';
import { siteImages } from '../data/homepage';

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
      <div className="hidden lg:grid grid-cols-[31.4%_52.1%_16.5%] w-full h-[675px]">
        {/* Left Column: Tall Vertical Family Beach Image touching left viewport edge (x = 0) */}
        <div className="relative w-full h-[675px] overflow-hidden">
          <img
            id="hero-family-image"
            src={siteImages.heroFamily}
            alt="Family walking on a peaceful sandy beach in soft coastal light"
            className="w-full h-full object-cover object-[52%_22%] coastal-film-image"
            loading="eager"
          />
        </div>

        {/* Center Column: Text Composition with intentional negative space */}
        <div className="relative w-full h-[675px] pl-8 xl:pl-[clamp(2.5rem,7.5vw,142px)] 2xl:pl-[142px] pr-6 xl:pr-10 text-left pt-[17px]">
          {/* Eyebrow - Exactly 2 lines at target position */}
          <div id="hero-eyebrow" className="max-w-[440px]">
            <p className="text-[13.5px] xl:text-[14px] uppercase tracking-[0.17em] font-sans-clean text-[#252525] font-normal leading-[1.4]">
              <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
              <span className="block">PARK & ACROSS CA</span>
            </p>
          </div>

          {/* Headline - Starts ~239px below top of eyebrow block */}
          <div className="mt-[195px] max-w-[820px]">
            <h1
              id="hero-headline"
              className="font-serif-editorial text-[56px] xl:text-[64px] font-normal leading-[1.03] tracking-[-0.015em] text-[#252525]"
            >
              <span className="block">Rebuild your foundation on</span>
              <span className="block">solid ground and finally</span>
              <span className="block">
                begin to{' '}
                <span
                  id="hero-thrive-accent"
                  className="font-script-accent text-[#79A7A6] font-normal text-[1.12em] tracking-normal inline-block relative -top-[2px] ml-1.5"
                >
                  Thrive.
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle - Kept strictly on ONE LINE on desktop */}
          <div className="mt-[50px]">
            <p
              id="hero-subheading"
              className="font-sans-clean text-[17px] xl:text-[17.5px] leading-[1.55] text-[#252525] font-normal whitespace-normal xl:whitespace-nowrap"
            >
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Minimal Understated CTA with 190px Underline */}
          <div className="mt-[52px]">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onBookClick}
              className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0 select-none"
            >
              <span className="font-sans-clean text-[13px] uppercase tracking-[0.15em] text-[#252525] group-hover:opacity-75 transition-opacity">
                BOOK AN APPOINTMENT
              </span>
              <span className="w-[190px] h-[1px] bg-[#252525] mt-1.5 transition-all duration-300 group-hover:w-[205px]" />
            </button>
          </div>
        </div>

        {/* Right Column: Narrow Ocean Image touching right viewport edge */}
        <div className="relative w-full h-[675px] overflow-hidden">
          <div className="w-full h-[446px] mt-[229px] overflow-hidden">
            <img
              id="hero-ocean-image"
              src={siteImages.heroOceanNarrow}
              alt="Washed coastal ocean waves in pale sand tones"
              className="w-full h-full object-cover object-center coastal-film-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Flow (< 1024px) */}
      <div className="lg:hidden px-6 sm:px-10 py-10 flex flex-col text-left space-y-8">
        <div id="mobile-hero-eyebrow" className="max-w-[420px]">
          <p className="text-[12.5px] sm:text-[13px] uppercase tracking-[0.17em] font-sans-clean text-[#252525] font-normal leading-[1.4]">
            <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
            <span className="block">PARK & ACROSS CA</span>
          </p>
        </div>

        <h1
          id="mobile-hero-headline"
          className="font-serif-editorial text-[38px] sm:text-[46px] leading-[1.08] text-[#252525] font-normal tracking-[-0.01em]"
        >
          <span className="block">Rebuild your foundation on</span>
          <span className="block">solid ground and finally</span>
          <span className="block">
            begin to{' '}
            <span className="font-script-accent text-[#79A7A6] text-[1.14em] font-normal inline-block ml-1">
              Thrive.
            </span>
          </span>
        </h1>

        <div className="w-full my-2 overflow-hidden">
          <img
            src={siteImages.heroFamily}
            alt="Family walking on a peaceful sandy beach in soft coastal light"
            className="w-full aspect-[3/3.8] object-cover object-[52%_22%]"
          />
        </div>

        <p
          id="mobile-hero-subheading"
          className="font-sans-clean text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#252525] font-normal"
        >
          Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
        </p>

        <div className="pt-2">
          <button
            id="mobile-hero-cta-btn"
            type="button"
            onClick={onBookClick}
            className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0"
          >
            <span className="font-sans-clean text-[12.5px] uppercase tracking-[0.15em] text-[#252525]">
              BOOK AN APPOINTMENT
            </span>
            <span className="w-[190px] h-[1px] bg-[#252525] mt-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
