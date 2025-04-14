'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531899/forbes_t6od9q.png", alt: "Forbes", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531900/itv_putzkv.png", alt: "Go Sport", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531900/Vector_1_l3dmz7.png", alt: "Sodicam", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531900/Vector_gsneui.png", alt: "Diagnostics", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531900/Vector_2_sozlq1.png", alt: "ITV", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531900/rik_zgfswz.png", alt: "Nrik", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744531900/Vector_3_vawtzk.png", alt: "FIBA", width: 144, height: 80 },
];

const LogoSection: React.FC = () => {
  const [position, setPosition] = useState(0);
  // Fixed: Properly typed the ref as HTMLDivElement
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const speed = 1; // Lower is slower, higher is faster

  // Create a doubled array of logos to create the seamless effect
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      // Update position based on elapsed time and speed
      setPosition((prevPosition) => {
        let newPosition = prevPosition - speed * (elapsed / 16); // Normalize by 16ms (60fps)
        
        // Reset position when the first set of logos moves out of view
        const contentWidth = (logos.length * 180); // approximate width of one set of logos
        
        if (Math.abs(newPosition) >= contentWidth) {
          newPosition = 0;
        }
        
        return newPosition;
      });
      
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <h1 className="text-center pb-10 font-bold">
        Trusted by Top <span className="underline decoration-black-500">Global Business Organizations</span>
      </h1>
      
      <div className="max-w-full mx-auto px-6 relative" ref={carouselRef}>
        <div 
          className="flex items-center transition-none"
          style={{ 
            transform: `translateX(${position}px)`,
            width: "max-content", // Ensure container expands to fit all logos
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-20 flex items-center justify-center bg-transparent border border-gray-500 rounded-full p-4 mx-3 flex-shrink-0"
            >
              <Image
                src={typeof logo.src === 'string' ? logo.src : logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;