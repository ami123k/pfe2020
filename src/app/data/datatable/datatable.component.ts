import {Component, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};



  constructor() {}

  ngOnInit(): void {
    this.dtOption = {
      paging:   true,
      ordering: true,
      info:     true,
      simple_numbers: true,
      full : true
    };
    $(() => {
      $('table.table').DataTable(this.dtOption);
    });
  }

}
