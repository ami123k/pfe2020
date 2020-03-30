import { Component, OnInit } from '@angular/core';
import {UserService} from '../_service/user.service';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {Observable} from 'rxjs';
import {Offre} from '../model/offre';
import {HttpClient} from '@angular/common/http';
import {ServiceOffreService} from '../service/service-offre.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
currentprod: any;
  constructor(private userservice: UserService, private catservice: ServiceOffreService, private  httpclient: HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.userservice.getusers().subscribe(data => {this.currentprod = data; },
      error1 => {console.log(error1); });
  }
  onDelete(equipe_ID): void {
    if (confirm('Voulez-vous vraiment supprimer cette equipe?')) {
      console.log(equipe_ID);
      this.catservice.deleteuser(equipe_ID).subscribe(data => {
        console.log(equipe_ID);
        console.log('ok');
        // this.router.navigate(['/equipe'])
        // this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() => {
        //   return this.router.navigate(['AddEquipeComponent']);
        //  });

      });
    }
  }

Valider(id, value): void {

  this.catservice.updateAdmin(id, value)
    .subscribe(data => {alert('vous voulez mettre ce user comme admin'), this.router.navigateByUrl('/listusers'); });
}
}
