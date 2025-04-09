// components/FAQSection.tsx
export default function FAQSection() {
    return (
      <section className="py-16 bg-white px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Questions and answers for common ML queries</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "What models does your platform support?",
            "Who is FinetunerAI for?",
            "Can I share AI apps with others?",
            "What if I don't know how to code or use ML?",
          ].map((q, i) => (
            <details key={i} className="border rounded-md p-4">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="mt-2 text-gray-600">Answer for: {q}</p>
            </details>
          ))}
        </div>
      </section>
    );
  }
  