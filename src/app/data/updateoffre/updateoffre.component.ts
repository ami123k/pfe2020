import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../../model/offre';
import {ServiceOffreService} from '../../service/service-offre.service';
import {UploadFileService} from '../../service/upload-file.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-updateoffre',
  templateUrl: './updateoffre.component.html',
  styleUrls: ['./updateoffre.component.css']
})
export class UpdateoffreComponent implements OnInit {
  public currentprod: Offre;
  private url: string;
  form: any = {};
  equipe: Equipe[] = [
    {value: 'fourniture', viewValue: 'fourniture'},
    {value: 'informatique', viewValue: 'informatique'},
    {value: 'materiel', viewValue: 'materiel'},
    {value: 'education', viewValue: 'education'}
  ];
  constructor(private  router: Router , private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService, private uploadService: UploadFileService ) { }
  categorie;
  t1: any;
  selected() {
    console.log(this.categorie);
  }
  isSuccessful = false;
  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catservice.getre('http://localhost:8080/offres/' + this.url).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
    this.onentreprise();
  }

  onentreprise() {
    this.uploadService.getFiles().subscribe(e => {
      this.t1 = e;
      console.log(this.t1);
    });
  }

  onupdateprod(value: any) {
    this.catservice.update('http://localhost:8080/offre/Update/' + this.url, value).subscribe(data => {alert('mise ajour terminer'),  this.isSuccessful = true; this.router.navigateByUrl('/data'); });
  }

}
export interface Equipe {
  value: string;
  viewValue: string;
}

