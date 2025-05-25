import React from 'react';
import { Calendar, MapPin, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-[80vh] flex items-center text-white">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Dove i Libri Prendono Vita
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Scopri un mondo di eventi culturali, incontri con autori e workshop creativi nella nostra biblioteca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#eventi" className="btn-primary">
              Esplora Eventi
            </a>
            <a href="#autori" className="btn-outline bg-white/10 text-white border-white hover:bg-white/20">
              Incontra gli Autori
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="font-bold">Eventi Settimanali</h3>
                <p className="text-sm text-gray-200">Incontri letterari e culturali</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="font-bold">Spazi Accoglienti</h3>
                <p className="text-sm text-gray-200">Nel cuore della città</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="font-bold">Vasta Collezione</h3>
                <p className="text-sm text-gray-200">Oltre 50.000 volumi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
