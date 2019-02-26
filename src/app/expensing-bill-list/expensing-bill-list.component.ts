import { Component, OnInit, ViewChild } from '@angular/core';
import { Plane } from './../models/plane.model';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PlaneService } from '../services/plane.service';

@Component({
  selector: 'app-expensing-bill-list',
  templateUrl: './expensing-bill-list.component.html',
  styleUrls: ['./expensing-bill-list.component.css']
})
export class ExpensingBillListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;

  constructor(public planeService: PlaneService) {
    this.displayedColumns = ['name', 'pricePerBookedHour', 'pricePerFlightMinute'];
  }

  ngOnInit() {
    this.planeService.getPlaneListData().subscribe(
      (expensingbilldata: Plane[]) => {
        this.dataSource = new MatTableDataSource(expensingbilldata);
        this.dataSource.sort = this.sort;
      }
    );
  }

}
