import React, { useState } from 'react';
import { Book, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { name: 'Home', path: '#' },
  { name: 'Eventi', path: '#eventi' },
  { name: 'Autori', path: '#autori' },
  { name: 'Chi Siamo', path: '#chi-siamo' },
  { name: 'Contatti', path: '#contatti' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-violet-600" />
            <span className="text-xl font-playfair font-bold text-gray-800">Biblioteca Aurora</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-violet-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contatti" className="btn-primary">
              Prenota Evento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-violet-600 font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contatti" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
              Prenota Evento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
