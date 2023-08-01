import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private authService: AuthService, private bookService: BookServiceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = "All fields are required";
      return;
    }

    this.userService.userLogin(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
      !data.success ? this.errorMessage = data.message: ""
    })  
    }

}



