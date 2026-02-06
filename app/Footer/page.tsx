import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[1440px] h-80 relative bg-gradient-to-r from-blue-900/60 to-sky-200/60 overflow-hidden">

      {/* Overlay */}
      <div className="w-[1440px] h-80 absolute inset-0 bg-blue-500/50" />

      {/* Left text */}
      <div className="absolute left-[75px] top-[226px] text-black text-2xl font-normal font-['Inter']">
        Campus Lose &amp; Found
      </div>

      <div className="absolute left-[75px] top-[257px] text-black text-xs font-normal font-['Inter']">
        The best to find and report the items
      </div>

      {/* Copyright */}
      <div className="absolute left-[705px] top-[298px] text-black text-xs font-normal font-['Inter']">
        © 2026 tttttttttttt
      </div>

      {/* Footer links */}
      <nav className="absolute left-[1063px] top-[146px] space-y-2">
        <Link href="/" className="block text-black text-base font-normal font-['Inter'] hover:underline">
          Home
        </Link>

        <Link href="/report" className="block text-black text-base font-normal font-['Inter'] hover:underline">
          Report
        </Link>

        <Link href="/about" className="block text-black text-base font-normal font-['Inter'] hover:underline">
          About
        </Link>

        <Link href="/faqs" className="block text-black text-base font-normal font-['Inter'] hover:underline">
          FAQs
        </Link>
      </nav>
    </footer>
  );
}
