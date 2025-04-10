"use client";

import React from "react";
import Image from "next/image";
import team4 from "../../../public/asserts/team1 (4).png";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Cameron Williamson",
      role: "Founder & CEO",
      image: team4,
    },
    {
      name: "Jacob Jones",
      role: "Product Manager",
      image: team4
    },
    {
      name: "Esther Howards",
      role: "Marketing Head",
      image: team4,
    },
    {
      name: "Robert Fox",
      role: "Team Head",
      image: team4,
    },
  ];
  
  return (
    <section id="team" className="py-10 sm:py-12 md:py-16 bg-gray-50 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
            Easily create, deploy, and manage fine-tuned models and RAG pipelines
            using intuitive visual tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transition-transform duration-300 hover:transform hover:translate-y-1"
            >
              <div className="relative aspect-square w-full max-w-xs rounded-lg overflow-hidden shadow-md mb-4 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  priority={index < 2}
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}