import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems, siteImages } from '../data/homepage';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="w-full bg-[#F6F4EE] relative z-40 transition-colors"
    >
      {/* Top 2.5px Plum/Purple Accent Line running full viewport width */}
      <div
        id="top-accent-bar"
        className="w-full h-[2.5px] bg-[#49303F] absolute top-0 left-0 right-0 z-50"
      />

      {/* Header Content Container - balanced vertical padding matching reference */}
      <div className="w-full max-w-[1690px] mx-auto px-6 sm:px-10 lg:px-0 lg:w-[calc(100%-208px)] py-4 lg:py-[22px] xl:py-[24px] flex items-center justify-between">
        {/* Brand Logo - Authentic artwork matching site */}
        <a
          id="site-logo"
          href="#"
          className="header-title-logo group block text-left select-none flex-shrink-0"
        >
          <img
            src={siteImages.logo}
            alt="Conejo Valley Family Counseling"
            className="h-[56px] sm:h-[66px] lg:h-[72px] w-auto max-w-[260px] sm:max-w-[300px] object-contain block transition-opacity group-hover:opacity-85"
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
            }}
          />
        </a>

        {/* Desktop Navigation & Circular/Oval Outlined Contact Button in Muli */}
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
                className="text-[13px] font-sans-clean uppercase tracking-[0.14em] text-[rgb(43,43,43)] font-normal hover:text-[#6E9FA0] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Thin Outlined Contact Button with authentic oval / ellipse border */}
          <button
            id="header-contact-btn"
            type="button"
            onClick={onContactClick}
            className="w-[120px] h-[50px] rounded-[50%] border border-[rgb(43,43,43)] bg-transparent flex items-center justify-center text-[12px] uppercase tracking-[0.12em] font-sans-clean text-[rgb(43,43,43)] font-normal hover:bg-[rgb(43,43,43)] hover:text-[#F6F4EE] transition-all duration-300 cursor-pointer select-none"
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
          className="lg:hidden p-2 text-[#252525] hover:opacity-75 transition-opacity mt-1"
        >
          <Menu className="w-6 h-6 stroke-[1.5]" />
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
