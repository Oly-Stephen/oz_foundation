import React from 'react';
import { Target, DollarSign, GraduationCap, Stethoscope } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Mission Statement
          </h2>
          <span className="block h-1 w-20 bg-yellow-500 mx-auto rounded-full"></span>
        </div>

        {/* Mission Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-yellow-300/60 bg-white shadow-lg p-6 md:p-10 text-center">
            <div className="mx-auto mb-5 md:mb-6 h-12 w-12 md:h-14 md:w-14 rounded-full bg-yellow-100 flex items-center justify-center">
              <Target className="h-6 w-6 md:h-7 md:w-7 text-yellow-700" />
            </div>
            <p className="text-xl md:text-2xl leading-relaxed font-semibold text-black">
              Creating an environment for people to harness resources useful for daily living.
            </p>
          </div>
        </div>

        {/* Pillars (visual chips) */}
        <div className="max-w-5xl mx-auto mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-black/5 p-4">
            <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-yellow-700" />
            </div>
            <span className="text-sm md:text-base font-medium text-black">Financial Resources</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-black/5 p-4">
            <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-yellow-700" />
            </div>
            <span className="text-sm md:text-base font-medium text-black">Health Care Resources</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-black/5 p-4">
            <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-yellow-700" />
            </div>
            <span className="text-sm md:text-base font-medium text-black">Education & Training</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;