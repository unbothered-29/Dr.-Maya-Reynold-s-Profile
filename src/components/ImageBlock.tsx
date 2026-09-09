import React, { useState } from 'react';

interface ImageBlockProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClassName?: string;
  priority?: boolean;
  id?: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatioClassName = '',
  priority = false,
  id,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      id={id}
      className={`relative overflow-hidden bg-[#ECE8DF] ${aspectRatioClassName} ${containerClassName}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover coastal-film-image transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};
