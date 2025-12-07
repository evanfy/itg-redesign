import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/itg-logo.png" 
              alt="International Trumpet Guild" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-text-primary hover:text-brand-orange transition">
              Home
            </Link>
            <Link to="/events" className="text-text-primary hover:text-brand-orange transition">
              Events
            </Link>
            <Link to="/resources" className="text-text-primary hover:text-brand-orange transition">
              Resources
            </Link>
            <a href="#" className="text-text-primary hover:text-brand-orange transition">
              News
            </a>
            <a href="#" className="text-text-primary hover:text-brand-orange transition">
              Journal
            </a>
            <a href="#" className="text-text-primary hover:text-brand-orange transition">
              Membership
            </a>
            <a href="#" className="text-text-primary hover:text-brand-orange transition">
              Conference
            </a>
            <a href="#" className="text-text-primary hover:text-brand-orange transition">
              About
            </a>
          </nav>

          {/* Right side - Search & Join/Account */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-text-secondary hover:text-brand-orange transition">
              <Search size={20} />
            </button>
            
            {/* This would show when logged in - for now it's hidden */}
            {/* <a 
              href="#" 
              className="flex items-center space-x-2 text-text-primary hover:text-brand-orange transition font-medium"
            >
              <User size={20} />
              <span>My Account</span>
            </a> */}
            
            {/* This shows when logged out */}
            <Link 
              to="/login" 
              className="bg-brand-orange text-white px-6 py-2 rounded hover:bg-orange-hover transition font-semibold"
            >
              Join ITG
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <a href="#" className="block py-2 text-text-primary hover:text-brand-orange font-semibold">
              My Account
            </a>
            <div className="border-b border-border-color my-2"></div>
            <Link to="/" className="block py-2 text-text-primary hover:text-brand-orange">
              Home
            </Link>
            <a href="#" className="block py-2 text-text-primary hover:text-brand-orange">
              News
            </a>
            <Link to="/events" className="block py-2 text-text-primary hover:text-brand-orange">
              Events
            </Link>
            <Link to="/resources" className="block py-2 text-text-primary hover:text-brand-orange">
              Resources
            </Link>
            <a href="#" className="block py-2 text-text-primary hover:text-brand-orange">
              Journal
            </a>
            <a href="#" className="block py-2 text-text-primary hover:text-brand-orange">
              Membership
            </a>

            <a href="#" className="block py-2 text-text-primary hover:text-brand-orange">
             Conference
            </a>
            <a href="#" className="block py-2 text-text-primary hover:text-brand-orange">
              About
            </a>
            <Link to="/login" className="block py-2 text-brand-orange font-semibold">
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;