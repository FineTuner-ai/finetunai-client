"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

// API function to submit the form
async function submitDemoForm(formData: FormData) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://finetunai-server-2.onrender.com';
  const response = await fetch(`${apiUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Something went wrong');
  }
  
  return data;
}

export default function RequestDemo() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null
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
      // Submit the form using the API function
      await submitDemoForm(formData);
      
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
    <section id="demo" className="bg-gradient-to-b  from-indigo-950 to-gray-900 py-16 md:py-24 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 mt-20">
          <div className="inline-block px-3 py-1 bg-indigo-900/50 rounded-full text-indigo-300 text-xs font-medium tracking-wider mb-3">
            SEE FINETUN AI IN ACTION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience how FineTun AI can transform your workflow with a customized demonstration.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 max-w-xl mx-auto">
          {status.submitted && (
            <div className="mb-6 p-4 bg-indigo-900/50 border border-indigo-500/50 text-indigo-200 rounded-lg">
              Thank you for your interest! Our team will contact you shortly to schedule your demo.
            </div>
          )}

          {status.error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 text-red-200 rounded-lg">
              {status.error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700/60 text-white placeholder-gray-400 border border-gray-600 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700/60 text-white placeholder-gray-400 border border-gray-600 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700/60 text-white placeholder-gray-400 border border-gray-600 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="What are you looking to achieve with FineTun AI?"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg ${
                  status.submitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status.submitting ? 'Processing...' : 'Join Waitlist'}
              </button>
            </div>

            <div className="flex items-center justify-center mt-6 text-gray-400 text-sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              <p>We&apos;ll respond within 24 hours</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}