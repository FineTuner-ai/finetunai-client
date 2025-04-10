"use client";
import React from "react";
import Image from "next/image";
// import team1 from "../../../public/asserts/team1 (1).png";
// import team2 from "../../../public/asserts/team1 (2).png";
// import team3 from "../../../public/asserts/team1 (3).png";
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
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-5 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <p className="pb-10">
          Easily create, deploy, and manage fine-tuned models and RAG pipelines
          using intuitive visual tools.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-square w-full mb-4 bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  priority={index < 2}
                />
              </div>
              <h3 className="font-bold text-lg mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
