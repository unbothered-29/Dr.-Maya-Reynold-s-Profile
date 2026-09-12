'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F7F5F1] flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h2 className="font-playfair text-[32px] text-[#302A29] font-normal mb-4">
          Something went wrong
        </h2>
        <p className="font-montserrat text-[15px] text-[#756C67] font-normal mb-8 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="btn-pill-primary text-[12px] tracking-[0.16em] inline-flex items-center justify-center px-8 py-3"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
