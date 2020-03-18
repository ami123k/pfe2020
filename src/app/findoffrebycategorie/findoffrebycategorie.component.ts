import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../service/upload-file.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../model/offre';
import * as $ from 'jquery';

@Component({
  selector: 'app-findoffrebycategorie',
  templateUrl: './findoffrebycategorie.component.html',
  styleUrls: ['./findoffrebycategorie.component.css']
})
export class FindoffrebycategorieComponent implements OnInit {
  private categorie: string;
  public currentprod: Offre;
  dtOption: any = {};
  constructor(private uploadService: UploadFileService ,  private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer , private router: Router) { }
  ngOnInit(): void {
    this.categorie = this.activatedRoute.snapshot.params.id;
    console.log(this.categorie);
    this.uploadService.getlistoffrebycat(this.categorie).subscribe(data => {this.currentprod = data; },
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


}
