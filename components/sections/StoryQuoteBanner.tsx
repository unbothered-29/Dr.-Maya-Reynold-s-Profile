'use client';

import React, { useState } from 'react';

export const StoryQuoteBanner: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/assets/beach-quote.png');

  return (
    <section className="w-full bg-[#F7F5F1] lg:bg-transparent pb-0">
      
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <div
        id="story-quote-banner-mobile"
        aria-labelledby="story-quote-heading-mobile"
        className="relative lg:hidden w-full min-h-[70vh] overflow-hidden bg-[#3B2932] pt-36 pb-24 px-6 sm:px-8 md:pt-44 md:pb-32 md:px-8 flex flex-col justify-center items-start md:items-center text-left md:text-center"
      >
        {/* Background Image with Cinematic Focal Point and Aubergine Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={imgSrc}
            alt="Two children running freely along the open shoreline at the beach"
            className="w-full h-full object-cover object-[50%_50%]"
            referrerPolicy="no-referrer"
            onError={() => {
              if (imgSrc !== 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png') {
                setImgSrc('https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png');
              }
            }}
          />
          {/* Dark aubergine overlay ensuring brand warmth and contrast */}
          <div
            className="absolute inset-0 transition-opacity duration-300 bg-[#3B2932]/65"
            aria-hidden="true"
          />
        </div>

        {/* Content Container: Centered max-w-3xl mx-auto */}
        <div className="relative z-10 w-full max-w-3xl mx-auto text-left md:text-center flex flex-col items-start md:items-center">
          <h2
            id="story-quote-heading-mobile"
            className="font-serif-heading text-[32px] min-[390px]:text-[36px] sm:text-[44px] md:text-5xl lg:text-6xl font-normal leading-[1.25] tracking-tight text-[#F7F5F1] select-text"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="block whitespace-nowrap">You deserve a place</span>
            <span className="block whitespace-nowrap">where your story is</span>
            <span className="block whitespace-nowrap">heard, valued, and</span>
            <span className="block whitespace-nowrap">
              understood.{' '}
              <em className="italic font-normal text-[#F7F5F1]">Nothing will</em>
            </span>
            <em className="block whitespace-nowrap italic font-normal text-[#F7F5F1]">
              be too heavy for us to
            </em>
            <em className="block whitespace-nowrap italic font-normal text-[#F7F5F1]">
              carry together.
            </em>
          </h2>

          {/* Subtle Dusty Rose accent divider line matching design guide "OUR APPROACH" element */}
          <div className="w-12 h-[2px] bg-[#B98D8D] mt-8 md:mt-10" />
        </div>
      </div>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <div
        id="story-quote-banner-desktop"
        aria-labelledby="story-quote-heading-desktop"
        className="relative hidden lg:flex w-full overflow-hidden bg-[#22211E] lg:min-h-[580px] xl:min-h-[620px] flex-col justify-end"
      >
        {/* Background Image with Cinematic Focal Point and Overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <img
            src={imgSrc}
            alt="Two children running freely along the open shoreline at the beach"
            className="w-full h-full object-cover object-[50%_50%]"
            referrerPolicy="no-referrer"
            onError={() => {
              if (imgSrc !== 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png') {
                setImgSrc('https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png');
              }
            }}
          />
          {/* Dark overlay slightly reduced for improved luminosity */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.44)' }}
            aria-hidden="true"
          />
        </div>

        {/* Content Container aligned with site grid and minimal left margin matching the reference figure */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto lg:px-12 xl:px-16 lg:pt-40 lg:pb-16">
          <div className="max-w-[1100px] text-left">
            <h2
              id="story-quote-heading-desktop"
              className="font-beaufort lg:text-[32px] xl:text-[38px] 2xl:text-[42px] md:leading-[1.31] text-[#f6f4ee] font-[300] tracking-[-0.01em] select-text"
            >
              <span className="block md:whitespace-nowrap">You deserve a place where your story is heard,</span>
              <span className="block md:whitespace-nowrap">
                valued, and understood.{' '}
                <em className="font-beaufort italic font-[300] text-[#f6f4ee]">
                  Nothing will be too
                </em>
              </span>
              <span className="block md:whitespace-nowrap">
                <em className="font-beaufort italic font-[300] text-[#f6f4ee]">
                  heavy for us to carry together.
                </em>
              </span>
            </h2>
          </div>
        </div>
      </div>

    </section>
  );
};
