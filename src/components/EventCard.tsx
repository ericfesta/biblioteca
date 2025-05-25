import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card h-full flex flex-col">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover"
        />
        {event.featured && (
          <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1">
            In Evidenza
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className={`
            text-xs font-bold uppercase tracking-wider text-white px-2 py-1 rounded-full
            ${event.category === 'book' ? 'bg-violet-600' : ''}
            ${event.category === 'workshop' ? 'bg-blue-600' : ''}
            ${event.category === 'conference' ? 'bg-emerald-600' : ''}
            ${event.category === 'exhibition' ? 'bg-amber-600' : ''}
          `}>
            {event.category === 'book' && 'Presentazione Libro'}
            {event.category === 'workshop' && 'Workshop'}
            {event.category === 'conference' && 'Conferenza'}
            {event.category === 'exhibition' && 'Mostra'}
          </span>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-playfair font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
          
          {event.author && (
            <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
              <img 
                src={event.author.image} 
                alt={event.author.name} 
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-medium text-gray-800">{event.author.name}</p>
                <p className="text-xs text-gray-500">Autore</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-5 pb-5">
        <a 
          href="#" 
          className="block w-full text-center py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-50 transition-colors duration-300"
        >
          Dettagli Evento
        </a>
      </div>
    </div>
  );
};

export default EventCard;
