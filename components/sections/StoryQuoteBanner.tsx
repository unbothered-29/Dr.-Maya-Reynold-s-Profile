'use client';

import React, { useState } from 'react';

export const StoryQuoteBanner: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/assets/beach-quote.png');

  return (
    <section className="w-full bg-[#FFFFFF] pb-0">
      <div
        id="story-quote-banner"
        aria-labelledby="story-quote-heading"
        className="relative w-full min-h-[70vh] overflow-hidden bg-[#2B2B2B] pt-36 pb-24 px-6 sm:px-8 md:pt-44 md:pb-32 md:px-8 flex flex-col justify-center items-start md:items-center text-left md:text-center"
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
        {/* Dark overlay ensuring high contrast */}
        <div
          className="absolute inset-0 transition-opacity duration-300 bg-black/40"
          aria-hidden="true"
        />
      </div>

      {/* Content Container: Centered max-w-3xl mx-auto */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-left md:text-center">
        <h2
          id="story-quote-heading"
          className="font-serif-editorial text-[32px] min-[390px]:text-[36px] sm:text-[44px] md:text-5xl lg:text-6xl font-light leading-[1.25] tracking-tight text-[#F6F4F0] select-text"
          style={{ fontFamily: "'beaufort-pro', 'Cormorant Infant', Georgia, serif" }}
        >
          <span className="block whitespace-nowrap">You deserve a place</span>
          <span className="block whitespace-nowrap">where your story is</span>
          <span className="block whitespace-nowrap">heard, valued, and</span>
          <span className="block whitespace-nowrap">
            understood.{' '}
            <em className="italic font-light text-[#F6F4F0]">Nothing will</em>
          </span>
          <em className="block whitespace-nowrap italic font-light text-[#F6F4F0]">
            be too heavy for us to
          </em>
          <em className="block whitespace-nowrap italic font-light text-[#F6F4F0]">
            carry together.
          </em>
        </h2>
      </div>
      </div>
    </section>
  );
};
