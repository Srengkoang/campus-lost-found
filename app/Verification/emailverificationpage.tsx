import Image from "next/image";

export default function EmailVerification() {
  return (
    <div className="w-[962px] h-[633px] relative bg-white overflow-hidden">
      {/* Header */}
      <h1 className="absolute left-[647px] top-[72px] text-sky-200 text-base font-normal font-['Inter'] drop-shadow-md">
        Email Verification
      </h1>

      {/* Description */}
      <p className="absolute left-[531px] top-[125px] text-blue-950 text-xs font-normal font-['Inter']">
        Verify your email below before accessing and make sure
        <br />
        that it is you, not others.
      </p>

      {/* Email Label */}
      <label className="absolute left-[531px] top-[205px] text-blue-950 text-xs font-normal font-['Inter']">
        Email:
      </label>

      {/* Email Input (visual block from Figma) */}
      <div className="absolute left-[526px] top-[232px] w-96 h-9 bg-blue-500/50 rounded-[20px]" />

      {/* Verify Button */}
      <button className="absolute left-[662px] top-[342px] w-20 h-9 bg-blue-500 rounded-[20px] flex items-center justify-center">
        <span className="text-blue-950 text-xs font-normal font-['Inter']">
          Verify
        </span>
      </button>

      {/* Left Image */}
      <Image
        src="/cea0ba609d381a9808b313d15b423dcd.jpg"
        alt="Verification illustration"
        width={422}
        height={633}
        className="absolute left-[-2px] top-0 border border-blue-500/50"
      />
    </div>
  );
}
