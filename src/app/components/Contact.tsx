'use client'
import React, { useState } from 'react';
import { submitContactForm, ContactFormData } from "../../lib/api";

export default function ContactForm() {
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
    <div id="contact" className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Having any doubt in mind?</h2>
      
      <div className="flex justify-center items-center mb-4">
        <span className="text-gray-400 flex items-center">
          <span className="w-2 h-2 border border-gray-300 rounded-full"></span>
          <span className="w-6 h-0.5 bg-gray-300"></span>
          <span className="w-2 h-2 border border-gray-300 rounded-full"></span>
        </span>
      </div>
      
      <p className="text-gray-600 text-center mb-8">Contact us</p>
      
      {status.submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {status.error}
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={status.submitting}
            className={`w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              status.submitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}