import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceOffreService} from '../service/service-offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UploadFileService} from '../service/upload-file.service';
import {Offre} from '../model/offre';
import * as $ from 'jquery';

@Component({
  selector: 'app-offreforinformatique',
  templateUrl: './offreforinformatique.component.html',
  styleUrls: ['./offreforinformatique.component.css']
})
export class OffreforinformatiqueComponent implements OnInit {

  constructor(private catservice: ServiceOffreService, private activatedRoute: ActivatedRoute, private router: Router,private uploadService: UploadFileService ) {
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
  tous() {
    this.router.navigateByUrl('data');
  }
  onlistpropo(s) {
    console.log(s);
    this.router.navigateByUrl('propositionfournisseur/' + btoa(s.id_offre));
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
    this.router.navigateByUrl('addproposition/' + btoa(s.id_offre));
  }

}
export interface Equipeee {
  value: string;
  viewValue: string;
}
