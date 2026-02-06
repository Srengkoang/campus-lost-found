import Image from "next/image";
import Link from "next/link"; // <-- make sure to import Link
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-\[962px\] h-\[633px\] relative bg-white overflow-hidden mx-auto my-10">
      {/* Background / Image */}
      <div className="absolute w-96 h-\[633px\] -left-2 top-0 border border-blue-500/50">
        <Image
          src="/cea0ba609d381a9808b313d15b423dcd.jpg"
          alt="Placeholder"
          width={422}
          height={633}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Log In Text */}
      <div className="absolute left-\[662px\] top-\[73px\] text-3xl text-sky-200 font-normal font-['Inter'] \[text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)\]">
        Log In
      </div>

      {/* Input Boxes */}
      <div className="absolute left-\[524px\] top-\[198px\] w-96 h-9 bg-blue-500/50 rounded-[20px] z-10" />
      <div className="absolute left-\[524px\] top-\[293px\] w-96 h-9 bg-blue-500/50 rounded-[20px] z-10" />

      {/* Input Labels */}
      <div className="absolute left-\[534px\] top-\[176px\] text-xs text-blue-950 font-normal font-['Inter']">
        Email:
      </div>
      <div className="absolute left-\[531px\] top-\[271px\] text-xs text-blue-950 font-normal font-['Inter']">
        Password:
      </div>

      {/* Log In Button */}
      <div className="absolute left-\[660px\] top-\[367px\] w-20 h-9 bg-blue-500 rounded-[20px]" />
      <div className="absolute left-\[682px\] top-\[376px\] text-base text-blue-950 font-normal font-['Inter']">
        Log In
      </div>

      {/* Additional Links */}
      <div className="absolute left-\[600px\] top-\[420px\] text-xs font-normal font-['Inter']">
        <span className="text-stone-900 \[text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)\]">
          Not yet have account,{" "}
        </span>
        {/* Replace span with Link */}
        <Link
          href="/signup"
          className="text-blue-500 \[text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)\]"
        >
          Register here
        </Link>
      </div>

      <div className="absolute left-\[536px\] top-\[334px\] text-xs text-stone-900 font-normal font-['Inter'] \[text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)\]">
        Forget Password?
      </div>
    </div>
  );
};

export default LoginPage;

