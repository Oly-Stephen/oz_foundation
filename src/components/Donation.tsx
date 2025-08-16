import React, { useState } from 'react';
import { Heart, Users, Users2, DollarSign, Gift, Clock } from 'lucide-react';

const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');

  const donationAmounts = [
    { value: '25', label: '$25' },
    { value: '50', label: '$50' },
    { value: '100', label: '$100' },
    { value: '250', label: '$250' },
    { value: '500', label: '$500' },
    { value: 'custom', label: 'Custom' }
  ];

  const volunteerOpportunities = [
    {
      title: "Community Outreach",
      description: "Help guide others to services and support",
      icon: Users,
      time: "2-4 hours/week"
    },
    {
      title: "Event Coordination",
      description: "Assist with fundraising and community events",
      icon: Heart,
      time: "Flexible"
    },
    {
      title: "Resource Support",
      description: "Help connect people with essential services",
      icon: Users2,
      time: "1-3 hours/week"
    }
  ];

  const handleDonation = () => {
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    // In a real application, this would integrate with a payment processor
    alert(`Thank you for your donation of $${amount}! This will help us continue our mission.`);
  };

  return (
    <section id="donate" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            How You Can Help
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A hand up, not a hand out
          </p>
          <p className="text-lg sm:text-xl text-black text-opacity-80 max-w-3xl mx-auto">
            Every contribution supports critical resources and access to health care resources. No donation is too small to make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Donation Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Support Our Mission
              </h3>
              <p className="text-base lg:text-lg text-black text-opacity-80 mb-6 lg:mb-8">
                Every contribution supports critical resources, access to health care resources, and helps us provide a hand up, not a handout.
              </p>
            </div>

            {/* Donation Amount Selection */}
            <div className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => setSelectedAmount(amount.value)}
                    className={`p-3 lg:p-4 rounded-lg border-2 font-semibold transition-all duration-200 text-sm lg:text-base ${
                      selectedAmount === amount.value
                        ? 'border-yellow-600 bg-yellow-50 text-black'
                        : 'border-black border-opacity-20 text-black hover:border-yellow-300 hover:bg-yellow-50'
                    }`}
                  >
                    {amount.label}
                  </button>
                ))}
              </div>

              {selectedAmount === 'custom' && (
                <div className="space-y-2">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-black">
                    Enter custom amount
                  </label>
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm lg:text-base"
                  />
                </div>
              )}

              <button
                onClick={handleDonation}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <DollarSign className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>
                  Donate ${selectedAmount === 'custom' ? customAmount || '0' : selectedAmount}
                </span>
              </button>

              <p className="text-xs lg:text-sm text-black text-opacity-70 text-center">
                Your donation is tax-deductible and will directly support our programs.
              </p>
            </div>
          </div>

          {/* Volunteer Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Volunteer Your Time
              </h3>
              <p className="text-base lg:text-lg text-black text-opacity-80 mb-6 lg:mb-8">
                Volunteers are crucial to our mission. Help guide others to services and support.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <div key={index} className="card p-4 lg:p-6 bg-white shadow-sm rounded-lg border border-black border-opacity-10">
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-semibold text-black mb-2">
                        {opportunity.title}
                      </h4>
                      <p className="text-sm lg:text-base text-black text-opacity-80 mb-2 lg:mb-3">
                        {opportunity.description}
                      </p>
                      <div className="flex items-center text-xs lg:text-sm text-black text-opacity-70">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-yellow-700" />
                        {opportunity.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full border-2 border-yellow-500 text-black hover:bg-yellow-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-700" />
                <span>Become a Volunteer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-black bg-opacity-5 rounded-xl lg:rounded-2xl p-6 lg:p-8 md:p-12 border border-black border-opacity-10">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Partner with Us
              </h3>
              <p className="text-base lg:text-lg text-black text-opacity-80 mb-6 lg:mb-8 max-w-3xl mx-auto">
                Collaborate with local businesses, schools, and organizations to extend community impact and create lasting change.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-10">
                <div className="text-center p-4 lg:p-5 bg-white rounded-lg shadow-sm border border-black border-opacity-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-yellow-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <Users2 className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-700" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-black mb-2">Business Partnerships</h4>
                  <p className="text-sm lg:text-base text-black text-opacity-80">Collaborate with local businesses</p>
                </div>
                
                <div className="text-center p-4 lg:p-5 bg-white rounded-lg shadow-sm border border-black border-opacity-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-yellow-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <Gift className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-700" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-black mb-2">School Collaborations</h4>
                  <p className="text-sm lg:text-base text-black text-opacity-80">Work with educational institutions</p>
                </div>
                
                <div className="text-center sm:col-span-2 lg:col-span-1 p-4 lg:p-5 bg-white rounded-lg shadow-sm border border-black border-opacity-10">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-yellow-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-700" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-black mb-2">Community Organizations</h4>
                  <p className="text-sm lg:text-base text-black text-opacity-80">Extend community impact</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation; 