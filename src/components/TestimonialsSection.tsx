import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-event-pattern bg-cover bg-center text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Cosa Dicono di Noi
          </h2>
          <p className="max-w-2xl mx-auto">
            Le esperienze di chi ha partecipato ai nostri eventi e frequenta la nostra biblioteca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <Quote className="h-10 w-10 text-amber-400 mb-4" />
              <p className="italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-200">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
