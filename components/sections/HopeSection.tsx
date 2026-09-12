import React from 'react';
import { hopeContent, siteImages } from '@/data/homepage';

export const HopeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#F6F4EE] overflow-hidden pt-12 sm:pt-14 md:pt-18 lg:pt-20 xl:pt-24 pb-12 sm:pb-14 md:pb-16 lg:pb-20"
    >
      {/* Container: generous left margin matching reference image, right bleeds to screen edge on desktop */}
      <div className="w-full pl-6 sm:pl-10 md:pl-16 lg:pl-20 xl:pl-28 2xl:pl-36 pr-6 sm:pr-10 md:pr-14 lg:pr-0">
        {/* Desktop Layout (>= 1024px) */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Area: Headline + Two-Column Text Composition */}
          <div className="flex-1 min-w-0 pr-6 xl:pr-12 pt-24 xl:pt-[110px] 2xl:pt-[120px] max-w-[920px]">
            {/* Primary Headline: beaufort-pro 300, 51px, line-height 67px, rgb(43, 43, 43) */}
            <h2
              id="hope-headline"
              className="font-beaufort text-[44px] lg:text-[51px] leading-[58px] lg:leading-[67px] text-[rgb(43,43,43)] font-[300] tracking-[-0.01em] text-left max-w-[800px]"
            >
              <span className="block whitespace-nowrap">You’re holding onto hope that life</span>
              <span className="block whitespace-nowrap">can be better than it is right now.</span>
            </h2>

            {/* Two-Column Text Grid */}
            <div className="mt-[52px] grid grid-cols-2 gap-12 xl:gap-14 text-left items-start">
              {/* Left Column: Uppercase Subhead + Paragraph 1 */}
              <div className="flex flex-col justify-start w-full max-w-[440px]">
                <p
                  id="hope-subhead"
                  className="font-muli text-[15px] uppercase tracking-[0.11em] text-[rgb(43,43,43)] font-normal leading-[25px]"
                >
                  <span className="block">AT CONEJO VALLEY FAMILY COUNSELING WE</span>
                  <span className="block">WANT TO MAKE THAT HOPE A REALITY.</span>
                </p>

                <p
                  id="hope-paragraph-1"
                  className="mt-6 font-muli text-[16px] leading-[29px] text-[rgb(43,43,43)] font-[300]"
                >
                  Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                </p>
              </div>

              {/* Right Column: Paragraph 2 */}
              <div className="flex flex-col justify-start w-full max-w-[445px]">
                <p
                  id="hope-paragraph-2"
                  className="font-muli text-[16px] leading-[29px] text-[rgb(43,43,43)] font-[300]"
                >
                  First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Ocean Waves Photograph positioned to screen right edge */}
          <div className="w-[31vw] min-w-[380px] max-w-[500px] xl:max-w-[530px] 2xl:max-w-[560px] flex-shrink-0 self-start">
            <div className="w-full h-[590px] xl:h-[615px] 2xl:h-[640px] overflow-hidden relative">
              <img
                id="hope-ocean-image"
                src={siteImages.hopeOcean}
                alt="Sandy beach with gentle ocean waves and a cloudy sky"
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout (< 1024px) strictly matching slice_1.png */}
        <div className="lg:hidden flex flex-col text-left">
          {/* Primary Headline */}
          <h2
            id="mobile-hope-headline"
            className="font-beaufort text-[32px] sm:text-[40px] leading-[42px] sm:leading-[52px] text-[rgb(43,43,43)] font-[300] tracking-[-0.01em]"
          >
            <span className="block">You’re holding onto hope that life</span>
            <span className="block">can be better than it is right now.</span>
          </h2>

          {/* Uppercase Subhead */}
          <div className="mt-8 sm:mt-10">
            <p
              id="mobile-hope-subhead"
              className="font-muli text-[14px] sm:text-[15px] uppercase tracking-[0.11em] text-[rgb(43,43,43)] font-normal leading-[24px] sm:leading-[25px]"
            >
              <span className="block">AT CONEJO VALLEY FAMILY COUNSELING WE</span>
              <span className="block">WANT TO MAKE THAT HOPE A REALITY.</span>
            </p>
          </div>

          {/* Ocean Waves Image right after subhead */}
          <div className="my-8 sm:my-10 w-full overflow-hidden">
            <img
              id="mobile-hope-ocean-image"
              src={siteImages.hopeOcean}
              alt="Sandy beach with gentle ocean waves and a cloudy sky"
              className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover object-center select-none shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Paragraph 1 */}
          <p
            id="mobile-hope-paragraph-1"
            className="font-muli text-[15.5px] sm:text-[16px] leading-[28px] sm:leading-[29px] text-[rgb(43,43,43)] font-[300]"
          >
            Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
          </p>

          {/* Paragraph 2 */}
          <p
            id="mobile-hope-paragraph-2"
            className="mt-6 sm:mt-7 font-muli text-[15.5px] sm:text-[16px] leading-[28px] sm:leading-[29px] text-[rgb(43,43,43)] font-[300]"
          >
            First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
          </p>
        </div>
      </div>
    </section>
  );
};
