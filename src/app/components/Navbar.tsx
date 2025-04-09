'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-700 tracking-tight">
          FINETUN<span className="text-gray-900">ai</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          <li><a href="#features" className="hover:text-indigo-600 transition">Features</a></li>
          <li><a href="#team" className="hover:text-indigo-600 transition">Team</a></li>
          <li><a href="#faq" className="hover:text-indigo-600 transition">FAQs</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-10 py-2 rounded-4xl text-white text-sm font-medium shadow-sm">
            Coming Soon
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4 text-sm font-medium  text-gray-700">
            <li><a href="#features" className="block hover:text-indigo-600">Features</a></li>
            <li><a href="#team" className="block hover:text-indigo-600">Team</a></li>
            <li><a href="#faq" className="block hover:text-indigo-600">FAQs</a></li>
            <li><a href="#contact" className="block hover:text-indigo-600">Contact</a></li>
            <li>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-md text-white text-sm font-medium shadow">
                Join Beta
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
