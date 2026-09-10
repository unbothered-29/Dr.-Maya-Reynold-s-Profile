import React from 'react';
import { howWeWorkContent, siteImages } from '../data/homepage';

interface HowWeWorkProps {
  onLearnMoreClick?: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onLearnMoreClick }) => {
  return (
    <section
      id="methods"
      aria-labelledby="how-we-work-heading"
      className="relative w-full py-10 sm:py-12 md:py-14 lg:py-14 bg-[#E3D9CA] overflow-hidden"
    >
      <div className="w-full pl-6 sm:pl-10 md:pl-16 lg:pl-28 xl:pl-[240px] 2xl:pl-[270px] pr-6 sm:pr-10 md:pr-12 lg:pr-0">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20 xl:gap-28 2xl:gap-36">
          
          {/* Left / Main Content */}
          <div className="flex-1 flex flex-col justify-between max-w-[840px] pt-1">
            
            {/* Top Group */}
            <div>
              {/* Eyebrow */}
              <span
                id="how-we-work-eyebrow"
                className="font-muli text-[12.5px] sm:text-[13px] leading-[27px] tracking-[0.16em] uppercase text-[rgb(43,43,43)] font-[400] mb-[120px] sm:mb-[140px] md:mb-[165px] lg:mb-[185px] block"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline */}
              <h2
                id="how-we-work-heading"
                className="font-beaufort text-[38px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.12] text-[rgb(43,43,43)] font-[300] tracking-[-0.015em] mb-12 sm:mb-14 md:mb-16 max-w-[760px]"
              >
                {howWeWorkContent.heading}
              </h2>

              {/* Two Columns of Text side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-14 xl:gap-x-16 gap-y-8">
                {/* Column 1: Uppercase opening statement + Second paragraph */}
                <div className="flex flex-col max-w-[440px]">
                  <p className="font-muli uppercase tracking-[0.035em] text-[13.5px] sm:text-[14px] leading-[25px] sm:leading-[26px] text-[rgb(43,43,43)] font-[400] mb-6">
                    {howWeWorkContent.paragraphs[0]}
                  </p>
                  <p className="font-muli text-[15px] leading-[27px] text-[rgb(43,43,43)] font-[400]">
                    {howWeWorkContent.paragraphs[1]}
                  </p>
                </div>

                {/* Column 2: Third and fourth paragraphs combined */}
                <div className="flex flex-col max-w-[440px]">
                  <p className="font-muli text-[15px] leading-[27px] text-[rgb(43,43,43)] font-[400]">
                    {howWeWorkContent.paragraphs[2]} {howWeWorkContent.paragraphs[3]}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Link: LEARN MORE ABOUT US */}
            <div className="pt-16 sm:pt-20 md:pt-28 lg:pt-[130px] xl:pt-[150px] pb-1">
              <a
                id="how-we-work-cta"
                href="#about"
                onClick={(e) => {
                  if (onLearnMoreClick) {
                    e.preventDefault();
                    onLearnMoreClick();
                  }
                }}
                className="inline-block font-muli text-[12.5px] sm:text-[13px] tracking-[0.16em] uppercase text-[rgb(43,43,43)] border-b border-[rgb(43,43,43)] pb-1 transition-colors duration-200 hover:text-[#5E9B97] hover:border-[#5E9B97]"
              >
                {howWeWorkContent.ctaText}
              </a>
            </div>
          </div>

          {/* Right: Full Beach Photo spanning the vertical height and touching right edge */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <div className="w-full sm:w-[380px] md:w-[410px] lg:w-[420px] xl:w-[440px] 2xl:w-[460px] h-[520px] sm:h-[640px] md:h-[720px] lg:h-full min-h-[760px] xl:min-h-[820px] overflow-hidden">
              <img
                id="how-we-work-image"
                src={siteImages.howWeWorkBeach}
                alt="Mother and daughter in white dresses dancing on beach sand in warm sunlight"
                className="w-full h-full object-cover object-[21.6%_45.6%] select-none shadow-sm hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
