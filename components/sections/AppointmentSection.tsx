'use client';

import React from 'react';
import { appointmentContent, siteImages } from '@/data/homepage';

interface AppointmentSectionProps {
  onBookClick: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  onBookClick,
}) => {
  return (
    <section
      id="appointment"
      className="relative w-full bg-[#F6F4EE] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="w-full mx-auto pl-0 pr-0 sm:px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-0">
          
          {/* Left Square Image (Hand in sand with seashells) */}
          <div className="flex w-[190px] sm:w-[230px] md:w-[270px] lg:w-[310px] xl:w-[380px] 2xl:w-[430px] shrink-0 items-center self-start lg:self-auto order-1 ml-0 mt-3 sm:mt-4 mb-6 sm:mb-8 lg:mt-0 lg:mb-0">
            <div className="w-full aspect-square overflow-hidden">
              <img
                id="appointment-left-image"
                src={siteImages.appointmentLeftSand || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg'}
                alt="A person picking up seashells on a sandy beach"
                className="w-full h-full object-cover object-center opacity-60 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Image: In mobile (< 1024px) appears below the text, on desktop on the right */}
          <div className="w-full lg:w-[32%] xl:w-[33%] 2xl:w-[34%] shrink-0 flex items-center justify-end pl-16 sm:pl-24 md:pl-32 lg:pl-0 pr-0 -mr-0 sm:-mr-4 md:-mr-6 lg:-mr-0 order-2 lg:order-3 mt-0 sm:mt-2 lg:mt-0">
            <div className="w-full max-w-none h-[280px] sm:h-[380px] md:h-[460px] lg:h-[500px] xl:h-[530px] 2xl:h-[560px] overflow-hidden">
              <img
                id="appointment-right-image"
                src={siteImages.appointmentRightPointing || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg'}
                alt="Adult pointing at seashells in the sand with child on the beach"
                className="w-full h-full object-cover object-[62%_center] hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text & Booking Call to Action */}
          <div className="w-full flex-1 max-w-[720px] xl:max-w-[800px] 2xl:max-w-[860px] lg:ml-9 xl:ml-16 2xl:ml-24 flex flex-col justify-center text-left pt-0 pb-4 sm:pt-2 sm:pb-6 lg:py-8 px-6 sm:px-10 md:px-12 lg:pl-2 xl:pl-4 lg:pr-2 order-1 lg:order-2">
            {/* Eyebrow Label */}
            <div className="mt-0 lg:-mt-16 xl:-mt-20 mb-6 sm:mb-8 lg:mb-12 xl:mb-14">
              <span
                id="appointment-eyebrow"
                className="inline-block text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] uppercase tracking-[0.2em] font-[400] text-[rgb(43,43,43)]"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.eyebrow}
              </span>
            </div>

            {/* Editorial Heading: Find a therapist who is the right fit for you. */}
            <h2
              id="appointment-heading"
              className="text-[32px] min-[420px]:text-[36px] sm:text-[42px] md:text-[48px] lg:text-[46px] xl:text-[54px] 2xl:text-[60px] text-[rgb(43,43,43)] font-[300] leading-[1.25] mb-6 sm:mb-8 lg:mb-14 xl:mb-16"
              style={{ fontFamily: "'beaufort-pro', serif" }}
            >
              <span className="block">Find a therapist who is</span>
              <span className="block mt-1">
                <span className="inline-block mr-2.5 sm:mr-3">the right fit for</span>
                <span
                  className="font-[300] not-italic text-[rgb(134,179,179)] text-[38px] min-[420px]:text-[44px] sm:text-[52px] md:text-[60px] lg:text-[58px] xl:text-[68px] 2xl:text-[74px] leading-[0.8] inline-block select-none align-baseline"
                  style={{ fontFamily: "'PrintedMoments', cursive" }}
                >
                  you
                </span>
                <span className="text-[rgb(43,43,43)]">.</span>
              </span>
            </h2>

            {/* Body Paragraph 1 */}
            <p
              id="appointment-body"
              className="text-[16px] sm:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[1.8] text-[rgb(43,43,43)] font-[300] mb-5 sm:mb-6"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              <span className="lg:block">Coming to therapy is a courageous decision, and connecting with the right kind of</span>{' '}
              <span className="lg:block">therapist makes all the difference. We understand that your journey is personal, and we&apos;re</span>{' '}
              <span className="lg:block">here to support you with care and understanding every step of the way. Each member of</span>{' '}
              <span className="lg:block">our team brings dedicated expertise and a commitment to support you in your struggles.</span>{' '}
              <span className="lg:block">We want you to feel prioritized, understood, and empowered.</span>
            </p>

            {/* Body Prompt Paragraph 2 */}
            <p
              id="appointment-prompt"
              className="text-[16px] sm:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[1.7] text-[rgb(43,43,43)] font-[300] mb-2 sm:mb-4 lg:mb-6 whitespace-normal sm:whitespace-nowrap"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              {appointmentContent.prompt}
            </p>

            {/* Oval CTA Button: BOOK NOW */}
            <div className="pt-6 sm:pt-8 lg:pt-10">
              <button
                id="appointment-book-now-btn"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center w-[160px] h-[52px] sm:w-[180px] sm:h-[58px] rounded-[50%] border border-[rgb(43,43,43)] text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-[300] text-[rgb(43,43,43)] hover:bg-[rgb(43,43,43)] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.ctaText}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
