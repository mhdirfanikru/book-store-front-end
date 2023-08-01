export interface CartItem {
    item: string;
    price: number;
    product: {
        authors: string;
        desc: string;
        image: string;
        isbn10: string;
        isbn13: string;
        language: string;
        pages: string;
        price: string;
        publisher: string;
        rating: string;
        subtitle: string;
        title: string;
        url: string;
        year: string;
        _id: string;
    };
    quantity: number;
    _id: string;
}
