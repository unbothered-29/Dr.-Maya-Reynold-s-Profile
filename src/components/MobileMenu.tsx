import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { NavItem } from '../types';
import { siteImages } from '../data/homepage';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onContactClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  onContactClick,
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
      className="fixed inset-0 z-50 bg-[#F6F4EE] flex flex-col justify-between p-7 sm:p-10 animate-fade-in transition-all duration-300"
    >
      {/* Header row in mobile menu */}
      <div className="flex items-center justify-between w-full">
        <a href="#" onClick={onClose} className="text-left group inline-block">
          <img
            src={siteImages.logo}
            alt="Conejo Valley Family Counseling"
            className="h-[52px] sm:h-[60px] w-auto max-w-[220px] object-contain block"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w';
            }}
          />
        </a>

        <button
          id="close-mobile-menu-btn"
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#252525] hover:opacity-70 transition-opacity"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col items-center justify-center space-y-6 my-auto text-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-xl sm:text-2xl font-serif-editorial tracking-[0.06em] text-[#252525] hover:text-[#6E9FA0] transition-colors py-1"
          >
            {item.label}
          </a>
        ))}

        <div className="pt-6">
          <button
            id="mobile-contact-btn"
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-[120px] h-[50px] rounded-[50%] border border-[rgb(43,43,43)] text-[rgb(43,43,43)] text-[12px] uppercase tracking-[0.12em] font-sans-clean hover:bg-[rgb(43,43,43)] hover:text-[#F6F4EE] transition-all duration-300 flex items-center justify-center mx-auto"
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* Footer in mobile menu */}
      <div className="text-center text-[11px] font-sans-clean text-[#6C6B65] space-y-1">
        <p>Newbury Park, California</p>
        <p className="tracking-wider">805.242.3120</p>
      </div>
    </div>
  );
};
