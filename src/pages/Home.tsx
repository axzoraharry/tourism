import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Camera, TreePine, Building2 } from 'lucide-react';

const Home = () => {
  const featuredAttractions = [
    {
      title: 'Radhanagari Dam',
      description: 'Historic dam built in 1907, offering scenic beauty and boating activities',
      image: 'https://images.pexels.com/photos/2386145/pexels-photo-2386145.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/dams'
    },
    {
      title: 'Wildlife Sanctuary',
      description: 'Home to Indian Bison, various bird species, and rich biodiversity',
      image: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/wildlife'
    },
    {
      title: 'Amboli Waterfalls',
      description: 'Spectacular waterfalls surrounded by lush greenery during monsoon',
      image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/waterfalls'
    }
  ];

  const quickLinks = [
    { title: 'Hotels & Stays', icon: Building2, link: '/hotels', color: 'bg-blue-500' },
    { title: 'Wildlife & Birds', icon: TreePine, link: '/wildlife', color: 'bg-green-500' },
    { title: 'Local Shops', icon: MapPin, link: '/shops', color: 'bg-purple-500' },
    { title: 'Photography', icon: Camera, link: '/about', color: 'bg-orange-500' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Radhanagari is a hidden gem! The wildlife sanctuary and dam views are breathtaking. Perfect for nature lovers.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Patel',
      location: 'Pune',
      rating: 5,
      comment: 'Amazing experience! The waterfalls during monsoon are spectacular. Great hospitality from local hotels.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sarah Johnson',
      location: 'International Visitor',
      rating: 5,
      comment: 'One of the most pristine places I\'ve visited in India. The biodiversity here is incredible!',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover <span className="text-green-400">Radhanagari</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Immerse yourself in pristine wilderness, historic dams, cascading waterfalls, 
            and rich wildlife in Maharashtra's natural paradise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/hotels"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Plan Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most spectacular natural wonders and historic landmarks that make Radhanagari unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <Link 
                key={index}
                to={attraction.link}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600">Everything you need for your perfect Radhanagari experience</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.link}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {link.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Visitors Say</h2>
            <p className="text-xl text-gray-600">Real experiences from travelers who discovered Radhanagari's magic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Radhanagari?</h2>
          <p className="text-xl text-green-100 mb-8">
            Start planning your unforgettable journey to one of Maharashtra's most beautiful destinations
          </p>
          <Link 
            to="/contact"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;