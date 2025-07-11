import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 lg:h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-primary-600" />
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-900">OZ Foundation</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Empowering Communities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#donate')}
              className="btn-primary text-xs lg:text-sm"
            >
              Donate Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 lg:h-6 lg:w-6" />
            ) : (
              <Menu className="h-5 w-5 lg:h-6 lg:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-3 text-sm lg:text-base text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#donate')}
                className="block w-full text-left px-3 py-3 btn-primary mt-2 text-sm lg:text-base"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 