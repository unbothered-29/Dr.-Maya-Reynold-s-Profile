import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-[#86B3B3] border-t-transparent animate-spin" />
        <p className="font-muli text-[14px] uppercase tracking-[0.14em] text-[rgb(43,43,43)] font-[300]">
          Loading...
        </p>
      </div>
    </div>
  );
}
