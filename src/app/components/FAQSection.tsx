"use client";

export default function FAQSection() {
  return (
    <section
      id="faqs"
      className="relative flex flex-col py-12 md:py-16 bg-gradient-to-br from-black to-indigo-900 overflow-hidden px-4 md:px-6"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-end md:ml-auto">
        <div className="text-center md:text-right max-w-xl md:max-w-4xl w-full md:pr-8 lg:pr-16">
          <h2 className="text-xl md:text-2xl font-bold my-6 md:m-10 text-white">
            Questions and answers for common ML queries
          </h2>

          <div className="space-y-3 md:space-y-4 w-full">
            <details className="border border-indigo-400 bg-black bg-opacity-70 backdrop-blur-sm rounded-md p-3 md:p-4 text-white">
              <summary className="font-semibold cursor-pointer flex justify-between items-start">
                <span className="pr-4 text-left">What models does your platform support?</span>
                <div className="h-5 w-5 flex-shrink-0 text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-2 text-gray-300 text-left">
                We support leading AI models like OpenAI, Anthropic, Hugging Face, and even your own custom fine-tuned models.
              </p>
            </details>

            <details className="border border-indigo-400 bg-black bg-opacity-70 backdrop-blur-sm rounded-md p-3 md:p-4 text-white">
              <summary className="font-semibold cursor-pointer flex justify-between items-start">
                <span className="pr-4 text-left">Who is FinetunerAI for?</span>
                <div className="h-5 w-5 flex-shrink-0 text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-2 text-gray-300 text-left">
                It's for everyone — no-code creators, data teams, enterprises, and developers who want to build or fine-tune AI without hassle.
              </p>
            </details>

            <details className="border  backdrop-blur-sm rounded-md p-3 md:p-4 text-white">
              <summary className="font-semibold cursor-pointer flex justify-between items-start">
                <span className="pr-4 text-left">Can I share AI apps with others?</span>
                <div className="h-5 w-5 flex-shrink-0 text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-2 text-gray-300 text-left">
                Yes! Easily share apps with your team or clients, control access, or embed them anywhere you like.
              </p>
            </details>

            <details className="border border-indigo-400 bg-black bg-opacity-70 backdrop-blur-sm rounded-md p-3 md:p-4 text-white">
              <summary className="font-semibold cursor-pointer flex justify-between items-start">
                <span className="pr-4 text-left">What if I don't know how to code or use ML?</span>
                <div className="h-5 w-5 flex-shrink-0 text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </summary>
              <p className="mt-2 text-gray-300 text-left">
                No coding needed! Our platform is fully no-code, so you can build, train, and deploy AI apps with a simple drag-and-drop interface.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
