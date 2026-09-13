'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems, siteImages } from '@/data/homepage';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="w-full bg-[#E7DED4] relative z-40 transition-colors lg:mb-12"
    >
      {/* Top 3px Deep Plum Accent Line running full viewport width */}
      <div
        id="top-accent-bar"
        className="w-full h-[3px] bg-[#5A3E4B] absolute top-0 left-0 right-0 z-50"
      />

      {/* Header Content Container - balanced vertical padding matching reference */}
      <div className="w-full max-w-[1690px] mx-auto px-6 sm:px-10 lg:px-0 lg:w-[calc(100%-208px)] pt-5 pb-4 lg:py-[22px] xl:py-[24px] flex items-center justify-between">
        {/* Brand Header */}
        <a
          id="site-logo"
          href="#"
          className="header-title-logo group block text-left select-none flex-shrink-0 transition-opacity hover:opacity-85"
        >
          <span className="block font-serif text-[22px] sm:text-[24px] lg:text-[32px] xl:text-[33px] font-normal lg:font-[500] leading-tight lg:leading-[1.1] text-[#302A29] tracking-normal lg:tracking-[-0.015em]">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="block font-sans text-[10.5px] sm:text-[11px] lg:text-[11.5px] xl:text-[12px] uppercase tracking-[0.18em] lg:tracking-[0.20em] text-[#756C67] font-medium mt-0.5 lg:mt-1">
            LICENSED CLINICAL PSYCHOLOGIST
          </span>
        </a>

        {/* Desktop Navigation & Pill Outlined Contact Button */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-11 pt-1.5">
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="flex items-center gap-7 xl:gap-9"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="desktop-nav-link text-[#302A29] font-medium hover:text-[#5A3E4B] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Outlined Oval Contact Button matching reference image and current color palette */}
          <button
            id="header-contact-btn"
            type="button"
            onClick={onContactClick}
            className="w-[124px] h-[50px] rounded-[50%] border border-[#302A29] bg-transparent flex items-center justify-center font-sans text-[12.5px] uppercase tracking-[0.14em] text-[#302A29] font-medium hover:bg-[#302A29] hover:border-[#302A29] hover:text-[#F7F5F1] transition-all duration-300 cursor-pointer select-none"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          id="open-mobile-menu-btn"
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
          className="lg:hidden p-1 text-[#302A29] hover:text-[#5A3E4B] transition-colors focus:outline-none cursor-pointer flex items-center"
        >
          <svg
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current"
          >
            <line x1="0" y1="1.5" x2="28" y2="1.5" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="8.5" x2="28" y2="8.5" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="15.5" x2="28" y2="15.5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        onContactClick={onContactClick}
      />
    </header>
  );
};
