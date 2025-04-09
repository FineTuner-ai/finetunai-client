// components/TeamSection.tsx
export default function TeamSection() {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {["Founder", "CTO", "Design Lead", "ML Engineer"].map((role, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <img src="/team-placeholder.jpg" className="w-24 h-24 mx-auto rounded-full mb-4" alt="Team member" />
              <h3 className="font-semibold">Member Name</h3>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }