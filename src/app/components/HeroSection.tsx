"use client";

import Image from "next/image";
import heroImage from "../../../public/asserts/heroImage.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen bg-indigo-600 w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col justify-center">
        <div className="max-w-full md:max-w-2xl text-white pt-16 sm:pt-10 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-epilogue leading-tight mb-3 sm:mb-4">
            Build Powerful AI Applications Without Writing a Single Line of Code
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#e3e2e2] leading-relaxed mb-4 md:mb-6">
            Empower your team to fine-tune LLMs and build Retrieval-Augmented
            Generation workflows no programming required.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="#faqs">
              <button className="text-sm sm:text-base bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl md:rounded-4xl font-semibold shadow-sm">
                Learn More
              </button>
            </Link>
            <Link href="#wishlist">
              <button className="text-sm sm:text-base bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl md:rounded-4xl font-semibold shadow-sm">
                Join Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
