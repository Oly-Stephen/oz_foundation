import React from 'react';
import { ArrowRight, Users, Heart, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 hero-pattern">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Empowering People, Strengthening Communities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building a{' '}
                <span className="gradient-text">Brighter Future</span>
                <br />
                for Alberta
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Supporting community settlement and growth. Empowering individuals through education and resources for success. 
                Equipping Albertans with the information and tools they need to thrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#donate')}
                className="btn-primary flex items-center justify-center"
              >
                Make a Donation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="btn-outline flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">$40K</div>
                <div className="text-sm text-gray-600">Fundraising Goal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">100+</div>
                <div className="text-sm text-gray-600">Families Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Community Support</h3>
                      <p className="text-sm text-gray-600">Access to essential services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Education & Training</h3>
                      <p className="text-sm text-gray-600">Job training opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Healthcare Access</h3>
                      <p className="text-sm text-gray-600">Medical support & nutrition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 