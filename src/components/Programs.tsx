import React from 'react';
import { DollarSign, Heart, GraduationCap, Utensils, Stethoscope, BookOpen } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Empowerment Through Financial Resources",
      description: "Provide financial resources to individuals and families in need",
      icon: DollarSign,
      color: "yellow",
      details: {
        goal: "$40,000",
        cost: "$9,300",
        impact: "Direct financial support to families"
      }
    },
    {
      title: "Empowerment Through Access to Basic Needs",
      description: "Ensure access to health care resources, education, and nutrition",
      icon: Heart,
      color: "black",
      details: {
        services: ["Health Care Resources", "Education", "Nutrition"],
        support: ["Access to health care resources", "Education and job training", "Basic nutrition and support"]
      }
    }
  ];

  const services = [
    { title: "Health Care Resources", description: "Access to health care resources and medical support", icon: Stethoscope, color: "yellow" },
    { title: "Education & Training", description: "Education and job training opportunities", icon: GraduationCap, color: "yellow" },
    { title: "Nutrition Support", description: "Basic nutrition and support services", icon: Utensils, color: "yellow" },
    { title: "Resource Information", description: "Vital information for accessing essential services", icon: BookOpen, color: "yellow" }
  ];

  const colorClasses = (tone: 'yellow' | 'black') => {
    if (tone === 'yellow') {
      return {
        circle: 'bg-yellow-100',
        icon: 'text-yellow-700',
        pill: 'bg-yellow-50 text-black',
        stat: 'text-yellow-700'
      };
    }
    return {
      circle: 'bg-black/5',
      icon: 'text-black',
      pill: 'bg-black text-white',
      stat: 'text-black'
    };
  };

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">Our Programs and Goals</h2>
          <span className="block h-1 w-20 bg-yellow-500 mx-auto rounded-full"></span>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mt-4">
            We help people harness resources useful for daily living through targeted programs and measurable goals.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {programs.map((program, index) => {
            const c = colorClasses(program.color as 'yellow' | 'black');
            const Icon = program.icon;
            return (
              <div key={index} className="group rounded-2xl border border-black/10 bg-white p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4 lg:mb-6">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full ${c.circle} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${c.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">{program.title}</h3>
                    <p className="text-base lg:text-lg text-gray-700">{program.description}</p>
                  </div>
                </div>

                {/* Details */}
                {program.details.goal && (
                  <div className="grid grid-cols-3 gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className={`text-lg lg:text-2xl font-bold ${c.stat}`}>{program.details.goal}</div>
                      <div className="text-xs lg:text-sm text-gray-600">Fundraising Goal</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg lg:text-2xl font-bold ${c.stat}`}>{program.details.cost}</div>
                      <div className="text-xs lg:text-sm text-gray-600">Fundraising Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs lg:text-sm font-semibold text-black">Direct Impact</div>
                      <div className="text-xs lg:text-sm text-gray-600">{program.details.impact}</div>
                    </div>
                  </div>
                )}

                {program.details.services && (
                  <div className="space-y-3 lg:space-y-4 pt-4 lg:pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-black text-sm lg:text-base">We Ensure Access to:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.details.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm lg:text-base text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                    <h4 className="font-semibold text-black text-sm lg:text-base mt-3 lg:mt-4">We Help With:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.details.support.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-sm lg:text-base text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">Key Services We Provide</h3>
          <p className="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive support to help individuals and families access essential resources and build sustainable futures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isYellow = service.color === 'yellow';
            return (
              <div key={index} className="rounded-2xl border border-black/10 bg-white p-4 lg:p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 lg:w-16 lg:h-16 ${isYellow ? 'bg-yellow-100' : 'bg-black/5'} rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4`}>
                  <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${isYellow ? 'text-yellow-700' : 'text-black'}`} />
                </div>
                <h4 className="text-lg lg:text-xl font-semibold text-black mb-1">{service.title}</h4>
                <p className="text-sm lg:text-base text-gray-700">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="rounded-2xl p-6 lg:p-8 md:p-12 text-black bg-yellow-100 border border-yellow-300">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">Help Us Build a Brighter Future</h3>
            <p className="text-lg lg:text-xl mb-2 opacity-90">Supporting The OZ Foundation means providing a hand up, not a handout.</p>
            <p className="text-base lg:text-lg opacity-80">For immigrants and Alberta residents who need it most.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;