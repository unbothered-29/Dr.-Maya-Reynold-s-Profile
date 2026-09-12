'use client';

import React from 'react';
import { specialtiesContent } from '@/data/homepage';

interface SpecialtiesProps {
  onLearnMore?: (specialtyId: string) => void;
}

const formattedSpecialtyLines: Record<string, string[]> = {
  trauma: [
    'We don’t always know when and how we’ve experienced',
    'trauma. In therapy, we’ll work together to help you process',
    'your past, understand what’s causing you to stay “stuck,” and',
    'regain a sense of safety, control, and hope. You don’t have to',
    'carry your burdens alone.',
  ],
  emdr: [
    'Eye Movement Desensitization and Reprocessing (EMDR) is a',
    'powerful therapeutic technique that helps process and heal',
    'trauma by reworking how painful memories are stored in your',
    'brain. This allows you to find relief and move toward lasting',
    'healing.',
  ],
  dissociation: [
    'The feeling of losing time, hearing conflicting voices, or',
    'questioning your sense of self can be overwhelming. In',
    'therapy, we’ll help you understand these experiences,',
    'recognize your own triggers, and create a sense of balance',
    'and identity so that you can feel more grounded.',
  ],
  'special-needs-parenting': [
    'Parenting a child with special needs presents unique',
    'challenges and complex emotions. We provide compassionate',
    'support through lived experience and expertise to help you',
    'navigate this journey with tools, understanding, and self-care.',
  ],
};

export const Specialties: React.FC<SpecialtiesProps> = ({ onLearnMore }) => {
  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <section
        id="specialties-mobile"
        className="relative w-full py-20 sm:py-24 md:py-28 lg:hidden bg-[#E8E1D9] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12">
          <div className="grid grid-cols-1 gap-y-20 items-start">
            {/* Column 1: Section Heading */}
            <div className="w-full min-w-0 pr-0 text-left">
              <h2
                id="specialties-heading-mobile"
                className="font-playfair text-[30px] sm:text-[34px] md:text-[38px] text-[#302B2A] font-normal leading-[1.25]"
              >
                <span className="inline-block whitespace-nowrap">
                  <span>Our</span>
                  <span
                    className="font-allura not-italic text-[#593D4B] inline-block mx-2 sm:mx-3 md:mx-[12px] select-none align-baseline text-[36px] sm:text-[40px] md:text-[46px]"
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
                          className="font-playfair text-[22px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#302B2A] font-normal tracking-normal not-italic"
                        >
                          {item.title}
                        </h4>

                        <div
                          className="font-montserrat text-[15px] sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#756D68] font-normal not-italic mt-8 sm:mt-10"
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
                          className="group inline-block font-montserrat text-[12px] sm:text-[13px] md:text-[13.5px] uppercase tracking-[0.16em] text-[#593D4B] font-semibold border-b border-[#593D4B] pb-[2px] hover:text-[#3B2932] hover:border-[#3B2932] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                        >
                          LEARN MORE
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
        className="relative hidden lg:block w-full py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-white overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 gap-x-8 lg:gap-x-12 xl:gap-x-16 items-start">
            {/* Column 1: Section Heading */}
            <div className="w-full min-w-0 lg:min-w-max lg:col-span-4 xl:col-span-3 pr-0 lg:pr-4 xl:pr-6 text-left lg:-ml-4 xl:-ml-8">
              <h2
                id="specialties-heading-desktop"
                className="text-[24px] sm:text-[27px] md:text-[30px] lg:text-[32px] text-[rgb(43,43,43)] font-[300] leading-[1.25]"
                style={{ fontFamily: "'beaufort-pro', serif" }}
              >
                <span className="inline-flex items-baseline whitespace-nowrap">
                  <span>Our</span>
                  <span
                    className="font-[300] not-italic text-[rgb(134,179,179)] text-[28px] sm:text-[31px] md:text-[34px] lg:text-[36px] leading-[24px] inline-block ml-3 sm:ml-4 md:ml-[18px] select-none align-baseline"
                    style={{ fontFamily: "'PrintedMoments', cursive" }}
                  >
                    specialties
                  </span>
                </span>
                <span className="block mt-1 sm:mt-1.5 font-[300]">
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
                          className="text-[25px] leading-[35px] text-[rgb(43,43,43)] font-[300] tracking-normal not-italic"
                          style={{
                            fontFamily: "'beaufort-pro', serif",
                            fontSize: '25px',
                            lineHeight: '35px',
                            fontWeight: 300,
                            color: 'rgb(43, 43, 43)',
                            fontStyle: 'normal',
                          }}
                        >
                          {item.title}
                        </h4>

                        <div
                          className="text-[14px] xl:text-[14.5px] leading-[25px] xl:leading-[26px] text-[rgb(43,43,43)] font-[300] not-italic mt-5 sm:mt-6"
                          style={{
                            fontFamily: "'Muli', 'Mulish', sans-serif",
                            fontWeight: 300,
                            color: 'rgb(43, 43, 43)',
                            fontStyle: 'normal',
                          }}
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

                      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
                        <button
                          type="button"
                          onClick={() => onLearnMore && onLearnMore(item.id)}
                          className="group inline-block text-[9.5px] uppercase tracking-[0.18em] text-[rgb(43,43,43)] font-[400] border-b border-[rgb(81,81,81)] pb-[2px] hover:text-[rgb(134,179,179)] hover:border-[rgb(134,179,179)] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                          style={{
                            fontFamily: "'Muli', 'Mulish', sans-serif",
                            fontSize: '9.5px',
                            lineHeight: 'normal',
                            fontWeight: 400,
                            color: 'rgb(43, 43, 43)',
                            fontStyle: 'normal',
                          }}
                        >
                          LEARN MORE
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
    </>
  );
};
