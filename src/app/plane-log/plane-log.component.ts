import { Component, OnInit, ViewChild } from '@angular/core';

import { PlaneLog } from './../models/planelog.model';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PlaneLogService } from '../services/planelog.service';
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

    constructor(public planeLogService: PlaneLogService, public planeService: PlaneService) {
      this.displayedColumns = ['id', 'refuelDateTime', 'memberId', 'location', 'startCount', 'endCount', 'totalPrice'];
    }

    ngOnInit() {
      // PlaneLogService
      this.planeLogService.getPlaneLogData().subscribe(
        (planelogdata: PlaneLog[]) => {
          this.dataSource = new MatTableDataSource(planelogdata);
          this.dataSource.sort = this.sort;
        }
      );
    }

  }
