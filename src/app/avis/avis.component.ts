import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {AvisService} from '../service/avis.service';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styles: [`
        :host ::ng-deep .ui-button {
            margin: .5em .5em .5em 0;
            width: 140px;
        }
        @media screen and (max-width: 40em) {
            :host ::ng-deep .ui-dialog {
                width: 75vw !important;
            }
        }
    `]
})
export class AvisComponent implements OnInit {
  constructor( private uploadService: AvisService, private tokenStorageService: TokenStorageService) {
   }
  description: string;
  roles: string[];
  isLoggedIn = false;
  username: string;
  id: number;
  isSuccessful = false;

  display = false;
  val1: number;

  val2 = 5;

  val3: number;

  val4 = 5;

  val5: number;

  msg: string;
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }}
  addavis() {

    this.uploadService.addavis( this.description , this.id ).subscribe(event => {this.isSuccessful = true ;
    });
  }

  showBasicDialog() {
    this.display = true;
  }
  handleRate(event) {
    this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Rating Cancelled';
  }
}
