import React from 'react';
import { MapPin, Calendar, Camera, Droplets, AlertTriangle, Info, Clock, TreePine } from 'lucide-react';

const Waterfalls = () => {
  const waterfalls = [
    {
      id: 1,
      name: 'Amboli Waterfall',
      image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '25 km from Radhanagari',
      height: '100 meters',
      difficulty: 'Easy',
      description: 'The crown jewel of the region, Amboli Waterfall is a spectacular cascade that comes alive during the monsoon season. Surrounded by lush greenery and misty clouds, this waterfall offers a magical experience with its powerful flow and pristine pool at the base.',
      bestSeason: 'June to September (Monsoon)',
      accessibility: 'Well-connected by road, short walk from parking',
      activities: ['Photography', 'Nature Walks', 'Bird Watching', 'Meditation'],
      safetyNotes: ['Avoid swimming during heavy flow', 'Watch for slippery rocks', 'Stay on marked paths'],
      nearbyAttractions: ['Amboli Hill Station', 'Sunset Point', 'Kawlesad Point'],
      facilities: ['Parking', 'Refreshments', 'Restrooms', 'Local Guides'],
      peakFlow: 'July-August',
      coordinates: '15.9511°N, 74.0022°E'
    },
    {
      id: 2,
      name: 'Mahabaleshwar Falls',
      image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '35 km from Radhanagari',
      height: '85 meters',
      difficulty: 'Moderate',
      description: 'A hidden gem nestled in dense forests, Mahabaleshwar Falls offers a more secluded experience. The multi-tiered cascade creates several natural pools, making it perfect for nature enthusiasts seeking tranquility away from crowds.',
      bestSeason: 'June to October',
      accessibility: 'Moderate trek through forest trail (2 km)',
      activities: ['Trekking', 'Photography', 'Nature Study', 'Rock Climbing'],
      safetyNotes: ['Carry adequate water', 'Inform someone about your plans', 'Avoid during heavy rains'],
      nearbyAttractions: ['Ancient Temples', 'Dense Forest Trails', 'Wildlife Spotting Areas'],
      facilities: ['Basic Parking', 'Trail Markers', 'Forest Guides'],
      peakFlow: 'August-September',
      coordinates: '15.8901°N, 73.9876°E'
    },
    {
      id: 3,
      name: 'Shivapur Falls',
      image: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '18 km from Radhanagari',
      height: '45 meters',
      difficulty: 'Easy',
      description: 'Perfect for families and beginners, Shivapur Falls is easily accessible and offers a gentle cascade ideal for relaxation. The waterfall maintains flow even in non-monsoon months, making it a year-round destination.',
      bestSeason: 'Year-round, best during monsoon',
      accessibility: 'Easy access, 10-minute walk from road',
      activities: ['Family Picnics', 'Photography', 'Nature Observation', 'Relaxation'],
      safetyNotes: ['Safe for children with supervision', 'Avoid rocks near waterfall', 'Carry first aid'],
      nearbyAttractions: ['Village Tourism', 'Local Markets', 'Traditional Crafts'],
      facilities: ['Good Parking', 'Picnic Areas', 'Shops', 'Medical Aid'],
      peakFlow: 'July-September',
      coordinates: '15.9234°N, 74.0445°E'
    },
    {
      id: 4,
      name: 'Karul Ghat Falls',
      image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '42 km from Radhanagari',
      height: '120 meters',
      difficulty: 'Challenging',
      description: 'For adventure seekers, Karul Ghat Falls presents a challenging trek through rugged terrain. The reward is a breathtaking view of one of the region\'s tallest waterfalls plunging into a deep gorge surrounded by pristine wilderness.',
      bestSeason: 'June to September',
      accessibility: 'Challenging trek (4 km through rough terrain)',
      activities: ['Adventure Trekking', 'Rock Climbing', 'Wilderness Photography', 'Camping'],
      safetyNotes: ['Experienced trekkers only', 'Proper gear essential', 'Weather dependent access'],
      nearbyAttractions: ['Mountain Peaks', 'Wilderness Camping', 'Rare Flora & Fauna'],
      facilities: ['Limited Parking', 'Trail Guides Essential', 'Emergency Communication'],
      peakFlow: 'July-August',
      coordinates: '15.8745°N, 73.9567°E'
    },
    {
      id: 5,
      name: 'Nangartas Falls',
      image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '30 km from Radhanagari',
      height: '65 meters',
      difficulty: 'Moderate',
      description: 'Known for its unique rock formations and crystal-clear pools, Nangartas Falls offers excellent opportunities for nature photography and geological study. The waterfall cascades over ancient rock formations creating stunning visual patterns.',
      bestSeason: 'June to October',
      accessibility: 'Moderate walk (1.5 km) through scenic path',
      activities: ['Geology Study', 'Photography', 'Nature Walks', 'Rock Pool Exploration'],
      safetyNotes: ['Slippery during wet season', 'Watch for loose rocks', 'Stay on designated paths'],
      nearbyAttractions: ['Rock Formations', 'Fossil Sites', 'Geological Wonders'],
      facilities: ['Parking', 'Information Boards', 'Viewing Platforms'],
      peakFlow: 'August-September',
      coordinates: '15.9087°N, 73.9923°E'
    },
    {
      id: 6,
      name: 'Kumbharli Ghat Falls',
      image: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=800',
      distance: '28 km from Radhanagari',
      height: '75 meters',
      difficulty: 'Easy to Moderate',
      description: 'Famous for its rainbow formations during sunny afternoons, Kumbharli Ghat Falls combines natural beauty with spectacular light displays. The mist created by the waterfall often creates beautiful rainbows, making it a photographer\'s paradise.',
      bestSeason: 'June to September',
      accessibility: 'Well-marked trail (1 km) with viewing platforms',
      activities: ['Rainbow Photography', 'Mist Bathing', 'Nature Walks', 'Meditation'],
      safetyNotes: ['Best light conditions afternoon', 'Carry rain protection', 'Watch for wet surfaces'],
      nearbyAttractions: ['Scenic Viewpoints', 'Ghat Road Drive', 'Valley Views'],
      facilities: ['Good Parking', 'Viewing Platforms', 'Photo Points', 'Refreshments'],
      peakFlow: 'July-August',
      coordinates: '15.9312°N, 74.0156°E'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const seasonalInfo = [
    {
      season: 'Monsoon (June-September)',
      icon: Droplets,
      description: 'Peak season with maximum flow and lush surroundings',
      color: 'blue',
      pros: ['Maximum water flow', 'Lush green scenery', 'Cool weather'],
      cons: ['Slippery paths', 'Heavy rainfall', 'Limited accessibility']
    },
    {
      season: 'Post-Monsoon (October-November)',
      icon: TreePine,
      description: 'Ideal time with good flow and pleasant weather',
      color: 'green',
      pros: ['Perfect weather', 'Good water flow', 'Clear visibility'],
      cons: ['Crowded weekends', 'Higher accommodation rates']
    },
    {
      season: 'Winter (December-February)',
      icon: Camera,
      description: 'Reduced flow but excellent for photography',
      color: 'purple',
      pros: ['Pleasant weather', 'Clear skies', 'Easy accessibility'],
      cons: ['Reduced water flow', 'Dry surroundings']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Magnificent Waterfalls</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Discover the spectacular waterfalls around Radhanagari that come alive during monsoon season. 
            From gentle cascades perfect for families to challenging treks for adventure seekers.
          </p>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seasonal Visiting Guide</h2>
            <p className="text-lg text-gray-600">Plan your visit according to the season for the best experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalInfo.map((info, index) => (
              <div key={index} className={`bg-${info.color}-50 p-6 rounded-2xl border border-${info.color}-100`}>
                <div className={`bg-${info.color}-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{info.season}</h3>
                <p className="text-gray-700 text-center mb-4">{info.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {info.pros.map((pro, idx) => (
                        <li key={idx}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Considerations:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {info.cons.map((con, idx) => (
                        <li key={idx}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterfalls Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Waterfalls</h2>
            <p className="text-xl text-gray-600">From easy family visits to challenging adventure treks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {waterfalls.map((waterfall) => (
              <div key={waterfall.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={waterfall.image} 
                    alt={waterfall.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{waterfall.height}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(waterfall.difficulty)}`}>
                      {waterfall.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{waterfall.distance}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{waterfall.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{waterfall.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <div>
                        <div className="text-xs text-gray-500">Best Season</div>
                        <div className="text-sm font-medium">{waterfall.bestSeason}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Droplets className="h-4 w-4 mr-2 text-cyan-600" />
                      <div>
                        <div className="text-xs text-gray-500">Peak Flow</div>
                        <div className="text-sm font-medium">{waterfall.peakFlow}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      Accessibility
                    </h4>
                    <p className="text-sm text-gray-700">{waterfall.accessibility}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Camera className="h-4 w-4 mr-2 text-purple-600" />
                      Activities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {waterfall.activities.map((activity, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-orange-600" />
                      Safety Notes
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {waterfall.safetyNotes.map((note, idx) => (
                        <li key={idx}>• {note}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-blue-600" />
                      Nearby Attractions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {waterfall.nearbyAttractions.map((attraction, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {attraction}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors">
                      Get Directions
                    </button>
                    <button className="flex-1 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 py-3 px-4 rounded-xl font-semibold transition-colors">
                      View Photos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Guidelines & Tips</h2>
            <p className="text-lg text-gray-600">Essential information for a safe and enjoyable waterfall experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Water Safety</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Never swim alone</li>
                <li>• Check water depth</li>
                <li>• Avoid strong currents</li>
                <li>• Watch for slippery rocks</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Timing</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Start early morning</li>
                <li>• Avoid late evening</li>
                <li>• Check weather forecast</li>
                <li>• Plan return before dark</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Carry</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• First aid kit</li>
                <li>• Adequate water</li>
                <li>• Non-slip footwear</li>
                <li>• Rain protection</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Photography Tips</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Protect equipment</li>
                <li>• Use tripod for stability</li>
                <li>• Best light: morning</li>
                <li>• Capture rainbows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Information</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Contacts</h3>
                <p className="text-sm text-gray-700">Forest Department: 108</p>
                <p className="text-sm text-gray-700">Local Police: 100</p>
                <p className="text-sm text-gray-700">Medical Emergency: 102</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nearest Medical Facilities</h3>
                <p className="text-sm text-gray-700">District Hospital: 15 km</p>
                <p className="text-sm text-gray-700">Primary Health Center: 8 km</p>
                <p className="text-sm text-gray-700">Private Clinic: 5 km</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Important Guidelines</h3>
                <p className="text-sm text-gray-700">Always inform someone about your plans</p>
                <p className="text-sm text-gray-700">Carry emergency whistle</p>
                <p className="text-sm text-gray-700">Download offline maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waterfalls;