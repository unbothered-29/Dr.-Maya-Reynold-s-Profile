'use client';

import React from 'react';
import { specialtiesContent } from '@/data/homepage';

interface SpecialtiesProps {
  onLearnMore?: (specialtyId: string) => void;
}

const formattedSpecialtyLines: Record<string, string[]> = {
  'anxiety-panic': [
    'Support for adults experiencing anxiety, panic, constant',
    'overthinking, and feeling emotionally or physiologically',
    'on edge. Therapy combines practical tools and mindfulness',
    'to restore a sense of calm and control.',
  ],
  trauma: [
    'Support for adults navigating single-incident trauma or',
    'longer-standing patterns connected to childhood,',
    'relationships, or chronic stress, using evidence-based',
    'approaches including EMDR and CBT to help you heal.',
  ],
  'burnout-perfectionism': [
    'Support for entrepreneurs, creatives, and high-achieving',
    'professionals experiencing burnout, perfectionism, and',
    'high internal pressure, helping you rebuild balance and',
    'move toward a more sustainable way of living.',
  ],
};

export const Specialties: React.FC<SpecialtiesProps> = ({ onLearnMore }) => {
  return (
    <div id="specialties" className="relative scroll-mt-10">
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <section
        id="specialties-mobile"
        className="relative w-full py-20 sm:py-24 md:py-28 lg:hidden bg-[#E7DED4] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12">
          <div className="grid grid-cols-1 gap-y-20 items-start">
            {/* Column 1: Section Heading */}
            <div className="w-full min-w-0 pr-0 text-left">
              <h2
                id="specialties-heading-mobile"
                className="font-playfair text-[30px] sm:text-[34px] md:text-[38px] text-[#302A29] font-normal leading-[1.25]"
              >
                <span className="inline-block whitespace-nowrap">
                  <span>Our</span>
                  <span
                    className="font-allura not-italic text-[#5A3E4B] inline-block mx-2 sm:mx-3 md:mx-[12px] select-none align-baseline text-[36px] sm:text-[40px] md:text-[46px]"
                  >
                    specialties
                  </span>
                </span>
                <span className="inline-block font-normal mt-1">
                  include…
                </span>
              </h2>
            </div>

            {/* Columns 2 & 3: 2x2 Grid of Specialties */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 sm:gap-y-18 md:gap-y-24">
                {specialtiesContent.items.map((item) => {
                  const isRightCol = item.id === 'emdr' || item.id === 'special-needs-parenting';
                  return (
                    <div
                      key={item.id}
                      id={`specialty-mobile-${item.id}`}
                      className={`flex flex-col text-left justify-between h-full ${isRightCol ? 'md:pl-3' : ''}`}
                    >
                      <div>
                        <h4
                          id={`specialty-title-mobile-${item.id}`}
                          className="font-playfair text-[22px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#302A29] font-normal tracking-normal not-italic"
                        >
                          {item.title}
                        </h4>

                        <div
                          className="font-montserrat text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#756C67] font-normal not-italic mt-8 sm:mt-10"
                        >
                          {formattedSpecialtyLines[item.id] ? (
                            <>
                              <div className="hidden sm:block">
                                {formattedSpecialtyLines[item.id].map((line, idx) => (
                                  <span key={idx} className="block sm:whitespace-nowrap">
                                    {line}
                                  </span>
                                ))}
                              </div>
                              <p className="block sm:hidden">
                                {item.description}
                              </p>
                            </>
                          ) : (
                            <p>{item.description}</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-16 sm:mt-20 md:mt-24">
                        <button
                          type="button"
                          onClick={() => onLearnMore && onLearnMore(item.id)}
                          className="group inline-flex flex-col items-start bg-transparent border-0 p-0 cursor-pointer select-none text-left focus:outline-none"
                        >
                          <span className="font-montserrat text-[12px] sm:text-[13px] md:text-[13.5px] uppercase tracking-[0.16em] text-[#5A3E4B] font-semibold group-hover:text-[#392831] transition-colors duration-200">
                            LEARN MORE
                          </span>
                          <span className="h-[1.25px] bg-[#5A3E4B] w-full group-hover:w-0 group-hover:opacity-0 transition-all duration-1000 ease-in-out mt-1" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <section
        id="specialties-desktop"
        className="relative hidden lg:block w-full py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-[#F7F5F1] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 gap-x-8 lg:gap-x-12 xl:gap-x-16 items-start">
            {/* Column 1: Section Heading */}
            <div className="w-full min-w-0 lg:min-w-max lg:col-span-4 xl:col-span-3 pr-0 lg:pr-4 xl:pr-6 text-left lg:-ml-4 xl:-ml-8">
              <h2
                id="specialties-heading-desktop"
                className="desktop-section-heading text-[#302A29]"
              >
                <span className="inline-flex items-baseline whitespace-nowrap">
                  <span>Our</span>
                  <span
                    className="font-script-accent not-italic text-[#5A3E4B] text-[58px] xl:text-[64px] leading-[24px] inline-block ml-3 sm:ml-4 md:ml-[18px] select-none align-baseline"
                    style={{ fontFamily: "'Allura', cursive" }}
                  >
                    specialties
                  </span>
                </span>
                <span className="block mt-1 sm:mt-1.5 font-normal">
                  include…
                </span>
              </h2>
            </div>

            {/* Columns 2 & 3: 2x2 Grid of Specialties */}
            <div className="lg:col-span-8 xl:col-span-9 lg:pl-16 xl:pl-24 2xl:pl-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-14 sm:gap-y-18 md:gap-y-24 lg:gap-y-28 xl:gap-y-32">
                {specialtiesContent.items.map((item) => {
                  const isRightCol = item.id === 'emdr' || item.id === 'special-needs-parenting';
                  return (
                    <div
                      key={item.id}
                      id={`specialty-desktop-${item.id}`}
                      className={`flex flex-col text-left justify-between h-full ${isRightCol ? 'md:pl-3 lg:pl-5 xl:pl-8' : ''}`}
                    >
                      <div>
                        <h4
                          id={`specialty-title-desktop-${item.id}`}
                          className="desktop-service-title font-serif text-[#302A29] tracking-normal not-italic"
                          style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            color: 'rgb(43, 43, 43)',
                          }}
                        >
                          {item.title}
                        </h4>

                        <div
                          className="desktop-body-long text-[#302A29] mt-5 sm:mt-6 max-w-[560px]"
                        >
                          <p>{item.description}</p>
                        </div>
                      </div>

                      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
                        <button
                          type="button"
                          onClick={() => onLearnMore && onLearnMore(item.id)}
                          className="group inline-flex flex-col items-start bg-transparent border-0 p-0 cursor-pointer select-none text-left focus:outline-none"
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          <span className="desktop-btn-text desktop-btn-learn-more text-[#302A29] font-medium group-hover:text-[#5A3E4B] transition-colors duration-200">
                            LEARN MORE
                          </span>
                          <span className="h-[1.25px] bg-[#302A29] w-full group-hover:w-0 group-hover:opacity-0 transition-all duration-1000 ease-in-out mt-1.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
