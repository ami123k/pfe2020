import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceOffreService} from '../service/service-offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../model/offre';
import * as $ from 'jquery';
import {UploadFileService} from '../service/upload-file.service';

@Component({
  selector: 'app-offreadmininformatique',
  templateUrl: './offreadmininformatique.component.html',
  styleUrls: ['./offreadmininformatique.component.css']
})
export class OffreadmininformatiqueComponent implements OnInit {

  constructor(private catservice: ServiceOffreService, private activatedRoute: ActivatedRoute, private router: Router , private uploadService: UploadFileService) {
  }

  @ViewChild('dataTable') table;
  public offres: Offre;
  public produits: any = undefined;
  dtOption: any = {};

  equipes: Equipeee[] = [
    {value: 'fourniture', viewValue: 'fourniture'},
    {value: 'informatique', viewValue: 'informatique'},
    {value: 'materiel', viewValue: 'materiel'},
    {value: 'education', viewValue: 'education'}
  ];
  categorie;

  private currentprod: Offre;
  private url: string;

  ngOnInit(): void {
    this.afficheroffre();
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

  selected() {
    console.log(this.categorie);
  }

  onsaveoffre(data) {
    data.categorie = this.categorie;


    this.catservice.save(this.catservice.host + 'offre/ajout', data).subscribe(aaa => {
      console.log(aaa);
    });
  }

  afficheroffre() {
    this.categorie = this.activatedRoute.snapshot.params.id;
    console.log(this.categorie);
    this.uploadService.getlistoffrebyinformatique(this.categorie).subscribe(data => {this.offres = data; },
      error1 => {console.log(error1); });

  }


  onEdit(s) {
    console.log(s);
    const url = s._links.self.href;
    this.router.navigateByUrl('update/' + btoa(url));
  }
  onlistpropo(s) {
    console.log(s);
    this.router.navigateByUrl('onlistpropo/' + btoa(s.id_offre));
  }
  /* onDelete(s) {
     const conf = confirm('etes vous sur');
     if (conf) {
       this.catservice.Deleteprod(s._links.self.href).subscribe(data => {
         this.afficheroffre();
       }, error1 => {
         console.log(error1);
       });
     }
   }*/

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
  onDelete(equipe_ID): void {
    console.log(this.offres.id_offre);
    if (confirm('Voulez-vous vraiment supprimer cette equipe?')) {
      console.log(equipe_ID);
      this.catservice.delete(equipe_ID).subscribe(data => {
        console.log(equipe_ID);
        console.log('ok');
        // this.router.navigate(['/equipe'])
        // this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() => {
        //   return this.router.navigate(['AddEquipeComponent']);
        //  });

      });
    }
  }

  onpropose(s) {
    console.log(s);
    this.router.navigateByUrl('camera/' + btoa(s.id_offre));
  }

}
export interface Equipeee {
  value: string;
  viewValue: string;
}
