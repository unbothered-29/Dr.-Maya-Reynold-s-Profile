import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F5F1] flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="font-playfair text-[48px] text-[#302A29] font-normal mb-4">
          404
        </h1>
        <p className="font-montserrat text-[15px] text-[#756C67] font-normal mb-8 leading-relaxed">
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="btn-pill-primary text-[12px] tracking-[0.16em] inline-flex items-center justify-center px-8 py-3"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
