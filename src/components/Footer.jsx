import React from 'react';
import { Youtube, Twitter, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About ITG */}
          <div>
            <div className="w-16 h-16 bg-brand-orange flex items-center justify-center text-white font-bold text-2xl mb-4">
              ITG
            </div>
            <p className="text-gray-400 text-sm">
              The International Trumpet Guild is dedicated to promoting excellence in trumpet performance and education worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">About ITG</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Journal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Membership</a></li>
            </ul>
          </div>

          {/* Support & Community */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support & Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Give</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Store</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Network</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition">My Account</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest news and events from the trumpet community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 International Trumpet Guild. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-orange transition">Privacy Policy</a>
              <a href="#" className="hover:text-brand-orange transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;