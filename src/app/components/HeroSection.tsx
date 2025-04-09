"use client";

import Image from "next/image";
import heroImage from "../../../public/asserts/heroImage.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-blue-200 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0  bg-blue z-10" />

      {/* Text Content (left-aligned & responsive) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-start pl-6 sm:pl-10 md:pl-16 text-white">
        <div className="max-w-2xl">
          <h1 className="relative text-[#fff] text-[24px] lg:text-[65px] pb-5 font-bold lg:leading-[70px] leading-[30px] lg:mb-4 mb-2 font-epilogue">
            Build Powerful AI Applications Without Writing a Single Line of Code
          </h1>
          <p className="flex flex-col inset-10  justify-center flex-shrink-0 text-[#e3e2e2] font-epilogue lg:text-[18px] text-[16px] font-medium lg:leading-[30px] leading-[20px] mb-6 max-w-full">
            Empower your team to fine-tune LLMs and build Retrieval-Augmented
            Generation workflows no programming required.
          </p>
          <div className="space-x-4">
            {/* Outlined Button */}
            <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer transition-all duration-200 px-16 py-3 rounded-4xl font-semibold shadow-sm">
              Learn More
            </button>

            {/* Filled Button */}
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 px-16 py-3 rounded-4xl cursor-pointer font-semibold shadow-sm">
              Join Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
