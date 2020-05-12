import {Component, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {ServiceOffreService} from '../../service/service-offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../../model/offre';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {UpdateoffreComponent} from '../updateoffre/updateoffre.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  constructor(private catservice: ServiceOffreService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  @ViewChild('dataTable') table;
   public offres: Offre;
  public produits: any = undefined;
  dtOption: any = {};
abc = 0;
  equipes: Equipeee[] = [
    {value: 'fourniture', viewValue: 'fourniture'},
    {value: 'informatique', viewValue: 'informatique'},
    {value: 'materiel', viewValue: 'materiel'},
    {value: 'education', viewValue: 'education'}
  ];
  categorie;

  public currentprod: Offre;
  private url: string;
  isSuccessful = false;

  ngOnInit(): void {

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
    this.afficheroffre();
  }

  selected() {
    console.log(this.categorie);
  }

  onsaveoffre(data) {
    data.categorie = this.categorie;


    this.catservice.save(this.catservice.host + 'offre/ajout', data).subscribe(aaa => { this.isSuccessful = true;
                                                                                        console.log(aaa);
    });
  }

  createbutton() {

    this.abc = 1 ;
    this.router.navigateByUrl('data' );
  }

  afficheroffre() {
    this.catservice.getresouce(this.catservice.host + 'offres')
      .subscribe(res => {
        this.offres = res._embedded.offres;
        console.log(res);
        console.log(this.offres);
      });
  }

  onEdit(s) {
    this.display = true;
    this.catservice.getre('http://localhost:8080/offres/' + s.id_offre).subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
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
    if (confirm('Voulez-vous vraiment supprimer cette offre?')) {
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
  display = false ;
  onupdateprod(value: any) {
    this.catservice.update('http://localhost:8080/offre/Update/' + this.currentprod.id_offre, value).subscribe(data => {alert('mise ajour terminer'),  this.isSuccessful = true; this.router.navigateByUrl('/data'); });
  }
}
export interface Equipe {
  value: string;
  viewValue: string;
}
export interface Equipeee {
  value: string;
  viewValue: string;
}



