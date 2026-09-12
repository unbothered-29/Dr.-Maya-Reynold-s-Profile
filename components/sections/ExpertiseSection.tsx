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
      className="relative w-full pt-10 pb-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 lg:py-36 bg-[#F7F5F1] lg:bg-white"
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
              className="font-serif-heading text-[32px] sm:text-[38px] md:text-[42px] leading-[42px] sm:leading-[50px] md:leading-[55px] text-[#302B2A] font-normal tracking-normal"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our areas of
              <span
                className="inline-block ml-3 font-script-accent text-[42px] sm:text-[48px] md:text-[54px] leading-[25px] sm:leading-[27px] md:leading-[29px] text-[#B98D8D] font-normal select-none align-baseline"
                style={{ fontFamily: "'Allura', cursive" }}
              >
                expertise
              </span>
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
                      key={item.name}
                      className={`pt-[20px] pb-[22px] sm:pt-[24px] sm:pb-[28px] ${
                        !isLast ? 'border-b border-[#D8C8C8]' : 'border-b border-[#D8C8C8] md:border-b-0'
                      } flex items-center min-h-[68px] sm:min-h-[80px]`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans-body text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] font-medium tracking-[0.14em] uppercase text-[#302B2A] hover:text-[#593D4B] transition-colors duration-200 block"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span
                          className="font-sans-body text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] font-medium tracking-[0.14em] uppercase text-[#302B2A]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item.name}
                        </span>
                      )}
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
                      key={item.name}
                      className={`pt-[20px] pb-[22px] sm:pt-[24px] sm:pb-[28px] ${
                        !isLast ? 'border-b border-[#D8C8C8]' : ''
                      } flex items-center min-h-[68px] sm:min-h-[80px]`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans-body text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] font-medium tracking-[0.14em] uppercase text-[#302B2A] hover:text-[#593D4B] transition-colors duration-200 block"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span
                          className={`font-sans-body text-[15px] sm:text-[16px] leading-[25px] sm:leading-[27px] font-medium tracking-[0.14em] uppercase text-[#302B2A] ${
                            item.isItalic ? 'italic text-[#756D68]' : ''
                          }`}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
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

        {/* ========================================= */}
        {/* WEB VIEW ELEMENTS (lg and above)        */}
        {/* ========================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-14 xl:gap-20 items-start">
          
          {/* Desktop Title */}
          <div className="col-span-5 xl:col-span-4 pt-2">
            <h2
              id="areas-of-expertise-title-desktop"
              className="font-beaufort text-[36px] xl:text-[42px] leading-[50px] xl:leading-[55px] text-[rgb(43,43,43)] font-[300] tracking-normal"
            >
              Our areas of
              <span className="block font-thrive-script text-[36px] xl:text-[42px] leading-[27px] xl:leading-[29px] text-[#70A19F] font-[300] select-none mt-2">
                expertise
              </span>
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
                      key={item.name}
                      className={`pt-[24px] pb-[28px] ${
                        !isLast ? 'border-b border-[#EDE8E1]' : ''
                      } flex items-center min-h-[80px]`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-muli text-[15px] leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)] hover:text-[#5E9B97] transition-colors duration-200 block"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-muli text-[15px] leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)]">
                          {item.name}
                        </span>
                      )}
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
                      key={item.name}
                      className={`pt-[24px] pb-[28px] ${
                        !isLast ? 'border-b border-[#EDE8E1]' : ''
                      } flex items-center min-h-[80px]`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-muli text-[15px] leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)] hover:text-[#5E9B97] transition-colors duration-200 block"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span
                          className={`font-muli text-[15px] leading-[27px] font-[400] tracking-[0.14em] uppercase text-[rgb(43,43,43)] ${
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
