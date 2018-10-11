import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpensingbillService } from './../services/expensingbill.service'
import { ListExpensingBill } from './../models/expensingbilllist.model'
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-expensing-bill-list',
  templateUrl: './expensing-bill-list.component.html',
  styleUrls: ['./expensing-bill-list.component.css']
})
export class ExpensingBillListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;

  constructor(public expensingbillService: ExpensingbillService, public router: Router) { 
    this.displayedColumns = ['planename', 'duration', 'flighttime'];
  }

  ngOnInit() {
    this.expensingbillService.getExpensingBillData().subscribe(
      (expensingbilldata: ListExpensingBill[]) => {
        this.dataSource = new MatTableDataSource(expensingbilldata)
        this.dataSource.sort = this.sort;
      }
    )
  }

}
