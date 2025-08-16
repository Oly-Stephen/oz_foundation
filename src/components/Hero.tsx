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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 hero-pattern pt-16 lg:pt-20">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 rounded-full bg-yellow-100 text-yellow-700 text-xs lg:text-sm font-medium">
                <img 
                  src="/oz_logo_black.png" 
                  alt="OZ Foundation Logo" 
                  className="w-4 h-4 lg:w-5 lg:h-5 mr-2" 
                />
                <span>The OZ Foundation</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                <span className="text-yellow-600">Empowering People,</span>
                <br />
                Strengthening Communities
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-black text-opacity-70 leading-relaxed">
                The OZ Foundation is dedicated to creating an environment for people to harness resources useful for daily living.
                We support community settlement and growth by empowering individuals through education and resources for success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('#about')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-sm lg:text-base"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="border-2 border-yellow-500 text-black hover:bg-yellow-50 font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-sm lg:text-base"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-600">$40K</div>
                <div className="text-xs lg:text-sm text-black text-opacity-70">Fundraising Goal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-700">100+</div>
                <div className="text-xs lg:text-sm text-black text-opacity-70">Families Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-800">24/7</div>
                <div className="text-xs lg:text-sm text-black text-opacity-70">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-sm lg:text-base">Community Support</h3>
                      <p className="text-xs lg:text-sm text-black text-opacity-70">Access to essential services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-sm lg:text-base">Education & Training</h3>
                      <p className="text-xs lg:text-sm text-black text-opacity-70">Job training opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black bg-opacity-5 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-sm lg:text-base">Healthcare Resources</h3>
                      <p className="text-xs lg:text-sm text-black text-opacity-70">Access to health care resources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-24 lg:h-24 bg-yellow-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-yellow-300 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -right-6 lg:-right-8 w-8 h-8 lg:w-12 lg:h-12 bg-black rounded-full opacity-10"></div>
          </div>

          {/* Mobile Visual Elements */}
          <div className="lg:hidden">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm">Community Support</h3>
                    <p className="text-xs text-black text-opacity-70">Access to essential services</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm">Education & Training</h3>
                    <p className="text-xs text-black text-opacity-70">Job training opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black bg-opacity-5 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-yellow-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm">Healthcare Resources</h3>
                    <p className="text-xs text-black text-opacity-70">Access to health care resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;