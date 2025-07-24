import React from 'react';
import { Calendar, MapPin, Camera, Waves, Info, Clock, Users } from 'lucide-react';

const Dams = () => {
  const dams = [
    {
      id: 1,
      name: 'Radhanagari Dam',
      image: 'https://images.pexels.com/photos/2386145/pexels-photo-2386145.jpeg?auto=compress&cs=tinysrgb&w=800',
      yearBuilt: 1907,
      height: '32 meters',
      length: '280 meters',
      capacity: '90 million cubic meters',
      significance: 'Primary water source for Kolhapur region and one of the oldest dams in Maharashtra',
      description: 'The historic Radhanagari Dam, built during the British era, stands as an engineering marvel and the lifeline of the region. This magnificent structure not only serves as a crucial water source but also creates a serene reservoir surrounded by lush forests, making it a perfect destination for nature lovers and photography enthusiasts.',
      activities: ['Boating', 'Photography', 'Bird Watching', 'Picnicking'],
      bestTime: 'October to March for pleasant weather, June to September for full reservoir',
      viewingPoints: ['Dam Top Walkway', 'Scenic Viewpoint', 'Boat Jetty', 'Forest Rest House'],
      nearbyAttractions: ['Wildlife Sanctuary', 'Forest Trails', 'Bird Watching Points'],
      facilities: ['Parking', 'Restrooms', 'Boat Rental', 'Guide Services']
    },
    {
      id: 2,
      name: 'Kalammawadi Dam',
      image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
      yearBuilt: 1985,
      height: '28 meters',
      length: '180 meters',
      capacity: '45 million cubic meters',
      significance: 'Important irrigation source for surrounding agricultural areas',
      description: 'Kalammawadi Dam, a relatively newer addition to the region\'s water infrastructure, offers stunning sunset views and peaceful surroundings. The dam creates a beautiful reservoir that attracts various migratory birds during winter months, making it an excellent spot for birdwatching and nature photography.',
      activities: ['Photography', 'Bird Watching', 'Nature Walks', 'Fishing'],
      bestTime: 'November to February for birdwatching, monsoon for scenic beauty',
      viewingPoints: ['Sunset Point', 'Bird Watching Tower', 'Dam Crest', 'Nature Trail Start'],
      nearbyAttractions: ['Agricultural Fields', 'Village Tours', 'Traditional Farming'],
      facilities: ['Basic Parking', 'Nature Trails', 'Bird Watching Hides']
    },
    {
      id: 3,
      name: 'Tulsi Dam',
      image: 'https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&w=800',
      yearBuilt: 1972,
      height: '25 meters',
      length: '150 meters',
      capacity: '30 million cubic meters',
      significance: 'Provides water for local villages and supports small-scale irrigation',
      description: 'Nestled in a picturesque valley, Tulsi Dam is a hidden gem that offers tranquility away from crowds. The serene waters reflect the surrounding hills, creating picture-perfect moments. This smaller dam is ideal for those seeking peace and quiet amidst nature.',
      activities: ['Meditation', 'Photography', 'Nature Study', 'Quiet Reflection'],
      bestTime: 'All year round, especially beautiful during monsoon and winter',
      viewingPoints: ['Valley Viewpoint', 'Quiet Corners', 'Reflection Points'],
      nearbyAttractions: ['Village Temples', 'Traditional Crafts', 'Rural Tourism'],
      facilities: ['Limited Parking', 'Walking Paths', 'Quiet Zones']
    }
  ];

  const activities = [
    {
      icon: Camera,
      name: 'Photography',
      description: 'Capture stunning landscapes, reflections, and wildlife around the dams',
      color: 'blue'
    },
    {
      icon: Waves,
      name: 'Boating',
      description: 'Enjoy peaceful boat rides on Radhanagari reservoir',
      color: 'green'
    },
    {
      icon: Users,
      name: 'Picnicking',
      description: 'Family-friendly spots with scenic views and facilities',
      color: 'purple'
    },
    {
      icon: Clock,
      name: 'Bird Watching',
      description: 'Early morning bird watching sessions near water bodies',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Historic Dams of Radhanagari</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the engineering marvels that have shaped the landscape and supported life in Radhanagari for over a century. 
            From the historic Radhanagari Dam to serene smaller reservoirs, each tells a unique story.
          </p>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Activities at the Dams</h2>
            <p className="text-lg text-gray-600">Experience the best of what our dams have to offer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className={`bg-${activity.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <activity.icon className={`h-8 w-8 text-${activity.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dams Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Major Dams & Reservoirs</h2>
            <p className="text-xl text-gray-600">Explore the water bodies that define Radhanagari's landscape</p>
          </div>

          <div className="space-y-16">
            {dams.map((dam, index) => (
              <div key={dam.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img 
                      src={dam.image} 
                      alt={dam.name}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-gray-900">Built in {dam.yearBuilt}</span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{dam.name}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{dam.description}</p>
                    <p className="text-blue-600 font-semibold mb-4">{dam.significance}</p>
                  </div>

                  {/* Technical Specs */}
                  <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Height:</span>
                        <span className="font-semibold text-gray-900 ml-2">{dam.height}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Length:</span>
                        <span className="font-semibold text-gray-900 ml-2">{dam.length}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Capacity:</span>
                        <span className="font-semibold text-gray-900 ml-2">{dam.capacity}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Year Built:</span>
                        <span className="font-semibold text-gray-900 ml-2">{dam.yearBuilt}</span>
                      </div>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-blue-600" />
                      Activities Available
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dam.activities.map((activity, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best Time & Viewing Points */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-green-600" />
                        Best Time to Visit
                      </h4>
                      <p className="text-gray-700 text-sm">{dam.bestTime}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                        Key Viewing Points
                      </h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        {dam.viewingPoints.map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visitor Information & Guidelines</h2>
            <p className="text-lg text-gray-600">Important information for a safe and enjoyable visit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-2xl">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Safety Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Stay in designated viewing areas</li>
                <li>• Follow safety barriers and warning signs</li>
                <li>• Avoid swimming in reservoir waters</li>
                <li>• Supervise children at all times</li>
                <li>• Wear life jackets during boating</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Visiting Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Summer: 6:00 AM - 6:00 PM</li>
                <li>• Winter: 7:00 AM - 5:30 PM</li>
                <li>• Monsoon: 8:00 AM - 5:00 PM</li>
                <li>• Boat rides: 9:00 AM - 4:00 PM</li>
                <li>• Photography tours available</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Facilities Available</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Parking facilities at all major dams</li>
                <li>• Restrooms and refreshment stalls</li>
                <li>• Boat rental services (Radhanagari Dam)</li>
                <li>• Guide services and information centers</li>
                <li>• Photography equipment rental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Historical Legacy</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Radhanagari Dam, constructed in 1907 during the British colonial period, represents over a century of engineering excellence. 
              Built to address water scarcity and provide irrigation to the region, it has evolved into a crucial ecosystem that supports both 
              human communities and diverse wildlife.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, these dams continue to serve their original purpose while also contributing to tourism, recreation, and environmental 
              conservation. They stand as testaments to the foresight of early planners and the enduring relationship between human 
              engineering and natural landscapes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dams;