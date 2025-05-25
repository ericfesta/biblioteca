export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'book' | 'workshop' | 'conference' | 'exhibition';
  featured?: boolean;
  author?: Author;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  image: string;
  books?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface NavLink {
  name: string;
  path: string;
}
