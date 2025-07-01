// src/components/Header.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ['Home', 'Politics', 'Sports', 'Business', 'Lifestyle'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 bg-red-900">
      <div className="width-ft flex justify-between items-center py-4 px-4 md:px-8">
        <h1 className="text-2xl font-bold text-red-600">NewsBlogger</h1>
        
        {/* Desktop Nav */} 
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-700 hover:text-red-600 font-medium">
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-xl text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 border-b border-gray-200 text-gray-700 hover:text-red-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
