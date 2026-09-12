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
      className="w-full bg-[#F7F5F1] relative z-40 transition-colors lg:mb-12"
    >
      {/* Top 3px Deep Plum Accent Line running full viewport width */}
      <div
        id="top-accent-bar"
        className="w-full h-[3px] bg-[#593D4B] absolute top-0 left-0 right-0 z-50"
      />

      {/* Header Content Container - balanced vertical padding matching reference */}
      <div className="w-full max-w-[1690px] mx-auto px-6 sm:px-10 lg:px-0 lg:w-[calc(100%-208px)] pt-5 pb-4 lg:py-[22px] xl:py-[24px] flex items-center justify-between">
        {/* Brand Logo - Authentic artwork matching site */}
        <a
          id="site-logo"
          href="#"
          className="header-title-logo group block text-left select-none flex-shrink-0 transform translate-y-[6px] sm:translate-y-[7px] transition-transform"
        >
          <img
            src={siteImages.logoTrimmed || siteImages.logo}
            alt="Conejo Valley Family Counseling"
            className="h-[52px] sm:h-[58px] lg:h-[44px] xl:h-[46px] w-auto max-w-[225px] sm:max-w-[260px] lg:max-w-[220px] object-contain block transition-opacity group-hover:opacity-85"
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
            }}
          />
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
                className="text-[13px] font-sans-body uppercase tracking-[0.14em] text-[#302B2A] font-medium hover:text-[#593D4B] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Outlined Pill Contact Button matching design specification */}
          <button
            id="header-contact-btn"
            type="button"
            onClick={onContactClick}
            className="px-6 py-2.5 rounded-[50%] border border-[#593D4B] bg-transparent flex items-center justify-center text-[12px] uppercase tracking-[0.14em] font-sans-body text-[#302B2A] font-medium hover:bg-[#593D4B] hover:text-[#F7F5F1] transition-all duration-300 cursor-pointer select-none"
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
          className="lg:hidden p-1 text-[#302B2A] hover:text-[#593D4B] transition-colors focus:outline-none cursor-pointer flex items-center"
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
