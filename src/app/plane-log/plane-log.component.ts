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

  planes: Plane;
  planelog: PlaneLog;

    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[];
    dataSource: any;

    constructor(
      public planeLogService: PlaneLogService,
      public planeService: PlaneService,
      public activatedRoute: ActivatedRoute) {
      this.displayedColumns = ['id', 'refuelDateTime', 'memberId', 'location', 'startCount', 'endCount', 'totalPrice'];
    }

    ngOnInit() {
      // PlaneService
      this.activatedRoute.params.subscribe(
        params => {
      this.planeService.getPlaneData(params['id']).subscribe(
        (planedata: Plane) => {
          this.planes = planedata;
          console.log(this.planes);
          }
      );

      // PlaneLogService
      this.planeLogService.getPlaneLogData().subscribe(
        (planelog: PlaneLog[]) => {
          this.dataSource = new MatTableDataSource(planelog);
          this.dataSource.sort = this.sort;
        }
      );
      console.log(this.dataSource);
    });

  }}
