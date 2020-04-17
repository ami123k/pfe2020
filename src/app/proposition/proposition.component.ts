import { Component, OnInit } from '@angular/core';
import {CameraService} from '../service/camera.service';
import {Offre} from '../model/offre';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceOffreService} from '../service/service-offre.service';
import {proposition} from '../model/proposition';
import * as $ from 'jquery';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  public t1: proposition;
  public t2: any;
  public aa: string;
  public url: string;
  public cuurentof: Offre ;
  dtOption: any = {};
  constructor( private uploadService: CameraService, private  router: Router ,
               private activatedRoute: ActivatedRoute, private catservice: ServiceOffreService) { }

  ngOnInit(): void {

    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.uploadService.getFiles(this.url).subscribe(e => {
      this.t1 = e;

      this.uploadService.getentreprisebypropo(this.url).subscribe(k => {
          this.t2 = k;
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
    this.router.navigateByUrl('admininformatique');
  }
  fourniture() {
    this.router.navigateByUrl('adminfourniture');
  }
  materiel() {
    this.router.navigateByUrl('adminmateriel');
  }
  education() {
    this.router.navigateByUrl('admineducation');
  }
  tous() {
    this.router.navigateByUrl('data');
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
