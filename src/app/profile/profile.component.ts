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
  constructor(private tokenStorageService: TokenStorageService, private catservice: ServiceOffreService) {
  }

  roles: string[];
  isLoggedIn = false;
  entreprise: string;
  username: string;
  email: string;
  Role: Role[] = [
    {value: 'ROLE_ADMIN', viewValue: 'financier'},
    {value: 'ROLE_MODERATOR', viewValue: 'fournisseur'}];
  public offres: Offre;

  public avis: any;
  id: number;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = user.username;
      this.email = this.tokenStorageService.getUser().email;
      this.afficheroffre();
      this.afficheravis();
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

  afficheravis() {
    this.catservice.getresouce(this.catservice.host + 'listavis')
      .subscribe(res => {
        this.avis = res;
        console.log(res);
      });
  }


}
export interface Role {
  value: string;
  viewValue: string;
}
