export default function HeroSection() {
    return (
      <section className="bg-gradient-to-br from-indigo-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Powerful AI Applications Without Writing a Single Line of Code
          </h1>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-800 px-6 py-2 rounded-full font-semibold shadow">
              Join Beta Access
            </button>
            <button className="border border-white px-6 py-2 rounded-full font-semibold">
              Get Newsletter
            </button>
          </div>
        </div>
      </section>
    );
  }