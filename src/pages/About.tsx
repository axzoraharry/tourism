import React from 'react';
import { MapPin, Calendar, Users, Camera } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: 'Located in Kolhapur district, easily accessible from major cities like Mumbai and Pune'
    },
    {
      icon: Calendar,
      title: 'Rich History',
      description: 'Established in 1907, one of the oldest wildlife sanctuaries in Maharashtra'
    },
    {
      icon: Users,
      title: 'Cultural Heritage',
      description: 'Home to local tribes with rich traditions and sustainable living practices'
    },
    {
      icon: Camera,
      title: 'Photography Paradise',
      description: 'Stunning landscapes, diverse wildlife, and scenic views perfect for photographers'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/2386145/pexels-photo-2386145.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Radhanagari Dam'
    },
    {
      url: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Wildlife Sanctuary'
    },
    {
      url: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Monsoon Waterfalls'
    },
    {
      url: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Forest Trails'
    },
    {
      url: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sunset Views'
    },
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bison Habitat'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About Radhanagari</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the fascinating history, natural beauty, and cultural significance of one of 
              Maharashtra's most pristine wildlife sanctuaries and tourist destinations.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Rich Historical Legacy</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Radhanagari Wildlife Sanctuary, established in 1907, stands as one of Maharashtra's 
                  oldest and most significant protected areas. Originally created to safeguard the 
                  Radhanagari Dam and its surrounding watershed, it has evolved into a crucial 
                  conservation area spanning over 280 square kilometers.
                </p>
                <p>
                  The region derives its name from 'Radha', symbolizing natural beauty, and 'nagari', 
                  meaning town or settlement. This aptly represents the harmony between human 
                  habitation and nature that has existed here for centuries.
                </p>
                <p>
                  The sanctuary gained prominence when it became the first successful breeding ground 
                  for the Indian Bison (Gaur) conservation program, making it a model for wildlife 
                  conservation efforts across India.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2386145/pexels-photo-2386145.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Historical Radhanagari Dam"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">1907</div>
                  <div className="text-sm">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique features that make Radhanagari a must-visit destination for nature enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Natural Wonders & Cultural Significance</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Biodiversity Hotspot</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Radhanagari is home to over 200 species of birds, including the magnificent Malabar Pied Hornbill, 
                    and houses the largest population of Indian Bison in Maharashtra. The sanctuary's diverse ecosystems 
                    support leopards, deer, wild boar, and numerous endemic species.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scenic Landscapes</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    From the serene waters of Radhanagari Dam to the cascading waterfalls during monsoon, 
                    the region offers breathtaking vistas. Dense forests, rolling hills, and pristine streams 
                    create a photographer's paradise and nature lover's dream destination.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cultural Heritage</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The area around Radhanagari has been inhabited for centuries by indigenous communities 
                    who have maintained a sustainable relationship with nature. Their traditional knowledge 
                    and practices contribute significantly to the region's conservation efforts.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area:</span>
                    <span className="font-semibold">280 sq km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Elevation:</span>
                    <span className="font-semibold">550-750 m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Climate:</span>
                    <span className="font-semibold">Tropical</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Season:</span>
                    <span className="font-semibold">Oct-Mar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance from Mumbai:</span>
                    <span className="font-semibold">350 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance from Pune:</span>
                    <span className="font-semibold">230 km</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Map</h3>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Radhanagari, Kolhapur District</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Image Gallery</h2>
            <p className="text-xl text-gray-600">Capture the essence of Radhanagari through these stunning visuals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;