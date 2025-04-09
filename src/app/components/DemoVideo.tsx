// components/DemoVideo.tsx
export default function DemoVideo() {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Demo video</h2>
        <p className="mb-8">Find out how FinetunerAI helps you build AI without writing code.</p>
        <div className="w-full max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/placeholder"
              title="Demo Video"
              className="w-full h-full rounded-xl"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }