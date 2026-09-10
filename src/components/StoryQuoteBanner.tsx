import React, { useState } from 'react';

export const StoryQuoteBanner: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/assets/beach-quote.png');

  return (
    <section
      id="story-quote-banner"
      aria-labelledby="story-quote-heading"
      className="relative w-full overflow-hidden bg-[#22211E] min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] flex flex-col justify-end"
    >
      {/* Background Image with Cinematic Focal Point and Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src={imgSrc}
          alt="Two children running freely along the open shoreline at the beach"
          className="w-full h-full object-cover object-[50%_48%]"
          referrerPolicy="no-referrer"
          onError={() => {
            if (imgSrc !== 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png') {
              setImgSrc('https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png');
            }
          }}
        />
        {/* Clean transparent dark overlay matching the reference figure */}
        <div
          className="absolute inset-0 bg-black/40 sm:bg-black/[0.42] transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Content Container aligned with site grid and placement from reference */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-18 md:pb-24 lg:pb-28">
        <div className="max-w-[760px] md:max-w-[820px] lg:max-w-[880px] text-left">
          <h2
            id="story-quote-heading"
            className="font-beaufort text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] xl:text-[51px] leading-[1.26] sm:leading-[1.28] md:leading-[1.31] text-[#f6f4ee] font-[300] tracking-[-0.01em] select-text"
          >
            <span className="block">You deserve a place where your story is heard,</span>
            <span className="block">
              valued, and understood.{' '}
              <em className="font-beaufort italic font-[300] text-[#f6f4ee]">
                Nothing will be too
              </em>
            </span>
            <span className="block">
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
