import { Component, OnInit } from '@angular/core';
import { ExpensingbillService } from './../services/expensingbill.service'
import { ListExpensingBill } from './../models/expensingbilllist.model'
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-expensing-bill-list',
  templateUrl: './expensing-bill-list.component.html',
  styleUrls: ['./expensing-bill-list.component.css']
})
export class ExpensingBillListComponent implements OnInit {

  expensingbill: ListExpensingBill[];

  constructor(public expensingbillService: ExpensingbillService,) { 
    this.expensingbill = []
  }

  ngOnInit() {
    this.expensingbillService.getExpensingBillData().subscribe(
      (expensingbilldata: ListExpensingBill[]) => {
        this.expensingbill = expensingbilldata;
      }
    )
  }

}
