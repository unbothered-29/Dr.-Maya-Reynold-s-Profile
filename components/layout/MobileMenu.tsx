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
      className="fixed inset-0 z-50 bg-[#F6F4EE] flex flex-col justify-start transition-all duration-300 overflow-y-auto"
    >
      {/* Top 3px Plum/Purple Accent Line */}
      <div
        id="menu-top-accent-bar"
        className="w-full h-[3px] bg-[#49303F] absolute top-0 left-0 right-0 z-50"
      />

      {/* Header row in mobile menu matching main header */}
      <div className="w-full px-7 min-[390px]:px-9 sm:px-10 pt-[22px] pb-4 flex items-center justify-between">
        <a
          href="#"
          onClick={onClose}
          className="header-title-logo group block text-left select-none flex-shrink-0 transform translate-y-[3px]"
        >
          <img
            src={siteImages.logoTrimmed || siteImages.logo}
            alt="Conejo Valley Family Counseling"
            className="h-[48px] min-[390px]:h-[52px] sm:h-[58px] w-auto max-w-[210px] min-[390px]:max-w-[235px] sm:max-w-[260px] object-contain block"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
            }}
          />
        </a>

        {/* Close Button X */}
        <button
          id="close-mobile-menu-btn"
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-1 text-[#151617] hover:opacity-70 transition-opacity focus:outline-none cursor-pointer flex items-center justify-center translate-y-[-1px]"
        >
          <X className="w-[22px] h-[22px] min-[390px]:w-[24px] min-[390px]:h-[24px] stroke-[1.25]" />
        </button>
      </div>

      {/* Navigation list matching reference screenshot */}
      <nav
        aria-label="Mobile Navigation"
        className="w-full px-7 min-[390px]:px-9 sm:px-10 mt-[190px] min-[375px]:mt-[202px] min-[390px]:mt-[214px] min-[430px]:mt-[228px] flex flex-col items-start text-left space-y-[44px] min-[375px]:space-y-[48px] min-[390px]:space-y-[52px] min-[430px]:space-y-[56px]"
      >
        {mobileMenuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="group flex items-center text-[30px] min-[375px]:text-[33px] min-[390px]:text-[35px] min-[430px]:text-[38px] uppercase tracking-[0.03em] text-[#151617] font-[300] hover:text-[#6E9FA0] transition-colors select-none leading-none"
            style={{ fontFamily: "'gravesend-sans', 'Jost', 'Century Gothic', 'Mulish', sans-serif" }}
          >
            <span>{item.label}</span>
            {item.hasChevron && (
              <svg
                width="13"
                height="23"
                viewBox="0 0 13 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[18px] min-[390px]:ml-[22px] text-[#151617] stroke-current transition-transform group-hover:translate-x-1"
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
