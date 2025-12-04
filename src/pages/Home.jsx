import React from 'react';

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-text-primary to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              International Trumpet Guild
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Empowering trumpet players worldwide since 1974
            </p>
            <div className="flex space-x-4">
              <button className="bg-brand-orange text-white px-6 py-3 rounded hover:bg-orange-hover transition">
                Join ITG
              </button>
              <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-text-primary transition">
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="w-full h-48 bg-bg-tertiary rounded mb-4"></div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Event Title {i}</h3>
                <p className="text-text-secondary mb-4">Date • Location</p>
                <button className="text-brand-orange hover:text-orange-hover font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-border-color p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-text-primary mb-2">News Headline {i}</h3>
                <p className="text-text-secondary mb-4">Brief description of the news article...</p>
                <button className="text-brand-orange hover:text-orange-hover font-semibold">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;