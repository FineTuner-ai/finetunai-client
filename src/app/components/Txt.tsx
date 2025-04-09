// components/Testimonial.tsx
export default function Testimonial() {
    return (
      <section className="bg-blue-950 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-2xl mx-auto text-lg italic">
          "FinetunerAI changed the way we deploy machine learning models. We now focus more on our product than infrastructure."
          <footer className="mt-4 text-sm text-blue-300">— Alex Doe, CTO at Startup</footer>
        </blockquote>
      </section>
    );
  }
  