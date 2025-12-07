import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import NewsCard from '../components/NewsCard';

function Home() {

  const events = [
    {
      title: "ITG Conference 2026",
      date: "May 26-30, 2026",
      location: "Rochester, NY",
      description: "Join us for our annual conference featuring masterclasses, performances, and networking oppurtunities.",
      imageUrl: "/images/event1.jpg",
      featured: true
    },
    {
      title: "Young Artists Competition",
      date: "July 10, 2026",
      location: "Virtual",
      description: "Showcase your talent in our prestigious youth competition with cash prizes and performance oppurtunities.",
      imageUrl: "/images/event3.jpg",
    },
    {
      title: "Regional Trumpet Festival",
      date: "September 5, 2026",
      location: "Chicago, IL",
      description: "A day of workshops, performances, and exhibitions celebrating trumpet excellence.",
      imageUrl: "/images/event2.jpg",
    }

  ]

  const news = [
    {
      title: "New Teaching Resources Available",
      excerpt: "We've just released a comprehensive collection of teaching materials for trumpet educators at all levels.",
      date: "2 days ago",
      category: "Resources",
      imageUrl: "/images/news1.jpg"
    },
    {
      title: "Competition Winners Announced",
      excerpt: "Congratulations to all participants in the 2025 Young Artists Competition. See the full list of winners and listen to their performances.",
      date: "1 week ago",
      category: "Competitions",
      imageUrl: "/images/news2.jpg"
    },
    {
      title: "Member Spotlight: Evan Atwell",
      excerpt: "This month we're featuring principal trumpet Evan Atwell and his journey from student to professional orchestra musician.",
      date: "2 weeks ago",
      category: "Members",
      imageUrl: "/images/news3.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-text-primary via-gray-800 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-6">
              <span className="text-brand-orange font-semibold text-sm">
                Est. 1975 • 5,000+ Members Worldwide
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Trumpet Players 
              <span className="text-brand-orange"> Worldwide</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with a global community of trumpet enthusiasts, access world-class resources, 
              and elevate your artistry through education, performance, and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/login"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-orange-hover transition-colors font-semibold text-lg shadow-lg hover:shadow-xl text-center inline-block"
              >
                Become a Member
              </Link>
              <Link
                to="/events"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-text-primary transition-all font-semibold text-lg text-center"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10" data-aos="fade-up">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-2">Upcoming Events</h2>
              <p className="text-text-secondary">Don't miss these exciting opportunities</p>
            </div>
            <Link to="/events" className="text-brand-orange hover:text-orange-hover font-semibold hidden md:block">
              View All Events →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <EventCard key={index} {...event} />
              </div>
            ))}
          </div>

          <Link to="/events" className="text-brand-orange hover:text-orange-hover font-semibold mt-6 md:hidden">
            View All Events →
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10" data-aos="fade-up">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-2">Latest News</h2>
              <p className="text-text-secondary">Stay updated with the ITG community</p>
            </div>
            <Link to="/news" className="text-brand-orange hover:text-orange-hover font-semibold hidden md:block">
              View All News →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <NewsCard key={index} {...article} />
              </div>
            ))}
          </div>

          <Link to="/news" className="text-brand-orange hover:text-orange-hover font-semibold mt-6 md:hidden">
            View All News →
          </Link>
        </div>
      </section>

      {/* Why Join ITG Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Why Join ITG?</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Become part of the world's premier trumpet organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Exclusive Resources</h3>
              <p className="text-text-secondary">
                Access our comprehensive library of educational materials, recordings, and the prestigious ITG Journal.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Global Network</h3>
              <p className="text-text-secondary">
                Connect with 5,000+ trumpet players, educators, and professionals across 64 countries worldwide.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎺</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Performance Opportunities</h3>
              <p className="text-text-secondary">
                Participate in competitions, festivals, and the annual ITG Conference featuring world-class artists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;