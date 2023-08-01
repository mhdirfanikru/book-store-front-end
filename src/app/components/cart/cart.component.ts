import { Component } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { CartItem } from 'src/app/interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private bookService: BookServiceService, private authService: AuthService) { }

  cartItems: CartItem[] = []
  isLoading: boolean = true;
  email: string = this.authService.getDecodedAccessToken();

  ngOnInit() {
    this.email = this.authService.getDecodedAccessToken()
    this.bookService.getCart(this.email).subscribe((result) => {
      this.cartItems = result
      this.isLoading = false;
    })
  }

  increaseQuantity(cartItem: CartItem) {
    cartItem.quantity += 1;
    this.bookService.addTocart(cartItem.product._id, this.email).subscribe()
  }

  decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      this.bookService.removeProduct(cartItem.product._id, this.email).subscribe()
    }
  }

  removeCart(itemId: string) {
    this.bookService.deleteCart(itemId, this.email).subscribe()
    this.cartItems = this.cartItems.filter((t: CartItem) => t.item !== itemId);
    this.bookService.productList.next(this.cartItems);

  }

}
