"use client";
import React from "react";

const Finetune = () => {
  return (
    <div className="max-w-300 bg-gradient-to-r h-100 mx-auto px-4 sm:px-6 lg:px-8 from-blue-950 to-blue-900 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-5 flex flex-col md:flex-row items-center justify-between">
        {/* Left content section */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 z-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Fine-tune AI models at scale
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-lg mx-auto md:mx-0">
            Transform open source models into specialized AI solutions with
            Finetunai Studios comprehensive fine-tuning platform. Access
            leading models, powerful infrastructure, and transparent pricing.
          </p>
          <div className="pt-2 sm:pt-4">
            <button className="bg-white text-blue-900 font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-colors">
              Start fine-tuning
            </button>
          </div>
        </div>

        {/* Right image section */}
        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center md:justify-end">
          {/* Main graphic - abstract visualization */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none h-52 sm:h-60 md:h-80">
            {/* Placeholder for the main graphic with glowing effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-400/10 rounded-xl border border-blue-400/20 backdrop-blur-sm relative overflow-hidden">
                {/* Vertical lines */}
                <div className="absolute h-full w-1 bg-blue-300/30 left-1/4 top-0"></div>
                <div className="absolute h-full w-1 bg-blue-300/30 left-1/2 top-0"></div>
                <div className="absolute h-full w-1 bg-blue-300/30 left-3/4 top-0"></div>

                {/* Glowing effect */}
                <div className="absolute top-1/4 right-1/4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-green-400/70 rounded-lg blur-md"></div>
                <div className="absolute bottom-1/3 right-1/3 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-green-300/50 rounded-lg blur-lg"></div>
              </div>
            </div>

            {/* Floating squares around the main graphic - hide some on small screens */}
            <div className="hidden sm:block absolute top-0 left-1/4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-blue-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute top-1/4 right-0 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-blue-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"></div>
            <div className="hidden sm:block absolute bottom-0 left-1/3 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-blue-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute top-1/2 right-1/4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-green-400/20 border border-green-400/40 rounded-lg backdrop-blur-sm"></div>
            <div className="hidden sm:block absolute bottom-1/4 right-1/2 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-indigo-400/20 border border-indigo-400/30 rounded-lg backdrop-blur-sm"></div>

            {/* Glowing elements */}
            <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-green-400/30 rounded-xl blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-green-300/20 rounded-xl blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finetune;