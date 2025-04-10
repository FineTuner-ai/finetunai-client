"use client";

import Image from "next/image";
import heroImage from "../../../public/asserts/heroImage.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-blue-200 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-blue opacity-40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-epilogue leading-snug sm:leading-tight mb-4">
            Build Powerful AI Applications Without Writing a Single Line of Code
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-medium text-[#e3e2e2] leading-relaxed mb-6">
            Empower your team to fine-tune LLMs and build Retrieval-Augmented Generation workflows — no programming required.
          </p>

          <div className="flex flex-wrap gap-4">
          <Link href = "#faqs">
            <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 px-6 py-3 rounded-4xl font-semibold shadow-sm">
              Learn More
            </button>
            </Link>
            <Link href = "#wishlist">
            <button  className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 px-6 py-3 rounded-4xl font-semibold shadow-sm">
              Join Wishlist
            </button>
            
            </Link>

            
          </div>
        </div>
      </div>
    </section>
  );
}
