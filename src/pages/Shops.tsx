import React, { useState } from 'react';
import { MapPin, Clock, Phone, ShoppingBag, Gift, Store, Package } from 'lucide-react';

const Shops = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Shops', icon: Store },
    { id: 'general', name: 'General Stores', icon: Package },
    { id: 'handicrafts', name: 'Handicrafts', icon: Gift },
    { id: 'grocery', name: 'Grocery Shops', icon: ShoppingBag },
    { id: 'souvenirs', name: 'Souvenir Shops', icon: Gift }
  ];

  const shops = [
    // General Stores
    {
      id: 1,
      category: 'general',
      name: 'Radhanagari General Store',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Main Bazaar Road, Radhanagari',
      phone: '+91-9876543220',
      hours: '7:00 AM - 9:00 PM',
      description: 'Your one-stop shop for daily essentials, snacks, beverages, and basic travel necessities.',
      specialties: ['Daily Essentials', 'Snacks & Beverages', 'Basic Medicines', 'Travel Supplies']
    },
    {
      id: 2,
      category: 'general',
      name: 'Valley Mart',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Near Bus Stand, Radhanagari',
      phone: '+91-9876543221',
      hours: '6:30 AM - 10:00 PM',
      description: 'Modern general store with a wide range of products including electronics and household items.',
      specialties: ['Electronics', 'Household Items', 'Stationery', 'Mobile Accessories']
    },

    // Handicrafts
    {
      id: 3,
      category: 'handicrafts',
      name: 'Radhanagari Handicrafts',
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Art Street, Radhanagari Bazaar',
      phone: '+91-9876543222',
      hours: '9:00 AM - 7:00 PM',
      description: 'Authentic local handicrafts including woodwork, pottery, and traditional textiles made by local artisans.',
      specialties: ['Wooden Sculptures', 'Traditional Pottery', 'Handwoven Textiles', 'Bamboo Crafts']
    },
    {
      id: 4,
      category: 'handicrafts',
      name: 'Tribal Art Gallery',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Cultural Center Road, Radhanagari',
      phone: '+91-9876543223',
      hours: '10:00 AM - 6:00 PM',
      description: 'Showcasing beautiful tribal art, traditional masks, and cultural artifacts from the region.',
      specialties: ['Tribal Paintings', 'Cultural Masks', 'Traditional Jewelry', 'Folk Art']
    },

    // Grocery Shops
    {
      id: 5,
      category: 'grocery',
      name: 'Fresh Valley Grocers',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Market Square, Radhanagari',
      phone: '+91-9876543224',
      hours: '6:00 AM - 8:00 PM',
      description: 'Fresh fruits, vegetables, and organic produce sourced from local farms around Radhanagari.',
      specialties: ['Fresh Fruits', 'Organic Vegetables', 'Local Honey', 'Dairy Products']
    },
    {
      id: 6,
      category: 'grocery',
      name: 'Farmers Market Co-op',
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Village Road, Radhanagari',
      phone: '+91-9876543225',
      hours: '5:30 AM - 9:00 PM',
      description: 'Cooperative store run by local farmers offering the freshest produce and traditional food items.',
      specialties: ['Farm Fresh Produce', 'Traditional Grains', 'Spices & Herbs', 'Homemade Pickles']
    },

    // Souvenir Shops
    {
      id: 7,
      category: 'souvenirs',
      name: 'Wildlife Memories',
      image: 'https://images.pexels.com/photos/1884952/pexels-photo-1884952.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Sanctuary Gate, Radhanagari',
      phone: '+91-9876543226',
      hours: '8:00 AM - 6:00 PM',
      description: 'Perfect souvenirs to remember your Radhanagari visit - wildlife-themed gifts and local specialties.',
      specialties: ['Wildlife Photographs', 'Miniature Animal Sculptures', 'Nature Books', 'Eco-friendly Bags']
    },
    {
      id: 8,
      category: 'souvenirs',
      name: 'Nature\'s Gift Shop',
      image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=600',
      address: 'Tourism Center, Radhanagari',
      phone: '+91-9876543227',
      hours: '9:00 AM - 7:00 PM',
      description: 'Curated collection of eco-friendly souvenirs, local crafts, and Radhanagari-themed memorabilia.',
      specialties: ['Eco Souvenirs', 'Postcards & Maps', 'Traditional Clothing', 'Local Specialty Foods']
    }
  ];

  const filteredShops = activeCategory === 'all' 
    ? shops 
    : shops.filter(shop => shop.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Local Shops & Markets</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover authentic local products, traditional handicrafts, and daily essentials. 
            Support local businesses while finding unique treasures from Radhanagari.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Shops Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeCategory === 'all' ? 'All Local Shops' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredShops.length} shops available in this category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShops.map((shop) => (
              <div key={shop.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={shop.image} 
                    alt={shop.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      shop.category === 'general' ? 'bg-blue-500' :
                      shop.category === 'handicrafts' ? 'bg-purple-500' :
                      shop.category === 'grocery' ? 'bg-green-500' :
                      'bg-pink-500'
                    }`}>
                      {categories.find(c => c.id === shop.category)?.name.replace(' Shops', '').replace(' Stores', '')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{shop.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{shop.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="text-sm">{shop.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{shop.hours}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{shop.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {shop.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            shop.category === 'general' ? 'bg-blue-100 text-blue-800' :
                            shop.category === 'handicrafts' ? 'bg-purple-100 text-purple-800' :
                            shop.category === 'grocery' ? 'bg-green-100 text-green-800' :
                            'bg-pink-100 text-pink-800'
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className={`flex-1 text-white py-3 px-4 rounded-xl font-semibold transition-colors ${
                      shop.category === 'general' ? 'bg-blue-600 hover:bg-blue-700' :
                      shop.category === 'handicrafts' ? 'bg-purple-600 hover:bg-purple-700' :
                      shop.category === 'grocery' ? 'bg-green-600 hover:bg-green-700' :
                      'bg-pink-600 hover:bg-pink-700'
                    }`}>
                      Visit Shop
                    </button>
                    <button className={`flex-1 border-2 py-3 px-4 rounded-xl font-semibold transition-colors ${
                      shop.category === 'general' ? 'border-blue-600 text-blue-600 hover:bg-blue-50' :
                      shop.category === 'handicrafts' ? 'border-purple-600 text-purple-600 hover:bg-purple-50' :
                      shop.category === 'grocery' ? 'border-green-600 text-green-600 hover:bg-green-50' :
                      'border-pink-600 text-pink-600 hover:bg-pink-50'
                    }`}>
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shopping Tips & Guidelines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <Gift className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Authentic Products</h3>
              <p className="text-gray-700">Look for local certification and ask about the origin of handicrafts to ensure authenticity.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <ShoppingBag className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fresh Produce</h3>
              <p className="text-gray-700">Visit grocery shops early morning for the freshest fruits and vegetables from local farms.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <Store className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Local</h3>
              <p className="text-gray-700">Support local artisans and farmers by purchasing directly from community-run stores.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shops;