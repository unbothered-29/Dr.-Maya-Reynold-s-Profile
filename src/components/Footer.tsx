import React from 'react';
import {
  footerNavigateLinks,
  siteImages,
  teamMembers,
} from '../data/homepage';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-white text-[rgb(43,43,43)]"
    >
      {/* Main Footer Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 xl:gap-14">
          
          {/* Brand Column: Official Brand Logo & Narrative */}
          <div className="w-full lg:w-[42%] xl:w-[44%] text-left">
            <a href="#" className="inline-block select-none group focus:outline-none">
              <img
                src={siteImages.logoTrimmed || siteImages.logo}
                alt="Conejo Valley Family Counseling"
                className="w-[300px] min-[420px]:w-[340px] sm:w-[380px] lg:w-[400px] xl:w-[420px] h-auto object-contain block transition-opacity group-hover:opacity-85"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
                }}
              />
            </a>
            <p
              className="text-[13.5px] sm:text-[14px] leading-[1.75] text-[rgb(43,43,43)] font-[300] mt-3.5 sm:mt-4 max-w-[440px]"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              <span className="block">We want to make getting started simple. You&apos;re welcome to</span>
              <span className="block">come into our office in Newbury Park or schedule virtual</span>
              <span className="block">appointments from anywhere in CA&mdash;whatever works best for</span>
              <span className="block">you.</span>
            </p>
          </div>

          {/* Three Navigation Columns: NAVIGATE, OUR TEAM, CONTACT */}
          <div className="w-full lg:w-[58%] xl:w-[56%] grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 xl:gap-16 text-left">
            
            {/* Column 1: NAVIGATE */}
            <div>
              <h4
                className="text-[12.5px] sm:text-[13px] uppercase tracking-[0.16em] font-[400] text-[rgb(43,43,43)] mb-1.5 sm:mb-2"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                NAVIGATE
              </h4>
              <ul className="space-y-[3px]">
                {footerNavigateLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                      className="text-[13.5px] sm:text-[14px] text-[rgb(43,43,43)] hover:text-[#6E9FA0] font-[300] transition-colors inline-block leading-[1.25]"
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
                className="text-[12.5px] sm:text-[13px] uppercase tracking-[0.16em] font-[400] text-[rgb(43,43,43)] mb-1.5 sm:mb-2"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                OUR TEAM
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {teamMembers.map((member) => (
                  <li
                    key={member}
                    className="text-[13.5px] sm:text-[14px] text-[rgb(43,43,43)] hover:text-[#6E9FA0] font-[300] transition-colors leading-normal"
                    style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                  >
                    <a href="#team" className="hover:underline">
                      {member}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: CONTACT */}
            <div id="contact">
              <h4
                className="text-[12.5px] sm:text-[13px] uppercase tracking-[0.16em] font-[400] text-[rgb(43,43,43)] mb-1.5 sm:mb-2"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                CONTACT
              </h4>
              <div
                className="space-y-4 text-[13.5px] sm:text-[14px] text-[rgb(43,43,43)] font-[300] leading-relaxed"
                style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
              >
                <div className="space-y-1">
                  <p>925 Broadbeck Dr</p>
                  <p>Suites 200 and 225</p>
                  <p>Newbury Park, CA 91320</p>
                </div>

                <div className="space-y-1">
                  <a
                    href="mailto:info@conejovalleycounseling.com"
                    className="block hover:text-[#6E9FA0] transition-colors hover:underline"
                  >
                    info@conejovalleycounseling.com
                  </a>
                  <a
                    href="tel:8052423120"
                    className="block hover:text-[#6E9FA0] transition-colors hover:underline"
                  >
                    805.242.3120
                  </a>
                </div>

                <div className="pt-2 space-y-1">
                  <p>Serving Thousand Oaks, Westlake Village,</p>
                  <p>Camarillo, Moorpark, &amp; Simi Valley</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Sub-Footer: Teal Bottom Bar with Legal & Attribution */}
      <div className="w-full bg-[#78A4A0] py-3.5 sm:py-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
        <div className="max-w-[1440px] mx-auto text-left">
          <p
            className="text-white text-[12px] sm:text-[12.5px] lg:text-[13px] font-[300] tracking-normal"
            style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
          >
            <a href="#terms" className="hover:underline">Terms</a>
            <span className="mx-2 opacity-80">|</span>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <span className="mx-2 opacity-80">|</span>
            <a href="#disclaimer" className="hover:underline">Disclaimer</a>
            <span className="mx-2 opacity-80">|</span>
            <a
              href="https://walkerstrategyco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website by Walker Strategy Co.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

