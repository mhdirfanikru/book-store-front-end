import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  numberOfProductsInCart: number = 0;

  cart = faCartShopping

  constructor(
    private authService: AuthService,
    private router: Router,
    private bookService: BookServiceService
  ) {}
  
    ngOnInit() {
      // Subscribe to the productList BehaviorSubject to get updates on the cart items
      this.bookService.productList.subscribe((cartItems) => {
        this.numberOfProductsInCart = cartItems.length;
      });
    } 

  logout() {
    this.authService.logout();
  }

  landingPage() {
    this.router.navigate(['home']);
  }

  cartPage() {
    this.router.navigate(['cart']);
  }
}

