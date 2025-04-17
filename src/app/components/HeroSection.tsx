

import Image from "next/image";
import Link from "next/link";


export default function ProductOverview() {
 
  return (
    <section className="relative bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/ecosheane/image/upload/v1744755947/Abstract_Design_tcjzrm.png"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-indigo-900/40 z-10" />

      {/* Content container */}
      <div className="relative z-20   max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 flex flex-col items-center justify-center text-center pt-24 sm:pt-28 md:pt-32">
        {/* Logo or icon */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-6 sm:mb-8">
          {/* SVG Container at top */}
          {/* <div className="mt-10 w-30 h-30">
            <Image 
              src={svg} 
              width={300} 
              height={300} 
              className="w-24 sm:w-32 md:w-60 lg:w-60 h-auto" 
              alt="Container Shape" 
              priority 
            />
          </div> */}
        </div>

        {/* Star icon and product overview text */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 text-amber-500 mb-3 sm:mb-4">
        </div>

        {/* Main heading */}
        <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
          Build Powerful AI Applications Without Writing a Single Line of Code
        </h1>

        {/* Description text */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-7 md:mb-8">
          Empower your team to fine-tune LLMs and build Retrieval-Augmented
          Generation workflows no programming required.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/WhyFinetunai">
            <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-white border border-indigo-600 text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md">
              Learn More
            </button>
          </Link>
          <Link href="#wishlist">
            <button className="w-full cursor-pointer sm:w-auto text-xs sm:text-sm md:text-base bg-indigo-100/10 text-white hover:bg-indigo-700/10 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md">
              Join Wishlist
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}