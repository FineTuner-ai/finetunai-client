// components/Features.tsx
export default function Features() {
    return (
      <section className="py-16 text-center bg-white">
        <h2 className="text-2xl font-bold mb-12">A No-Code Platform Designed for AI Builders</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <img src="/placeholder1.png" alt="Design AI Workflows" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg mb-2">Design AI Workflows Visually</h3>
            <p>Use our visual editor to drag, drop, and connect models effortlessly.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <img src="/placeholder2.png" alt="Deploy and Manage" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg mb-2">Seamlessly Manage Your Data</h3>
            <p>Pre-process, upload and automate datasets with no technical hurdles.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <img src="/placeholder3.png" alt="No Code Projects" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg mb-2">Create and Deploy Projects Without Code</h3>
            <p>Launch production-ready AI systems directly from the dashboard.</p>
          </div>
        </div>
      </section>
    );
  }