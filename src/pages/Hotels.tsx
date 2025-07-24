import React from 'react';
import { MapPin, Phone, Wifi, Car, Coffee, Star, Users } from 'lucide-react';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'Valley View Resort',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Near Radhanagari Dam, Kolhapur',
      phone: '+91-9876543210',
      rating: 4.5,
      reviews: 128,
      description: 'A comfortable stay near Radhanagari Dam with stunning valley views. Perfect for nature enthusiasts and families.',
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Room Service'],
      price: '₹2,500/night',
      features: ['Valley Views', '24/7 Service', 'Nature Walks']
    },
    {
      id: 2,
      name: 'Forest Edge Lodge',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Wildlife Sanctuary Road, Radhanagari',
      phone: '+91-9876543211',
      rating: 4.3,
      reviews: 95,
      description: 'Eco-friendly lodge situated at the edge of the wildlife sanctuary. Experience nature up close.',
      amenities: ['Free WiFi', 'Parking', 'Breakfast', 'Wildlife Tours'],
      price: '₹3,000/night',
      features: ['Wildlife Views', 'Eco-Friendly', 'Guided Tours']
    },
    {
      id: 3,
      name: 'Radhanagari Retreat',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Main Radhanagari Road',
      phone: '+91-9876543212',
      rating: 4.7,
      reviews: 156,
      description: 'Premium retreat offering luxury accommodation with modern amenities and traditional hospitality.',
      amenities: ['Free WiFi', 'Parking', 'Spa', 'Swimming Pool', 'Conference Room'],
      price: '₹4,500/night',
      features: ['Luxury Rooms', 'Spa Services', 'Event Facilities']
    },
    {
      id: 4,
      name: 'Waterfall Inn',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Near Amboli Falls, 25km from Radhanagari',
      phone: '+91-9876543213',
      rating: 4.2,
      reviews: 87,
      description: 'Cozy inn located near the famous Amboli waterfalls. Perfect for monsoon visits.',
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Trekking Guide'],
      price: '₹2,000/night',
      features: ['Waterfall Access', 'Trekking Base', 'Monsoon Special']
    },
    {
      id: 5,
      name: 'Bison Camp',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Core Wildlife Area, Radhanagari',
      phone: '+91-9876543214',
      rating: 4.0,
      reviews: 73,
      description: 'Adventure camp offering tent accommodation and wildlife experiences for thrill seekers.',
      amenities: ['Basic WiFi', 'Parking', 'Camping Gear', 'Safari Tours'],
      price: '₹1,800/night',
      features: ['Tent Stay', 'Wildlife Safari', 'Adventure Activities']
    },
    {
      id: 6,
      name: 'Heritage Villa',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Historic District, Radhanagari',
      phone: '+91-9876543215',
      rating: 4.6,
      reviews: 112,
      description: 'Beautifully restored heritage property showcasing local architecture and culture.',
      amenities: ['Free WiFi', 'Parking', 'Heritage Tours', 'Cultural Programs'],
      price: '₹3,500/night',
      features: ['Heritage Property', 'Cultural Experience', 'Traditional Cuisine']
    }
  ];

  const amenityIcons = {
    'Free WiFi': Wifi,
    'Parking': Car,
    'Restaurant': Coffee,
    'Breakfast': Coffee,
    'Room Service': Users,
    'Spa': Star,
    'Swimming Pool': Users,
    'Conference Room': Users,
    'Wildlife Tours': MapPin,
    'Trekking Guide': MapPin,
    'Camping Gear': Users,
    'Safari Tours': MapPin,
    'Heritage Tours': MapPin,
    'Cultural Programs': Users
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Hotels & Accommodations</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover comfortable stays and luxury retreats in and around Radhanagari. 
            From eco-lodges to heritage properties, find the perfect accommodation for your nature getaway.
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Stay</h2>
            <p className="text-xl text-gray-600">
              From budget-friendly options to luxury retreats, we have something for every traveler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-lg font-bold text-green-600">{hotel.price}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{hotel.rating}</span>
                    <span className="text-sm ml-1">({hotel.reviews} reviews)</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-1" />
                        <span className="text-sm">{hotel.phone}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{hotel.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Special Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.amenities.map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity] || Star;
                        return (
                          <div key={index} className="flex items-center text-gray-600">
                            <IconComponent className="h-4 w-4 mr-2 text-green-600" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors">
                      Book Now
                    </button>
                    <button className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-4 rounded-xl font-semibold transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Tips & Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Time to Visit</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>October to March:</strong> Pleasant weather, ideal for wildlife viewing</li>
                <li>• <strong>June to September:</strong> Monsoon season, waterfalls at their best</li>
                <li>• <strong>April to May:</strong> Summer season, fewer crowds but warmer weather</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Book in advance during peak season (Oct-Mar)</li>
                <li>• Check cancellation policies before booking</li>
                <li>• Confirm wildlife tour availability</li>
                <li>• Ask about package deals including meals and activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;