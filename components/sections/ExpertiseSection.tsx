import React from 'react';

interface ExpertiseItem {
  name: string;
  href?: string;
  isItalic?: boolean;
}

const leftColumnItems: ExpertiseItem[] = [
  { name: 'DISSOCIATION', href: '#specialty-dissociation' },
  { name: 'TRAUMA', href: '#specialty-trauma' },
  { name: 'FAMILY CONFLICT', href: '#specialty-family-conflict' },
  { name: 'SPECIAL NEEDS PARENTING', href: '#specialty-special-needs-parenting' },
  { name: 'DEPRESSION', href: '#specialty-depression' },
  { name: 'MARRIAGE', href: '#specialty-marriage' },
];

const rightColumnItems: ExpertiseItem[] = [
  { name: 'ANXIETY', href: '#specialty-anxiety' },
  { name: 'RELATIONSHIPS', href: '#specialty-relationships' },
  { name: 'CHILDREN', href: '#specialty-children' },
  { name: 'TEENS', href: '#specialty-teens' },
  { name: 'INTIMACY & CONNECTION', href: '#specialty-intimacy-connection' },
  { name: '...AND MORE.', isItalic: true },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="areas-of-expertise-title"
      className="relative w-full pt-10 pb-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 lg:pt-24 lg:pb-36 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        {/* 3-Column / Beside Layout: Title on the left, 2 columns of items on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left: Title "Our areas of expertise" beside the columns */}
          <div className="lg:col-span-5 xl:col-span-4 pt-1 sm:pt-2">
            <h2
              id="areas-of-expertise-title"
              className="font-beaufort text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[50px] md:leading-[55px] text-[rgb(43,43,43)] font-[300] tracking-normal"
            >
              Our areas of
              <span className="inline-block ml-2 font-thrive-script text-[32px] sm:text-[38px] md:text-[42px] leading-[25px] sm:leading-[27px] md:leading-[29px] text-[#70A19F] font-[300] select-none">
                expertise
              </span>
            </h2>
          </div>

          {/* Right: The Two Columns of Specialty Items */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 xl:gap-x-20">
              
              {/* Column 1: DISSOCIATION down to MARRIAGE */}
              <div className="flex flex-col">
                {leftColumnItems.map((item, index) => {
                  const isLast = index === leftColumnItems.length - 1;
                  return (
                    <div
                      key={item.name}
                      className={`pt-[20px] pb-[22px] sm:pt-[24px] sm:pb-[28px] ${
                        !isLast ? 'border-b border-[#EDE8E1]' : 'border-b border-[#EDE8E1] md:border-b-0'
                      } flex items-center min-h-[68px] sm:min-h-[80px]`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-muli text-[16px] sm:text-[17px] leading-[25px] sm:leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)] hover:text-[#5E9B97] transition-colors duration-200 block"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-muli text-[16px] sm:text-[17px] leading-[25px] sm:leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)]">
                          {item.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Column 2: ANXIETY down to ...AND MORE. */}
              <div className="flex flex-col">
                {rightColumnItems.map((item, index) => {
                  const isLast = index === rightColumnItems.length - 1;
                  return (
                    <div
                      key={item.name}
                      className={`pt-[20px] pb-[22px] sm:pt-[24px] sm:pb-[28px] ${
                        !isLast ? 'border-b border-[#EDE8E1]' : ''
                      } flex items-center min-h-[68px] sm:min-h-[80px]`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-muli text-[16px] sm:text-[17px] leading-[25px] sm:leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)] hover:text-[#5E9B97] transition-colors duration-200 block"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span
                          className={`font-muli text-[16px] sm:text-[17px] leading-[25px] sm:leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)] ${
                            item.isItalic ? 'italic text-[#75736E]' : ''
                          }`}
                        >
                          {item.name}
                        </span>
                      )}
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
