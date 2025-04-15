"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Features() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transition, setTransition] = useState(true);
  const totalSlides = 4;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const originalFeatures = [
    {
      title: "Design AI Workflows Visually",
      description:
        "Leverage a canvas-based builder to create end-to-end AI pipelines for fine-tuning and RAG — from document parsing to model output",
      image:
        "https://res.cloudinary.com/ecosheane/image/upload/v1744755949/project-6.jpg_tetjgf.png",
      iconColor: "text-blue-500",
      icon: "M12,2L2,12h3v8h6v-6h2v6h6v-8h3L12,2z",
    },
    {
      title: "Seamlessly Manage Your Data",
      description:
        "Upload, organize, and tag documents. Preview, version, and track changes with full control over your datasets.",
      image:
        "https://res.cloudinary.com/ecosheane/image/upload/v1744755948/image-SAqpzSAJ3C23SNrk7OR7G_dnc4mp.png",
      iconColor: "text-orange-500",
      icon: "M12,3L2,12h3v8h14v-8h3L12,3z M12,16c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C14,15.1,13.1,16,12,16z",
    },
    {
      title: "Craft, Test, and Optimize Prompts Without Code",
      description:
        "Use prebuilt templates, A/B testing, and dynamic content insertion to build better prompt strategies.",
      image:
        "https://res.cloudinary.com/ecosheane/image/upload/v1744755947/Figure_jkhmy5.png",
      iconColor: "text-red-500",
      icon: "M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M10.94,15.54L7.4,12l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L10.94,15.54z",
    },
    {
      title: "Deploy and Scale Effortlessly",
      description:
        "Launch production-ready AI applications with one click and scale automatically based on usage patterns.",
      image:
        "https://res.cloudinary.com/ecosheane/image/upload/v1744755948/project-5.jpg_yjklsl.png",
      iconColor: "text-green-500",
      icon: "M3,13h8V3H3V13z M3,21h8v-6H3V21z M13,21h8V11h-8V21z M13,3v6h8V3H13z",
    },
  ];

  const features = [...originalFeatures, ...originalFeatures];

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => {
          if (prev >= totalSlides - 1) {
            setTimeout(() => {
              setTransition(false);
              setActiveSlide(0);
              setTimeout(() => {
                setTransition(true);
              }, 50);
            }, 1000);
            return prev + 1;
          }
          return prev + 1;
        });
      }, 3000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev >= totalSlides - 1) {
          setTimeout(() => {
            setTransition(false);
            setActiveSlide(0);
            setTimeout(() => {
              setTransition(true);
            }, 50);
          }, 1000);
          return prev + 1;
        }
        return prev + 1;
      });
    }, 3000);
  };

  return (
    <section
      id="features"
      className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 overflow-hidden"
    >
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">
          FEATURES
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
          A No-Code Platform Designed for AI Builders
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
          Easily create, deploy, and manage fine-tuned models and RAG pipelines
          using intuitive visual tools.
        </p>
      </div>

      <div className="relative mt-8 md:mt-12 overflow-hidden">
        <div
          ref={carouselRef}
          className={`flex ${
            transition ? "transition-transform duration-1000 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {features.map((_, index) => (
            <div key={index} className="min-w-full px-1 sm:px-2 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {[0, 1, 2].map((offset) => {
                  const featureIndex = (index + offset) % features.length;
                  const item = features[featureIndex];

                  const visibilityClass =
                    offset === 2
                      ? "hidden md:block"
                      : offset === 1
                      ? "hidden sm:block"
                      : "";

                  return (
                    <div
                      key={featureIndex}
                      className={`${visibilityClass} bg-white rounded-lg overflow-hidden shadow-lg`}
                    >
                      <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center p-2 md:p-4 relative bg-gradient-to-br from-purple-900 to-blue-800">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                      </div>
                      <div className="p-4 md:p-6 text-center">
                        <div className="relative -mt-12 mb-3 md:mb-4">
                          <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center border-4 border-white shadow-md">
                            <div
                              className={`${item.iconColor} font-bold text-lg md:text-xl`}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mx-auto md:w-8 md:h-8"
                              >
                                <path fill="currentColor" d={item.icon} />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              activeSlide % totalSlides === index
                ? "w-6 md:w-8 h-2 bg-cyan-400"
                : "w-2 h-2 bg-blue-900"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
