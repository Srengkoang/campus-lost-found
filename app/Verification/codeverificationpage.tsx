import Image from "next/image";

export default function VerifyPage() {
  return (
    <div className="w-[962px] h-[633px] relative bg-white overflow-hidden">

      {/* Left Image */}
      <Image
        src="/cea0ba609d381a9808b313d15b423dcd.jpg"
        alt="Verification Visual"
        width={422}
        height={633}
        className="absolute left-[-2px] top-0 w-96 h-[633px] border border-blue-500/50 object-cover"
      />

      {/* Title */}
      <div className="absolute left-[647px] top-[72px] text-sky-200 text-base font-normal font-['Inter'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
        Code Verification
      </div>

      {/* Description */}
      <div className="absolute left-[531px] top-[125px] text-blue-950 text-xs font-normal font-['Inter']">
        Verify your code below before accessing and make sure <br />
        that it is you not other.
      </div>

      {/* Label */}
      <div className="absolute left-[531px] top-[205px] text-blue-950 text-xs font-normal font-['Inter']">
        Enter the code:
      </div>

      {/* Code boxes */}
      <div className="absolute left-[539px] top-[262px] w-10 h-9 bg-sky-200" />
      <div className="absolute left-[594px] top-[262px] w-10 h-9 bg-sky-200" />
      <div className="absolute left-[649px] top-[262px] w-10 h-9 bg-sky-200" />
      <div className="absolute left-[704px] top-[261px] w-10 h-9 bg-sky-200" />
      <div className="absolute left-[759px] top-[261px] w-10 h-9 bg-sky-200" />
      <div className="absolute left-[814px] top-[261px] w-10 h-9 bg-sky-200" />

      {/* Verify Button */}
      <div className="absolute left-[662px] top-[342px] w-20 h-9 bg-blue-500 rounded-[20px]" />
      <div className="absolute left-[685px] top-[353px] text-blue-950 text-xs font-normal font-['Inter']">
        Verified
      </div>
    </div>
  );
}
