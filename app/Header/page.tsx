import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[993px] h-16 relative bg-gradient-to-r from-sky-200/60 to-blue-500/60 overflow-hidden">

      <Link
        href="/"
        className="absolute left-[441px] top-[23px] text-black text-xl font-normal font-['Inter'] hover:underline"
      >
        Home
      </Link>

      <Link
        href="/instruction"
        className="absolute left-[541px] top-[23px] text-black text-xl font-normal font-['Inter'] hover:underline"
      >
        Instruction
      </Link>

      <Link
        href="/signup"
        className="absolute left-[679px] top-[23px] text-black text-xl font-normal font-['Inter'] hover:underline"
      >
        Sign Up
      </Link>

      <Link
        href="/login"
        className="absolute left-[792px] top-[23px] text-black text-xl font-normal font-['Inter'] hover:underline"
      >
        Log in
      </Link>

      <Link
        href="/report"
        className="absolute left-[891px] top-[23px] text-black text-xl font-normal font-['Inter'] hover:underline"
      >
        Report
      </Link>
    </header>
  );
}
