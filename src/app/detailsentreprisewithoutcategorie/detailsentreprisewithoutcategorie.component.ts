import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {UploadFileService} from '../service/upload-file.service';

@Component({
  selector: 'app-detailsentreprisewithoutcategorie',
  templateUrl: './detailsentreprisewithoutcategorie.component.html',
  styleUrls: ['./detailsentreprisewithoutcategorie.component.css']
})
export class DetailsentreprisewithoutcategorieComponent implements OnInit {

  constructor(private  router: Router , private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService, private uploadService: UploadFileService ) { }
  public currentprod: any;
  private url: string;
  categorie;
  t1: any;
  ngOnInit(): void {

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catservice.getre(this.url).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
    this.uploadService.getFiles().subscribe(e => {
      this.t1 = e._embedded.entreprises;
      console.log(this.t1);
    }); }
  }


