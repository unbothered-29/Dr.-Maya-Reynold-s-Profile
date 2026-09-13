'use client';

import React from 'react';
import { howWeWorkContent, siteImages } from '@/data/homepage';

interface HowWeWorkProps {
  onLearnMoreClick?: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onLearnMoreClick }) => {
  return (
    <section
      id="methods"
      aria-labelledby="how-we-work-heading"
      className="relative w-full pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14 lg:py-14 bg-[#E7DED4] lg:bg-[#E3D9CA] overflow-hidden"
    >
      <div className="w-full px-6 sm:px-10 lg:pl-14 xl:pl-[120px] 2xl:pl-[140px] lg:pr-0">
        
        {/* ========================================= */}
        {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
        {/* ========================================= */}
        <div className="flex lg:hidden flex-col items-center justify-between gap-10">
          
          {/* Main Content */}
          <div className="w-full flex-1 flex flex-col justify-between pt-1 order-1">
            
            {/* Top Group */}
            <div>
              {/* Eyebrow: Montserrat */}
              <span
                id="how-we-work-eyebrow-mobile"
                className="font-montserrat text-[14px] sm:text-[15px] leading-[24px] tracking-[0.14em] uppercase text-[#756C67] font-medium mb-6 sm:mb-8 block text-left"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline: Playfair Display */}
              <h2
                id="how-we-work-heading-mobile"
                className="font-serif-heading text-[36px] sm:text-[44px] md:text-[52px] leading-[1.25] text-[#302A29] font-normal tracking-[-0.015em] mb-12 sm:mb-16 text-left"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                <span className="block">A warm, collaborative,</span>
                <span className="block">and grounded</span>
                <span className="block">approach.</span>
              </h2>

              {/* Mobile-only Beach Photo */}
              <div className="flex w-full justify-center shrink-0 self-center mb-8 sm:mb-10">
                <div className="w-full sm:w-[380px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden">
                  <img
                    id="how-we-work-image-mobile"
                    src={siteImages.howWeWorkBeach}
                    alt="Dr. Maya Reynolds in a warm and collaborative therapy session"
                    className="w-full h-full object-cover object-[32%_center] select-none shadow-sm hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Paragraphs */}
              <div className="flex flex-col gap-y-6 sm:gap-y-8 text-left">
                <p className="font-montserrat text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#756C67] font-normal">
                  {howWeWorkContent.paragraphs[0]}
                </p>
                <p className="font-montserrat text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#756C67] font-normal">
                  {howWeWorkContent.paragraphs[1]}
                </p>
              </div>
            </div>

            {/* Bottom CTA Link with shrink-and-disappear hover animation */}
            <div className="pt-10 sm:pt-14 md:pt-18 pb-8 sm:pb-12 text-left">
              <a
                id="how-we-work-cta-mobile"
                href="#about"
                onClick={(e) => {
                  if (onLearnMoreClick) {
                    e.preventDefault();
                    onLearnMoreClick();
                  }
                }}
                className="group inline-flex flex-col items-start bg-transparent border-0 p-0 cursor-pointer select-none"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <span className="font-sans text-[12.5px] sm:text-[13px] uppercase tracking-[0.16em] text-[#302A29] font-medium group-hover:text-[#5A3E4B] transition-colors duration-200">
                  {howWeWorkContent.ctaText}
                </span>
                <span className="h-[1.25px] bg-[#302A29] w-full group-hover:w-0 group-hover:opacity-0 transition-all duration-600 ease-in-out mt-1.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* WEB VIEW ELEMENTS (lg and above)        */}
        {/* ========================================= */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-10 xl:gap-14 2xl:gap-16">
          
          {/* Main Content */}
          <div className="w-full flex-1 flex flex-col justify-between max-w-[1140px] xl:max-w-[1180px] pt-1 order-1">
            
            {/* Top Group */}
            <div>
              {/* Eyebrow */}
              <span
                id="how-we-work-eyebrow-desktop"
                className="desktop-eyebrow desktop-eyebrow-about-maya text-[#756C67] mb-[135px] block text-left"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline */}
              <h2
                id="how-we-work-heading-desktop"
                className="desktop-section-heading text-[#302A29] mb-[58px] max-w-[840px] text-left"
              >
                A warm, collaborative, and grounded approach.
              </h2>

              {/* Two Columns of Text */}
              <div className="grid grid-cols-2 gap-x-12 xl:gap-x-14 text-left">
                {/* Column 1 */}
                <div className="flex flex-col w-full lg:max-w-[560px] xl:max-w-[600px]">
                  <p className="desktop-body-long text-[#302A29]">
                    {howWeWorkContent.paragraphs[0]}
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col w-full lg:max-w-[560px] xl:max-w-[600px]">
                  <p className="desktop-body-long text-[#302A29]">
                    {howWeWorkContent.paragraphs[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Link with shrink-and-disappear hover animation */}
            <div className="pt-[130px] xl:pt-[150px] pb-1 text-left">
              <a
                id="how-we-work-cta-desktop"
                href="#about"
                onClick={(e) => {
                  if (onLearnMoreClick) {
                    e.preventDefault();
                    onLearnMoreClick();
                  }
                }}
                className="group inline-flex flex-col items-start bg-transparent border-0 p-0 cursor-pointer select-none"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                <span className="font-sans desktop-btn-text desktop-btn-learn-more text-[#302A29] font-medium group-hover:text-[#5A3E4B] transition-colors duration-200">
                  {howWeWorkContent.ctaText}
                </span>
                <span className="h-[1.25px] bg-[#302A29] w-full group-hover:w-0 group-hover:opacity-0 transition-all duration-600 ease-in-out mt-1.5" />
              </a>
            </div>
          </div>

          {/* Beach Photo: On desktop on right */}
          <div className="w-auto flex justify-end shrink-0 ml-auto self-center my-auto translate-x-10 xl:translate-x-16 2xl:translate-x-20 order-2">
            <div className="w-[395px] xl:w-[420px] 2xl:w-[440px] h-[670px] xl:h-[710px] overflow-hidden">
              <img
                id="how-we-work-image-desktop"
                src={siteImages.howWeWorkBeach}
                alt="Dr. Maya Reynolds in a warm and collaborative therapy session"
                className="w-full h-full object-cover object-[32%_center] select-none shadow-sm hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
