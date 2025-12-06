import React, { useState } from 'react';
import { Search, BookOpen, Trophy, Users, Heart, GraduationCap, Info, FileText, Music, Calendar, Award, DollarSign } from 'lucide-react';

function Resources() {
  const [searchTerm, setSearchTerm] = useState('');

  // Featured resources
  const featuredResources = [
    {
      icon: <BookOpen size={32} />,
      title: "ITG Journal",
      description: "Quarterly publication featuring articles on history, performance, pedagogy, and trumpet literature. Includes free supplements.",
      link: "#",
      color: "bg-blue-500"
    },
    {
      icon: <Calendar size={32} />,
      title: "Annual Conference",
      description: "The premier trumpet event of the year featuring world-class artists, masterclasses, competitions, and networking opportunities.",
      link: "#",
      color: "bg-purple-500"
    },
    {
      icon: <Trophy size={32} />,
      title: "Competitions",
      description: "International solo and jazz competitions with cash prizes and performance opportunities for students and professionals.",
      link: "#",
      color: "bg-green-500"
    }
  ];

  // Resource categories
  const resourceCategories = [
    {
      icon: <FileText size={24} />,
      title: "Publications & Research",
      description: "Access the ITG Journal archive, research library, and commissioned works.",
      items: ["Journal Archive", "Research Library", "Book Reprints", "Commissioned Music"],
      link: "#"
    },
    {
      icon: <Award size={24} />,
      title: "Competitions & Awards",
      description: "Solo, jazz, and orchestral competitions with scholarships and prizes.",
      items: ["Ellsworth Smith Competition", "Carmine Caruso Jazz Competition", "Conference Competitions"],
      link: "#"
    },
    {
      icon: <Users size={24} />,
      title: "Member Services",
      description: "Exclusive resources and services for ITG members.",
      items: ["Member Directory", "Employment Listings", "Video Library", "Pedagogy Resources"],
      link: "#"
    },
    {
      icon: <Heart size={24} />,
      title: "Support & Giving",
      description: "Support ITG's mission through donations and endowments.",
      items: ["Memorial Fund", "Legacy Endowment", "Sponsor-a-Trumpeter Program"],
      link: "#"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Education & Teaching",
      description: "Resources for educators and students at all levels.",
      items: ["Pedagogical Articles", "SmartMusic Integration", "Student Scholarships", "Teaching Materials"],
      link: "#"
    },
    {
      icon: <Info size={24} />,
      title: "About ITG",
      description: "Learn about ITG's history, governance, and worldwide chapters.",
      items: ["ITG Handbook", "History & Mission", "Affiliate Chapters", "Board & Officers"],
      link: "#"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-bg-secondary py-16 border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4" data-aos="fade-up">
            <BookOpen className="text-brand-orange mr-3" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Resources</h1>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            Explore our comprehensive collection of publications, educational materials, competitions, and member services.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-8" data-aos="fade-up">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white border-2 border-border-color rounded-lg p-6 hover:border-brand-orange hover:shadow-lg transition-all h-full">
                  <div className={`${resource.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-orange transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {resource.description}
                  </p>
                  <span className="text-brand-orange font-semibold inline-flex items-center">
                    Learn More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-primary mb-8" data-aos="fade-up">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-border-color"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-brand-orange/10 p-3 rounded-lg text-brand-orange mr-4">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-text-secondary flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={category.link}
                  className="text-brand-orange hover:text-orange-hover font-semibold text-sm inline-flex items-center"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITG Purpose Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ITG Purpose</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The International Trumpet Guild is a world-wide organization formed to promote communication 
              among trumpet players around the world and to improve the artistic level of performance, 
              teaching, and literature associated with the trumpet.
            </p>
            <p className="text-gray-300">
              Our approximately 5,000 members represent 64 countries and include professional and amateur 
              performers, teachers, students, manufacturers, publishers, and others dedicated to the trumpet profession.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-orange-hover transition font-semibold inline-block"
              >
                Learn More About ITG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-bg-secondary border-t border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center" data-aos="fade-up">
            Additional Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="100">
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition border border-border-color">
              <Music className="mx-auto text-brand-orange mb-2" size={24} />
              <span className="text-sm font-medium text-text-primary">Sheet Music</span>
            </a>
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition border border-border-color">
              <FileText className="mx-auto text-brand-orange mb-2" size={24} />
              <span className="text-sm font-medium text-text-primary">Articles</span>
            </a>
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition border border-border-color">
              <Users className="mx-auto text-brand-orange mb-2" size={24} />
              <span className="text-sm font-medium text-text-primary">Member Directory</span>
            </a>
            <a href="#" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition border border-border-color">
              <DollarSign className="mx-auto text-brand-orange mb-2" size={24} />
              <span className="text-sm font-medium text-text-primary">Employment</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
