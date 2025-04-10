// components/ContactForm.tsx
import React from 'react';

export default function ContactForm() {
  return (
    <div id="contact" className="max-w-3xl mx-auto  py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Having any doubt in mind ?</h2>
      
      <div className="flex justify-center items-center mb-4">
        <span className="text-gray-400 flex items-center">
          <span className="w-2 h-2 border border-gray-300 rounded-full"></span>
          <span className="w-6 h-0.5 bg-gray-300"></span>
          <span className="w-2 h-2 border border-gray-300 rounded-full"></span>
        </span>
      </div>
      
      <p className="text-gray-600 text-center mb-8">Contac us</p>
      
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Join the Wishlist
          </button>
        </div>
      </form>
    </div>
  );
}