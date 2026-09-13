import React from 'react';
import Image from 'next/image';

export const OurOfficeSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F1] py-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
      
      {/* Tablet & Desktop Layout (md and up) */}
      <div className="hidden md:flex w-full max-w-[1600px] mx-auto items-center pl-8 md:pl-10 lg:pl-[10.5vw] pr-8 md:pr-10 lg:pr-[10.5vw]">
        {/* Images Column */}
        <div className="w-[48%] lg:w-[58%] flex-shrink-0 mr-8 md:mr-10 lg:mr-[85px] relative flex flex-col justify-start">
          <div className="w-full flex flex-col">
            {/* Large Image (Image 1) */}
            <div className="relative w-[85%] lg:w-[80%] aspect-video z-10">
              <Image
                src="/images/office-1.jpg"
                alt="Main Office Interior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Smaller Image (Image 2) */}
            <div className="relative w-[75%] lg:w-[65%] aspect-[4/3] self-end z-20 -mt-6 lg:-mt-8 shadow-xl shadow-black/5">
              <Image
                src="/images/office-2.jpg"
                alt="Secondary Office Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
          
        {/* Text Column */}
        <div className="flex-1 flex flex-col justify-center -ml-2 lg:-ml-5 xl:-ml-6">
          <span className="desktop-eyebrow text-[#5A3E4B] mb-3 lg:mb-4 block">
            THE OFFICE
          </span>
          <h2 className="desktop-section-heading text-[#302A29] mb-5 lg:mb-6 leading-tight">
            Our Office
          </h2>
          <p className="font-montserrat text-[15px] lg:text-[16px] leading-[1.8] text-[#756C67] font-normal mb-6 lg:mb-8 lg:max-w-[560px] xl:max-w-[600px]">
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
          </p>
          
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="w-12 h-[2px] bg-[#5A3E4B] opacity-80" />
            <div className="desktop-supporting-text text-[#302A29]">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            
            <p className="desktop-supporting-text text-[#756C67]">In-person therapy in Santa Monica.</p>
          </div>
        </div>
      </div>

      {/* Mobile Layout (below md) */}
      <div className="md:hidden flex flex-col gap-8 px-6 sm:px-10">
        <div className="text-left">
          <span className="text-sm font-sans tracking-[0.2em] uppercase text-[#5A3E4B] mb-3 block">
            THE OFFICE
          </span>
          <h2 className="font-serif text-[44px] sm:text-[48px] text-[#302A29] mb-4 leading-tight">
            Our Office
          </h2>
          <p className="font-montserrat text-[15px] sm:text-[16px] leading-[1.8] text-[#756C67] font-normal">
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
          </p>
        </div>
        
        <div className="w-full">
          <Image
            src="/images/office-1.jpg"
            alt="Main Office Interior"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="w-10 h-[2px] bg-[#5A3E4B] opacity-80" />
          <div className="font-sans text-[#302A29] text-[15px] leading-[1.8]">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/images/office-2.jpg"
            alt="Secondary Office Detail"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="font-sans text-[#756C67] text-[14px] leading-[1.6]">
          <p>In-person therapy in Santa Monica.</p>
        </div>
      </div>
    </section>
  );
};
