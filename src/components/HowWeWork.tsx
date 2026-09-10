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
      <div className="w-full pl-6 sm:pl-10 md:pl-12 lg:pl-14 xl:pl-[120px] 2xl:pl-[140px] pr-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14 2xl:gap-16">
          
          {/* Left / Main Content */}
          <div className="flex-1 flex flex-col justify-between max-w-[1140px] xl:max-w-[1180px] pt-1">
            
            {/* Top Group */}
            <div>
              {/* Eyebrow: Muli 300, 15px, line-height 27px, color rgb(0,0,0) */}
              <span
                id="how-we-work-eyebrow"
                className="font-muli text-[15px] leading-[27px] tracking-[0.06em] uppercase text-[rgb(0,0,0)] font-[300] mb-[85px] sm:mb-[100px] md:mb-[115px] lg:mb-[135px] block"
              >
                {howWeWorkContent.eyebrow}
              </span>

              {/* Main Headline: beaufort-pro 300, slightly increased font size */}
              <h2
                id="how-we-work-heading"
                className="font-beaufort text-[30px] sm:text-[36px] md:text-[41px] lg:text-[46px] leading-[1.22] lg:leading-[58px] text-[rgb(0,0,0)] font-[300] tracking-[-0.015em] mb-11 sm:mb-12 md:mb-14 lg:mb-[58px] max-w-[840px]"
              >
                {howWeWorkContent.heading}
              </h2>

              {/* Two Columns of Text side-by-side matching screenshot line breaks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-12 xl:gap-x-14 gap-y-8">
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

                {/* Column 2: Third and fourth paragraphs combined matching line breaks */}
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
                className="inline-block font-muli text-[12px] leading-normal font-[400] tracking-[0.06em] uppercase text-[rgb(43,43,43)] border-b border-[rgb(43,43,43)] pb-1 transition-colors duration-200 hover:text-[#5E9B97] hover:border-[#5E9B97]"
              >
                {howWeWorkContent.ctaText}
              </a>
            </div>
          </div>

          {/* Right: Full Beach Photo centered vertically and shifted more towards right */}
          <div className="flex justify-center lg:justify-end shrink-0 lg:ml-auto self-center my-auto lg:translate-x-10 xl:translate-x-16 2xl:translate-x-20">
            <div className="w-full sm:w-[350px] md:w-[375px] lg:w-[395px] xl:w-[420px] 2xl:w-[440px] h-[500px] sm:h-[560px] md:h-[620px] lg:h-[670px] xl:h-[710px] overflow-hidden">
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
