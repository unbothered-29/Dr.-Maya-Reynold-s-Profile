import React from 'react';

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <p
      id={id}
      className={`text-[11px] sm:text-[11.5px] uppercase tracking-[0.18em] font-montserrat text-[#756C67] font-medium leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
};
