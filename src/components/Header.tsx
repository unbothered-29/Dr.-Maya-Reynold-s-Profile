import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { navItems } from '../data/homepage';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="w-full bg-[#F6F4EE] relative z-40 transition-colors lg:h-[176.5px]"
    >
      {/* Top 2.5px Plum/Purple Accent Line running full viewport width */}
      <div
        id="top-accent-bar"
        className="w-full h-[2.5px] bg-[#49303F] absolute top-0 left-0 right-0 z-50"
      />

      {/* Header Content Container - centered with ~104px margin at 1897px viewport */}
      <div className="w-full max-w-[1690px] mx-auto px-6 sm:px-10 lg:px-0 lg:w-[calc(100%-208px)] pt-5 lg:pt-[37px] pb-4 flex items-start justify-between">
        {/* Typographic Logo - noticeably larger editorial serif in beaufort-pro 300 */}
        <a
          id="site-logo"
          href="#"
          className="group block text-left select-none"
        >
          <span className="block font-serif-editorial text-[30px] sm:text-[34px] lg:text-[36px] font-[300] leading-[1.05] tracking-[0.015em] text-[rgb(43,43,43)] group-hover:opacity-85 transition-opacity">
            Conejo Valley
          </span>
          <span className="block text-[9px] sm:text-[9.5px] lg:text-[10px] uppercase tracking-[0.24em] font-sans-clean font-normal text-[#6E9FA0] mt-1.5">
            FAMILY COUNSELING
          </span>
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
