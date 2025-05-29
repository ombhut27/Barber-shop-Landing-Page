import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo and Description */}
        <div>
          <div className="mb-4">
            <img src="/logo_1.png" alt="Company Logo" className="h-18" />
          </div>
          <p className="text-sm mb-4">Classic cuts with modern style</p>
          <div className="flex space-x-3">
            <a href="#" className="bg-yellow-700 p-2 rounded-full text-black hover:bg-yellow-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-700 p-2 rounded-full text-black hover:bg-yellow-600 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home"className="hover:text-white">Home</a></li>
            <li><a href="#aboutus"  className="hover:text-white">About</a></li>
            <li><a href="#ourservice" className="hover:text-white">Services</a></li>
            <li><a href="#ourgallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#contact-us" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <div className="flex items-start gap-2 text-sm mb-2">
            <IoLocationSharp className="text-yellow-500 mt-1" />
            <p> 500 N Bell Ave #109, Denton, TX 76209, United States</p>
          </div>
          <p className="text-sm text-gray-400 mt-2">+1 940 612 9127</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe to our newsletter to receive updates and news.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-transparent border border-white rounded text-sm mb-3 focus:outline-none focus:border-yellow-500"
          />
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
        <p>© 2023 PMC Barbershop. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
        </div>
      </div>
    </footer>
  );
}
