import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {UploadFileService} from '../service/upload-file.service';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-entrepriseuser',
  templateUrl: './entrepriseuser.component.html',
  styleUrls: ['./entrepriseuser.component.css']
})
export class EntrepriseuserComponent implements OnInit {
  public currentprod: any;
  public proposition :any;
  isLoggedIn = false;
  constructor(private  router: Router , private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService, private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.catservice.getre('http://localhost:8080/entreprisebyuser2/' + this.tokenStorageService.getUser().id).subscribe(data => {
          this.currentprod = data;
        },
        error1 => {
          console.log(error1);
        });
      this.catservice.getre('http://localhost:8080/userproposition/' + this.tokenStorageService.getUser().id).subscribe(abc => {
          this.proposition = abc;
        },
        error1 => {
          console.log(error1);
        });
    }
  }
  details(s) {
    console.log(s);
    this.router.navigateByUrl('detailsproposition/' + btoa(s.id_proposition));
  }

  onDelete(equipe_ID, value: any): void {
    if (confirm('Voulez-vous vraiment supprimer cette entreprise?')) {

      this.catservice.updateroleuser(equipe_ID, value)
        .subscribe(data2 => {alert('fournisseur vers user'); this.router.navigateByUrl('/upload'); this.catservice.deleteentreprise(equipe_ID).subscribe(data => {
          console.log(equipe_ID);
          console.log('ok');
        }); });
    }
  }}
