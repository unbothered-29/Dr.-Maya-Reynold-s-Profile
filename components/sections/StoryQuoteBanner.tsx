'use client';

import React, { useState } from 'react';

export const StoryQuoteBanner: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/assets/beach-quote.png');

  return (
    <section
      id="story-quote-banner"
      aria-labelledby="story-quote-heading"
      className="relative w-full overflow-hidden bg-[#22211E] min-h-[66vh] md:min-h-[66vh] lg:min-h-[580px] xl:min-h-[620px] flex flex-col justify-end"
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
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-12 md:pb-14 lg:pb-16">
        <div className="max-w-[1100px] text-left">
          <h2
            id="story-quote-heading"
            className="font-beaufort text-[24px] sm:text-[30px] md:text-[36px] lg:text-[43px] xl:text-[49px] 2xl:text-[51px] leading-[1.3] md:leading-[1.31] text-[#f6f4ee] font-[300] tracking-[-0.01em] select-text"
          >
            <span className="block whitespace-normal md:whitespace-nowrap">You deserve a place where your story is heard,</span>
            <span className="block whitespace-normal md:whitespace-nowrap">
              valued, and understood.{' '}
              <em className="font-beaufort italic font-[300] text-[#f6f4ee]">
                Nothing will be too
              </em>
            </span>
            <span className="block whitespace-normal md:whitespace-nowrap">
              <em className="font-beaufort italic font-[300] text-[#f6f4ee]">
                heavy for us to carry together.
              </em>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
