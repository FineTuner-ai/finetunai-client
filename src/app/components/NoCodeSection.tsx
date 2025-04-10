"use client";

export default function NoCodeSection() {
  return (
    <section id="wishlist" className="bg-gray-50 text-black py-12 sm:py-16 md:py-20 px-4">
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
        <form className="w-full mt-8 md:mt-0 mx-auto md:mx-0 md:mr-4 lg:mr-10 max-w-md bg-transparent space-y-3 md:space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 sm:py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Join the Wishlist
          </button>
        </form>
      </div>
    </section>
  );
}