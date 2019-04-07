import { Component, OnInit, ViewChild } from '@angular/core';

import { PlaneLog } from './../models/planelog.model';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { PlaneLogService } from '../services/planelog.service';
import { PlaneService } from '../services/plane.service';
import { Plane } from '../models/plane.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPlaneLogComponent } from "./add-plane-log/add-plane-log.component";


@Component({
  selector: 'app-plane-log',
  templateUrl: './plane-log.component.html',
  styleUrls: ['./plane-log.component.css']
})
export class PlaneLogComponent implements OnInit {

  plane: Plane;
  planelog: PlaneLog;
  // Log: Log[];

    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[];
    dataSource: any;

    constructor(
      public planeLogService: PlaneLogService,
      public planeService: PlaneService,
      public activatedRoute: ActivatedRoute,
      public addLogDialog: MatDialog) {
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

  openAddLogDialog(): void {
    const dialogRef = this.addLogDialog.open(AddPlaneLogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        // this.saveLogEntry(result);
      }
    });
  };
  // Method muss angepasst werden, wenn die API steht
  // public saveLogEntry(Log: Log): void {
  //   this.pilotLogService.addPilotLogEntry(pilotlog).subscribe(
  //     (response) => {
  //       if (response.status === 200) {
  //         this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
  //           {
  //             duration: 3000,
  //           }
  //         );
  //         const newPilotLog = new Pilotlog (
  //           response.body.flightId,
  //           response.body.planeNumber,
  //           response.body.departureLocation,
  //           response.body.departureTime,
  //           response.body.arrivalLocation,
  //           response.body.arrivalTime,
  //           response.body.flightWithGuests
  //         );
  //         this.dataSource.data.push(newPilotLog);
  //         this.addFlightDuration();
  //         this.dataSource.sort = this.sort;
  //       }
  //     },
  //     error => {
  //       if (error.status === 400) {
  //         this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
  //           {
  //             duration: 4000,
  //           }
  //         );
  //       } else if (error.status === 0) {
  //         this.snackBar.open('Es konnte keine Verbindung zum Server aufgebaut werden', 'Schließen',
  //           {
  //             duration: 4000,
  //           }
  //         );
  //       }
  //     }
  //   );
  // }
  
}

