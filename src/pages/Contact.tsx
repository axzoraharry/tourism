import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-9876543210', '+91-9876543211'],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@radhanagaritourism.com', 'contact@radhanagaritourism.com'],
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Radhanagari Wildlife Sanctuary', 'Kolhapur District, Maharashtra 416209'],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      color: 'orange'
    }
  ];

  const officeLocations = [
    {
      name: 'Main Tourism Office',
      address: 'Wildlife Sanctuary Entrance, Radhanagari',
      phone: '+91-9876543210',
      hours: '8:00 AM - 6:00 PM',
      services: ['General Information', 'Booking Assistance', 'Guide Services', 'Maps & Brochures']
    },
    {
      name: 'Information Center',
      address: 'Near Radhanagari Dam, Kolhapur',
      phone: '+91-9876543211',
      hours: '9:00 AM - 5:00 PM',
      services: ['Hotel Bookings', 'Tour Planning', 'Transportation', 'Emergency Assistance']
    },
    {
      name: 'Forest Department Office',
      address: 'Core Wildlife Area, Radhanagari',
      phone: '+91-9876543212',
      hours: '7:00 AM - 7:00 PM',
      services: ['Wildlife Permits', 'Safari Bookings', 'Conservation Info', 'Research Support']
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'blue' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'pink' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'blue' },
    { icon: Globe, name: 'Website', url: '#', color: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Planning your visit to Radhanagari? We're here to help! Contact us for information about 
            accommodations, wildlife tours, local attractions, and travel assistance.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
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
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="What's this about?"
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
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`bg-${info.color}-100 p-3 rounded-xl flex-shrink-0`}>
                      <info.icon className={`h-6 w-6 text-${info.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`bg-${social.color}-100 hover:bg-${social.color}-200 p-3 rounded-xl transition-colors duration-300 transform hover:scale-110`}
                    >
                      <social.icon className={`h-6 w-6 text-${social.color}-600`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                    <p className="text-sm">Radhanagari Wildlife Sanctuary</p>
                    <p className="text-sm">Kolhapur District, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices & Service Centers</h2>
            <p className="text-xl text-gray-600">Multiple locations to serve you better</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{office.hours}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services Available</h4>
                  <ul className="space-y-1">
                    {office.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are the best months to visit Radhanagari?",
                answer: "October to March is ideal for pleasant weather and wildlife viewing. June to September is perfect for waterfalls and lush scenery during monsoon."
              },
              {
                question: "Do I need permits to visit the wildlife sanctuary?",
                answer: "Entry permits are required for the core wildlife areas. These can be obtained at the Forest Department office or booked in advance through our tourism office."
              },
              {
                question: "Are guides available for wildlife tours?",
                answer: "Yes, certified local guides are available for wildlife tours, bird watching, and nature walks. We recommend booking guides in advance, especially during peak season."
              },
              {
                question: "What accommodation options are available?",
                answer: "We have various options from budget-friendly guesthouses to luxury eco-resorts. Our tourism office can help you find accommodations that suit your preferences and budget."
              },
              {
                question: "How can I reach Radhanagari from major cities?",
                answer: "Radhanagari is well-connected by road. It's 350km from Mumbai (7-8 hours), 230km from Pune (5-6 hours), and 50km from Kolhapur (1.5 hours). We can arrange transportation if needed."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Forest Department</h3>
              <p className="text-2xl font-bold text-green-600">108</p>
              <p className="text-sm text-gray-600">Wildlife emergencies & rescue</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Medical Emergency</h3>
              <p className="text-2xl font-bold text-red-600">102</p>
              <p className="text-sm text-gray-600">Ambulance & medical aid</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Police</h3>
              <p className="text-2xl font-bold text-blue-600">100</p>
              <p className="text-sm text-gray-600">General emergency & security</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;