import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginResponseData } from '../interface/loginResponse';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookServiceService } from './book-service.service';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http : HttpClient, private bookService: BookServiceService, private authService: AuthService) { }

  api = "http://localhost:5000/api"
  userData: string = ""

  userLogin(email: string, password: string): Observable<LoginResponseData> {
    const data = {
      email,
      password
    };
     return this.http.post<LoginResponseData>(`${this.api}/login`, data).pipe(
      tap((data) => {
        if (data.success) {
          this.authService.setJwtToken(data.token);

          // Call getCart after a successful login
          this.userData = this.authService.getDecodedAccessToken()
          this.bookService.getCart(this.userData).subscribe();
        }
      })
    );
  }
  }



