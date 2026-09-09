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
      <div className="hidden lg:flex w-full h-[675px] relative">
        {/* Left Column: Tall Vertical Family Beach Image touching left viewport edge */}
        <div className="w-[28%] xl:w-[29%] 2xl:w-[30%] max-w-[480px] min-w-[320px] h-[675px] flex-shrink-0 overflow-hidden relative">
          <img
            id="hero-family-image"
            src={siteImages.heroFamily}
            alt="Family walking on a peaceful sandy beach in soft coastal light"
            className="w-full h-full object-cover object-[52%_22%] coastal-film-image"
            loading="eager"
          />
        </div>

        {/* Center Column: Text Composition with intentional negative space */}
        <div className="flex-1 min-w-0 h-[675px] pl-8 xl:pl-[clamp(2.5rem,5vw,90px)] 2xl:pl-[104px] pr-6 xl:pr-10 text-left pt-[17px] relative z-20">
          {/* Eyebrow - Exactly 2 lines in Muli 400 rgb(43, 43, 43) */}
          <div id="hero-eyebrow" className="max-w-[480px]">
            <p className="text-[14px] uppercase tracking-[0.12em] font-sans-clean text-[rgb(43,43,43)] font-normal leading-[24px]">
              <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
              <span className="block">PARK & ACROSS CA</span>
            </p>
          </div>

          {/* Headline - Starts below eyebrow block in beaufort-pro 300, 65px / 81px, rgb(43, 43, 43) */}
          <div className="mt-[165px] xl:mt-[180px] max-w-[840px]">
            <h1
              id="hero-headline"
              className="font-serif-editorial text-[44px] lg:text-[54px] xl:text-[65px] font-[300] leading-[1.12] xl:leading-[81px] text-[rgb(43,43,43)]"
            >
              <span className="block whitespace-nowrap">Rebuild your foundation on</span>
              <span className="block whitespace-nowrap">solid ground and finally</span>
              <span className="block whitespace-nowrap">
                begin to{' '}
                <span
                  id="hero-thrive-accent"
                  className="font-script-accent text-[rgb(134,179,179)] font-[300] text-[50px] lg:text-[58px] xl:text-[65px] leading-[45px] lowercase inline-block relative -top-[2px] ml-1.5"
                >
                  thrive.
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle - In Muli 400, 15px / 27px, rgb(43, 43, 43) strictly on ONE LINE */}
          <div className="mt-[42px] xl:mt-[46px]">
            <p
              id="hero-subheading"
              className="font-sans-clean text-[15px] leading-[27px] text-[rgb(43,43,43)] font-normal whitespace-normal xl:whitespace-nowrap"
            >
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Minimal Understated CTA with Underline in Muli 400 rgb(43, 43, 43) */}
          <div className="mt-[44px] xl:mt-[48px]">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onBookClick}
              className="group inline-flex flex-col items-start cursor-pointer text-left bg-transparent border-0 p-0 select-none"
            >
              <span className="font-sans-clean text-[13px] uppercase tracking-[0.12em] text-[rgb(43,43,43)] font-normal group-hover:opacity-75 transition-opacity">
                BOOK AN APPOINTMENT
              </span>
              <span className="w-[180px] h-[1px] bg-[rgb(43,43,43)] mt-1.5 transition-all duration-300 group-hover:w-[195px]" />
            </button>
          </div>
        </div>

        {/* Right Column: Narrow Ocean Image touching right viewport edge */}
        <div className="w-[12%] xl:w-[13%] 2xl:w-[14%] max-w-[220px] min-w-[120px] h-[675px] flex-shrink-0 overflow-hidden relative">
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
          <p className="text-[13px] uppercase tracking-[0.12em] font-sans-clean text-[rgb(43,43,43)] font-normal leading-[1.4]">
            <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
            <span className="block">PARK & ACROSS CA</span>
          </p>
        </div>

        <h1
          id="mobile-hero-headline"
          className="font-serif-editorial text-[38px] sm:text-[46px] leading-[1.12] text-[rgb(43,43,43)] font-[300] tracking-[-0.01em]"
        >
          <span className="block">Rebuild your foundation on</span>
          <span className="block">solid ground and finally</span>
          <span className="block">
            begin to{' '}
            <span className="font-script-accent text-[rgb(134,179,179)] text-[44px] sm:text-[50px] font-[300] lowercase inline-block ml-1">
              thrive.
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
          className="font-sans-clean text-[15px] leading-[27px] text-[rgb(43,43,43)] font-normal"
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
            <span className="font-sans-clean text-[13px] uppercase tracking-[0.12em] text-[rgb(43,43,43)]">
              BOOK AN APPOINTMENT
            </span>
            <span className="w-[180px] h-[1px] bg-[rgb(43,43,43)] mt-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
