import React, { useState } from 'react';
import { Search, Eye, MapPin, Calendar, Camera, Info } from 'lucide-react';

const Wildlife = () => {
  const [activeTab, setActiveTab] = useState('birds');
  const [searchTerm, setSearchTerm] = useState('');

  const birds = [
    {
      id: 1,
      name: 'Malabar Pied Hornbill',
      scientificName: 'Anthracoceros coronatus',
      image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Large hornbill with distinctive black and white plumage and impressive casque. One of the most iconic birds of the Western Ghats.',
      habitat: 'Dense forests, fruit trees',
      bestTime: 'Early morning and evening',
      conservationStatus: 'Near Threatened',
      size: '65-70 cm',
      spotting: 'Common near fruiting trees during September-March'
    },
    {
      id: 2,
      name: 'Indian Peafowl',
      scientificName: 'Pavo cristatus',
      image: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'National bird of India, males display spectacular plumage during breeding season. Commonly seen after monsoon rains.',
      habitat: 'Forest edges, grasslands',
      bestTime: 'Early morning, post-monsoon',
      conservationStatus: 'Least Concern',
      size: '100-115 cm',
      spotting: 'Frequently seen on sanctuary trails after rain'
    },
    {
      id: 3,
      name: 'Malabar Grey Hornbill',
      scientificName: 'Ocyceros griseus',
      image: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Endemic hornbill of the Western Ghats with grey plumage and distinctive curved bill.',
      habitat: 'Evergreen and semi-evergreen forests',
      bestTime: 'Morning hours 6-10 AM',
      conservationStatus: 'Least Concern',
      size: '45-50 cm',
      spotting: 'Common in dense forest areas'
    },
    {
      id: 4,
      name: 'White-bellied Treepie',
      scientificName: 'Dendrocitta leucogastra',
      image: 'https://images.pexels.com/photos/1987296/pexels-photo-1987296.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Endemic bird of the Western Ghats with distinctive white belly and rufous back.',
      habitat: 'Dense forest canopy',
      bestTime: 'All day, most active in morning',
      conservationStatus: 'Least Concern',
      size: '40-45 cm',
      spotting: 'Noisy flocks in forest canopy'
    },
    {
      id: 5,
      name: 'Oriental Honey Buzzard',
      scientificName: 'Pernis ptilorhynchus',
      image: 'https://images.pexels.com/photos/1998434/pexels-photo-1998434.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Migratory raptor that visits during winter months, feeds primarily on bee larvae and honey.',
      habitat: 'Forest clearings, edges',
      bestTime: 'October to March',
      conservationStatus: 'Least Concern',
      size: '55-65 cm',
      spotting: 'Winter migrant, soars above forest'
    },
    {
      id: 6,
      name: 'Nilgiri Wood Pigeon',
      scientificName: 'Columba elphinstonii',
      image: 'https://images.pexels.com/photos/1906437/pexels-photo-1906437.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Endemic pigeon of the Western Ghats with distinctive checkered black and white pattern.',
      habitat: 'Dense forest canopy',
      bestTime: 'Early morning',
      conservationStatus: 'Vulnerable',
      size: '42-45 cm',
      spotting: 'High in forest canopy, distinctive call'
    }
  ];

  const animals = [
    {
      id: 1,
      name: 'Indian Bison (Gaur)',
      scientificName: 'Bos gaurus',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Radhanagari is famous for its thriving population of Indian Bison, the largest wild bovine species. These magnificent animals are the star attraction of the sanctuary.',
      habitat: 'Dense forests, grasslands',
      bestTime: 'Early morning and late evening',
      conservationStatus: 'Vulnerable',
      size: '250-330 cm',
      spotting: 'Common in core areas, especially near water sources'
    },
    {
      id: 2,
      name: 'Indian Leopard',
      scientificName: 'Panthera pardus fusca',
      image: 'https://images.pexels.com/photos/1415559/pexels-photo-1415559.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elusive big cat that prowls the forests of Radhanagari. Known for their stealth and adaptability.',
      habitat: 'Dense forests, rocky areas',
      bestTime: 'Dawn and dusk',
      conservationStatus: 'Vulnerable',
      size: '120-180 cm',
      spotting: 'Rarely seen, tracks and pugmarks more common'
    },
    {
      id: 3,
      name: 'Wild Boar',
      scientificName: 'Sus scrofa',
      image: 'https://images.pexels.com/photos/3914634/pexels-photo-3914634.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Robust omnivores that play a crucial role in the forest ecosystem through seed dispersal.',
      habitat: 'Forest floors, agricultural edges',
      bestTime: 'Evening and night',
      conservationStatus: 'Least Concern',
      size: '150-200 cm',
      spotting: 'Common, especially during fruiting season'
    },
    {
      id: 4,
      name: 'Sambar Deer',
      scientificName: 'Rusa unicolor',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Large deer species with impressive antlers in males. Primary prey species for leopards.',
      habitat: 'Forest clearings, grasslands',
      bestTime: 'Early morning and evening',
      conservationStatus: 'Vulnerable',
      size: '180-240 cm',
      spotting: 'Often seen in forest clearings'
    },
    {
      id: 5,
      name: 'Indian Giant Squirrel',
      scientificName: 'Ratufa indica',
      image: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Large colorful squirrel endemic to the Western Ghats, state animal of Maharashtra.',
      habitat: 'Forest canopy',
      bestTime: 'All day, most active in morning',
      conservationStatus: 'Least Concern',
      size: '45-50 cm (body)',
      spotting: 'Common in tall trees, distinctive orange-maroon color'
    },
    {
      id: 6,
      name: 'Sloth Bear',
      scientificName: 'Melursus ursinus',
      image: 'https://images.pexels.com/photos/3914634/pexels-photo-3914634.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Shaggy-coated bear species that feeds primarily on termites and fruits.',
      habitat: 'Dense forests, rocky areas',
      bestTime: 'Early morning and evening',
      conservationStatus: 'Vulnerable',
      size: '140-180 cm',
      spotting: 'Occasionally seen, more active during fruiting season'
    }
  ];

  const currentData = activeTab === 'birds' ? birds : animals;
  const filteredData = currentData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Least Concern': return 'bg-green-100 text-green-800';
      case 'Near Threatened': return 'bg-yellow-100 text-yellow-800';
      case 'Vulnerable': return 'bg-orange-100 text-orange-800';
      case 'Endangered': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Wildlife Sanctuary</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover the incredible biodiversity of Radhanagari Wildlife Sanctuary. 
            Home to over 200 bird species and diverse mammals including the famous Indian Bison.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('birds')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'birds'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Birds ({birds.length})
              </button>
              <button
                onClick={() => setActiveTab('animals')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'animals'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Animals ({animals.length})
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'birds' ? 'Bird Species' : 'Animal Species'}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredData.length} species found {searchTerm && `for "${searchTerm}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((species) => (
              <div key={species.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={species.image} 
                    alt={species.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(species.conservationStatus)}`}>
                      {species.conservationStatus}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{species.size}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{species.name}</h3>
                    <p className="text-sm text-gray-600 italic">{species.scientificName}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{species.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm"><strong>Habitat:</strong> {species.habitat}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm"><strong>Best Time:</strong> {species.bestTime}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm"><strong>Spotting:</strong> {species.spotting}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                      <Camera className="h-4 w-4 mr-2" />
                      View Gallery
                    </button>
                    <button className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center">
                      <Info className="h-4 w-4 mr-2" />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conservation & Wildlife Protection</h2>
            <p className="text-lg text-gray-600">Learn about our efforts to protect and preserve Radhanagari's rich biodiversity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wildlife Monitoring</h3>
              <p className="text-gray-700">Continuous monitoring of wildlife populations and their habitats to ensure long-term conservation success.</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Habitat Protection</h3>
              <p className="text-gray-700">Preserving critical habitats and creating corridors for wildlife movement across the landscape.</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Education</h3>
              <p className="text-gray-700">Ongoing research programs and educational initiatives to promote wildlife awareness and conservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Guidelines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wildlife Viewing Guidelines</h2>
            <p className="text-lg text-gray-600">Help us protect wildlife by following these important guidelines</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-green-600">Do's</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Maintain a safe distance from all animals</li>
                  <li>✓ Follow designated trails and paths</li>
                  <li>✓ Keep noise levels to a minimum</li>
                  <li>✓ Carry binoculars for better viewing</li>
                  <li>✓ Report any unusual wildlife behavior</li>
                  <li>✓ Respect local guides and forest staff</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-red-600">Don'ts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ Don't feed any wild animals</li>
                  <li>✗ Don't use flash photography</li>
                  <li>✗ Don't litter or leave any waste</li>
                  <li>✗ Don't make loud noises or play music</li>
                  <li>✗ Don't venture into restricted areas</li>
                  <li>✗ Don't disturb nesting or breeding animals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wildlife;