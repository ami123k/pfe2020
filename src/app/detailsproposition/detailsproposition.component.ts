import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {UploadFileService} from '../service/upload-file.service';

@Component({
  selector: 'app-detailsproposition',
  templateUrl: './detailsproposition.component.html',
  styleUrls: ['./detailsproposition.component.css']
})
export class DetailspropositionComponent implements OnInit {

  public currentprod: any;
  public name_entreprise: string;
  private url: string;
  public offres: any;
  constructor(private  router: Router , private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService, private uploadService: UploadFileService ) { }
  categorie;
  t1: any;

  ngOnInit(): void {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catservice.findpropositionByid(this.url).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
    this.catservice.nameentreprisebypropo(this.url).subscribe(data => {this.name_entreprise = data; },
      error1 => {console.log(error1); });
this.afficheroffre();
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
