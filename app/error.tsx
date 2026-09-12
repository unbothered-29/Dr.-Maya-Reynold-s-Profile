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
    <div className="min-h-screen bg-[#F6F4EE] flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h2 className="font-beaufort text-[32px] text-[rgb(43,43,43)] font-[300] mb-4">
          Something went wrong
        </h2>
        <p className="font-muli text-[15px] text-[rgb(43,43,43)] font-[300] mb-8 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border border-[rgb(43,43,43)] text-[12px] uppercase tracking-[0.14em] font-muli text-[rgb(43,43,43)] hover:bg-[rgb(43,43,43)] hover:text-white transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
