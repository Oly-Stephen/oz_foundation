import React from 'react';
import { Quote, Target, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About The OZ Settlement Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to supporting community settlement and growth, empowering individuals through education and resources for success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h3>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Support community settlement and growth by providing essential resources and guidance to newcomers and residents in Alberta.
              </p>
              <p>
                Empower individuals through education and resources for success, helping them build sustainable futures for themselves and their families.
              </p>
              <p>
                Equip Albertans with the information and tools they need to thrive in their communities and access daily living resources.
              </p>
            </div>
          </div>

          {/* Key Values */}
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h4>
                  <p className="text-gray-600">
                    Creating an environment for people to access daily living resources and build strong community connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Education & Empowerment</h4>
                  <p className="text-gray-600">
                    Providing vital information for accessing essential services and opportunities for personal growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h4>
                  <p className="text-gray-600">
                    Leveraging financial resources to provide a hand up, not a handout, to those in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 italic">
              "The best way to find yourself is to lose yourself in service."
            </blockquote>
            <cite className="text-lg text-gray-600 font-medium">
              — Mahatma Gandhi
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 