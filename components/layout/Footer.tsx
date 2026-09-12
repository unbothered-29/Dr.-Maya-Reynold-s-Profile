'use client';

import React from 'react';
import {
  footerNavigateLinks,
  siteImages,
  teamMembers,
} from '@/data/homepage';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW ELEMENTS (< 1024px)         */}
      {/* ========================================= */}
      <footer
        id="main-footer-mobile"
        className="w-full bg-[#F7F5F1] text-[#302B2A] lg:hidden"
      >
        {/* Main Footer Container */}
        <div className="w-full mx-auto px-6 sm:px-10 md:px-12 pt-24 sm:pt-28 pb-24 sm:pb-28">
          <div className="mx-auto w-fit max-w-full flex flex-col justify-center items-center gap-9 sm:gap-11">
            
            {/* Part 1: Conejo Valley Brand & Narrative Unit */}
            <div className="w-auto max-w-[480px] flex-shrink-0 text-left">
              <a href="#" className="inline-block select-none group focus:outline-none">
                <img
                  src={siteImages.logoTrimmed || siteImages.logo}
                  alt="Conejo Valley Family Counseling"
                  className="w-[260px] min-[420px]:w-[280px] sm:w-[310px] h-auto object-contain block transition-opacity group-hover:opacity-85"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
                  }}
                />
              </a>
              <p
                className="font-montserrat text-[15px] sm:text-[16px] leading-[30px] sm:leading-[32px] text-[#756D68] font-normal mt-4 sm:mt-5"
              >
                <span className="block lg:inline">We want to make getting started simple. </span>
                <span className="block lg:inline">You&apos;re welcome to come into our office in </span>
                <span className="block lg:inline">Newbury Park or schedule virtual </span>
                <span className="block lg:inline">appointments from anywhere in CA&mdash;</span>
                <span className="block lg:inline">whatever works best for you.</span>
              </p>
            </div>

            {/* Part 2: Navigation Unit (Navigate, Our Team, Contact) */}
            <div className="w-auto grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-7 text-left pl-0">
              
              {/* Column 1: NAVIGATE */}
              <div className="sm:pl-2 md:pl-3 order-1">
                <h4
                  className="font-montserrat text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-semibold text-[#302B2A] mb-[14px] sm:mb-[16px]"
                >
                  NAVIGATE
                </h4>
                <ul className="list-none p-0 m-0 space-y-1 sm:space-y-1.5">
                  {footerNavigateLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                        className="font-montserrat text-[14px] sm:text-[15px] text-[#756D68] hover:text-[#593D4B] font-normal transition-colors inline-block leading-[22px] sm:leading-[24px]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: CONTACT (moved to 3rd on desktop normally, but keeping as is for mobile) */}
              <div id="contact" className="order-2">
                <h4
                  className="font-montserrat text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-semibold text-[#302B2A] mb-[14px] sm:mb-[16px]"
                >
                  CONTACT
                </h4>
                <div
                  className="font-montserrat text-[14px] sm:text-[15px] text-[#756D68] font-normal space-y-1 sm:space-y-1.5"
                >
                  <div className="leading-[19px] sm:leading-[20px]">925 Broadbeck Dr</div>
                  <div className="leading-[19px] sm:leading-[20px]">Suites 200 and 225</div>
                  <div className="leading-[19px] sm:leading-[20px]">Newbury Park, CA 91320</div>
                  <div className="leading-[19px] sm:leading-[20px]">
                    <a
                      href="mailto:info@conejovalleycounseling.com"
                      className="hover:text-[#593D4B] transition-colors block leading-[19px] sm:leading-[20px]"
                    >
                      info@conejovalleycounseling.com
                    </a>
                  </div>
                  <div className="leading-[19px] sm:leading-[20px]">
                    <a
                      href="tel:8052423120"
                      className="hover:text-[#593D4B] transition-colors block leading-[19px] sm:leading-[20px]"
                    >
                      805.242.3120
                    </a>
                  </div>

                  {/* Mobile View */}
                  <div className="mt-[18px] sm:mt-[20px] mb-1 leading-[23px] sm:leading-[25px]">
                    Serving Thousand Oaks, Westlake
                    Village, Camarillo, Moorpark, &amp; Simi
                    Valley
                  </div>
                </div>
              </div>

              {/* Column 3: OUR TEAM */}
              <div id="team" className="order-3">
                <h4
                  className="font-montserrat text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-semibold text-[#302B2A] mb-[14px] sm:mb-[16px]"
                >
                  OUR TEAM
                </h4>
                <ul className="list-none p-0 m-0 space-y-1 sm:space-y-1.5">
                  {teamMembers.map((member) => (
                    <li
                      key={member}
                      className="font-montserrat text-[14px] sm:text-[15px] text-[#756D68] font-normal leading-[22px] sm:leading-[24px]"
                    >
                      <a href="#team" className="hover:text-[#593D4B] transition-colors">
                        {member}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Sub-Footer: Aubergine Bottom Bar with Legal & Attribution */}
        <div className="w-full bg-[#3B2932] py-3 px-6 sm:px-10 md:px-12">
          <div className="max-w-[1600px] mx-auto text-left">
            <p
              className="font-montserrat text-[#F7F5F1] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] font-light tracking-wide"
            >
              <a href="#terms" className="hover:underline">Terms</a><span className="mx-2 text-[#B98D8D]">|</span><a href="#privacy" className="hover:underline">Privacy Policy</a><span className="mx-2 text-[#B98D8D]">|</span><a href="#disclaimer" className="hover:underline">Disclaimer</a><span className="mx-2 text-[#B98D8D]">|</span><a
                href="https://walkerstrategyco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#D8C8C8] transition-colors"
              >Website by Walker Strategy Co.</a>
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <footer
        id="main-footer-desktop"
        className="w-full bg-white text-[rgb(43,43,43)] hidden lg:block"
      >
        {/* Main Footer Container */}
        <div className="w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-[145px] xl:pb-[155px]">
          <div className="mx-auto w-fit max-w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 sm:gap-14 lg:gap-20 xl:gap-28 2xl:gap-32">
            
            {/* Part 1: Conejo Valley Brand & Narrative Unit */}
            <div className="w-auto max-w-[480px] xl:max-w-[500px] flex-shrink-0 text-left">
              <a href="#" className="inline-block select-none group focus:outline-none">
                <img
                  src={siteImages.logoTrimmed || siteImages.logo}
                  alt="Conejo Valley Family Counseling"
                  className="w-[260px] min-[420px]:w-[280px] sm:w-[310px] lg:w-[325px] xl:w-[335px] h-auto object-contain block transition-opacity group-hover:opacity-85"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
                  }}
                />
              </a>
              <p
                className="font-sans-clean text-[14.5px] sm:text-[15px] leading-[29px] sm:leading-[30px] text-[rgb(43,43,43)] font-[300] mt-3.5 sm:mt-4"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                <span className="block sm:whitespace-nowrap">We want to make getting started simple. You&apos;re welcome to</span>
                <span className="block sm:whitespace-nowrap">come into our office in Newbury Park or schedule virtual</span>
                <span className="block sm:whitespace-nowrap">appointments from anywhere in CA&mdash;whatever works best for</span>
                <span className="block">you.</span>
              </p>
            </div>

            {/* Part 2: Navigation Unit (Navigate, Our Team, Contact) */}
            <div className="w-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-4 xl:gap-5 text-left lg:-mt-2.5">
              
              {/* Column 1: NAVIGATE */}
              <div className="sm:pl-3.5 md:pl-4 lg:pl-5">
                <h4
                  className="font-sans-clean text-[12px] sm:text-[12.5px] uppercase tracking-[0.2em] font-normal text-[rgb(43,43,43)] mb-[14px] sm:mb-[16px]"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  NAVIGATE
                </h4>
                <ul className="list-none p-0 m-0">
                  {footerNavigateLinks.map((link) => (
                    <li key={link.label} className="leading-[19px] sm:leading-[20px]">
                      <a
                        href={link.href}
                        onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                        className="font-sans-clean text-[13px] sm:text-[13.5px] text-[rgb(43,43,43)] hover:text-[#6E9FA0] font-[300] transition-colors inline-block leading-[19px] sm:leading-[20px]"
                        style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: OUR TEAM */}
              <div id="team">
                <h4
                  className="font-sans-clean text-[12px] sm:text-[12.5px] uppercase tracking-[0.2em] font-normal text-[rgb(43,43,43)] mb-[14px] sm:mb-[16px]"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  OUR TEAM
                </h4>
                <ul className="list-none p-0 m-0">
                  {teamMembers.map((member) => (
                    <li
                      key={member}
                      className="font-sans-clean text-[13px] sm:text-[13.5px] text-[rgb(43,43,43)] font-[300] leading-[19px] sm:leading-[20px]"
                      style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                    >
                      <a href="#team" className="hover:text-[#6E9FA0] transition-colors">
                        {member}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: CONTACT */}
              <div id="contact">
                <h4
                  className="font-sans-clean text-[12px] sm:text-[12.5px] uppercase tracking-[0.2em] font-normal text-[rgb(43,43,43)] mb-[14px] sm:mb-[16px]"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  CONTACT
                </h4>
                <div
                  className="font-sans-clean text-[13px] sm:text-[13.5px] text-[rgb(43,43,43)] font-[300]"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  <div className="leading-[19px] sm:leading-[20px]">925 Broadbeck Dr</div>
                  <div className="leading-[19px] sm:leading-[20px]">Suites 200 and 225</div>
                  <div className="leading-[19px] sm:leading-[20px]">Newbury Park, CA 91320</div>
                  <div className="leading-[19px] sm:leading-[20px]">
                    <a
                      href="mailto:info@conejovalleycounseling.com"
                      className="hover:text-[#6E9FA0] transition-colors block leading-[19px] sm:leading-[20px]"
                    >
                      info@conejovalleycounseling.com
                    </a>
                  </div>
                  <div className="leading-[19px] sm:leading-[20px]">
                    <a
                      href="tel:8052423120"
                      className="hover:text-[#6E9FA0] transition-colors block leading-[19px] sm:leading-[20px]"
                    >
                      805.242.3120
                    </a>
                  </div>

                  <div className="mt-[18px] sm:mt-[20px]">
                    <div className="leading-[19px] sm:leading-[20px] whitespace-normal sm:whitespace-nowrap">Serving Thousand Oaks, Westlake Village,</div>
                    <div className="leading-[19px] sm:leading-[20px] whitespace-normal sm:whitespace-nowrap">Camarillo, Moorpark, &amp; Simi Valley</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Sub-Footer: Teal Bottom Bar with Legal & Attribution */}
        <div className="w-full bg-[#86B3B3] py-2.5 sm:py-3 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1600px] mx-auto text-left">
            <p
              className="text-white text-[13px] sm:text-[15px] leading-[22px] sm:leading-[27px] font-[300] tracking-normal"
              style={{
                fontFamily: "'Muli', 'Mulish', sans-serif",
                fontWeight: 300,
                fontStyle: 'normal',
              }}
            >
              <a href="#terms" className="hover:underline">Terms</a><span className="mx-[3.5px] opacity-80">|</span><a href="#privacy" className="hover:underline">Privacy Policy</a><span className="mx-[3.5px] opacity-80">|</span><a href="#disclaimer" className="hover:underline">Disclaimer</a><span className="mx-[3.5px] opacity-80">|</span><a
                href="https://walkerstrategyco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >Website by Walker Strategy Co.</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
