import { Component, OnInit, ViewChild } from '@angular/core';

import { PlaneLog } from './../models/planelog.model';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PlaneLogService } from '../services/planelog.service';
import { PlaneService } from '../services/plane.service';
import { Plane } from '../models/plane.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-plane-log',
  templateUrl: './plane-log.component.html',
  styleUrls: ['./plane-log.component.css']
})
export class PlaneLogComponent implements OnInit {

  plane: Plane;
  planelog: PlaneLog;

    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[];
    dataSource: any;

    constructor(
      public planeLogService: PlaneLogService,
      public planeService: PlaneService,
      public activatedRoute: ActivatedRoute) {
      this.displayedColumns = ['nameofplane', 'id', 'refuelDateTime', 'memberId', 'location', 'startCount', 'endCount', 'totalPrice'];
    }

    ngOnInit() {
      this.activatedRoute.params.subscribe(
        params => {
      this.planeService.getPlaneData(params['id']).subscribe(
        (planedata: Plane) => {
          this.plane = planedata;
          this.planeLogService.getPlaneLogData(this.plane.id).subscribe(
          (planelog: PlaneLog[]) => {
          this.dataSource = new MatTableDataSource(planelog);
          // console.log(this.planelog);
        }
      );
    });

  }); }
}

