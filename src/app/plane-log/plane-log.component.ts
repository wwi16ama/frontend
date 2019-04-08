import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PlaneLog } from './../models/planelog.model';
import { MatTableDataSource, MatSort, MatSortable } from '@angular/material';
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
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

    constructor(
      public planeLogService: PlaneLogService,
      public planeService: PlaneService,
      public activatedRoute: ActivatedRoute) {
      this.displayedColumns = ['nameofplane', 'id', 'refuelDateTime', 'memberId', 'location', 'startCount', 'endCount', 'fuelPrice'];
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
          this.sort.sort(<MatSortable>({id: 'refuelDateTime', start: 'desc'}));
          this.dataSource.sort = this.sort;
        }
      );
    });
  }); }
}

