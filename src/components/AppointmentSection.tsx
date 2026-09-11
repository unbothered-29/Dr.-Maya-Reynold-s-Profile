import React from 'react';
import { appointmentContent, siteImages } from '../data/homepage';

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
          
          {/* Left Vertical Image (Hand in sand with seashells) - cropped from left edge */}
          <div className="hidden lg:flex w-[110px] xl:w-[150px] 2xl:w-[185px] shrink-0 items-end pb-6 xl:pb-10">
            <div className="w-full h-[340px] xl:h-[395px] 2xl:h-[435px] overflow-hidden">
              <img
                id="appointment-left-image"
                src={siteImages.appointmentLeftSand || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg'}
                alt="A person picking up seashells on a sandy beach"
                className="w-full h-full object-cover object-[48%_bottom] opacity-[0.68] contrast-[0.94] brightness-[1.03] hover:opacity-[0.85] transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center Column: Text & Booking Call to Action */}
          <div className="w-full flex-1 max-w-[720px] xl:max-w-[800px] 2xl:max-w-[860px] lg:ml-9 xl:ml-16 2xl:ml-24 flex flex-col justify-center text-left py-4 sm:py-6 lg:py-8 pl-6 sm:pl-10 md:pl-12 lg:pl-2 xl:pl-4 pr-6 sm:pr-8 lg:pr-2">
            {/* Eyebrow Label */}
            <div className="-mt-8 sm:-mt-12 lg:-mt-16 xl:-mt-20 mb-10 sm:mb-14 lg:mb-16 xl:mb-20">
              <span
                id="appointment-eyebrow"
                className="inline-block text-[10.5px] sm:text-[11px] lg:text-[11.5px] uppercase tracking-[0.2em] font-[400] text-[rgb(43,43,43)]"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.eyebrow}
              </span>
            </div>

            {/* Editorial Heading: Find a therapist who is the right fit for you. */}
            <h2
              id="appointment-heading"
              className="text-[26px] min-[420px]:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[36px] xl:text-[42px] 2xl:text-[46px] text-[rgb(43,43,43)] font-[300] leading-[1.25] mb-10 sm:mb-12 lg:mb-14 xl:mb-16"
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
              id="appointment-body"
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
              id="appointment-prompt"
              className="text-[13px] sm:text-[13.5px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] leading-[1.7] text-[rgb(43,43,43)] font-[300] mb-8 sm:mb-10 lg:mb-12 whitespace-normal sm:whitespace-nowrap"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              {appointmentContent.prompt}
            </p>

            {/* Oval CTA Button: BOOK NOW */}
            <div className="pt-8 sm:pt-12 lg:pt-16 xl:pt-20">
              <button
                id="appointment-book-now-btn"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center w-[98px] h-[35px] sm:w-[106px] sm:h-[37px] rounded-[50%] border border-[rgb(43,43,43)] text-[8.5px] sm:text-[9px] uppercase tracking-[0.18em] font-[400] text-[rgb(43,43,43)] hover:bg-[rgb(43,43,43)] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.ctaText}
              </button>
            </div>
          </div>

          {/* Right Image: Adult with Apple Watch pointing at seashells with child */}
          <div className="w-full lg:w-[32%] xl:w-[33%] 2xl:w-[34%] shrink-0 flex items-center justify-end px-4 sm:px-6 lg:px-0">
            <div className="w-full max-w-[480px] sm:max-w-[530px] lg:max-w-none h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] xl:h-[530px] 2xl:h-[560px] overflow-hidden">
              <img
                id="appointment-right-image"
                src={siteImages.appointmentRightPointing || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg'}
                alt="Adult pointing at seashells in the sand with child on the beach"
                className="w-full h-full object-cover object-[62%_center] hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
