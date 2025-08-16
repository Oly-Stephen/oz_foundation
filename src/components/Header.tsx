import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Local type to satisfy TS for Vite's import.meta.env
// This avoids editing global env.d.ts and keeps component self-contained.
interface ViteImportMeta extends ImportMeta {
  env: Record<string, string> & { BASE_URL?: string };
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { BASE_URL = '/' } = (import.meta as ViteImportMeta).env;
  const logoSrc = `${BASE_URL}oz_logo_black.png`;

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
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div 
            className="cursor-pointer" 
            onClick={() => scrollToSection('#home')}
          >
            <img 
              src={logoSrc}
              alt="OZ Foundation Logo" 
              className="h-10 w-auto lg:h-14 object-contain"
              title="OZ Settlement Foundation - Empowering Communities"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                // Fallback to relative path, then to favicon as last resort
                if (!t.dataset.fallback) {
                  t.dataset.fallback = '1';
                  t.src = 'oz_logo_black.png';
                } else if (t.dataset.fallback === '1') {
                  t.dataset.fallback = '2';
                  t.src = '/favicon.ico';
                }
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base text-black text-opacity-80 hover:text-yellow-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#donate')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-lg transition-all duration-200 text-xs lg:text-sm"
            >
              Donate Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-black text-opacity-80 hover:text-yellow-600 hover:bg-yellow-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 lg:h-7 lg:w-7" />
            ) : (
              <Menu className="h-6 w-6 lg:h-7 lg:w-7" />
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
                  className="block w-full text-left px-3 py-3 text-sm lg:text-base text-black text-opacity-80 hover:text-yellow-600 hover:bg-yellow-50 rounded-md font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#donate')}
                className="block w-full text-left px-3 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-all duration-200 mt-2 text-sm lg:text-base"
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