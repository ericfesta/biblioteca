import { Event } from '../types';

export const events: Event[] = [
  {
    id: 1,
    title: "Incontro con Elena Ferrante",
    date: "15 Ottobre 2023",
    time: "18:30",
    location: "Sala Principale",
    description: "Un'occasione unica per incontrare la celebre autrice della quadrilogia 'L'amica geniale'. Discussione sul suo ultimo romanzo e sessione di domande e risposte.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "book",
    featured: true,
    author: {
      id: 1,
      name: "Elena Ferrante",
      bio: "Elena Ferrante è una delle autrici italiane più acclamate a livello internazionale. La sua identità rimane un mistero, ma i suoi romanzi hanno conquistato milioni di lettori in tutto il mondo.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      books: ["L'amica geniale", "Storia del nuovo cognome", "Storia di chi fugge e di chi resta", "Storia della bambina perduta"]
    }
  },
  {
    id: 2,
    title: "Workshop di Scrittura Creativa",
    date: "22 Ottobre 2023",
    time: "15:00",
    location: "Sala Workshop",
    description: "Un workshop intensivo di scrittura creativa condotto dallo scrittore Paolo Giordano. Impara le tecniche narrative e sviluppa il tuo stile personale.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "workshop",
    author: {
      id: 2,
      name: "Paolo Giordano",
      bio: "Paolo Giordano è un fisico e scrittore italiano. Ha vinto il Premio Strega nel 2008 con il suo romanzo d'esordio 'La solitudine dei numeri primi'.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      books: ["La solitudine dei numeri primi", "Il corpo umano", "Il nero e l'argento", "Divorare il cielo"]
    }
  },
  {
    id: 3,
    title: "Conferenza: Il Futuro dell'Editoria",
    date: "5 Novembre 2023",
    time: "17:00",
    location: "Auditorium",
    description: "Una conferenza che esplora le tendenze emergenti nel mondo dell'editoria, con particolare attenzione all'impatto della tecnologia digitale e dei social media.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "conference",
    featured: true
  },
  {
    id: 4,
    title: "Mostra Fotografica: 'Volti di Scrittori'",
    date: "10-20 Novembre 2023",
    time: "10:00 - 19:00",
    location: "Galleria d'Arte",
    description: "Una mostra fotografica che cattura i volti e le espressioni di famosi scrittori italiani e internazionali, offrendo uno sguardo intimo sulla loro personalità.",
    image: "https://images.unsplash.com/photo-1533142266415-ac591a4e8252?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "exhibition"
  },
  {
    id: 5,
    title: "Presentazione: 'La Vita Segreta degli Alberi'",
    date: "25 Novembre 2023",
    time: "18:00",
    location: "Sala Conferenze",
    description: "Presentazione del bestseller internazionale che rivela la vita nascosta delle piante e degli alberi, con la partecipazione dell'autore Peter Wohlleben.",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "book",
    author: {
      id: 3,
      name: "Peter Wohlleben",
      bio: "Peter Wohlleben è un guardaboschi e scrittore tedesco che ha dedicato la sua vita allo studio e alla protezione delle foreste.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      books: ["La vita segreta degli alberi", "La saggezza del bosco", "La rete segreta della natura"]
    }
  },
  {
    id: 6,
    title: "Club del Libro: 'Il Nome della Rosa'",
    date: "2 Dicembre 2023",
    time: "17:30",
    location: "Sala Lettura",
    description: "Discussione aperta sul capolavoro di Umberto Eco, 'Il Nome della Rosa'. Un'opportunità per analizzare e condividere riflessioni su questo classico della letteratura italiana.",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "book"
  }
];
