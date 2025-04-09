// components/NoCodeSection.tsx
export default function NoCodeSection() {
    return (
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Be the First to Build Smarter AI — No Code Needed</h2>
        <p className="mb-8">Sign up to get notified when we launch. No spam, we promise!</p>
        <form className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Name" className="border px-4 py-2 rounded-md" />
          <input type="email" placeholder="Email" className="border px-4 py-2 rounded-md" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Notify Me
          </button>
        </form>
      </section>
    );
  }