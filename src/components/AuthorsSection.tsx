import React from 'react';
import { authors } from '../data/authors';
import { Book } from 'lucide-react';

const AuthorsSection: React.FC = () => {
  return (
    <section id="autori" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Autori in Evidenza
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri gli autori che partecipano ai nostri eventi. Dalle voci emergenti agli scrittori affermati, la nostra biblioteca ospita talenti di ogni genere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.slice(0, 6).map((author) => (
            <div key={author.id} className="card p-6 flex flex-col items-center text-center">
              <img 
                src={author.image} 
                alt={author.name} 
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-playfair font-bold mb-2">{author.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{author.bio}</p>
              
              {author.books && author.books.length > 0 && (
                <div className="mt-auto w-full">
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center justify-center">
                    <Book className="h-4 w-4 mr-2 text-violet-600" />
                    Opere Principali
                  </h4>
                  <ul className="text-sm text-gray-600">
                    {author.books.slice(0, 3).map((book, index) => (
                      <li key={index} className="mb-1">{book}</li>
                    ))}
                    {author.books.length > 3 && (
                      <li className="text-violet-600 font-medium">+ altri</li>
                    )}
                  </ul>
                </div>
              )}
              
              <a 
                href="#" 
                className="mt-4 text-violet-600 hover:text-violet-700 font-medium"
              >
                Scopri di più
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
