import React from 'react';
import { hopeContent, siteImages } from '@/data/homepage';

export const HopeSection: React.FC = () => {
  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <section
        id="about-mobile"
        className="relative w-full bg-[#F7F5F1] overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-16 md:py-24 lg:hidden"
      >
        {/* Master Container: max-w-[1500px] mx-auto with px-[6vw] md:px-[4vw] */}
        <div className="w-full max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
          <div className="flex flex-col text-left">
            {/* Primary Headline in Playfair Display */}
            <h2
              id="mobile-hope-headline"
              className="font-serif-heading text-[clamp(32px,8.8vw,42px)] sm:text-[46px] md:text-[52px] leading-[1.38] min-[390px]:leading-[1.42] text-[#302B2A] font-normal tracking-[-0.01em]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">You’re holding onto hope</span>
              <span className="block whitespace-nowrap">that life can be better</span>
              <span className="block whitespace-nowrap">than it is right now.</span>
            </h2>

            {/* Uppercase Subhead in Montserrat */}
            <div className="mt-[4px] min-[390px]:mt-[6px] sm:mt-[8px]">
              <p
                id="mobile-hope-subhead"
                className="font-sans-body text-[13.5px] min-[375px]:text-[14px] min-[390px]:text-[14.5px] min-[430px]:text-[15px] sm:text-[15.5px] uppercase tracking-[0.14em] font-medium leading-[28px] min-[390px]:leading-[30px] sm:leading-[32px] text-[#302B2A]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="block whitespace-nowrap">AT CONEJO VALLEY FAMILY</span>
                <span className="block whitespace-nowrap">COUNSELING WE WANT TO MAKE THAT</span>
                <span className="block whitespace-nowrap">HOPE A REALITY.</span>
              </p>
            </div>

            {/* Paragraph 1 */}
            <p
              id="mobile-hope-paragraph-1"
              className="mt-[22px] min-[390px]:mt-[26px] sm:mt-[30px] font-sans-body text-base font-normal leading-[1.8] text-[#756D68]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
            </p>

            {/* Ocean Waves Image placed after Paragraph 1 */}
            <div className="my-8 sm:my-10 w-full overflow-hidden rounded-sm">
              <img
                id="mobile-hope-ocean-image"
                src={siteImages.hopeOcean}
                alt="Sandy beach with gentle ocean waves and a cloudy sky"
                className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover object-center select-none shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Paragraph 2 */}
            <p
              id="mobile-hope-paragraph-2"
              className="font-sans-body text-base font-normal leading-[1.8] text-[#756D68]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <section
        id="about-desktop"
        className="relative hidden lg:block w-full bg-[#F6F4EE] overflow-hidden lg:pt-20 xl:pt-24 lg:pb-20"
      >
        {/* Container: generous left margin matching reference image, right bleeds to screen edge on desktop */}
        <div className="w-full lg:pl-20 xl:pl-28 2xl:pl-36 lg:pr-0">
          <div className="flex flex-row items-start justify-between gap-12 xl:gap-16 2xl:gap-20">
            {/* Left Area: Headline + Two-Column Text Composition */}
            <div className="flex-1 min-w-0 pr-6 xl:pr-12 pt-24 xl:pt-[110px] 2xl:pt-[120px] max-w-[920px]">
              {/* Primary Headline: beaufort-pro 300, 51px, line-height 67px, rgb(43, 43, 43) */}
              <h2
                id="hope-headline-desktop"
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
                    id="hope-subhead-desktop"
                    className="font-muli text-[15px] uppercase tracking-[0.11em] text-[rgb(43,43,43)] font-normal leading-[25px]"
                  >
                    <span className="block">AT CONEJO VALLEY FAMILY COUNSELING WE</span>
                    <span className="block">WANT TO MAKE THAT HOPE A REALITY.</span>
                  </p>

                  <p
                    id="hope-paragraph-1-desktop"
                    className="mt-6 font-muli text-[16px] leading-[29px] text-[rgb(43,43,43)] font-[300]"
                  >
                    Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                  </p>
                </div>

                {/* Right Column: Paragraph 2 */}
                <div className="flex flex-col justify-start w-full max-w-[445px]">
                  <p
                    id="hope-paragraph-2-desktop"
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
                  id="hope-ocean-image-desktop"
                  src={siteImages.hopeOcean}
                  alt="Sandy beach with gentle ocean waves and a cloudy sky"
                  className="w-full h-full object-cover object-center select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
