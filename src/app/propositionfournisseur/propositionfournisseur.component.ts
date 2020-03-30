import { Component, OnInit } from '@angular/core';
import {proposition} from '../model/proposition';
import {Offre} from '../model/offre';
import {CameraService} from '../service/camera.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import * as $ from 'jquery';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-propositionfournisseur',
  templateUrl: './propositionfournisseur.component.html',
  styleUrls: ['./propositionfournisseur.component.css']
})
export class PropositionfournisseurComponent implements OnInit {

  public t1: proposition;
  public aa: string;
  public url: string;
  public cuurentof: Offre ;
  dtOption: any = {};
  constructor( private uploadService: CameraService, private  router: Router , private tokenStorage: TokenStorageService,
               private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService) { }

  ngOnInit(): void {

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.uploadService.findpropouserbyoffre(this.url, this.tokenStorage.getUser().id ).subscribe(e => {
      this.t1 = e;

      this.uploadService.getentreprisebypropo(this.url).subscribe(k => {
        this.t1.name_entreprise = k;
        console.log(this.t1);
      });   });

    this.dtOption = {
      paging: true,
      ordering: true,
      info: true,
      simple_numbers: true,
      full: true
    };
    $(() => {
      $('table.table-striped').DataTable(this.dtOption);
    });
  }
  informatique() {
    this.router.navigateByUrl('offreforinfo');
  }
  fourniture() {
    this.router.navigateByUrl('fourniture');
  }
  materiel() {
    this.router.navigateByUrl('offreformat');
  }
  education() {
    this.router.navigateByUrl('education');
  }
  details(s) {
    console.log(s);
    this.router.navigateByUrl('detailsproposition/' + btoa(s.id_proposition));
  }

  Validerproposition(id, value): void {

    this.catservice.updateproposition(id, value)
      .subscribe(data => {alert('vous voulez valider cette proposition'); });
  }

}
