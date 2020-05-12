import { Component, OnInit } from '@angular/core';
import {UserService} from '../_service/user.service';
import {ServiceOffreService} from '../service/service-offre.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userservice: UserService, private catservice: ServiceOffreService, private  httpclient: HttpClient , private router: Router) { }
  currentprod: any;

  ngOnInit(): void {
    this.userservice.getallusers().subscribe(data => {this.currentprod = data; },
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
}
