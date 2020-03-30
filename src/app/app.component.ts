import {Component, OnInit} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {TokenStorageService} from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'pfe';
  user: any;
  role: any;
  form: any = {};
  isLoggedIn = false;
  constructor( private tokenStorage: TokenStorageService) {}
  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

}
