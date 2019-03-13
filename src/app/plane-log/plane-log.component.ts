import { Component, OnInit, ViewChild } from '@angular/core';
import { Plane } from './../models/plane.model';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PlaneService } from '../services/plane.service';

@Component({
  selector: 'app-plane-log',
  templateUrl: './plane-log.component.html',
  styleUrls: ['./plane-log.component.css']
})
export class PlaneLogComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[];
    dataSource: any;

    constructor(public planeService: PlaneService) {
      this.displayedColumns = ['plane', 'date', 'time', 'pilot', 'location', 'fuel', 'price'];
    }

    ngOnInit() {
      this.planeService.getPlaneListData().subscribe(
        (planelogdata: Plane[]) => {
          this.dataSource = new MatTableDataSource(planelogdata);
          this.dataSource.sort = this.sort;
        }
      );
    }

  }
