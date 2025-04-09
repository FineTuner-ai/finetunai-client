// components/Footer.tsx
import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-blue-950 text-white py-16 px-6 overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/api/placeholder/1920/400" 
          alt="Circuit pattern background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* First column - Company Info */}
        <div>
          <h3 className="text-3xl font-bold mb-4">FINETUNERai</h3>
          <p className="text-gray-300 mb-6">
            We will likely assistance organizations keep up accomplish best class positions their separate enterprises & our group works happen that delights need to be disavowed.
          </p>
          
          {/* Social media icons */}
          <div className="flex space-x-3">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-800 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-800 transition-colors">
              <FaPinterestP />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-800 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-800 transition-colors">
              <FaDribbble />
            </a>
          </div>
        </div>

        {/* Second column - Latest Work */}
        <div>
          <h4 className="text-xl font-bold mb-6">Latest Work</h4>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <a key={i} href="#" className="block hover:opacity-80 transition-opacity">
                <div className="relative w-full aspect-square bg-blue-800 rounded-md overflow-hidden">
                  <Image 
                    src={`/api/placeholder/120/120?text=${i+1}`}
                    alt={`Portfolio item ${i+1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Third column - Useful Links */}
        <div>
          <h4 className="text-xl font-bold mb-6">Useful Links</h4>
          <ul className="space-y-3">
            {[
              'Advertising & Marketing',
              'Healthcare & Medicine',
              'Financials & Banking',
              'Data Warehousing',
              'Travel & Hospitality',
              'Media & Entertainment'
            ].map((link, i) => (
              <li key={i} className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <a href="#" className="hover:text-blue-300 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth column - Contact Us */}
        <div>
          <h4 className="text-xl font-bold mb-6">Contact Us</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Office Location</h5>
              <p className="text-gray-300">124, Queens walk 2nd cross Denmark</p>
            </div>
            
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Phone No.</h5>
              <p className="text-gray-300">+00-888-27-240</p>
            </div>
            
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Email Address</h5>
              <p className="text-gray-300">support@info.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}