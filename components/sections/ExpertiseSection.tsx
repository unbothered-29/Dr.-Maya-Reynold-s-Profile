import React from 'react';
import { statementContent } from '@/data/homepage';

export const ExpertiseSection: React.FC = () => {
  // Split the expertise list from homepage.ts into two columns as requested by the PDF
  const list = statementContent.expertiseList;
  const leftColumnItems = list.slice(0, 6);
  const rightColumnItems = list.slice(6);

  return (
    <section
      id="expertise"
      aria-labelledby="areas-of-expertise-title"
      className="relative w-full pt-10 pb-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 lg:py-36 bg-[#F7F5F1]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        
        {/* ========================================= */}
        {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 gap-12 lg:hidden items-start">
          {/* Mobile Title */}
          <div className="pt-1 sm:pt-2">
            <h2
              id="areas-of-expertise-title-mobile"
              className="font-serif text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[50px] md:leading-[55px] text-[#302A29] font-normal tracking-normal"
            >
              {statementContent.areasTitle}
            </h2>
          </div>

          {/* Mobile Specialty Items */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              
              {/* Column 1 */}
              <div className="flex flex-col">
                {leftColumnItems.map((item, index) => {
                  const isLast = index === leftColumnItems.length - 1;
                  return (
                    <div
                      key={item}
                      className={`pt-[20px] pb-[22px] sm:pt-[24px] sm:pb-[28px] ${
                        !isLast ? 'border-b border-[#D9C9C9]' : 'border-b border-[#D9C9C9] md:border-b-0'
                      } flex items-center min-h-[68px] sm:min-h-[80px]`}
                    >
                      <span className="font-sans text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] font-medium tracking-[0.14em] uppercase text-[#302A29]">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col">
                {rightColumnItems.map((item, index) => {
                  const isLast = index === rightColumnItems.length - 1;
                  return (
                    <div
                      key={item}
                      className={`pt-[20px] pb-[22px] sm:pt-[24px] sm:pb-[28px] ${
                        !isLast ? 'border-b border-[#D9C9C9]' : ''
                      } flex items-center min-h-[68px] sm:min-h-[80px]`}
                    >
                      <span className="font-sans text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] font-medium tracking-[0.14em] uppercase text-[#302A29]">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* WEB VIEW ELEMENTS (lg and above)        */}
        {/* ========================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-14 xl:gap-20 items-start">
          
          {/* Desktop Title */}
          <div className="col-span-5 xl:col-span-4 pt-2">
            <h2
              id="areas-of-expertise-title-desktop"
              className="desktop-section-heading text-[#302A29] tracking-normal"
            >
              {statementContent.areasTitle}
            </h2>
          </div>

          {/* Desktop Specialty Items */}
          <div className="col-span-7 xl:col-span-8">
            <div className="grid grid-cols-2 gap-x-16 xl:gap-x-20">
              
              {/* Column 1 */}
              <div className="flex flex-col">
                {leftColumnItems.map((item, index) => {
                  const isLast = index === leftColumnItems.length - 1;
                  return (
                    <div
                      key={item}
                      className={`pt-[24px] pb-[28px] ${
                        !isLast ? 'border-b border-[#D9C9C9]' : ''
                      } flex items-center min-h-[80px]`}
                    >
                      <span className="desktop-supporting-text font-medium tracking-[0.14em] uppercase text-[#302A29]">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col">
                {rightColumnItems.map((item, index) => {
                  const isLast = index === rightColumnItems.length - 1;
                  return (
                    <div
                      key={item}
                      className={`pt-[24px] pb-[28px] ${
                        !isLast ? 'border-b border-[#D9C9C9]' : ''
                      } flex items-center min-h-[80px]`}
                    >
                      <span className="desktop-supporting-text font-medium tracking-[0.14em] uppercase text-[#302A29]">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
