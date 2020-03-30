import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {UploadFileService} from '../service/upload-file.service';
import {Offre} from '../model/offre';

@Component({
  selector: 'app-detailsentreprise',
  templateUrl: './detailsentreprise.component.html',
  styleUrls: ['./detailsentreprise.component.css']
})
export class DetailsentrepriseComponent implements OnInit {
  public currentprod: any;
  private url: string;
  constructor(private  router: Router , private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService, private uploadService: UploadFileService ) { }
  categorie;
  t1: any;

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catservice.getre(this.url).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
    this.uploadService.getFiles().subscribe(e => {
      this.t1 = e._embedded.entreprises;
      console.log(this.t1);
    }); }


}
