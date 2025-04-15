"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close the mobile menu when an option is selected
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`transition-all duration-300 ${
      isScrolled 
        ? "fixed top-0 left-0 right-0 w-full z-50" 
        : "fixed top-4 left-0 right-0 mx-auto max-w-7xl px-4 z-50"
      }`}>
      <nav className={`bg-gray-900 shadow-lg ${isScrolled ? "" : "rounded-3xl"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            <Link href="/" className="cursor-pointer" onClick={handleNavLinkClick}>
              FINETUN<span className="text-indigo-600">AI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 text-base lg:text-lg font-medium text-gray-200">
            <li>
              <a 
                href="/AIStudio" 
                className="hover:text-indigo-400 transition"
                onClick={handleNavLinkClick}
              >
                AI Studio
              </a>
            </li>
            <li>
              <a 
                href="/AIStudio" 
                className="hover:text-indigo-400 transition"
                onClick={handleNavLinkClick}
              >
                AI Cloud
              </a>
            </li>
            <li>
              <a 
                href="/WhyFinetunai" 
                className="hover:text-indigo-400 transition"
                onClick={handleNavLinkClick}
              >
                Why Finetunai
              </a>
            </li>
            <li>
              <a 
                href="/WhyFinetunai" 
                className="hover:text-indigo-400 transition"
                onClick={handleNavLinkClick}
              >
                Resources
              </a>
            </li>
            <li>
              <a 
                href="/WhyFinetunai" 
                className="hover:text-indigo-400 transition"
                onClick={handleNavLinkClick}
              >
                Docs
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#wishlist" onClick={handleNavLinkClick}>
              <button className="bg-indigo-400/10 cursor-pointer hover:bg-indigo-700 transition-colors px-6 lg:px-8 py-2 rounded-full text-white text-sm font-medium shadow-md">
                Coming Soon
              </button>
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
          <div className="md:hidden px-4 sm:px-6 pb-4 bg-gray-900 border-t border-gray-700 rounded-b-xl animate-fadeIn">
            <ul className="space-y-4 text-sm font-medium text-gray-200 py-2">
              <li>
                <a 
                  href="/AIStudio"
                  className="block py-2 hover:text-indigo-400"
                  onClick={handleNavLinkClick}
                >
                  AI Studio
                </a>
              </li>
              <li>
                <a 
                  href="/AIStudio"
                  className="block py-2 hover:text-indigo-400"
                  onClick={handleNavLinkClick}
                >
                  AI Cloud
                </a>
              </li>
              <li>
                <a 
                  href="/WhyFinetunai" 
                  className="block py-2 hover:text-indigo-400"
                  onClick={handleNavLinkClick}
                >
                  Why Finetunai
                </a>
              </li>
              <li>
                <a 
                  href="/WhyFinetunai" 
                  className="block py-2 hover:text-indigo-400"
                  onClick={handleNavLinkClick}
                >
                  Resources
                </a>
              </li>
              <li>
                <a 
                  href="/WhyFinetunai" 
                  className="block py-2 hover:text-indigo-400"
                  onClick={handleNavLinkClick}
                >
                  Docs
                </a>
              </li>
              <li className="pt-2">
                <Link href="#wishlist" onClick={handleNavLinkClick}>
                  <button className="w-full bg-indigo-600/10 cursor-pointer hover:bg-indigo-700 transition-colors px-4 py-3 rounded-full text-white text-sm font-medium shadow-md">
                    Coming Soon
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}