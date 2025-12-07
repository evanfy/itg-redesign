import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

function NewsCard({ title, excerpt, date, category, imageUrl }) {
  return (
    <div className="bg-white border border-border-color rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Image */}
      <div className="h-48 bg-bg-tertiary overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-secondary">
            <Clock size={48} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {category && (
          <span className="inline-block bg-bg-tertiary text-text-secondary text-xs font-semibold px-3 py-1 rounded mb-3">
            {category}
          </span>
        )}

        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-brand-orange transition-colors">
          {title}
        </h3>

        {excerpt && (
          <p className="text-text-secondary mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center text-text-secondary text-sm">
            <Clock size={14} className="mr-1" />
            <span>{date}</span>
          </div>

          <button className="text-brand-orange hover:text-orange-hover font-semibold text-sm flex items-center group">
            Read More 
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;