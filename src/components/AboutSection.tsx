import React from 'react';
import { BookOpen, Users, Calendar, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-violet-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              La Biblioteca Aurora: Un Centro Culturale nel Cuore della Città
            </h2>
            <p className="text-gray-600 mb-6">
              Fondata nel 1985, la Biblioteca Aurora è diventata un punto di riferimento per gli amanti della letteratura e della cultura. La nostra missione è promuovere la lettura e la diffusione del sapere attraverso eventi, incontri e workshop.
            </p>
            <p className="text-gray-600 mb-8">
              Ogni anno organizziamo oltre 200 eventi culturali, ospitando autori di fama nazionale e internazionale, artisti, musicisti e intellettuali. La nostra biblioteca non è solo un luogo dove prendere in prestito libri, ma uno spazio vivo di incontro e scambio culturale.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <BookOpen className="h-10 w-10 text-violet-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">50.000+</h3>
                  <p className="text-gray-600">Volumi disponibili</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-10 w-10 text-violet-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">15.000+</h3>
                  <p className="text-gray-600">Membri attivi</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-10 w-10 text-violet-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">200+</h3>
                  <p className="text-gray-600">Eventi annuali</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-10 w-10 text-violet-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">25+</h3>
                  <p className="text-gray-600">Premi ricevuti</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Biblioteca Aurora - Sala principale" 
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Evento letterario" 
              className="rounded-lg shadow-lg h-64 w-full object-cover transform translate-y-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Workshop di scrittura" 
              className="rounded-lg shadow-lg h-64 w-full object-cover transform translate-y-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Sala lettura" 
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
