import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

function EventCard({ title, date, location, description, imageUrl, featured }) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ${featured ? 'border-2 border-brand-orange' : ''}`}>
      {/* Image */}
      <div className="h-48 bg-bg-tertiary overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-secondary">
            <Calendar size={48} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {featured && (
          <span className="inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Featured
          </span>
        )}
        
        <h3 className="text-xl font-bold text-text-primary mb-3 hover:text-brand-orange transition-colors">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-text-secondary text-sm">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-text-secondary text-sm">
            <MapPin size={16} className="mr-2" />
            <span>{location}</span>
          </div>
        </div>

        {description && (
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <button className="text-brand-orange hover:text-orange-hover font-semibold text-sm flex items-center group">
          Learn More 
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default EventCard;