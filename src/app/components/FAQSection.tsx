import Image from 'next/image';
import bgImage from "../../../public/asserts/div.bg-layer.png";

export default function FAQSection() {
  return (
    <section id="faqs" className="relative flex py-16 bg-gradient-to-br from-blue-900 to-blue-950 overflow-hidden px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage}
          alt="Background visualization"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      {/* Main Content aligned to the right */}
      <div className="relative z-10 w-full flex ml-[550px] justify-center">
        <div className="text-right max-w-4xl">
          <h2 className="text-2xl font-bold m-10 text-white">
            Questions and answers for common ML queries
          </h2>
          
          <div className="space-y-4">
            {[
              "What models does your platform support?",
              "Who is FinetunerAI for?",
              "Can I share AI apps with others?",
              "What if I don't know how to code or use ML?",
            ].map((q, i) => (
              <details key={i} className="border border-blue-400 bg-blue-900 bg-opacity-50 backdrop-blur-sm rounded-md p-4 text-white">
                <summary className="font-semibold cursor-pointer flex justify-between items-start">
                  {q}
                  <div className="h-5 w-5 text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-2 text-blue-100">Answer for: {q}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements - Data Visualization Cylinder */}
      <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 z-5 opacity-80">
        <div className="w-64 h-64 rounded-full border border-blue-400 bg-blue-800 bg-opacity-20 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-x-0 h-full flex items-start justify-around">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="h-32 w-2 bg-blue-300 opacity-70 rounded-full" 
                style={{ 
                  height: `${Math.random() * 50 + 30}%`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
              />
            ))}
          </div>
        </div>

       
      </div>
      
      {/* Stylized figure */}
      <div className="hidden md:block absolute left-1/4 bottom-16 z-10">
        <div className="w-10 h-24 bg-blue-100 opacity-70 rounded-md relative">
          {/* Head */}
          <div className="w-6 h-6 rounded-full bg-blue-100 absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
          {/* Arms */}
          <div className="w-16 h-2 bg-blue-100 absolute top-2 left-full rounded-full transform rotate-12"></div>
          <div className="w-16 h-2 bg-blue-100 absolute top-10 -left-14 rounded-full transform -rotate-12"></div>
          {/* Legs */}
          <div className="w-2 h-12 bg-blue-100 absolute -bottom-10 left-2 rounded-full transform rotate-12"></div>
          <div className="w-2 h-12 bg-blue-100 absolute -bottom-10 right-2 rounded-full transform -rotate-12"></div>
        </div>
      </div>
    </section>
  );
}
