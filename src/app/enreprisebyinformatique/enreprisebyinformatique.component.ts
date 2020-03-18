import {Component, Input, OnInit} from '@angular/core';
import {Offre} from '../model/offre';
import {UploadFileService} from '../service/upload-file.service';
import {ServiceOffreService} from '../service/service-offre.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Entreprise} from '../model/Entreprise';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-enreprisebyinformatique',
  templateUrl: './enreprisebyinformatique.component.html',
  styleUrls: ['./enreprisebyinformatique.component.css']
})
export class EnreprisebyinformatiqueComponent implements OnInit {

  public offres: Offre;
  cheminImage1: any = 'http://localhost:8080/files/';
  constructor(private uploadService: UploadFileService , private catservice: ServiceOffreService, private sanitizer: DomSanitizer , private router: Router) { }
  showFile = false;
  fileUploads: Observable<string[]>;
  t1: any;
  name: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  fileInfos: Observable<any>;
  @Input() fileUpload: string;
  public entreprise: Entreprise;
  equipes: Equi[] = [
    {value: 'fourniture', viewValue: 'fourniture'},
    {value: 'informatique', viewValue: 'informatique'},
    {value: 'materiel', viewValue: 'materiel'},
    {value: 'education', viewValue: 'education'}
  ];
  categorie;
  selected() {
    console.log(this.categorie);
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  ngOnInit(): void {
    this.uploadService.getlistentreprisebyinformatique(this.categorie).subscribe(e => {
      this.t1 = e;
      console.log(this.t1);
    });
    this.afficheroffre();
  }
  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload  , this.name, this.categorie).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

  showFiles(enable: boolean) {
    this.uploadService.getFiles().subscribe(e => {
      this.t1 = e;
      console.log(this.t1);
    });

  }
  findoffrebycategorie(s) {
    console.log(this.categorie);
    const categorie = s.categorie;
    this.router.navigateByUrl('offrebycat/' + s);
  }


  afficheroffre() {
    this.catservice.getresouce(this.catservice.host + 'offres')
      .subscribe(res => {
        this.offres = res._embedded.offres;
        console.log(res);
        console.log(this.offres);
      });
  }

  informatique() {
    this.router.navigateByUrl('entrepriseinformatique');
  }
  fourniture() {
    this.router.navigateByUrl('entreprisefourniture');
  }
  materiel() {
    this.router.navigateByUrl('entreprisemateriel');
  }
  education() {
    this.router.navigateByUrl('entrepriseeducation');
  }
}

export interface Equi {
  value: string;
  viewValue: string;
}
