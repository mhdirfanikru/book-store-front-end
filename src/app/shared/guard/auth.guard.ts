import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class authGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authService.isLoggedIn()) {
        // If the user is authenticated, allow access to the requested route
        // If the requested route is the login page, redirect to the home page
        if (state.url === '/login') {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      } else {
        // If the user is not authenticated, redirect to the login page
        if (state.url !== '/login') {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
    }
  }
