import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Minimind</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mx-3 text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;