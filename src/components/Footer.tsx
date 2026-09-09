import React from 'react';
import {
  contactInfo,
  footerNavigateLinks,
  legalLinks,
  teamMembers,
} from '../data/homepage';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-[#F4F1EA] border-t border-[#454540]/15 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 text-[#6C6B65]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 text-left mb-16 sm:mb-20">
          {/* Col 1: Wordmark & Brand Presence */}
          <div className="space-y-4 sm:pr-4">
            <a href="#" className="block select-none group">
              <span className="block font-serif-editorial text-[24px] sm:text-[28px] font-normal leading-tight text-[#454540]">
                Conejo Valley
              </span>
              <span className="block text-[8.5px] uppercase tracking-[0.24em] font-sans-clean text-[#6C6B65] mt-1">
                FAMILY COUNSELING
              </span>
            </a>
            <p className="font-sans-clean text-[13px] leading-relaxed text-[#6C6B65] pt-2">
              Online and in-person specialized counseling in Newbury Park and across California.
            </p>
          </div>

          {/* Col 2: NAVIGATE */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans-clean text-[#454540] font-medium mb-5">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5">
              {footerNavigateLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); onContactClick(); } : undefined}
                    className="font-sans-clean text-[13px] text-[#6C6B65] hover:text-[#454540] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: CONTACT */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans-clean text-[#454540] font-medium mb-5">
              CONTACT
            </h4>
            <div className="space-y-3 font-sans-clean text-[13px] leading-relaxed text-[#6C6B65]">
              <div>
                {contactInfo.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              <div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-[#454540] transition-colors block"
                >
                  {contactInfo.email}
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\./g, '')}`}
                  className="hover:text-[#454540] transition-colors block mt-1"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#454540]">
                  Serving:
                </p>
                <p className="text-[12.5px] mt-0.5">
                  {contactInfo.serviceAreas}
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: OUR TEAM */}
          <div id="team">
            <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans-clean text-[#454540] font-medium mb-5">
              OUR TEAM
            </h4>
            <ul className="space-y-2 font-sans-clean text-[13px] text-[#6C6B65]">
              {teamMembers.map((member) => (
                <li key={member} className="hover:text-[#454540] transition-colors">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="pt-8 border-t border-[#454540]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-[11.5px] font-sans-clean text-[#6C6B65]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#454540] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <p className="text-center sm:text-right text-[#6C6B65]">
            Website by Walker Strategy Co.
          </p>
        </div>
      </div>
    </footer>
  );
};
