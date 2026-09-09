import React from 'react';
import { whoWeHelpItems } from '../data/homepage';
import { ImageBlock } from './ImageBlock';

export const WhoWeHelp: React.FC = () => {
  return (
    <section
      id="who-we-help"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#F4F1EA]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Title */}
        <h2
          id="who-we-help-title"
          className="font-serif-editorial text-[38px] sm:text-[46px] md:text-[52px] leading-[1.1] text-[#454540] font-normal tracking-[-0.01em] mb-14 sm:mb-20 text-left"
        >
          Who we help
        </h2>

        {/* Editorial 3-Part Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 items-start">
          {whoWeHelpItems.map((item, index) => {
            // Apply slight editorial vertical stagger for the second column on desktop
            const staggerClass = index === 1 ? 'md:translate-y-8' : '';

            return (
              <article
                key={item.id}
                id={`who-we-help-${item.id}`}
                className={`flex flex-col text-left ${staggerClass}`}
              >
                {/* Photography with varying crop proportions */}
                <div className="w-full mb-6">
                  <ImageBlock
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    aspectRatioClassName={item.aspectRatio}
                    className="hover:scale-[1.02]"
                  />
                </div>

                {/* Small Serif Title */}
                <h3 className="font-serif-editorial text-[26px] sm:text-[28px] leading-tight text-[#454540] font-normal tracking-[0.01em] mb-3">
                  {item.title}
                </h3>

                {/* Descriptive Paragraph */}
                <p className="font-sans-clean text-[15px] sm:text-[15.5px] leading-[1.75] text-[#6C6B65] font-normal">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
