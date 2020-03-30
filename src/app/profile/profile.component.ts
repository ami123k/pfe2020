import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ServiceOffreService} from '../service/service-offre.service';
import {Offre} from '../model/offre';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  email: string;
  Role: Role[] = [
    {value: 'ROLE_ADMIN', viewValue: 'financier'},
    {value: 'ROLE_MODERATOR', viewValue: 'fournisseur'}];
  public offres: Offre;
  constructor(private tokenStorageService: TokenStorageService,  private catservice: ServiceOffreService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = user.username;
      this.email = this.tokenStorageService.getUser().email;
      this.afficheroffre();
    }
  }
  afficheroffre() {
    this.catservice.getresouce(this.catservice.host + 'offres')
      .subscribe(res => {
        this.offres = res._embedded.offres;
        console.log(res);
        console.log(this.offres);
      });
  }
}
export interface Role {
  value: string;
  viewValue: string;
}
