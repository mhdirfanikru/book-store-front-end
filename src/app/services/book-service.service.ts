import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartItem } from '../interface/cart';
import { Book } from '../interface/book';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  public cartItemList: CartItem[]= [];
  public productList = new BehaviorSubject<CartItem[]>([]);

  api = "https://boook-api.onrender.com/api"

  // api = "http://localhost:5000/api"

  booksData(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`)
  }

  bookDetails(id: string | null): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${id}`)
  }

  getCart(token: any): Observable<CartItem[]> {
    const params = new HttpParams().set('email', token.email);
    return this.http.get<CartItem[]>(`${this.api}/getCart`, { params }).pipe(
      tap((cartItems) => {
        this.cartItemList = cartItems;
        this.productList.next(cartItems);
      })
    );
  }

  addTocart(id: string, email: string): Observable<CartItem> {
    return this.http.patch<CartItem>(`${this.api}/addToCart/${id}`, email)
  }

  removeProduct(id: string, email: string): Observable<CartItem> {
    return this.http.patch<CartItem>(`${this.api}/removeProduct/${id}`, email)
  }

  getProductsLength(): number {
    return this.cartItemList.length;
  }

  deleteCart(id : string, email: string) {
    return this.http.patch(`${this.api}/deleteProduct/${id}`, email);
  }

}
