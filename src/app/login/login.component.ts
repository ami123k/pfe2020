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
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    /*
        this.req = this.req.clone({
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            Accept       : 'application/json',
            Authorization: `Bearer ${this.tokenStorage.getToken()}`,
          },
        });
        return this.next.handle(this.req);*/
  }

  /*login(data) {
        this.authService.login(data).subscribe(log => {

          localStorage.setItem('token', log.accessToken);
          this.userService.getPublicContent().subscribe(res => {
            res = res.filter((val) => {
              return val.username === data.username;
            });
            localStorage.setItem('user', JSON.stringify(res));
            this.user = JSON.parse(localStorage.getItem('user'));
            this.role = this.user[0].roles[0].name;

            console.log(this.role);
            if (this.role === 'ROLE_ADMIN') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }

          });


        });

     }*/
  reloadPage() {
    window.location.reload();
  }

}
