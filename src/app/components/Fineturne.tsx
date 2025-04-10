"use client";
import React from "react";
import Image from "next/image";

const Finetune = () => {
  return (
    <div className="w-full bg-gradient-to-r h-100 max-w-300 mx-auto sm:px-6 lg:px-8  from-blue-950 to-blue-900 rounded-4xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left content section */}
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Fine-tune AI models at scale
          </h1>
          <p className="text-lg text-white/90 max-w-lg">
            Transform open source models into specialized AI solutions with
            Finetunai Studio's comprehensive fine-tuning platform. Access
            leading models, powerful infrastructure, and transparent pricing.
          </p>
          <div className="pt-4">
            <button className="bg-white text-blue-900 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Start fine-tuning
            </button>
          </div>
        </div>

        {/* Right image section */}
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          {/* Main graphic - abstract visualization */}
          <div className="relative w-full h-64 md:h-80">
            {/* Placeholder for the main graphic with glowing effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-400/10 rounded-xl border border-blue-400/20 backdrop-blur-sm relative overflow-hidden">
                {/* Vertical lines */}
                <div className="absolute h-full w-1 bg-blue-300/30 left-1/4 top-0"></div>
                <div className="absolute h-full w-1 bg-blue-300/30 left-1/2 top-0"></div>
                <div className="absolute h-full w-1 bg-blue-300/30 left-3/4 top-0"></div>

                {/* Glowing effect */}
                <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-green-400/70 rounded-lg blur-md"></div>
                <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-green-300/50 rounded-lg blur-lg"></div>
              </div>
            </div>

            {/* Floating squares around the main graphic */}
            <div className="absolute top-0 left-1/4 w-12 h-12 bg-blue-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute top-1/4 right-0 w-16 h-16 bg-blue-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute bottom-0 left-1/3 w-14 h-14 bg-blue-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-green-400/20 border border-green-400/40 rounded-lg backdrop-blur-sm"></div>
            <div className="absolute bottom-1/4 right-1/2 w-10 h-10 bg-indigo-400/20 border border-indigo-400/30 rounded-lg backdrop-blur-sm"></div>

            {/* Glowing elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/30 rounded-xl blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-300/20 rounded-xl blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finetune;
