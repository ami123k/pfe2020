import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../service/upload-file.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../model/offre';
import * as $ from 'jquery';
import {ServiceOffreService} from '../service/service-offre.service';

@Component({
  selector: 'app-findoffrebycategorie',
  templateUrl: './findoffrebycategorie.component.html',
  styleUrls: ['./findoffrebycategorie.component.css']
})
export class FindoffrebycategorieComponent implements OnInit {
  private id: string;
  public currentprod: any;
  dtOption: any = {};
  url :any;
  constructor(private uploadService: UploadFileService , private catservice: ServiceOffreService,  private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer , private router: Router) { }
  ngOnInit(): void {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url);
    this.uploadService.getlistoffrebycat(this.url).subscribe(data => {this.currentprod = data, console.log(data); },
      error1 => {console.log(error1); });
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
}
