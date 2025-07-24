import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-green-500" />
              <div>
                <h2 className="text-xl font-bold">Radhanagari Tourism</h2>
                <p className="text-gray-400">Discover Natural Beauty</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience the pristine wilderness, majestic dams, cascading waterfalls, and rich wildlife 
              of Radhanagari. Your gateway to nature's paradise in Maharashtra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">About Radhanagari</Link></li>
              <li><Link to="/hotels" className="text-gray-400 hover:text-green-500 transition-colors">Hotels</Link></li>
              <li><Link to="/wildlife" className="text-gray-400 hover:text-green-500 transition-colors">Wildlife</Link></li>
              <li><Link to="/dams" className="text-gray-400 hover:text-green-500 transition-colors">Dams</Link></li>
              <li><Link to="/waterfalls" className="text-gray-400 hover:text-green-500 transition-colors">Waterfalls</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">info@radhanagaritourism.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Radhanagari Wildlife Sanctuary<br />
                  Kolhapur District, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Radhanagari Tourism. All rights reserved. | Designed with ❤️ for nature lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;