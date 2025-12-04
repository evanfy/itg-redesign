import React from 'react';

function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About ITG</h3>
            <p className="text-gray-400 text-sm">
              The International Trumpet Guild is dedicated to promoting excellence in trumpet performance and education.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">Journal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">Give</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">Store</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
            {/* Social icons would go here */}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 International Trumpet Guild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;