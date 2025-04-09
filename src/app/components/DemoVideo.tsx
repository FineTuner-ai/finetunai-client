'use client';

export default function DemoVideo() {
  return (
    <section className="py-20 bg-white flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-4">Step by Step guide</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
        Easily create, deploy, and manage fine-tuned models and RAG pipelines using intuitive visual tools.
      </p>

      {/* Video Card */}
      <div className="relative rounded-[2rem] bg-gradient-to-r from-orange-500 to-pink-500 p-1 max-w-5xl w-full mx-auto">
        <div className="relative rounded-[1.75rem] overflow-hidden bg-white">
          <video
            src="/demo.mp4" // Replace with your actual video path or YouTube iframe if needed
            controls
            className="w-full h-full object-cover"
          ></video>

           <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-300 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.939a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.732z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
