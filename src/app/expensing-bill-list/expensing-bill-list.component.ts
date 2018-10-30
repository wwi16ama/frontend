import { Component, OnInit, ViewChild } from '@angular/core';
import { Plane } from './../models/plane.model'
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PlaneListService } from '../services/planelist.service';

@Component({
  selector: 'app-expensing-bill-list',
  templateUrl: './expensing-bill-list.component.html',
  styleUrls: ['./expensing-bill-list.component.css']
})
export class ExpensingBillListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;

  constructor(public planelistservice: PlaneListService, public router: Router) { 
    this.displayedColumns = ['name', 'pricePerBookedHour', 'pricePerFlightMinute'];
  }

  ngOnInit() {
    this.planelistservice.getPlaneListData().subscribe(
      (expensingbilldata: Plane[]) => {
        this.dataSource = new MatTableDataSource(expensingbilldata)
        this.dataSource.sort = this.sort;
      }
    )
  }

}
