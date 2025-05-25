import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-violet-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Resta Aggiornato sui Nostri Eventi
          </h2>
          <p className="mb-8">
            Iscriviti alla nostra newsletter per ricevere aggiornamenti sui prossimi eventi, nuove acquisizioni e promozioni speciali.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Il tuo indirizzo email" 
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button 
              type="submit" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 whitespace-nowrap"
            >
              Iscriviti Ora
            </button>
          </form>
          <p className="text-sm mt-4 text-violet-200">
            Ci impegniamo a rispettare la tua privacy. Non condivideremo mai i tuoi dati con terze parti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
