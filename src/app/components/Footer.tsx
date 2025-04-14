'use client'

import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter, FaDribbble } from 'react-icons/fa';
import trans from "../../../public/asserts/div.pattern-1.png";
import bg from "../../../public/asserts/project-5.jpg.png";

export default function Footer() {
  return (
    <footer className="relative bg-blue-950 text-white py-10 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src={trans}
          alt="Decorative circuit pattern"
          fill
          className="opacity-10 object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Company Info */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">FinetunAI</h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
            FinetunerAI is a no-code platform enabling teams to build, fine-tune, and deploy AI models with custom data—without writing a single line of code. Scalable, secure, and accessible to all.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaPinterestP, FaTwitter, FaDribbble].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Icon className="text-sm md:text-base" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Product Highlights */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Explore Features</h4>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
            {[
              'Visual Workflow Builder',
              'Prompt Engineering Studio',
              'Model Training Interface',
              'RAG with Vector Search',
              'Analytics & Performance',
              'Document Management'
            ].map((link, i) => (
              <li key={i} className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <a href="#" className="hover:text-blue-300 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Portfolio Section */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Platform Snapshots</h4>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {[...Array(6)].map((_, i) => (
              <a key={i} href="#" className="block hover:opacity-80 transition-opacity">
                <div className="relative w-full aspect-square bg-blue-800 rounded-md overflow-hidden">
                  <Image
                    src={bg}
                    alt={`Platform snapshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Get in Touch</h4>
          <div className="space-y-4 md:space-y-6 text-xs md:text-sm">
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Headquarters</h5>
              <p className="text-gray-300">San Francisco, CA · Remote Worldwide</p>
            </div>
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Phone</h5>
              <p className="text-gray-300">+233 55 415 1600</p>
            </div>
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Email</h5>
              <p className="text-gray-300">info@finetunai.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}