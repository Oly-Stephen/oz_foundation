import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, LinkedinIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-primary-400" />
              <div>
                <h3 className="text-lg lg:text-xl font-bold">OZ Foundation</h3>
                <p className="text-xs lg:text-sm text-gray-400">Empowering Communities</p>
              </div>
            </div>
            
            <p className="text-sm lg:text-base text-gray-300 mb-4 lg:mb-6 leading-relaxed">
              The OZ Settlement Foundation is dedicated to supporting community settlement and growth, 
              empowering individuals through education and resources for success. We equip Albertans 
              with the information and tools they need to thrive.
            </p>
            
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400" />
                <span className="text-sm lg:text-base text-gray-300">780-782-8058</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400" />
                <a href="mailto:theozfoundationinfo@gmail.com" className="text-sm lg:text-base text-gray-300 hover:text-white">
                  theozfoundationinfo@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400 mt-1" />
                <span className="text-sm lg:text-base text-gray-300">
                  Edmonton, AB, Canada
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#programs')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#donate')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Get Involved</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#donate')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Support Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#donate')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#donate')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Partner with Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6 lg:mt-8">
              <h5 className="text-xs lg:text-sm font-semibold mb-3 lg:mb-4">Follow Us</h5>
              <div className="flex space-x-3 lg:space-x-4">
                <a href="https://www.facebook.com/theozsettlementfoundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
                <a href="https://www.instagram.com/theozfoundation/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
                <a href="https://www.linkedin.com/company/the-oz-settlement-foundation/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <LinkedinIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 lg:space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xs lg:text-sm text-gray-400">
                © 2024 The OZ Settlement Foundation. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6 text-xs lg:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 