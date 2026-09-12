import React from 'react';
import { hopeContent, siteImages } from '@/data/homepage';

export const HopeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#F6F4F0] overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-16 md:py-24 lg:py-28"
    >
      {/* Master Container: max-w-[1500px] mx-auto with px-[6vw] md:px-[4vw] */}
      <div className="w-full max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        {/* Desktop Layout (>= 1024px): Left Editorial Text Block + Right Ocean Waves Image */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Editorial Area */}
          <div className="flex-1 min-w-0 pr-4 xl:pr-10 pt-6 xl:pt-10 max-w-[920px]">
            {/* Primary Headline in beaufort-pro / Cormorant Infant */}
            <h2
              id="hope-headline"
              className="font-serif-editorial text-[42px] lg:text-[50px] xl:text-[54px] leading-[1.22] text-[#2B2B2B] font-[300] tracking-[-0.01em] text-left max-w-[820px]"
              style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">You’re holding onto hope that life</span>
              <span className="block whitespace-nowrap">can be better than it is right now.</span>
            </h2>

            {/* Two-Column Text Grid below headline */}
            <div className="mt-12 lg:mt-14 grid grid-cols-2 gap-10 xl:gap-14 text-left items-start">
              {/* Left Column: Uppercase Subhead + Paragraph 1 */}
              <div className="flex flex-col justify-start">
                <p
                  id="hope-subhead"
                  className="font-sans-clean text-[13.5px] lg:text-[14.5px] uppercase tracking-[0.12em] text-[#2B2B2B] font-[400] leading-[26px]"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  <span className="block">AT CONEJO VALLEY FAMILY COUNSELING WE</span>
                  <span className="block">WANT TO MAKE THAT HOPE A REALITY.</span>
                </p>

                <p
                  id="hope-paragraph-1"
                  className="mt-6 font-sans-clean text-base font-light leading-[1.8] text-[#2B2B2B]/85"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
                </p>
              </div>

              {/* Right Column: Paragraph 2 */}
              <div className="flex flex-col justify-start">
                <p
                  id="hope-paragraph-2"
                  className="font-sans-clean text-base font-light leading-[1.8] text-[#2B2B2B]/85"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Ocean Waves Photograph positioned to screen right edge */}
          <div className="w-[31vw] min-w-[360px] max-w-[500px] xl:max-w-[530px] 2xl:max-w-[560px] flex-shrink-0 self-start">
            <div className="w-full h-[580px] xl:h-[610px] 2xl:h-[640px] overflow-hidden rounded-sm relative">
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

        {/* Mobile & Tablet Layout (< 1024px) strictly matching user screenshot media_1789214338428.png */}
        <div className="lg:hidden flex flex-col text-left">
          {/* Primary Headline - Scaled with elegant line-height matching reference screenshot gaps */}
          <h2
            id="mobile-hope-headline"
            className="font-serif-editorial text-[clamp(32px,8.8vw,42px)] sm:text-[46px] md:text-[52px] leading-[1.38] min-[390px]:leading-[1.42] text-[#2B2B2B] font-[300] tracking-[-0.01em]"
            style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
          >
            <span className="block whitespace-nowrap">You’re holding onto hope</span>
            <span className="block whitespace-nowrap">that life can be better</span>
            <span className="block whitespace-nowrap">than it is right now.</span>
          </h2>

          {/* Uppercase Subhead - Gap calibrated exactly to 24px–28px from headline bottom */}
          <div className="mt-[4px] min-[390px]:mt-[6px] sm:mt-[8px]">
            <p
              id="mobile-hope-subhead"
              className="font-sans-clean text-[14px] min-[375px]:text-[14.5px] min-[390px]:text-[15px] min-[430px]:text-[15.5px] sm:text-[16px] uppercase tracking-[0.11em] min-[390px]:tracking-[0.12em] font-[400] leading-[28px] min-[390px]:leading-[30px] sm:leading-[32px] text-[#2B2B2B]"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              <span className="block whitespace-nowrap">AT CONEJO VALLEY FAMILY</span>
              <span className="block whitespace-nowrap">COUNSELING WE WANT TO MAKE THAT</span>
              <span className="block whitespace-nowrap">HOPE A REALITY.</span>
            </p>
          </div>

          {/* Paragraph 1 - Gap calibrated exactly to 32px–36px from subhead bottom */}
          <p
            id="mobile-hope-paragraph-1"
            className="mt-[22px] min-[390px]:mt-[26px] sm:mt-[30px] font-sans-clean text-base font-light leading-[1.8] text-[#2B2B2B]/85"
            style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
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
            className="font-sans-clean text-base font-light leading-[1.8] text-[#2B2B2B]/85"
            style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
          >
            First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
          </p>
        </div>
      </div>
    </section>
  );
};
