"use client";

import { useState } from "react";
import { submitContactForm, ContactFormData } from "../../lib/api";

export default function WishList() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await submitContactForm(formData);
      
      // Success
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error instanceof Error ? error.message : 'Something went wrong'
      });
    }
  };

  return (
    <section id="wishlist" className="bg-gray-100 text-black py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="w-full max-w-xl mx-auto md:mx-0 md:ml-4 lg:ml-20 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold leading-tight mb-3 md:mb-4">
            Be the First to Build Smarter <br className="hidden sm:block" />
            <span className="text-black">AI No Code Needed</span>
          </h2>
          <p className="text-black mb-4 md:mb-6 text-sm sm:text-base">
            We&apos;re launching soon. Join our early access list and get notified the moment we go live.
          </p>
          <ul className="text-gray-700 space-y-2 md:space-y-3 font-medium text-sm sm:text-base mx-auto md:mx-0 max-w-md text-left">
            <li>• Drag-and-Drop Workflow Builder</li>
            <li>• Visual Prompt Engineering Studio</li>
            <li>• Model Training and Monitoring</li>
            <li>• Document Management with Search & Tagging</li>
            <li>• Real-time Chat Testing Interface</li>
          </ul>
        </div>
        
        {/* Right: Form */}
        <div className="w-full mt-8 md:mt-0 mx-auto md:mx-0 md:mr-4 lg:mr-10 max-w-md bg-transparent">
          {status.submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for joining our wishlist! We'll notify you when we launch.
            </div>
          )}

          {status.error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {status.error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full md:w-auto bg-blue-500 text-white px-4 py-2 sm:py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                status.submitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status.submitting ? 'Processing...' : 'Join the Wishlist'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}