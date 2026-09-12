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
      className="relative w-full pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14 lg:pt-32 lg:pb-14 bg-[#E3D9CA] overflow-hidden"
    >
      <div className="w-full px-6 sm:px-10 lg:pl-14 xl:pl-[120px] 2xl:pl-[140px] lg:pr-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-14 2xl:gap-16">
          
          {/* Main Content */}
          <div className="w-full flex-1 flex flex-col justify-between max-w-[1140px] xl:max-w-[1180px] pt-1 order-1">
            
            {/* Top Group */}
            <div>
              {/* Eyebrow: Muli 300 */}
              <span
                id="how-we-work-eyebrow"
                className="font-muli text-[16px] sm:text-[18px] leading-[25px] sm:leading-[27px] tracking-[0.06em] uppercase text-[rgb(0,0,0)] font-[300] mb-6 sm:mb-8 lg:mb-[135px] block text-left"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline: beaufort-pro 300 */}
              <h2
                id="how-we-work-heading"
                className="font-beaufort text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.24] lg:leading-[1.2] text-[rgb(0,0,0)] font-[300] tracking-[-0.015em] mb-12 sm:mb-16 lg:mb-[72px] max-w-[840px] text-left"
              >
                {howWeWorkContent.heading}
              </h2>

              {/* Mobile-only Beach Photo */}
              <div className="flex lg:hidden w-full justify-center shrink-0 self-center mb-8 sm:mb-10">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-12 xl:gap-x-14 gap-y-6 sm:gap-y-8 lg:gap-y-0 text-left">
                {/* Column 1: Uppercase opening statement + Second paragraph */}
                <div className="flex flex-col max-w-[490px]">
                  <p className="font-muli uppercase tracking-[0.035em] text-[16.5px] sm:text-[17.5px] lg:text-[18px] leading-[28px] sm:leading-[30px] lg:leading-[32px] text-[rgb(0,0,0)] font-[500] mb-5 sm:mb-6 mt-4 sm:mt-6 lg:mt-0">
                    <span className="block whitespace-nowrap">THE CLIENTS WE WORK WITH ARE</span>
                    <span className="block whitespace-nowrap">BALANCING SO MANY THINGS AT</span>
                    <span className="block whitespace-nowrap">ONCE, IT’S OFTEN HARD FOR THEM TO</span>
                    <span className="block whitespace-nowrap">PUT THEMSELVES FIRST.</span>
                  </p>
                  <p className="font-muli text-[16.5px] sm:text-[17.5px] lg:text-[18px] leading-[29px] sm:leading-[31px] lg:leading-[32px] text-[rgb(0,0,0)] font-[300]">
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
                  <p className="font-muli text-[16.5px] sm:text-[17.5px] lg:text-[18px] leading-[29px] sm:leading-[31px] lg:leading-[32px] text-[rgb(0,0,0)] font-[300]">
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

            {/* Bottom CTA Link: LEARN MORE ABOUT US */}
            <div className="pt-10 sm:pt-14 md:pt-20 lg:pt-[130px] xl:pt-[150px] pb-8 sm:pb-12 text-left">
              <a
                id="how-we-work-cta"
                href="#about"
                onClick={(e) => {
                  if (onLearnMoreClick) {
                    e.preventDefault();
                    onLearnMoreClick();
                  }
                }}
                className="inline-block font-muli text-[14px] sm:text-[15px] leading-normal font-[500] tracking-[0.06em] uppercase text-[rgb(43,43,43)] border-b border-[rgb(43,43,43)] pb-1 transition-colors duration-200 hover:text-[#5E9B97] hover:border-[#5E9B97]"
              >
                {howWeWorkContent.ctaText}
              </a>
            </div>
          </div>

          {/* Desktop Beach Photo: Appears on the right on large screens */}
          <div className="hidden lg:flex w-full lg:w-auto justify-center lg:justify-end shrink-0 lg:ml-auto self-center my-auto lg:translate-x-10 xl:translate-x-16 2xl:translate-x-20 order-2">
            <div className="w-full sm:w-[380px] md:w-[420px] lg:w-[395px] xl:w-[420px] 2xl:w-[440px] h-[360px] sm:h-[480px] md:h-[560px] lg:h-[670px] xl:h-[710px] overflow-hidden">
              <img
                id="how-we-work-image"
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
