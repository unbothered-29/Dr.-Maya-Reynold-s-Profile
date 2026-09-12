import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="font-beaufort text-[48px] text-[rgb(43,43,43)] font-[300] mb-4">
          404
        </h1>
        <p className="font-muli text-[16px] text-[rgb(43,43,43)] font-[300] mb-8 leading-relaxed">
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border border-[rgb(43,43,43)] text-[12px] uppercase tracking-[0.14em] font-muli text-[rgb(43,43,43)] hover:bg-[rgb(43,43,43)] hover:text-white transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
