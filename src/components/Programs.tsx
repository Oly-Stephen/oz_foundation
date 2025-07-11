import React from 'react';
import { DollarSign, Heart, GraduationCap, Utensils, Stethoscope, BookOpen } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Empowerment Through Financial Resources",
      description: "Provide financial resources to individuals and families in need",
      icon: DollarSign,
      color: "primary",
      details: {
        goal: "$40,000",
        cost: "$9,300",
        impact: "Direct financial support to families"
      }
    },
    {
      title: "Empowerment Through Access to Basic Needs",
      description: "Ensure access to healthcare, education, and nutrition",
      icon: Heart,
      color: "secondary",
      details: {
        services: ["Healthcare", "Education", "Nutrition"],
        support: ["Healthcare costs", "Education and job training", "Basic nutrition and support"]
      }
    }
  ];

  const services = [
    {
      title: "Healthcare Access",
      description: "Help with healthcare costs and medical support",
      icon: Stethoscope,
      color: "primary"
    },
    {
      title: "Education & Training",
      description: "Education and job training opportunities",
      icon: GraduationCap,
      color: "secondary"
    },
    {
      title: "Nutrition Support",
      description: "Basic nutrition and support services",
      icon: Utensils,
      color: "accent"
    },
    {
      title: "Resource Information",
      description: "Vital information for accessing essential services",
      icon: BookOpen,
      color: "primary"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Programs & Goals
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage financial resources to provide vital information and tools for accessing essential services.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {programs.map((program, index) => (
            <div key={index} className="card p-6 lg:p-8">
              <div className="flex items-start space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-${program.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <program.icon className={`w-6 h-6 lg:w-8 lg:h-8 text-${program.color}-600`} />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600">
                    {program.description}
                  </p>
                </div>
              </div>

              {program.details.goal && (
                <div className="grid grid-cols-3 gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg lg:text-2xl font-bold text-primary-600">{program.details.goal}</div>
                    <div className="text-xs lg:text-sm text-gray-600">Fundraising Goal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg lg:text-2xl font-bold text-secondary-600">{program.details.cost}</div>
                    <div className="text-xs lg:text-sm text-gray-600">Fundraising Cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs lg:text-sm font-semibold text-gray-900">Direct Impact</div>
                    <div className="text-xs lg:text-sm text-gray-600">{program.details.impact}</div>
                  </div>
                </div>
              )}

              {program.details.services && (
                <div className="space-y-3 lg:space-y-4 pt-4 lg:pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm lg:text-base">We Ensure Access to:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {program.details.services.map((service, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-sm lg:text-base text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 text-sm lg:text-base mt-3 lg:mt-4">We Help With:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {program.details.support.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                        <span className="text-sm lg:text-base text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Key Services We Provide
          </h3>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support to help individuals and families access essential resources and build sustainable futures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div key={index} className="card p-4 lg:p-6 text-center">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4`}>
                <service.icon className={`w-6 h-6 lg:w-8 lg:h-8 text-${service.color}-600`} />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h4>
              <p className="text-sm lg:text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl lg:rounded-2xl p-6 lg:p-8 md:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Help Us Build a Brighter Future
            </h3>
            <p className="text-lg lg:text-xl mb-4 lg:mb-6 opacity-90">
              Supporting The OZ Foundation means providing a hand up, not a handout.
            </p>
            <p className="text-base lg:text-lg opacity-80">
              For immigrants and Alberta residents who need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs; 