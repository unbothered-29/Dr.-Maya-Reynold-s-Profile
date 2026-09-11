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
          <div className="hidden lg:flex w-[120px] xl:w-[160px] 2xl:w-[200px] shrink-0 items-end pb-6 xl:pb-10">
            <div className="w-full h-[380px] xl:h-[440px] 2xl:h-[480px] overflow-hidden">
              <img
                id="appointment-left-image"
                src={siteImages.appointmentLeftSand || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg'}
                alt="A person picking up seashells on a sandy beach"
                className="w-full h-full object-cover object-right hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Center Column: Text & Booking Call to Action */}
          <div className="w-full flex-1 max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px] flex flex-col justify-center text-left py-4 sm:py-6 lg:py-8 px-6 sm:px-10 md:px-12 lg:px-6 xl:px-12">
            {/* Eyebrow Label */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <span
                id="appointment-eyebrow"
                className="inline-block text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] font-[400] text-[rgb(43,43,43)]"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.eyebrow}
              </span>
            </div>

            {/* Editorial Heading: Find a therapist who is the right fit for you. */}
            <h2
              id="appointment-heading"
              className="text-[21px] min-[420px]:text-[24px] sm:text-[28px] md:text-[31px] lg:text-[32px] xl:text-[37px] 2xl:text-[40px] text-[rgb(43,43,43)] font-[300] leading-[1.25] mb-6 sm:mb-8"
              style={{ fontFamily: "'beaufort-pro', serif" }}
            >
              <span className="block whitespace-nowrap">Find a therapist who is the right</span>
              <span className="inline-flex items-baseline whitespace-nowrap mt-1">
                <span>fit for</span>
                <span
                  className="font-[300] not-italic text-[rgb(134,179,179)] text-[34px] sm:text-[39px] md:text-[43px] lg:text-[45px] xl:text-[48px] leading-[0.8] inline-block ml-2.5 sm:ml-3 select-none align-baseline"
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
              className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.8] text-[rgb(43,43,43)] font-[300] mb-5 sm:mb-6"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              {appointmentContent.paragraph1}
            </p>

            {/* Body Prompt Paragraph 2 */}
            <p
              id="appointment-prompt"
              className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.7] text-[rgb(43,43,43)] font-[300] mb-8 sm:mb-10 lg:mb-12"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              {appointmentContent.prompt}
            </p>

            {/* Oval CTA Button: BOOK NOW */}
            <div>
              <button
                id="appointment-book-now-btn"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center w-[116px] h-[42px] sm:w-[124px] sm:h-[44px] rounded-[50%] border border-[rgb(43,43,43)] text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] font-[400] text-[rgb(43,43,43)] hover:bg-[rgb(43,43,43)] hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                {appointmentContent.ctaText}
              </button>
            </div>
          </div>

          {/* Right Image: Adult with Apple Watch pointing at seashells with child */}
          <div className="w-full lg:w-[31%] xl:w-[33%] 2xl:w-[35%] shrink-0 flex items-center justify-end px-4 sm:px-6 lg:px-0">
            <div className="w-full max-w-[460px] lg:max-w-none h-[400px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[560px] 2xl:h-[600px] overflow-hidden">
              <img
                id="appointment-right-image"
                src={siteImages.appointmentRightPointing || 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg'}
                alt="Adult pointing at seashells in the sand with child on the beach"
                className="w-full h-full object-cover object-[32%_center] hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
