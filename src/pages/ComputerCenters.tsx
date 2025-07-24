import React from 'react';
import { MapPin, Phone, Clock, Printer, Wifi, Monitor, HardDrive, Camera } from 'lucide-react';

const ComputerCenters = () => {
  const centers = [
    {
      id: 1,
      name: 'Digital Help Services',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Bus Stand Road, Radhanagari',
      phone: '+91-9876543230',
      hours: '8:00 AM - 8:00 PM',
      owner: 'Rajesh Kumar',
      description: 'Complete digital solutions including printing, scanning, photocopying, and basic computer services for tourists and locals.',
      services: [
        'Printing & Photocopying',
        'Document Scanning',
        'Internet Access',
        'Email Services',
        'Mobile Recharge',
        'Photo Printing'
      ],
      specialFeatures: ['High-Speed Internet', '24/7 Support', 'Tourist Assistance'],
      priceRange: '₹5-50 per service'
    },
    {
      id: 2,
      name: 'Cyber Connect',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Main Market Road, Radhanagari',
      phone: '+91-9876543231',
      hours: '7:00 AM - 10:00 PM',
      owner: 'Priya Sharma',
      description: 'Modern cyber cafe with high-speed internet, printing services, and digital photography solutions.',
      services: [
        'High-Speed Internet',
        'Color Printing',
        'Digital Photography',
        'Document Typing',
        'CD/DVD Services',
        'Online Form Filling'
      ],
      specialFeatures: ['Gaming Zone', 'Video Calling', 'Online Booking'],
      priceRange: '₹10-100 per service'
    },
    {
      id: 3,
      name: 'Tech Support Center',
      image: 'https://images.pexels.com/photos/4792087/pexels-photo-4792087.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Near Wildlife Office, Radhanagari',
      phone: '+91-9876543232',
      hours: '9:00 AM - 7:00 PM',
      owner: 'Amit Patil',
      description: 'Professional computer center offering technical support, repairs, and comprehensive digital services.',
      services: [
        'Computer Repairs',
        'Data Recovery',
        'Software Installation',
        'Virus Removal',
        'Hardware Upgrades',
        'Technical Support'
      ],
      specialFeatures: ['Expert Technicians', 'Quick Service', 'Warranty Support'],
      priceRange: '₹50-500 per service'
    },
    {
      id: 4,
      name: 'Quick Print Solutions',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Tourism Center Complex, Radhanagari',
      phone: '+91-9876543233',
      hours: '8:30 AM - 6:30 PM',
      owner: 'Sunita Desai',
      description: 'Specialized printing center focusing on tourist needs - maps, documents, photos, and travel-related services.',
      services: [
        'Tourist Map Printing',
        'Photo Printing',
        'Document Lamination',
        'Banner Printing',
        'Travel Documents',
        'Emergency Services'
      ],
      specialFeatures: ['Tourist Friendly', 'Multiple Languages', 'Emergency Hours'],
      priceRange: '₹3-80 per service'
    },
    {
      id: 5,
      name: 'Digital Zone',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'College Road, Radhanagari',
      phone: '+91-9876543234',
      hours: '6:00 AM - 9:00 PM',
      owner: 'Vishnu Jadhav',
      description: 'Student-friendly center with affordable rates, internet access, and educational support services.',
      services: [
        'Student Discounts',
        'Project Printing',
        'Research Support',
        'Online Courses',
        'Educational Software',
        'Study Materials'
      ],
      specialFeatures: ['Student Discounts', 'Group Bookings', 'Extended Hours'],
      priceRange: '₹2-40 per service'
    },
    {
      id: 6,
      name: 'Express Computers',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Government Hospital Road, Radhanagari',
      phone: '+91-9876543235',
      hours: '9:00 AM - 8:00 PM',
      owner: 'Deepak Khot',
      description: 'Express service center for urgent computer needs, document processing, and emergency digital services.',
      services: [
        'Express Printing',
        'Urgent Repairs',
        'Same-Day Service',
        'Government Forms',
        'Medical Reports',
        'Emergency Support'
      ],
      specialFeatures: ['Express Service', 'Government Approved', 'Medical Support'],
      priceRange: '₹10-150 per service'
    }
  ];

  const serviceIcons = {
    'Printing & Photocopying': Printer,
    'Document Scanning': Camera,
    'Internet Access': Wifi,
    'Email Services': Monitor,
    'Mobile Recharge': Phone,
    'Photo Printing': Camera,
    'High-Speed Internet': Wifi,
    'Color Printing': Printer,
    'Digital Photography': Camera,
    'Document Typing': Monitor,
    'CD/DVD Services': HardDrive,
    'Online Form Filling': Monitor,
    'Computer Repairs': Monitor,
    'Data Recovery': HardDrive,
    'Software Installation': Monitor,
    'Virus Removal': Monitor,
    'Hardware Upgrades': HardDrive,
    'Technical Support': Monitor,
    'Tourist Map Printing': Printer,
    'Document Lamination': Printer,
    'Banner Printing': Printer,
    'Travel Documents': Printer,
    'Emergency Services': Phone,
    'Student Discounts': Monitor,
    'Project Printing': Printer,
    'Research Support': Monitor,
    'Online Courses': Wifi,
    'Educational Software': Monitor,
    'Study Materials': Printer,
    'Express Printing': Printer,
    'Urgent Repairs': Monitor,
    'Same-Day Service': Clock,
    'Government Forms': Printer,
    'Medical Reports': Printer,
    'Emergency Support': Phone
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Computer Centers & Digital Services</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Access modern digital services, printing facilities, and technical support in Radhanagari. 
            Stay connected and handle your digital needs with professional, reliable service.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-lg text-gray-600">Comprehensive digital solutions for tourists and locals</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: Printer, name: 'Printing', color: 'blue' },
              { icon: Camera, name: 'Scanning', color: 'green' },
              { icon: Wifi, name: 'Internet', color: 'purple' },
              { icon: Monitor, name: 'Computer Use', color: 'orange' },
              { icon: HardDrive, name: 'Data Services', color: 'red' },
              { icon: Phone, name: 'Mobile Services', color: 'indigo' }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${service.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Centers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Computer Centers in Radhanagari</h2>
            <p className="text-xl text-gray-600">Professional digital services at your fingertips</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {centers.map((center) => (
              <div key={center.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={center.image} 
                    alt={center.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-indigo-600">{center.priceRange}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{center.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Owner: {center.owner}</p>
                      <div className="flex items-center text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{center.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Phone className="h-4 w-4 mr-1" />
                        <span className="text-sm">{center.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{center.hours}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{center.description}</p>

                  {/* Special Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Special Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.specialFeatures.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Available Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {center.services.map((service, index) => {
                        const IconComponent = serviceIcons[service] || Monitor;
                        return (
                          <div key={index} className="flex items-center text-gray-600">
                            <IconComponent className="h-4 w-4 mr-2 text-indigo-600" />
                            <span className="text-sm">{service}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors">
                      Visit Center
                    </button>
                    <button className="flex-1 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-xl font-semibold transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Usage Guidelines & Tips</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Tourists</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Carry valid ID for internet access</li>
                <li>• Ask for tourist maps and local information</li>
                <li>• Most centers accept both cash and digital payments</li>
                <li>• Emergency services available at select centers</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Services & Pricing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Printing: ₹3-10 per page</li>
                <li>• Internet: ₹20-50 per hour</li>
                <li>• Scanning: ₹5-15 per page</li>
                <li>• Photo printing: ₹10-25 per photo</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Operating Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Most centers: 8:00 AM - 8:00 PM</li>
                <li>• Some offer extended hours till 10:00 PM</li>
                <li>• Limited Sunday operations</li>
                <li>• Emergency services on call</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerCenters;