import { Component, OnInit } from '@angular/core';
import {CameraService} from '../service/camera.service';
import {Offre} from '../model/offre';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  public t1: any;
  public url: string;
  public cuurentof: Offre ;
  constructor( private uploadService: CameraService, private  router: Router ,
               private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService) { }

  ngOnInit(): void {

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.catservice.getre(this.url).subscribe(data => {this.cuurentof = data , console.log(this.cuurentof.id_offre),
      this.uploadService.getFiles(this.cuurentof.id_offre).subscribe(e => {
      this.t1 = e;
      console.log(this.t1);
    });
    }
  ); }



}
