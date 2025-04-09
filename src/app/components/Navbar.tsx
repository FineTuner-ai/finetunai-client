export default function Navbar() {
    return (
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-700">FINETUNERai</div>
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
            <li><a href="#team" className="hover:text-indigo-600">Team</a></li>
            <li><a href="#faq" className="hover:text-indigo-600">FAQs</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
            Join Beta
          </button>
        </div>
      </nav>
    );
  }
  