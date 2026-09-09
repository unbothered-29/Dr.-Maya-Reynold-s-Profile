import React from 'react';
import { statementContent } from '../data/homepage';

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="expertise"
      className="relative w-full py-24 sm:py-32 md:py-40 bg-[#F4F1EA]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Large Statement Headline / Visual Pause */}
        <div className="max-w-[980px] mb-20 sm:mb-28 md:mb-36 text-left">
          <blockquote className="font-serif-editorial text-[32px] sm:text-[42px] md:text-[50px] lg:text-[54px] leading-[1.12] text-[#454540] font-normal tracking-[-0.01em]">
            “{statementContent.quote}”
          </blockquote>
        </div>

        {/* Section Heading: Our areas of expertise */}
        <div className="text-left mb-10 sm:mb-12">
          <h3
            id="areas-of-expertise-title"
            className="font-serif-editorial text-[30px] sm:text-[36px] md:text-[40px] text-[#454540] font-normal tracking-[0.01em]"
          >
            {statementContent.areasTitle}
          </h3>
        </div>

        {/* Vertically Separated List (Editorial Services Index) */}
        <div
          id="expertise-list"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t border-[#454540]/20"
        >
          {statementContent.expertiseList.map((item, index) => {
            const isEllipsis = item.includes('…');
            return (
              <div
                key={`${item}-${index}`}
                className="py-5 sm:py-6 border-b border-[#454540]/15 flex items-center justify-between group transition-colors"
              >
                {isEllipsis ? (
                  <span className="font-serif-editorial text-[20px] sm:text-[23px] text-[#6C6B65] italic font-normal">
                    {item}
                  </span>
                ) : (
                  <a
                    href={`#specialty-${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="font-serif-editorial text-[20px] sm:text-[24px] text-[#454540] group-hover:text-[#7DA5A0] transition-colors duration-300 font-normal tracking-[0.01em] block w-full"
                  >
                    {item}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
