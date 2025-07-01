import React, { useState, useEffect } from 'react';
import { Menu, X, Search, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Politics', 'Sports', 'Business',  'Lifestyle'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              NewsBlogger
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-700 hover:text-red-600 font-medium transition-all duration-300 group transform hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></span>
              </a>
            ))}
          </nav>

      
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:shadow-sm ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms',
                  animationDelay: `${index * 75}ms`
                }}
              >
                <div className="flex items-center justify-between">
                  {item}
                  <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              </a>
            ))}
            <div className={`px-4 py-2 transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 75}ms` : '0ms' }}>
              <button className="w-full flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:shadow-md">
                <Search className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Search news...</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;