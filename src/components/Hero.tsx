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
        <div className="flex-1 min-w-0 pl-12 lg:pl-16 xl:pl-[84px] 2xl:pl-[96px] pr-6 lg:pr-8 xl:pr-12 text-left pt-0.5 relative z-20 flex flex-col justify-start items-start">
          {/* Eyebrow - Exactly 2 lines in Muli 400 rgb(43, 43, 43), horizontally aligned with top of family image */}
          <div id="hero-eyebrow" className="w-full max-w-[500px] text-left">
            <p className="text-[13px] xl:text-[13.5px] uppercase tracking-[0.13em] font-sans-clean text-[rgb(43,43,43)] font-normal leading-[24px]">
              <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
              <span className="block">PARK & ACROSS CA</span>
            </p>
          </div>

          {/* Headline - Starts below eyebrow with spacious vertical gap matching reference screenshot */}
          <div className="mt-[116px] lg:mt-[126px] xl:mt-[136px] w-full max-w-[840px] text-left">
            <h1
              id="hero-headline"
              className="font-serif-editorial text-[40px] lg:text-[47px] xl:text-[55px] 2xl:text-[59px] font-[300] leading-[1.23] xl:leading-[1.25] tracking-[-0.01em] text-[rgb(43,43,43)] text-left"
            >
              <span className="block whitespace-nowrap">Rebuild your foundation on</span>
              <span className="block whitespace-nowrap">solid ground and finally</span>
              <span className="block whitespace-nowrap">
                begin to{' '}
                <span
                  id="hero-thrive-accent"
                  className="font-thrive-script text-[#7CA9AA] font-[300] text-[1.14em] lowercase inline-block relative -top-[1px] ml-1"
                >
                  thrive
                </span>
                <span className="text-[rgb(43,43,43)] font-serif-editorial">.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle - In Muli 300, 15.5px / 26px, rgb(43, 43, 43) strictly aligned left */}
          <div className="mt-[28px] lg:mt-[32px] xl:mt-[36px] w-full text-left">
            <p
              id="hero-subheading"
              className="font-sans-clean text-[15px] lg:text-[15.5px] leading-[26px] text-[rgb(43,43,43)] font-[300] whitespace-normal xl:whitespace-nowrap text-left"
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
      <div className="lg:hidden px-6 sm:px-10 py-10 flex flex-col text-left space-y-8">
        <div id="mobile-hero-eyebrow" className="max-w-[420px]">
          <p className="text-[13px] uppercase tracking-[0.12em] font-sans-clean text-[rgb(43,43,43)] font-normal leading-[1.4]">
            <span className="block">ONLINE & IN-PERSON COUNSELING IN NEWBURY</span>
            <span className="block">PARK & ACROSS CA</span>
          </p>
        </div>

        <h1
          id="mobile-hero-headline"
          className="font-serif-editorial text-[38px] sm:text-[46px] leading-[1.2] text-[rgb(43,43,43)] font-[300] tracking-[-0.01em]"
        >
          <span className="block">Rebuild your foundation on</span>
          <span className="block">solid ground and finally</span>
          <span className="block">
            begin to{' '}
            <span className="font-thrive-script text-[#7CA9AA] text-[1.12em] font-[300] lowercase inline-block ml-1">
              thrive
            </span>
            <span className="text-[rgb(43,43,43)] font-serif-editorial">.</span>
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
          className="font-sans-clean text-[15px] leading-[26px] text-[rgb(43,43,43)] font-[300]"
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
            <span className="font-sans-clean text-[12.5px] uppercase tracking-[0.14em] text-[rgb(43,43,43)]">
              BOOK AN APPOINTMENT
            </span>
            <span className="w-full h-[1px] bg-[#515151] mt-[6px]" />
          </button>
        </div>
      </div>
    </section>
  );
};
