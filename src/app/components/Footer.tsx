'use client'
import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter, FaDribbble } from 'react-icons/fa';
import trans from "../../../public/asserts/div.pattern-1.png"
import bg from "../../../public/asserts/project-5.jpg.png"

export default function Footer() {
  return (
    <footer className="relative bg-blue-950 text-white py-16 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={trans} 
          alt="Decorative circuit pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-3xl font-bold mb-4">FinetunerAI</h3>
          <p className="text-gray-300 mb-6">
            FinetunerAI is a no-code platform enabling teams to build, fine-tune, and deploy AI models with custom data—without writing a single line of code. Scalable, secure, and accessible to all.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaPinterestP, FaTwitter, FaDribbble].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Product Highlights */}
        <div>
          <h4 className="text-xl font-bold mb-6">Explore Features</h4>
          <ul className="space-y-3">
            {[
              'Visual Workflow Builder',
              'Prompt Engineering Studio',
              'Model Training Interface',
              'RAG with Vector Search',
              'Analytics & Performance',
              'Document Management'
            ].map((link, i) => (
              <li key={i} className="flex items-center">
                <span className="text-blue-400 mr-2">■</span>
                <a href="#" className="hover:text-blue-300 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Section */}
        <div>
          <h4 className="text-xl font-bold mb-6">Platform Snapshots</h4>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <a key={i} href="#" className="block hover:opacity-80 transition-opacity">
                <div className="relative w-full aspect-square bg-blue-800 rounded-md overflow-hidden">
                  <Image 
                    src={bg}
                    alt={`Platform snapshot ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-6">Get in Touch</h4>
          <div className="space-y-6 text-sm">
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Headquarters</h5>
              <p className="text-gray-300">San Francisco, CA · Remote Worldwide</p>
            </div>
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Phone</h5>
              <p className="text-gray-300">+1 (800) 555-2456</p>
            </div>
            <div>
              <h5 className="text-blue-400 font-medium mb-1">Email</h5>
              <p className="text-gray-300">hello@finetunerai.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
