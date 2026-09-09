import React from 'react';
import { siteImages, specialtiesContent } from '../data/homepage';
import { SectionEyebrow } from './SectionEyebrow';
import { EditorialLink } from './EditorialLink';
import { ImageBlock } from './ImageBlock';

interface SpecialtiesProps {
  onLearnMore?: (specialtyId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onLearnMore }) => {
  return (
    <section
      id="specialties"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#F4F1EA]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Heading & Subheading */}
        <div className="max-w-[920px] mb-14 sm:mb-20 text-left">
          <h2
            id="specialties-heading"
            className="font-serif-editorial text-[36px] sm:text-[44px] md:text-[52px] leading-[1.08] text-[#454540] font-normal tracking-[-0.01em] mb-4 sm:mb-6"
          >
            {specialtiesContent.heading}
          </h2>
          <SectionEyebrow id="specialties-subheading">
            {specialtiesContent.subheading}
          </SectionEyebrow>
        </div>

        {/* Editorial Layout: Large Beach Image + 4 Integrated Specialties */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* Large Beach / Family Editorial Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full sticky top-24">
              <ImageBlock
                id="specialties-image"
                src={siteImages.specialtiesBeach}
                alt="Family on beach shoreline reflecting in soft ocean light"
                aspectRatioClassName="aspect-[3/4.2]"
                className="hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Featured Specialties List (Integrated into page canvas, NOT cards) */}
          <div className="lg:col-span-7 flex flex-col space-y-12 sm:space-y-14 text-left">
            {specialtiesContent.items.map((item, index) => (
              <div
                key={item.id}
                id={`specialty-${item.id}`}
                className={`pt-6 ${
                  index > 0 ? 'border-t border-[#454540]/15' : ''
                }`}
              >
                <h3 className="font-serif-editorial text-[24px] sm:text-[26px] tracking-[0.04em] text-[#454540] font-normal mb-3 uppercase">
                  {item.title}
                </h3>

                <p className="font-sans-clean text-[15px] sm:text-[16px] leading-[1.8] text-[#6C6B65] font-normal mb-4 max-w-[620px]">
                  {item.description}
                </p>

                <div>
                  <EditorialLink
                    href={`#specialty-${item.id}`}
                    onClick={() => onLearnMore && onLearnMore(item.id)}
                    className="text-[11px]"
                  >
                    Learn more
                  </EditorialLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
