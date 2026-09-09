import React from 'react';
import { hopeContent, siteImages } from '../data/homepage';
import { ImageBlock } from './ImageBlock';

export const HopeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-36 lg:py-44 bg-[#F4F1EA]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column (Headline + 2 Column Text Composition) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            {/* Primary Headline */}
            <h2
              id="hope-headline"
              className="font-serif-editorial text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.08] text-[#454540] font-normal tracking-[-0.01em] max-w-[820px] mb-12 sm:mb-16 md:mb-20"
            >
              {hopeContent.headline}
            </h2>

            {/* Two-Column Text Composition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              <div className="space-y-4">
                <p
                  id="hope-paragraph-1"
                  className="font-sans-clean text-[15px] sm:text-[16px] leading-[1.8] text-[#6C6B65] font-normal"
                >
                  {hopeContent.paragraph1}
                </p>
              </div>

              <div className="space-y-4">
                <p
                  id="hope-paragraph-2"
                  className="font-sans-clean text-[15px] sm:text-[16px] leading-[1.8] text-[#6C6B65] font-normal"
                >
                  {hopeContent.paragraph2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Large Vertical Ocean / Beach Photograph) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px] lg:max-w-none pt-4 lg:pt-8">
              <ImageBlock
                id="hope-ocean-image"
                src={siteImages.hopeOcean}
                alt="Pacific ocean waves breaking gently along the California coast"
                aspectRatioClassName="aspect-[3/4.4]"
                className="hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
