import { Component, OnInit } from '@angular/core';
import {UserService} from '../_service/user.service';
import {ServiceOffreService} from '../service/service-offre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offre} from '../model/offre';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private catservice: ServiceOffreService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  content: string;
  public offres: Offre;
  public a: number ;
  public b: number;
  public c: number;
  public d: number;
  ngOnInit() {
    this.countentreprise();
    this.countoffre();
    this.countproposition();
    this.countpropositionvalide();
  }

  countentreprise() {

    this.catservice.getresouce(this.catservice.host + 'countentreprise')
      .subscribe(res => {
        this.a = res;
        console.log(res);
      });

  }
  countoffre() {

    this.catservice.getresouce(this.catservice.host + 'offre/countoffre')
      .subscribe(res => {
        this.b = res;
        console.log(res);
      });

  }
  countproposition() {

    this.catservice.getresouce(this.catservice.host + 'countproposition')
      .subscribe(res => {
        this.c = res;
        console.log(this.c);
        console.log(res);
      });

  }
  countpropositionvalide() {

    this.catservice.getresouce(this.catservice.host + 'countpropositionvalide')
      .subscribe(res => {
        this.d = res;
        console.log(res);
      });

  }

}
