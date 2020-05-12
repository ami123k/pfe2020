import { Component, OnInit } from '@angular/core';
import {Statistique, Statistique2} from '../model/statistique';
import {ServiceOffreService} from '../service/service-offre.service';
import {ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  public pieChartLabels = [];
  public barChartLegendpieChartData = [];
  public pieChartType = 'pie';
  public pieChartLabels2 = [];
  public pieChartData2 = [];
  public pieChartType2 = 'pie';
  public pieChartData = [];
  // 2eme
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartLabels = [];
  equipes: Array<any>;
  user: Statistique[] = [];
  abc: Statistique2[] = [];
  public chartColors: Array<any> = [
    { // second color
      backgroundColor: '#F383EA',
      borderColor: '#CF1622',
      pointBackgroundColor: '#CF1622',
      pointBorderColor: '#CF1625',
      pointHoverBackgroundColor: '#FFCE56',
      pointHoverBorderColor: '#CF1622'
    },
    { // second color
      backgroundColor: '#FFFE56',
      borderColor: 'rgba(22,10,24,0.2)',
      pointBackgroundColor: 'rgba(55,10,24,0.2)',
      pointBorderColor: '#FFCE56',
      pointHoverBackgroundColor: '#EFCE56',
      pointHoverBorderColor: 'rgba(66,10,24,0.2)'
    }
  ];
  constructor(private catservice: ServiceOffreService ) { }
  users: Array<any>;
  ngOnInit(): void {
    this.catservice.entreprisestat().subscribe(data => {
      this.user = data as Statistique[];
      for (const c of this.user) {
        this.pieChartLabels.push(c.nom);
        this.pieChartData.push(c.nbproposition);

      }
    });

    this.catservice.offrestat().subscribe(data => {
      this.abc = data as Statistique2[];
      for (const c of this.abc) {
        this.pieChartLabels2.push(c.nom);
        this.pieChartData2.push(c.nbpropo);
      }
    });
  }

}
