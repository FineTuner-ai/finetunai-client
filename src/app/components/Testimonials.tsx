"use client";

import Image from "next/image";
import { useState } from "react";
import trans from "../../../public/asserts/div.pattern-1.png";
import team1 from "../../../public/asserts/team.png"

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "As someone leading AI projects without a deep coding background, this platform has been a game changer.",
      author: "Moris Jacker",
      position: "Web Developer",
      avatar: team1,
    },
    {
      quote:
        "FinetunerAI changed the way we deploy machine learning models. We now focus more on our product than infrastructure.",
      author: "Alex Doe",
      position: "CTO at Startup",
      avatar: team1,
    },
  ];

  return (
    <section className="relative bg-indigo-950 text-white py-20 px-4 sm:px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={trans}
          alt="Professional background"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center justify-center text-center space-y-8">
        <h2 className="text-3xl font-bold">
          What Our <span className="text-blue-400">Clients</span> Say
        </h2>

        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
            <Image
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].author}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <blockquote className="text-lg italic text-gray-300 max-w-xl">
            “{testimonials[activeIndex].quote}”
          </blockquote>

          <div>
            <p className="font-bold text-white text-xl">{testimonials[activeIndex].author}</p>
            <p className="text-blue-300 text-sm">{testimonials[activeIndex].position}</p>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-400 scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
