import { Component } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: BookServiceService, private router: Router) { }

  books: Book[] = []
  isLoading: boolean = true;

  ngOnInit() {
    this.service.booksData().subscribe((result) => {
      this.books = result
      this.isLoading = false;
    })
  }

  viewBook(book: Book) {
    this.router.navigate(['book', book._id])
  }
}
