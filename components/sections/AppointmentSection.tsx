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
      className="relative w-full bg-[#F7F5F1] lg:bg-[#F6F4EE] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="w-full mx-auto pl-0 pr-0 sm:px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-0">
          
          {/* ========================================= */}
          {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
          {/* ========================================= */}
          
          {/* Mobile Left Image */}
          <div className="flex lg:hidden w-[190px] sm:w-[230px] md:w-[270px] shrink-0 items-center self-start order-1 ml-0 mt-3 sm:mt-4 mb-6 sm:mb-8">
            <div className="w-full aspect-square overflow-hidden bg-[#D8C8C8]/30">
              <img
                id="appointment-left-image-mobile"
                src={siteImages.appointmentLeftSand || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg'}
                alt="A person picking up seashells on a sandy beach"
                className="w-full h-full object-cover object-center opacity-75 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Right Image */}
          <div className="flex lg:hidden w-full shrink-0 items-center justify-end pl-16 sm:pl-24 md:pl-32 pr-0 -mr-0 sm:-mr-4 md:-mr-6 order-3 mt-0 sm:mt-2">
            <div className="w-full h-[280px] sm:h-[380px] md:h-[460px] overflow-hidden">
              <img
                id="appointment-right-image-mobile"
                src={siteImages.appointmentRightPointing || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg'}
                alt="Adult pointing at seashells in the sand with child on the beach"
                className="w-full h-full object-cover object-[62%_center] hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile Text & CTA */}
          <div className="flex lg:hidden w-full flex-1 max-w-[720px] flex-col justify-center text-left pt-0 pb-4 sm:pt-2 sm:pb-6 px-6 sm:px-10 md:px-12 order-2">
            {/* Eyebrow Label */}
            <div className="mt-0 mb-6 sm:mb-8">
              <span
                id="appointment-eyebrow-mobile"
                className="inline-block font-montserrat text-[13px] sm:text-[14px] uppercase tracking-[0.16em] font-medium text-[#756D68]"
              >
                {appointmentContent.eyebrow}
              </span>
            </div>

            {/* Editorial Heading */}
            <h2
              id="appointment-heading-mobile"
              className="font-playfair text-[32px] min-[420px]:text-[36px] sm:text-[42px] md:text-[48px] text-[#302B2A] font-normal leading-[1.25] mb-6 sm:mb-8"
            >
              <span className="block">
                <span className="block">Find a therapist who is</span>
                <span className="block mt-1">
                  <span className="inline-block mr-2.5 sm:mr-3">the right fit for</span>
                  <span
                    className="font-allura not-italic text-[#593D4B] text-[42px] min-[420px]:text-[48px] sm:text-[58px] leading-[0.8] inline-block select-none align-baseline"
                  >
                    you
                  </span>
                  <span className="text-[#302B2A]">.</span>
                </span>
              </span>
            </h2>

            {/* Body Paragraph 1 */}
            <p
              id="appointment-body-mobile"
              className="font-montserrat text-[15px] sm:text-[16px] leading-[1.8] text-[#756D68] font-normal mb-5 sm:mb-6"
            >
              Coming to therapy is a courageous decision, and connecting with the right kind of{' '}
              therapist makes all the difference. We understand that your journey is personal, and we&apos;re{' '}
              here to support you with care and understanding every step of the way. Each member of{' '}
              our team brings dedicated expertise and a commitment to support you in your struggles.{' '}
              We want you to feel prioritized, understood, and empowered.
            </p>

            {/* Body Prompt Paragraph 2 */}
            <p
              id="appointment-prompt-mobile"
              className="font-montserrat text-[15px] sm:text-[16px] leading-[1.7] text-[#302B2A] font-medium mb-6 whitespace-normal sm:whitespace-nowrap"
            >
              {appointmentContent.prompt}
            </p>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <button
                id="appointment-book-now-btn-mobile"
                type="button"
                onClick={onBookClick}
                className="btn-pill-primary inline-flex items-center justify-center text-[13px] tracking-[0.16em] px-9 py-3.5 focus:outline-none cursor-pointer"
              >
                {appointmentContent.ctaText}
              </button>
            </div>
          </div>

          {/* ========================================= */}
          {/* WEB VIEW ELEMENTS (lg and above)        */}
          {/* ========================================= */}

          {/* Left Vertical Image - Desktop */}
          <div className="hidden lg:flex w-[110px] xl:w-[150px] 2xl:w-[185px] shrink-0 items-end pb-6 xl:pb-10 order-1">
            <div className="w-full h-[340px] xl:h-[395px] 2xl:h-[435px] overflow-hidden">
              <img
                id="appointment-left-image-desktop"
                src={siteImages.appointmentLeftSand || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg'}
                alt="A person picking up seashells on a sandy beach"
                className="w-full h-full object-cover object-[48%_bottom] opacity-[0.68] contrast-[0.94] brightness-[1.03] hover:opacity-[0.85] transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Image - Desktop */}
          <div className="hidden lg:flex lg:w-[32%] xl:w-[33%] 2xl:w-[34%] shrink-0 items-center justify-end px-0 order-3">
            <div className="w-full h-[500px] xl:h-[530px] 2xl:h-[560px] overflow-hidden">
              <img
                id="appointment-right-image-desktop"
                src={siteImages.appointmentRightPointing || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg'}
                alt="Adult pointing at seashells in the sand with child on the beach"
                className="w-full h-full object-cover object-[62%_center] hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text & Booking Call to Action - Desktop */}
          <div className="hidden lg:flex w-full flex-1 max-w-[720px] xl:max-w-[800px] 2xl:max-w-[860px] lg:ml-9 xl:ml-16 2xl:ml-24 flex-col justify-center text-left py-8 lg:pl-2 xl:pl-4 lg:pr-2 order-2">
            {/* Eyebrow Label */}
            <div className="mt-2 sm:mt-4 lg:-mt-16 xl:-mt-20 mb-6 sm:mb-8 lg:mb-16 xl:mb-20">
              <span
                id="appointment-eyebrow-desktop"
                className="inline-block text-[10.5px] sm:text-[11px] lg:text-[11.5px] uppercase tracking-[0.2em] font-[400] text-[rgb(43,43,43)]"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.eyebrow}
              </span>
            </div>

            {/* Editorial Heading: Find a therapist who is the right fit for you. */}
            <h2
              id="appointment-heading-desktop"
              className="text-[26px] min-[420px]:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[36px] xl:text-[42px] 2xl:text-[46px] text-[rgb(43,43,43)] font-[300] leading-[1.25] mb-6 sm:mb-8 lg:mb-14 xl:mb-16"
              style={{ fontFamily: "'beaufort-pro', serif" }}
            >
              <span className="block whitespace-nowrap">Find a therapist who is the right</span>
              <span className="inline-flex items-baseline whitespace-nowrap mt-1">
                <span>fit for</span>
                <span
                  className="font-[300] not-italic text-[rgb(134,179,179)] text-[40px] min-[420px]:text-[46px] sm:text-[52px] md:text-[56px] lg:text-[54px] xl:text-[62px] 2xl:text-[68px] leading-[0.8] inline-block ml-2.5 sm:ml-3 select-none align-baseline"
                  style={{ fontFamily: "'PrintedMoments', cursive" }}
                >
                  you
                </span>
                <span className="text-[rgb(43,43,43)]">.</span>
              </span>
            </h2>

            {/* Body Paragraph 1 */}
            <p
              id="appointment-body-desktop"
              className="text-[13px] sm:text-[13.5px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[1.8] text-[rgb(43,43,43)] font-[300] mb-5 sm:mb-6"
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
              id="appointment-prompt-desktop"
              className="text-[13px] sm:text-[13.5px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[1.7] text-[rgb(43,43,43)] font-[300] mb-6 sm:mb-8 lg:mb-12 whitespace-normal sm:whitespace-nowrap"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              {appointmentContent.prompt}
            </p>

            {/* Oval CTA Button: BOOK NOW */}
            <div className="pt-4 sm:pt-6 lg:pt-16 xl:pt-20">
              <button
                id="appointment-book-now-btn-desktop"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center w-[98px] h-[35px] sm:w-[106px] sm:h-[37px] rounded-[50%] border border-[rgb(43,43,43)] text-[8.5px] sm:text-[9px] uppercase tracking-[0.18em] font-[400] text-[rgb(43,43,43)] hover:bg-[rgb(43,43,43)] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
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
