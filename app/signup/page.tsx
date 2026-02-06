"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputStyle =
    "w-full bg-[#B0CCE1] h-12 rounded-3xl px-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all";
  const labelStyle = "text-[#1B4B72] font-semibold text-lg mb-1 block";

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white overflow-hidden">
      {/* Left Side: Tree & Missing Cat Poster */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <Image
          src="/cea0ba609d381a9808b313d15b423dcd.jpg"
          alt="Tree background"
          width={422}
          height={633}
          className="w-full h-full object-cover"
        />
        {/* Poster Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="bg-[#F8F4F1] p-6 shadow-2xl max-w-[320px] transform -rotate-1 border-t-2 border-gray-200">
            <h2 className="text-red-500 text-3xl font-bold text-center tracking-tighter mb-2">
              MISSING CAT
            </h2>

            <div className="w-full aspect-square bg-gray-200 mb-4 overflow-hidden border border-gray-300 relative">
              <Image
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop"
                alt="Cat"
                fill
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>

            <div className="text-[10px] text-center leading-tight text-gray-700 mb-4">
              <p>
                Lost cat gray and ashen color. Responds to the nickname Terry. Children
                suffer, please tell who saw him. Finding a decent reward. Call 111-222-333
              </p>
            </div>

            <h3 className="text-red-500 text-2xl font-bold text-center leading-none">
              SUBSTANTIAL
              <br />
              REWARD
            </h3>
          </div>
        </div>
      </div>

      {/* Right Side: Sign Up Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-md">
          <h1
            className="text-[#6FA3D2] text-5xl font-normal text-center mb-12"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
          >
            Sign Up
          </h1>

          <form className="space-y-6">
            <div>
              <label className={labelStyle}>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col items-center pt-6 space-y-4">
              <button
                type="submit"
                className="bg-[#5191C1] text-white text-xl px-12 py-3 rounded-full hover:bg-[#3d76a1] transition-colors shadow-lg"
              >
                Log In
              </button>

              <p className="text-gray-600 text-sm">
                Already have account,{" "}
                <a href="#" className="text-[#6FA3D2] underline">
                  Login here.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

