import React from 'react';
import { appointmentContent, siteImages } from '../data/homepage';
import { SectionEyebrow } from './SectionEyebrow';
import { EditorialLink } from './EditorialLink';
import { ImageBlock } from './ImageBlock';

interface AppointmentSectionProps {
  onBookClick: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  onBookClick,
}) => {
  return (
    <section
      id="appointment"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#F4F1EA]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Top Text & Booking Composition */}
        <div className="max-w-[820px] mx-auto text-center mb-14 sm:mb-20">
          <SectionEyebrow id="appointment-eyebrow" className="mb-4 sm:mb-5">
            {appointmentContent.eyebrow}
          </SectionEyebrow>

          <h2
            id="appointment-heading"
            className="font-serif-editorial text-[38px] sm:text-[46px] md:text-[54px] leading-[1.08] text-[#454540] font-normal tracking-[-0.01em] mb-8 sm:mb-10"
          >
            {appointmentContent.heading}
          </h2>

          <p
            id="appointment-body"
            className="font-sans-clean text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#6C6B65] font-normal max-w-[680px] mx-auto mb-6 sm:mb-8"
          >
            {appointmentContent.paragraph1}
          </p>

          <p className="font-sans-clean text-[14px] sm:text-[14.5px] text-[#6C6B65] mb-6 italic">
            {appointmentContent.prompt}
          </p>

          <div>
            <EditorialLink
              id="appointment-book-now-btn"
              isButton={true}
              onClick={onBookClick}
              className="text-[12px] sm:text-[13px] px-2 py-1"
            >
              {appointmentContent.ctaText}
            </EditorialLink>
          </div>
        </div>

        {/* Large Immersive Editorial Beach Photograph */}
        <div className="w-full max-w-[1240px] mx-auto mb-14 sm:mb-18">
          <ImageBlock
            id="appointment-beach-image"
            src={siteImages.appointmentBeach}
            alt="Vast, calm coastal shoreline with soft waves and peaceful warm sky"
            aspectRatioClassName="aspect-[16/8] sm:aspect-[16/7]"
            className="hover:scale-[1.01]"
          />
        </div>

        {/* Final Supporting Copy */}
        <div className="max-w-[680px] mx-auto text-center">
          <p
            id="appointment-supporting-copy"
            className="font-sans-clean text-[15px] sm:text-[15.5px] leading-[1.8] text-[#6C6B65] font-normal"
          >
            {appointmentContent.supportingCopy}
          </p>
        </div>
      </div>
    </section>
  );
};
