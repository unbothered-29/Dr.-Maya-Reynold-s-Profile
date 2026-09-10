import React from 'react';
import { whoWeHelpItems } from '../data/homepage';

export const WhoWeHelp: React.FC = () => {
  return (
    <section
      id="who-we-help"
      className="relative w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-20 sm:pb-24 md:pb-28 lg:pb-32 bg-white"
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-8 md:px-[4vw]">
        {/* Section Title: "Who we" in Beaufort Pro serif + "help" in PrintedMoments script #86B3B3 */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h2
            id="who-we-help-title"
            className="font-beaufort text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[54px] leading-tight text-[#2B2B2B] font-[300] tracking-[-0.01em] text-left"
          >
            <span>Who we</span>
            <span className="inline-block ml-3 sm:ml-4 md:ml-5 font-printed-moments font-[300] text-[#86B3B3] not-italic">
              help
            </span>
          </h2>
        </div>

        {/* 3-Column Grid: Indented by 12.5% on desktop (col 5 of 24) matching the exact left/right spacing in reference figure, with 20px between cards */}
        <div className="w-full md:ml-[12.5%] md:w-[87.5%] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[20px] items-start">
          {whoWeHelpItems.map((item) => {
            return (
              <article
                key={item.id}
                id={`who-we-help-${item.id}`}
                className="flex flex-col text-left"
              >
                {/* Image card with exact 4/5 portrait aspect ratio matching reference figure */}
                <div className="w-full overflow-hidden mb-8 sm:mb-9 md:mb-10">
                  <div className="w-full aspect-[4/5] overflow-hidden bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02] ${
                        item.id === 'adults'
                          ? 'object-[50%_65%]'
                          : item.id === 'children-teens'
                          ? 'object-[50%_55%]'
                          : 'object-center'
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Subtitle in Beaufort Pro matching Squarespace heading 4 (1.7rem = 25.5px) */}
                <h3 className="font-beaufort text-[24px] sm:text-[25px] md:text-[25.5px] leading-tight text-[#2B2B2B] font-[300] tracking-normal mb-5 sm:mb-6 md:mb-[26px]">
                  {item.title}
                </h3>

                {/* Descriptive Paragraph in Muli Light with exact 16.5px (1.1rem) font size and 1.8em leading matching reference figure */}
                <p className="font-muli text-[16px] md:text-[16.5px] leading-[1.8] text-[#2B2B2B] font-[300] tracking-[0em]">
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
