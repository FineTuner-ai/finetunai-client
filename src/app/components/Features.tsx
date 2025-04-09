'use client'
import React, { useState, useEffect, useRef } from 'react';
import image1 from "../../../public/asserts/project-5.jpg.png"
import image2 from "../../../public/asserts/project-6.jpg.png"
import image3 from "../../../public/asserts/Figure.png"
import Image from 'next/image';

export default function Features() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4; // Total number of slides
  const intervalRef = useRef<number | null>(null);
  
  const features = [
    {
      title: "Design AI Workflows Visually",
      description: "Leverage a canvas-based builder to create end-to-end AI pipelines for fine-tuning and RAG — from document parsing to model output",
      image: image1,
      iconColor: "text-blue-500",
      icon: "M12,2L2,12h3v8h6v-6h2v6h6v-8h3L12,2z"
    },
    {
      title: "Seamlessly Manage Your Data",
      description: "Upload, organize, and tag documents. Preview, version, and track changes with full control over your datasets.",
      image: image2,
      iconColor: "text-orange-500",
      icon: "M12,3L2,12h3v8h14v-8h3L12,3z M12,16c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C14,15.1,13.1,16,12,16z"
    },
    {
      title: "Craft, Test, and Optimize Prompts Without Code",
      description: "Use prebuilt templates, A/B testing, and dynamic content insertion to build better prompt strategies.",
      image: image3,
      iconColor: "text-red-500",
      icon: "M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M10.94,15.54L7.4,12l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L10.94,15.54z"
    },
    {
      title: "Deploy and Scale Effortlessly",
      description: "Launch production-ready AI applications with one click and scale automatically based on usage patterns.",
      image: image1, // Reusing image1 for the fourth slide
      iconColor: "text-green-500",
      icon: "M3,13h8V3H3V13z M3,21h8v-6H3V21z M13,21h8V11h-8V21z M13,3v6h8V3H13z"
    }
  ];

  // Auto-scroll function
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = window.setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds
    };

    startInterval();

    // Cleanup interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Function to handle manual navigation
  const goToSlide = (index: number) => {
    setActiveSlide(index);
    
    // Reset interval when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">FEATURES</h2>
        <h1 className="text-4xl font-bold mb-4">A No-Code Platform Designed for AI Builders</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Easily create, deploy, and manage fine-tuned models and RAG pipelines using intuitive visual tools.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative mt-12">
        {/* Slides wrapper */}
        <div 
          className="flex transition-transform duration-1000 ease-in-out" 
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="min-w-full px-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature Cards - We'll show 3 per slide */}
                {[0, 1, 2].map((offset) => {
                  const featureIndex = (index + offset) % features.length;
                  const feature = features[featureIndex];
                  
                  return (
                    <div key={featureIndex} className="bg-white rounded-lg overflow-hidden">
                      <div className="h-64 flex items-center justify-center p-4 relative bg-gradient-to-br from-purple-900 to-blue-800">
                        {/* Use the imported image instead of a placeholder */}
                        <img 
                          src={feature.image.src} 
                          alt={feature.title} 
                          className="h-full w-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                      </div>
                      <div className="p-6 text-center">
                        <div className="relative -mt-12 mb-4">
                          <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center border-4 border-white shadow-md">
                            <div className={`${feature.iconColor} font-bold text-xl`}>
                              <svg viewBox="0 0 24 24" width="32" height="32" className="mx-auto">
                                <path fill="currentColor" d={feature.icon} />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full">
                          Read More
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              activeSlide === index 
                ? "w-8 h-2 bg-cyan-400" 
                : "w-2 h-2 bg-blue-900"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}