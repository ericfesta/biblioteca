import React, { useState } from 'react';
import { events } from '../data/events';
import EventCard from './EventCard';

const categories = [
  { id: 'all', label: 'Tutti' },
  { id: 'book', label: 'Presentazioni Libri' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'conference', label: 'Conferenze' },
  { id: 'exhibition', label: 'Mostre' },
];

const EventsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="eventi" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            I Nostri Eventi Culturali
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri gli eventi in programma nella nostra biblioteca. Dalle presentazioni di libri ai workshop creativi, c'è sempre qualcosa di interessante da fare.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            Vedi Tutti gli Eventi
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
