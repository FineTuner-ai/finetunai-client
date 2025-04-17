'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903564/logo-echo_esh6hy.png", alt: "Sodicam", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-acme_lwmqin.png", alt: "Diagnostics", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-acme_lwmqin.png", alt: "ITV", width: 144, height: 80 },
  { src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-apex_qyehhm.png", alt: "FIBA", width: 144, height: 80 },
];

const LogoSection = () => {
  const [position, setPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const speed = 0.75; // Reduced speed for smoother animation
  
  // Create multiple copies to ensure smooth infinite scrolling
  const triplicatedLogos = [...logos, ...logos, ...logos];
  
  useEffect(() => {
    const carousel = carouselRef.current;
    const content = contentRef.current;
    if (!carousel || !content) return;
    
    let animationFrameId: number;
    let lastTimestamp: number | null = null;
    
    // Get width of a single set of logos
    const logoSetWidth = logos.length * 180; // Approx width of one set
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      // Update position with smoother transition
      setPosition((prevPosition) => {
        // Calculate new position with easing
        let newPosition = prevPosition - speed * (elapsed / 16);
        
        // Smooth reset when first logo set is out of view
        if (Math.abs(newPosition) >= logoSetWidth) {
          // Reset to beginning of second set
          newPosition = newPosition + logoSetWidth;
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
        Built with <span className="underline decoration-black">Startups and SMEs in Mind</span>
      </h1>
      
      <div className="max-w-full mx-auto px-6 relative overflow-hidden" ref={carouselRef}>
        <div
          ref={contentRef}
          className="flex items-center transition-all duration-300 ease-linear"
          style={{
            transform: `translateX(${position}px)`,
            width: "max-content",
          }}
        >
          {triplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-20 flex items-center justify-center bg-transparent border border-gray-500 rounded-full p-4 mx-3 flex-shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={typeof logo.src === 'string' ? logo.src : logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    filter: "brightness(0) saturate(100%)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;