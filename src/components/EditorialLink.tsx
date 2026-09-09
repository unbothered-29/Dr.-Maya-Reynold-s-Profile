import React from 'react';

interface EditorialLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  isButton?: boolean;
}

export const EditorialLink: React.FC<EditorialLinkProps> = ({
  children,
  href = '#',
  onClick,
  className = '',
  id,
  isButton = false,
}) => {
  const commonClasses = `group inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-sans-clean text-[#454540] hover:text-[#252522] transition-colors duration-300 font-medium cursor-pointer ${className}`;

  if (isButton || onClick) {
    return (
      <button
        id={id}
        type="button"
        onClick={onClick}
        className={`${commonClasses} py-1 text-left bg-transparent border-0`}
      >
        <span className="editorial-underline-link">{children}</span>
      </button>
    );
  }

  return (
    <a id={id} href={href} className={`${commonClasses} py-1`}>
      <span className="editorial-underline-link">{children}</span>
    </a>
  );
};
