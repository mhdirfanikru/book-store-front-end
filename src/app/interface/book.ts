export interface Book {
    authors: string;
    desc: string;
    image: string;
    isbn10: string;
    isbn13: string;
    language: string;
    pages: number;
    pdf?: { _id: string };
    price: string;
    publisher: string;
    rating: number;
    subtitle: string;
    title: string;
    url: string;
    year: string;
    _id: string;
  }