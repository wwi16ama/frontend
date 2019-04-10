import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PlaneLog } from './../models/planelog.model';
import { MatTableDataSource, MatSort, MatDialog, MatSnackBar, MatSortable } from '@angular/material';
import { PlaneLogService } from '../services/planelog.service';
import { PlaneService } from '../services/plane.service';
import { Plane } from '../models/plane.model';
import { ActivatedRoute } from '@angular/router';
import { AddPlaneLogComponent } from './add-plane-log/add-plane-log.component';


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
      public activatedRoute: ActivatedRoute,
      public addLogDialog: MatDialog,
      public snackBar: MatSnackBar) {
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
          // console.log(this.planelog);
          this.sort.sort(<MatSortable>({id: 'refuelDateTime', start: 'desc'}));
          this.dataSource.sort = this.sort;
        }
      );
    });

  }); }

  openAddLogDialog(): void {
    const dialogRef = this.addLogDialog.open(AddPlaneLogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.savePlaneLogEntry(result);
      }
    });
  }
  public savePlaneLogEntry(planelog: PlaneLog): void {
    this.planeLogService.addPlaneLogEntry(planelog, this.plane.id).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          const newPlaneLog = new PlaneLog (
            response.body.planeNumber,
            response.body.refuelDateTime,
            response.body.memberId,
            response.body.location,
            response.body.startCount,
            response.body.endCount,
            response.body.totalPrice
          );
          this.dataSource.data.push(newPlaneLog);
          this.activatedRoute.params.subscribe(
            params => {
          this.planeService.getPlaneData(params['id']).subscribe(
            (planedata: Plane) => {
              this.plane = planedata;
              this.planeLogService.getPlaneLogData(this.plane.id).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              (planelog: PlaneLog[]) => {
              this.dataSource = new MatTableDataSource(planelog);
              // console.log(this.planelog);
            }
          );
        });

      });
          this.dataSource.sort = this.sort;
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
            {
              duration: 4000,
            }
          );
        } else if (error.status === 404) {
          this.snackBar.open('Member oder Flugzeug wurde nicht gefunden', 'Schließen',
            {
              duration: 4000,
            }
          );
        } else if (error.status === 0) {
          this.snackBar.open('Es konnte keine Verbindung zum Server aufgebaut werden', 'Schließen',
            {
              duration: 4000,
            }
          );
        }
      }
    );
  }

}

