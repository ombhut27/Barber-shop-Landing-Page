import React, { useState } from "react";
import { FaPhoneAlt, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between relative z-30">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo_1.png" alt="Logo" className="h-12 sm:h-14" />
      </div>

      {/* Hamburger menu icon (shows on xs, sm, md) */}
      <div className="lg:hidden z-40">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links (hidden on xs, sm, md, visible on lg+) */}
      <nav className="hidden lg:flex gap-6 font-medium">
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#aboutus" className="hover:text-yellow-400">
          About
        </a>
        <a href="#ourservice" className="hover:text-yellow-400">
          Services
        </a>
        <a href="#ourgallery" className="hover:text-yellow-400">
          Gallery
        </a>
        <a href="#contact-us" className="hover:text-yellow-400">
          Contact
        </a>
      </nav>

      {/* Right Section (hidden on xs, sm, md, visible on lg+) */}
      <div className="hidden lg:flex items-center gap-6">
        <FaGlobe className="text-xl cursor-pointer" />
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-500" />
          <a
            href="tel:+19408081569"
            className="text-white font-semibold hover:underline"
          >
            +1 940 808 1569
          </a>
        </div>
        <a
          href="#contact-us"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
        >
          Book an Appointment
        </a>
      </div>

      {/* Mobile sliding menu from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] z-30 transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col gap-6 font-medium p-8 pt-20 text-white">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Home
          </a>
          <a
            href="#aboutus"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            About
          </a>
          <a
            href="#ourservice"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Services
          </a>
          <a
            href="#ourgallery"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Gallery
          </a>
          <a
            href="#contact-us"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Contact
          </a>
        </nav>

        <div className="p-8 border-t border-gray-700 text-white flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <FaGlobe className="text-xl cursor-pointer" />
            <span>Language</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <FaPhoneAlt />
            <a
              href="tel:+19408081569"
              className="font-semibold hover:underline text-white"
            >
              +1 940 808 1569
            </a>
          </div>
          <a
            href="#contact-us"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded text-center"
          >
            Book an Appointment
          </a>
        </div>
      </div>

    </header>
  );
};

export default Header;
