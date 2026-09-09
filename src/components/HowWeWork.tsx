import React from 'react';
import { howWeWorkContent, siteImages } from '../data/homepage';
import { SectionEyebrow } from './SectionEyebrow';
import { EditorialLink } from './EditorialLink';
import { ImageBlock } from './ImageBlock';

interface HowWeWorkProps {
  onLearnMoreClick?: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onLearnMoreClick }) => {
  return (
    <section
      id="methods"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#F4F1EA]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Large Editorial Photo (Woman and child in white dresses on beach) */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[500px] lg:max-w-none">
              <ImageBlock
                id="how-we-work-image"
                src={siteImages.howWeWorkBeach}
                alt="Mother and child in white dresses smiling on the beach in warm sunset light"
                aspectRatioClassName="aspect-[4/5.2]"
                className="hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Text Block */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col text-left lg:pl-4 xl:pl-8">
            <SectionEyebrow id="how-we-work-eyebrow" className="mb-4 sm:mb-5">
              {howWeWorkContent.eyebrow}
            </SectionEyebrow>

            <h2
              id="how-we-work-heading"
              className="font-serif-editorial text-[36px] sm:text-[44px] md:text-[50px] leading-[1.08] text-[#454540] font-normal tracking-[-0.01em] mb-8 sm:mb-10 max-w-[620px]"
            >
              {howWeWorkContent.heading}
            </h2>

            <div className="space-y-6 max-w-[620px] mb-10 sm:mb-12 font-sans-clean text-[15px] sm:text-[16px] leading-[1.8] text-[#6C6B65] font-normal">
              {howWeWorkContent.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div>
              <EditorialLink
                id="how-we-work-cta"
                href="#about"
                onClick={onLearnMoreClick}
              >
                {howWeWorkContent.ctaText}
              </EditorialLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
