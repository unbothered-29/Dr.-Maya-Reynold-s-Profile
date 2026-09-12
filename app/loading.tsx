import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F7F5F1] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-[#593D4B] border-t-transparent animate-spin" />
        <p className="font-montserrat text-[13px] uppercase tracking-[0.16em] text-[#756D68] font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
