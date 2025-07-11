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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How You Can Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every contribution supports critical resources. No donation is too small to make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Make a Donation
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Every contribution supports critical resources and helps us provide a hand up, not a handout.
              </p>
            </div>

            {/* Donation Amount Selection */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => setSelectedAmount(amount.value)}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
                      selectedAmount === amount.value
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-300 text-gray-700 hover:border-primary-300 hover:bg-primary-50'
                    }`}
                  >
                    {amount.label}
                  </button>
                ))}
              </div>

              {selectedAmount === 'custom' && (
                <div className="space-y-2">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700">
                    Enter custom amount
                  </label>
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              )}

              <button
                onClick={handleDonation}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>
                  Donate ${selectedAmount === 'custom' ? customAmount || '0' : selectedAmount}
                </span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                Your donation is tax-deductible and will directly support our programs.
              </p>
            </div>
          </div>

          {/* Volunteer Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Volunteer Your Time
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Volunteers are crucial to our mission. Help guide others to services and support.
              </p>
            </div>

            <div className="space-y-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {opportunity.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {opportunity.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {opportunity.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full btn-outline flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Become a Volunteer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Partner with Us
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Collaborate with local businesses, schools, and organizations to extend community impact and create lasting change.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Partnerships</h4>
                  <p className="text-gray-600">Collaborate with local businesses</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">School Collaborations</h4>
                  <p className="text-gray-600">Work with educational institutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Organizations</h4>
                  <p className="text-gray-600">Extend community impact</p>
                </div>
              </div>

              <button className="btn-secondary">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation; 