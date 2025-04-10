'use client';

export default function NoCodeSection() {
  return (
    <section id="wishlist" className="bg-gray-50  text-black py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text */}
        <div className="max-w-xl ml-20 text-left">
          <h2 className="text-3xl md:text-4xl text-black font-bold leading-tight mb-4">
            Be the First to Build Smarter <br />
            <span className=" text-black">AI No Code Needed</span>
          </h2>
          <p className="text-black mb-6">
            We’re launching soon. Join our early access list and get notified the moment we go live.
          </p>
          <ul className="text-gray-700 space-y-3 font-medium">
            <li>• Drag-and-Drop Workflow Builder</li>
            <li>• Visual Prompt Engineering Studio</li>
            <li>• Model Training and Monitoring</li>
            <li>• Document Management with Search & Tagging</li>
            <li>• Real-time Chat Testing Interface</li>
          </ul>
        </div>

        {/* Right: Form */}
        <form className="w-full border-blue-400 mr-10 max-w-md bg-transparent space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
         <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Join the Wishlist
          </button>
        </form>
      </div>
    </section>
  );
}
