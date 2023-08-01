import { Component } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private bookService: BookServiceService, private authService: AuthService, private router: ActivatedRoute) { }

  bookDetails!: Book
  getParamId: string | null = ""
  imageUrl: string = ""
  isLoading: boolean = true;
  userData: string = this.authService.getDecodedAccessToken()

  ngOnInit() {
    this.getParamId = this.router.snapshot.paramMap.get('id');
    this.bookService.bookDetails(this.getParamId).subscribe((result) => {
      this.bookDetails = result
      this.isLoading = false
    })
  }

  addToCart(id: string) {
    this.bookService.addTocart(id, this.userData).subscribe(() => {
      this.bookService.getCart(this.userData).subscribe();
    })
  }
}
