'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { siteImages } from '@/data/homepage';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems?: { label: string; href: string }[];
  onContactClick?: () => void;
}

const mobileMenuItems = [
  { label: 'ABOUT', href: '#about', hasChevron: false },
  { label: 'OUR TEAM', href: '#how-we-work', hasChevron: true },
  { label: 'SPECIALTIES', href: '#specialties', hasChevron: true },
  { label: 'METHODS', href: '#methods', hasChevron: true },
  { label: 'FAQS', href: '#faqs', hasChevron: false },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-overlay"
      className="fixed inset-0 z-50 bg-[#F7F5F1] flex flex-col justify-start transition-all duration-300 overflow-y-auto"
    >
      {/* Top 3px Deep Plum Accent Line */}
      <div
        id="menu-top-accent-bar"
        className="w-full h-[3px] bg-[#5A3E4B] absolute top-0 left-0 right-0 z-50"
      />

      {/* Header row in mobile menu matching main header */}
      <div className="w-full px-7 min-[390px]:px-9 sm:px-10 md:px-16 pt-[22px] pb-4 flex items-center justify-between">
        <a
          href="#"
          onClick={onClose}
          className="header-title-logo group block text-left select-none flex-shrink-0"
        >
          <span className="block font-serif text-[21px] min-[390px]:text-[23px] sm:text-[25px] md:text-[28px] font-normal leading-tight text-[#302A29] tracking-normal">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="block font-sans text-[10px] min-[390px]:text-[10.5px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-[#756C67] font-medium mt-0.5">
            LICENSED CLINICAL PSYCHOLOGIST
          </span>
        </a>

        {/* Close Button X */}
        <button
          id="close-mobile-menu-btn"
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-1 text-[#302A29] hover:text-[#5A3E4B] transition-colors focus:outline-none cursor-pointer flex items-center justify-center translate-y-[-1px]"
        >
          <X className="w-[22px] h-[22px] min-[390px]:w-[24px] min-[390px]:h-[24px] md:w-[28px] md:h-[28px] stroke-[1.25]" />
        </button>
      </div>

      {/* Navigation list matching reference screenshot */}
      <nav
        aria-label="Mobile Navigation"
        className="w-full px-7 min-[390px]:px-9 sm:px-10 md:px-16 mt-[100px] min-[375px]:mt-[112px] min-[390px]:mt-[124px] min-[430px]:mt-[136px] md:mt-[120px] flex flex-col items-start text-left space-y-[40px] min-[375px]:space-y-[44px] min-[390px]:space-y-[48px] min-[430px]:space-y-[52px] md:space-y-[48px]"
      >
        {mobileMenuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="group flex items-center text-[30px] min-[375px]:text-[33px] min-[390px]:text-[35px] min-[430px]:text-[38px] md:text-[42px] uppercase tracking-[0.03em] text-[#302A29] font-[400] hover:text-[#5A3E4B] transition-colors select-none leading-none"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            <span>{item.label}</span>
            {item.hasChevron && (
              <svg
                width="13"
                height="23"
                viewBox="0 0 13 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[18px] min-[390px]:ml-[22px] stroke-current text-[#302A29] group-hover:text-[#5A3E4B] transition-all group-hover:translate-x-1"
              >
                <path
                  d="M1.5 1.5L11.5 11.5L1.5 21.5"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};
