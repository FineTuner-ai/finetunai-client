// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2">FINETUNERai</h3>
            <p>&copy; 2025 All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Latest Work</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Case Study 1</a></li>
              <li><a href="#" className="hover:underline">Case Study 2</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p>Email: support@finetunerai.com</p>
            <p>Twitter: @finetunerai</p>
          </div>
        </div>
      </footer>
    );
  }
  