import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-sm lg:text-base text-gray-700">780-782-8058</p>
                    <p className="text-xs lg:text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-sm lg:text-base text-gray-700">
                      Edmonton, AB, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-sm lg:text-base text-gray-700">theozfoundationinfo@gmail.com</p>
                    <p className="text-xs lg:text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/theozfoundation/" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base text-gray-700">
                      @theozfoundation
                    </a>
                    <p className="text-xs lg:text-sm text-gray-500">Follow us for updates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-sm lg:text-base text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">Contact Person</h4>
              <div className="space-y-1 lg:space-y-2">
                <p className="text-base lg:text-lg font-semibold text-gray-900">David Oziegbe</p>
                <p className="text-sm lg:text-base text-gray-700">Executive Director</p>
                <p className="text-xs lg:text-sm text-gray-600">The OZ Settlement Foundation</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                  placeholder="(780) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                  placeholder="Tell us how we can help you or how you'd like to get involved..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Removed 'Find Us' section as requested */}
        
      </div>
    </section>
  );
};

export default Contact;