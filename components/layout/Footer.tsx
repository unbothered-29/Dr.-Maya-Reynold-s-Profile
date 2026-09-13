'use client';

import React from 'react';
import {
  footerNavigateLinks,
  contactInfo,
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
        className="w-full bg-[#392831] text-[#F7F5F1] lg:hidden"
      >
        {/* Main Footer Container */}
        <div className="w-full mx-auto pl-16 sm:pl-20 md:pl-24 pr-6 sm:pr-8 md:pr-10 pt-24 sm:pt-28 pb-24 sm:pb-28">
          <div className="w-full max-w-[540px] flex flex-col justify-start items-start gap-9 sm:gap-11 text-left">
            
            {/* Part 1: Narrative Unit */}
            <div className="w-auto max-w-[480px] flex-shrink-0 text-left">
              <h2 className="font-serif text-[28px] sm:text-[32px] text-[#F7F5F1] mb-2">
                Dr. Maya Reynolds, PsyD
              </h2>
              <p className="font-sans text-[16px] sm:text-[18px] text-[#D9C9C9] font-light mb-6">
                Licensed Clinical Psychologist
              </p>
              <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#F7F5F1] font-normal">
                <span className="block mb-4">Therapy for adults in Santa Monica, California.</span>
                <span className="block">In-person therapy and secure telehealth throughout California.</span>
              </p>
            </div>

            {/* Part 2: Navigation Unit */}
            <div className="w-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-7 text-left pl-0 w-full mt-4">
              
              {/* Column 1: NAVIGATE */}
              <div className="order-1">
                <h4 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-semibold text-[#B88B89] mb-[14px] sm:mb-[16px]">
                  NAVIGATE
                </h4>
                <ul className="list-none p-0 m-0 space-y-2">
                  {footerNavigateLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                        className="font-sans text-[15px] sm:text-[16px] text-[#F7F5F1] hover:text-[#B88B89] font-normal transition-colors inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: CONTACT */}
              <div id="contact" className="order-2">
                <h4 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-semibold text-[#B88B89] mb-[14px] sm:mb-[16px]">
                  CONTACT
                </h4>
                <div className="font-sans text-[15px] sm:text-[16px] text-[#F7F5F1] font-normal space-y-1">
                  {contactInfo.addressLines.map((line, idx) => (
                    <div key={idx} className="leading-[1.8]">{line}</div>
                  ))}
                </div>
              </div>

              {/* Column 3: PRACTICE */}
              <div id="practice" className="order-3">
                <h4 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-[0.18em] font-semibold text-[#B88B89] mb-[14px] sm:mb-[16px]">
                  PRACTICE
                </h4>
                <ul className="list-none p-0 m-0 space-y-1">
                  <li className="font-sans text-[15px] sm:text-[16px] text-[#F7F5F1] font-normal leading-[1.8]">
                    In-person therapy in Santa Monica
                  </li>
                  <li className="font-sans text-[15px] sm:text-[16px] text-[#F7F5F1] font-normal leading-[1.8]">
                    Secure telehealth throughout California
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="w-full bg-[#392831] border-t border-[#F7F5F1]/10 py-4 pl-16 sm:pl-20 md:pl-24 pr-6 sm:pr-8 md:pr-10">
          <div className="max-w-[1600px] mx-auto text-left">
            <p className="font-sans text-[#D9C9C9] text-[13px] sm:text-[14px] font-light tracking-wide">
              <a href="#terms" className="hover:underline">Terms</a><span className="mx-3 text-[#B88B89]">|</span>
              <a href="#privacy" className="hover:underline">Privacy Policy</a><span className="mx-3 text-[#B88B89]">|</span>
              <a href="#disclaimer" className="hover:underline">Disclaimer</a><span className="mx-3 text-[#B88B89]">|</span>
              <a href="https://walkerstrategyco.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#B88B89] transition-colors">Website by Walker Strategy Co.</a>
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================= */}
      {/* WEB VIEW ELEMENTS (lg and above)        */}
      {/* ========================================= */}
      <footer
        id="main-footer-desktop"
        className="w-full bg-[#392831] text-[#F7F5F1] hidden lg:block"
      >
        {/* Main Footer Container */}
        <div className="w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-20 lg:pt-24 pb-24 lg:pb-[145px] xl:pb-[155px]">
          <div className="mx-auto w-fit max-w-full flex flex-col lg:flex-row justify-center items-start gap-16 xl:gap-32">
            
            {/* Part 1: Narrative Unit */}
            <div className="w-auto max-w-[480px] xl:max-w-[500px] flex-shrink-0 text-left">
              <h2 className="font-serif text-[32px] xl:text-[36px] text-[#F7F5F1] mb-2">
                Dr. Maya Reynolds, PsyD
              </h2>
              <p className="font-sans text-[16px] xl:text-[18px] text-[#D9C9C9] font-light mb-8">
                Licensed Clinical Psychologist
              </p>
              <p className="font-sans text-[15px] xl:text-[16px] leading-[1.8] text-[#F7F5F1] font-normal">
                <span className="block mb-4">Therapy for adults in Santa Monica, California.</span>
                <span className="block">In-person therapy and secure telehealth throughout California.</span>
              </p>
            </div>

            {/* Part 2: Navigation Unit */}
            <div className="w-auto grid grid-cols-3 gap-12 xl:gap-20 text-left mt-2">
              
              {/* Column 1: NAVIGATE */}
              <div>
                <h4 className="desktop-footer-heading font-sans text-[#B88B89] mb-6">
                  NAVIGATE
                </h4>
                <ul className="list-none p-0 m-0 space-y-2.5">
                  {footerNavigateLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                        className="desktop-footer-link font-sans text-[#F7F5F1] hover:text-[#B88B89] font-light transition-colors inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: CONTACT */}
              <div id="contact-desktop">
                <h4 className="desktop-footer-heading font-sans text-[#B88B89] mb-6">
                  CONTACT
                </h4>
                <div className="font-sans text-[#F7F5F1] font-light space-y-1">
                  {contactInfo.addressLines.map((line, idx) => (
                    <div key={idx} className="desktop-footer-link leading-[1.8]">{line}</div>
                  ))}
                </div>
              </div>

              {/* Column 3: PRACTICE */}
              <div id="practice-desktop">
                <h4 className="desktop-footer-heading font-sans text-[#B88B89] mb-6">
                  PRACTICE
                </h4>
                <ul className="list-none p-0 m-0 space-y-1">
                  <li className="desktop-footer-link font-sans text-[#F7F5F1] font-light leading-[1.8]">
                    In-person therapy in Santa Monica
                  </li>
                  <li className="desktop-footer-link font-sans text-[#F7F5F1] font-light leading-[1.8]">
                    Secure telehealth throughout California
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Sub-Footer */}
        <div className="w-full bg-[#392831] border-t border-[#F7F5F1]/10 py-4 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1600px] mx-auto text-left">
            <p className="desktop-footer-secondary text-[#D9C9C9] font-light tracking-wide font-sans">
              <a href="#terms" className="hover:underline">Terms</a><span className="mx-3 opacity-80">|</span>
              <a href="#privacy" className="hover:underline">Privacy Policy</a><span className="mx-3 opacity-80">|</span>
              <a href="#disclaimer" className="hover:underline">Disclaimer</a><span className="mx-3 opacity-80">|</span>
              <a href="https://walkerstrategyco.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#B88B89] transition-colors">Website by Walker Strategy Co.</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
