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
      className="relative w-full pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14 lg:py-14 bg-[#E8E1D9] lg:bg-[#E3D9CA] overflow-hidden"
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
                className="font-montserrat text-[14px] sm:text-[15px] leading-[24px] tracking-[0.14em] uppercase text-[#756D68] font-medium mb-6 sm:mb-8 block text-left"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline: Playfair Display */}
              <h2
                id="how-we-work-heading-mobile"
                className="font-playfair text-[36px] sm:text-[44px] md:text-[52px] leading-[1.2] text-[#302B2A] font-normal tracking-[-0.015em] mb-12 sm:mb-16 text-left"
              >
                {howWeWorkContent.heading}
              </h2>

              {/* Mobile-only Beach Photo */}
              <div className="flex w-full justify-center shrink-0 self-center mb-8 sm:mb-10">
                <div className="w-full sm:w-[380px] md:w-[420px] h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden">
                  <img
                    id="how-we-work-image-mobile"
                    src={siteImages.howWeWorkBeach}
                    alt="Mother and daughter in white dresses dancing on beach sand in warm sunlight"
                    className="w-full h-full object-cover object-center select-none shadow-sm hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Two Columns of Text */}
              <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8 text-left">
                {/* Column 1: Uppercase opening statement + Second paragraph */}
                <div className="flex flex-col max-w-[490px]">
                  <p className="font-montserrat uppercase tracking-[0.04em] text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#302B2A] font-semibold mb-5 sm:mb-6 mt-4 sm:mt-6">
                    <span className="block whitespace-nowrap">THE CLIENTS WE WORK WITH ARE</span>
                    <span className="block whitespace-nowrap">BALANCING SO MANY THINGS AT</span>
                    <span className="block whitespace-nowrap">ONCE, IT’S OFTEN HARD FOR THEM TO</span>
                    <span className="block whitespace-nowrap">PUT THEMSELVES FIRST.</span>
                  </p>
                  <p className="font-montserrat text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#756D68] font-normal">
                    <span className="block whitespace-nowrap">Here, your needs are always top priority. Our</span>
                    <span className="block whitespace-nowrap">team takes the time to deeply listen to our</span>
                    <span className="block whitespace-nowrap">clients in order to truly understand their story</span>
                    <span className="block whitespace-nowrap">and their struggles. We recognize that no two</span>
                    <span className="block whitespace-nowrap">people are the same and that personalized</span>
                    <span className="block whitespace-nowrap">therapy means an intentional, tailored</span>
                    <span className="block whitespace-nowrap">approach. (You won’t find anything “one-size-</span>
                    <span className="block whitespace-nowrap">fits-all” here.) If you’re ready to do the work,</span>
                    <span className="block whitespace-nowrap">we’re ready to help.</span>
                  </p>
                </div>

                {/* Column 2: Third and fourth paragraphs combined */}
                <div className="flex flex-col max-w-[530px]">
                  <p className="font-montserrat text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] text-[#756D68] font-normal">
                    <span className="block whitespace-nowrap">Sometimes we may gently challenge you to</span>
                    <span className="block whitespace-nowrap">look at things differently and other times we</span>
                    <span className="block whitespace-nowrap">may explore your emotions, all while</span>
                    <span className="block whitespace-nowrap">encouraging you to practice what you’ve</span>
                    <span className="block whitespace-nowrap">learned in your daily life. We take what we do</span>
                    <span className="block whitespace-nowrap">seriously because we know how important it is</span>
                    <span className="block whitespace-nowrap">for you to heal from what’s hurting you,</span>
                    <span className="block whitespace-nowrap">discover a fulfilling life, and build meaningful</span>
                    <span className="block whitespace-nowrap">relationships. Our goal is to walk alongside you</span>
                    <span className="block whitespace-nowrap">in this journey, offering support and guidance</span>
                    <span className="block whitespace-nowrap">as you uncover your strengths and embrace</span>
                    <span className="block whitespace-nowrap">what the future can hold for you.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button: LEARN MORE ABOUT US */}
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
                className="btn-pill-secondary inline-flex items-center justify-center text-[13px] tracking-[0.14em]"
              >
                {howWeWorkContent.ctaText}
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
              {/* Eyebrow: Muli 300, 15px, line-height 27px, color rgb(0,0,0) */}
              <span
                id="how-we-work-eyebrow-desktop"
                className="font-muli text-[14px] sm:text-[15px] leading-[25px] sm:leading-[27px] tracking-[0.06em] uppercase text-[rgb(0,0,0)] font-[300] mb-[135px] block text-left"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline: beaufort-pro 300 */}
              <h2
                id="how-we-work-heading-desktop"
                className="font-beaufort text-[46px] leading-[58px] text-[rgb(0,0,0)] font-[300] tracking-[-0.015em] mb-[58px] max-w-[840px] text-left"
              >
                {howWeWorkContent.heading}
              </h2>

              {/* Two Columns of Text */}
              <div className="grid grid-cols-2 gap-x-12 xl:gap-x-14 text-left">
                {/* Column 1: Uppercase opening statement + Second paragraph */}
                <div className="flex flex-col max-w-[490px]">
                  <p className="font-muli uppercase tracking-[0.035em] text-[13px] sm:text-[13.5px] leading-[23px] sm:leading-[24px] text-[rgb(0,0,0)] font-[400] mb-5">
                    <span className="block xl:whitespace-nowrap">THE CLIENTS WE WORK WITH ARE BALANCING SO MANY</span>
                    <span className="block xl:whitespace-nowrap">THINGS AT ONCE, IT’S OFTEN HARD FOR THEM TO PUT</span>
                    <span className="block xl:whitespace-nowrap">THEMSELVES FIRST.</span>
                  </p>
                  <p className="font-muli text-[13.5px] sm:text-[14px] leading-[24px] sm:leading-[25px] text-[rgb(0,0,0)] font-[400]">
                    <span className="block xl:whitespace-nowrap">Here, your needs are always top priority. Our team takes the time to</span>
                    <span className="block xl:whitespace-nowrap">deeply listen to our clients in order to truly understand their story and</span>
                    <span className="block xl:whitespace-nowrap">their struggles. We recognize that no two people are the same and that</span>
                    <span className="block xl:whitespace-nowrap">personalized therapy means an intentional, tailored approach. (You</span>
                    <span className="block xl:whitespace-nowrap">won’t find anything “one-size-fits-all” here.) If you’re ready to do the</span>
                    <span className="block xl:whitespace-nowrap">work, we’re ready to help.</span>
                  </p>
                </div>

                {/* Column 2: Third and fourth paragraphs combined */}
                <div className="flex flex-col max-w-[530px]">
                  <p className="font-muli text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[24px] sm:leading-[26px] lg:leading-[27px] text-[rgb(0,0,0)] font-[300]">
                    <span className="block xl:whitespace-nowrap">Sometimes we may gently challenge you to look at things differently</span>
                    <span className="block xl:whitespace-nowrap">and other times we may explore your emotions, all while encouraging</span>
                    <span className="block xl:whitespace-nowrap">you to practice what you’ve learned in your daily life. We take what we</span>
                    <span className="block xl:whitespace-nowrap">do seriously because we know how important it is for you to heal from</span>
                    <span className="block xl:whitespace-nowrap">what’s hurting you, discover a fulfilling life, and build meaningful</span>
                    <span className="block xl:whitespace-nowrap">relationships. Our goal is to walk alongside you in this journey, offering</span>
                    <span className="block xl:whitespace-nowrap">support and guidance as you uncover your strengths and embrace</span>
                    <span className="block xl:whitespace-nowrap">what the future can hold for you.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Link: LEARN MORE ABOUT US */}
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
                className="inline-block font-muli text-[12px] leading-normal font-[400] tracking-[0.06em] uppercase text-[rgb(43,43,43)] border-b border-[rgb(43,43,43)] pb-1 transition-colors duration-200 hover:text-[#5E9B97] hover:border-[#5E9B97]"
              >
                {howWeWorkContent.ctaText}
              </a>
            </div>
          </div>

          {/* Beach Photo: On desktop on right */}
          <div className="w-auto flex justify-end shrink-0 ml-auto self-center my-auto translate-x-10 xl:translate-x-16 2xl:translate-x-20 order-2">
            <div className="w-[395px] xl:w-[420px] 2xl:w-[440px] h-[670px] xl:h-[710px] overflow-hidden">
              <img
                id="how-we-work-image-desktop"
                src={siteImages.howWeWorkBeach}
                alt="Mother and daughter in white dresses dancing on beach sand in warm sunlight"
                className="w-full h-full object-cover object-center select-none shadow-sm hover:scale-[1.01] transition-transform duration-500"
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
