import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {UserService} from '../_service/user.service';
import {Router} from '@angular/router';
import { FormBuilder,  Validators } from '@angular/forms';
import {HttpHandler} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  role: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  next: HttpHandler;
  constructor(private authService: AuthService, private userService: UserService,
              private router: Router, private tokenStorage: TokenStorageService, private fb: FormBuilder) {
  }
  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.token);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

this.onprofile();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  }
  onprofile() {
    this.router.navigateByUrl('profile');
  }

  reloadPage() {
    window.location.reload();
  }

}
