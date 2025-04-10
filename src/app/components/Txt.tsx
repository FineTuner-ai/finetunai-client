"use client";

import Image from "next/image";
import { useState } from "react";
import trans from "../../../public/asserts/div.pattern-1.png";
import team1 from "../../../public/asserts/team1 (1).png";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "As someone leading AI projects without a deep coding background, this platform has been a game changer. I was able to fine-tune models on custom datasets and build a RAG pipeline&mdash;all using a drag-and-drop canvas! The real-time prompt testing and model comparison tools gave us insights we couldn&rsquo;t get anywhere else.",
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
    <section className="relative bg-blue-950 text-white py-24 px-6 overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          What Our <span className="text-blue-400">Clients</span> Say
        </h2>

        <p className="max-w-2xl mx-auto text-center text-gray-300 mb-10 leading-relaxed">
          {testimonials[activeIndex].quote}
        </p>

        <div className="w-20 h-1 bg-blue-400 mx-auto mb-16"></div>

        <div className="mt-8">
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
              <Image
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].author}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          <blockquote className="max-w-2xl mx-auto text-lg italic text-gray-300 mb-10 leading-relaxed">
            {testimonials[activeIndex].quote}
          </blockquote>

          <div className="w-0.5 h-12 bg-blue-500 mx-auto mb-6"></div>

          <div className="mb-10 text-center">
            <p className="font-bold text-2xl mb-1">
              {testimonials[activeIndex].author}
            </p>
            <p className="text-blue-300 text-sm uppercase tracking-wider">
              {testimonials[activeIndex].position}
            </p>
          </div>

          <div className="flex justify-center space-x-3">
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
      </div>
    </section>
  );
}
