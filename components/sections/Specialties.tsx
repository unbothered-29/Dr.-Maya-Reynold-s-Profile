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
    <section
      id="specialties"
      className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-y-0 gap-x-8 lg:gap-x-12 xl:gap-x-16 items-start">
          {/* Column 1: Section Heading */}
          <div className="w-full min-w-0 lg:min-w-max lg:col-span-4 xl:col-span-3 pr-0 lg:pr-4 xl:pr-6 text-left lg:-ml-4 xl:-ml-8">
            <h2
              id="specialties-heading"
              className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] text-[rgb(43,43,43)] font-[300] leading-[1.25] whitespace-nowrap"
              style={{ fontFamily: "'beaufort-pro', serif" }}
            >
              <span>Our</span>
              <span
                className="font-[300] not-italic text-[rgb(134,179,179)] inline-block mx-2 sm:mx-3 md:mx-[12px] select-none align-baseline"
                style={{ fontFamily: "'PrintedMoments', cursive" }}
              >
                specialties
              </span>
              <span className="inline-block font-[300]">
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
                    id={`specialty-${item.id}`}
                    className={`flex flex-col text-left justify-between h-full ${isRightCol ? 'md:pl-3 lg:pl-5 xl:pl-8' : ''}`}
                  >
                    <div>
                      <h4
                        id={`specialty-title-${item.id}`}
                        className="text-[22px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[rgb(43,43,43)] font-[300] tracking-normal not-italic"
                        style={{
                          fontFamily: "'beaufort-pro', serif",
                          fontWeight: 300,
                          color: 'rgb(43, 43, 43)',
                          fontStyle: 'normal',
                        }}
                      >
                        {item.title}
                      </h4>

                      <div
                        className="text-[16px] sm:text-[18px] xl:text-[19px] leading-[30px] xl:leading-[34px] text-[rgb(43,43,43)] font-[300] not-italic mt-8 sm:mt-10"
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
                        className="group inline-block text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-[0.18em] text-[rgb(43,43,43)] font-[400] border-b border-[rgb(81,81,81)] pb-[2px] hover:text-[rgb(134,179,179)] hover:border-[rgb(134,179,179)] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                        style={{
                          fontFamily: "'Muli', 'Mulish', sans-serif",
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
  );
};
