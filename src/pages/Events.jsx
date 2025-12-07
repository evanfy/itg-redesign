import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { Search, Calendar, Filter } from 'lucide-react';

function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample events data (we'll expand this)
  const allEvents = [
    {
      title: "ITG Conference 2025",
      date: "June 15-18, 2025",
      location: "Boston, MA",
      description: "Join us for our annual conference featuring masterclasses, performances, and networking opportunities with world-renowned trumpet artists.",
      category: "conference",
      imageUrl: "/images/event1.jpg",
      featured: true
    },
    {
      title: "Young Artists Competition",
      date: "March 10, 2025",
      location: "Virtual",
      description: "Showcase your talent in our prestigious youth competition with cash prizes and performance opportunities.",
      imageUrl: "/images/event2.jpg",
      category: "competition"
    },
    {
      title: "Regional Trumpet Festival",
      date: "April 5, 2025",
      location: "Chicago, IL",
      description: "A day of workshops, performances, and exhibitions celebrating trumpet excellence in the Midwest region.",
      imageUrl: "/images/event3.jpg",
      category: "upcoming"
    },
    {
      title: "Jazz Trumpet Masterclass Series",
      date: "February 20-22, 2025",
      location: "New Orleans, LA",
      description: "Three-day intensive masterclass series focusing on jazz improvisation and performance techniques.",
      category: "upcoming"
    },
    {
      title: "International Solo Competition",
      date: "May 1, 2025",
      location: "Virtual",
      description: "Compete against the world's finest trumpet soloists. Open to all ages and skill levels with separate divisions.",
      category: "competition"
    },
    {
      title: "Orchestral Audition Workshop",
      date: "March 15, 2025",
      location: "New York, NY",
      description: "Prepare for professional orchestral auditions with principal players from top orchestras.",
      category: "upcoming"
    },
    {
      title: "ITG Conference 2024",
      date: "June 10-13, 2024",
      location: "Denver, CO",
      description: "Our most successful conference to date with over 500 attendees from around the globe.",
      category: "past"
    },
    {
      title: "Summer Trumpet Institute",
      date: "July 8-21, 2025",
      location: "Los Angeles, CA",
      description: "Two-week intensive program for advanced high school and college students.",
      category: "upcoming"
    }
  ];

  // Filter events based on active category and search
  const filteredEvents = allEvents.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.category === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'competition', label: 'Competitions' },
    { id: 'conference', label: 'Conferences' },
    { id: 'past', label: 'Past Events' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-bg-secondary py-16 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4" data-aos="fade-up">
            <Calendar className="text-brand-orange mr-3" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Events</h1>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            Discover conferences, competitions, workshops, and festivals happening in the trumpet community worldwide.
          </p>
          
          {/* Calendar Info */}
          <div className="mt-6 pt-6 border-t border-border-color" data-aos="fade-up" data-aos-delay="200">
            <p className="text-sm text-text-secondary mb-2">
              Calendar updated by Dr. Albert Lilly
            </p>
            <a 
              href="#" 
              className="text-brand-orange hover:text-orange-hover font-medium text-sm inline-flex items-center"
            >
              Submit items to be included on the ITG calendar →
            </a>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-border-color sticky top-16 z-40"></section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-border-color sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeFilter === filter.id
                      ? 'bg-brand-orange text-white'
                      : 'bg-bg-tertiary text-text-secondary hover:bg-bg-secondary'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <p className="text-text-secondary mb-6">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </p>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="mx-auto text-text-secondary mb-4" size={48} />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No events found</h3>
              <p className="text-text-secondary">
                Try adjusting your filters or search term
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Don't Miss Out
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Become a member to get exclusive early access to event registration and member-only competitions.
          </p>
          <Link 
            to="/login"
            className="bg-brand-orange text-white px-8 py-3 rounded-lg hover:bg-orange-hover transition font-semibold text-lg inline-block"
          >
            Join ITG Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Events;