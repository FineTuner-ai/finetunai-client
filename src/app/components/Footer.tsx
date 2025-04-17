'use client'

import Image from 'next/image';
import { FaXTwitter, FaLinkedinIn, FaRedditAlien, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import { FaArrowRight, FaBook } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/ecosheane/image/upload/v1744755946/div.pattern-1_o1fn1a.png"
          alt="Decorative circuit pattern"
          fill
          className="opacity-5 object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Company Info */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">FineTun AI</h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
            FinetunerAI is a no-code platform enabling teams to build, fine-tune, and deploy AI models with custom data—without writing a single line of code. Scalable, secure, and accessible to all.
          </p>
          <div className="flex space-x-4">
            {[
              { Icon: FaXTwitter, link: "https://x.com/FineTunAI", label: "Twitter" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/finetun-ai/", label: "LinkedIn" },
              { Icon: FaRedditAlien, link: "http://www.reddit.com/user/FineTun-AI/", label: "Reddit" }
            ].map(({ Icon, link, label }, i) => (
              <a 
                key={i} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center hover:bg-indigo-900 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Product Highlights */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-indigo-300">Explore Features</h4>
          <ul className="space-y-3 text-sm md:text-base">
            {[
              'Visual Workflow Builder',
              'Prompt Engineering Studio',
              'Model Training Interface',
              'RAG with Vector Search',
              'Analytics & Performance',
              'Document Management'
            ].map((link, i) => (
              <li key={i} className="flex items-center">
                <span className="text-indigo-500 mr-2">■</span>
                <a href="#" className="hover:text-indigo-300 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Resources Section - Replacing Platform Snapshots */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-indigo-300">Resources</h4>
          <div className="space-y-4">
            {[
              { icon: FaBook, title: "Documentation", desc: "Comprehensive guides to help you get started", link: "/WhyFinetunai" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                className="group flex items-start p-3 bg-indigo-900/20 rounded-lg hover:bg-indigo-900/40 transition-colors duration-300"
              >
                <div className="mr-3 mt-1 p-2 bg-indigo-900/50 rounded-md text-indigo-300 group-hover:text-indigo-200">
                  <item.icon className="text-lg" />
                </div>
                <div>
                  <h5 className="font-medium mb-1 group-hover:text-indigo-300 transition-colors">{item.title}</h5>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                <FaArrowRight className="ml-auto self-center opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-indigo-300">Get in Touch</h4>
          <div className="space-y-4 md:space-y-5 text-sm">
            <div className="flex items-start">
              <FaLocationDot className="text-indigo-500 mr-3 mt-1" />
              <div>
                <h5 className="font-medium mb-1">Headquarters</h5>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-indigo-500 mr-3 mt-1" />
              <div>
                <h5 className="font-medium mb-1">Phone</h5>
                <a href="tel:+15103659609" className="text-gray-300 hover:text-indigo-300 transition-colors">
                  +1 (510) 365-9609
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-indigo-500 mr-3 mt-1" />
              <div>
                <h5 className="font-medium mb-1">Email</h5>
                <a href="mailto:info@finetunai.com" className="text-gray-300 hover:text-indigo-300 transition-colors">
                  info@finetunai.com
                </a>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 pt-6 border-t border-indigo-900">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FinetunAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}