import { Component } from '@angular/core';
import { BookServiceService } from './services/book-service.service';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  numberOfProductsInCart: number = 0;

  constructor(
    private bookService: BookServiceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Fetch the cart data when the application starts
    const token = this.authService.getDecodedAccessToken();
    if (token) {
      this.bookService.getCart(token).subscribe();
    }

    // Initialize numberOfProductsInCart using the getProductsLength function
    // this.numberOfProductsInCart = this.bookService.getProductsLength();

    // // Subscribe to the productList BehaviorSubject to get updates on the cart items
    // this.bookService.productList.subscribe((cartItems) => {
    //   this.numberOfProductsInCart = cartItems.length;
    // });
  }
}
