import React from 'react';

interface ExpertiseItem {
  name: string;
  href?: string;
  isAccent?: boolean;
  isItalic?: boolean;
}

const leftColumnItems: ExpertiseItem[] = [
  { name: 'Dissociation', href: '#specialty-dissociation', isAccent: true },
  { name: 'Family conflict', href: '#specialty-family-conflict' },
  { name: 'Depression', href: '#specialty-depression' },
  { name: 'Anxiety', href: '#specialty-anxiety' },
  { name: 'Children', href: '#specialty-children' },
  { name: 'Intimacy & connection', href: '#specialty-intimacy-connection' },
];

const rightColumnItems: ExpertiseItem[] = [
  { name: 'Trauma', href: '#specialty-trauma' },
  { name: 'Special needs parenting', href: '#specialty-special-needs-parenting' },
  { name: 'Marriage', href: '#specialty-marriage' },
  { name: 'Relationships', href: '#specialty-relationships' },
  { name: 'Teens', href: '#specialty-teens' },
  { name: '…and more.', isItalic: true },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="areas-of-expertise-title"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#F6F4EE]"
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        {/* Section Heading: Our areas of expertise */}
        <div className="text-left mb-10 sm:mb-12 md:mb-14">
          <h2
            id="areas-of-expertise-title"
            className="font-beaufort text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-[#2B2B2B] font-[300] tracking-[-0.01em]"
          >
            Our areas of{' '}
            <em className="font-beaufort italic font-[300] text-[#4E7E7E]">
              expertise
            </em>
          </h2>
        </div>

        {/* Top full-width divider spanning across */}
        <div className="w-full border-t border-[#2B2B2B]/15" aria-hidden="true" />

        {/* 2-Column List with individual item divider hairlines */}
        <div
          id="expertise-list"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 xl:gap-x-24"
        >
          {/* Left Column */}
          <div className="flex flex-col">
            {leftColumnItems.map((item) => (
              <div
                key={item.name}
                className="py-4 sm:py-5 md:py-[22px] border-b border-[#2B2B2B]/15 flex items-center"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className={`font-beaufort text-[20px] sm:text-[22px] md:text-[24px] font-[300] tracking-[0.005em] transition-colors duration-200 block ${
                      item.isAccent
                        ? 'text-[#4E7E7E] hover:text-[#3B6464]'
                        : 'text-[#2B2B2B] hover:text-[#4E7E7E]'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <span
                    className={`font-beaufort text-[20px] sm:text-[22px] md:text-[24px] font-[300] tracking-[0.005em] ${
                      item.isItalic ? 'italic text-[#6B6A64]' : 'text-[#2B2B2B]'
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightColumnItems.map((item) => (
              <div
                key={item.name}
                className="py-4 sm:py-5 md:py-[22px] border-b border-[#2B2B2B]/15 flex items-center"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-beaufort text-[20px] sm:text-[22px] md:text-[24px] font-[300] tracking-[0.005em] text-[#2B2B2B] hover:text-[#4E7E7E] transition-colors duration-200 block"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span
                    className={`font-beaufort text-[20px] sm:text-[22px] md:text-[24px] font-[300] tracking-[0.005em] ${
                      item.isItalic ? 'italic text-[#6B6A64]' : 'text-[#2B2B2B]'
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

