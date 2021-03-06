import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { PlaneLog } from './../models/planelog.model';
import { MatTableDataSource, MatSort, MatDialog, MatSnackBar, MatSortable } from '@angular/material';
import { PlaneLogService } from '../services/planelog.service';
import { PlaneService } from '../services/plane.service';
import { Plane } from '../models/plane.model';
import { ActivatedRoute } from '@angular/router';
import { AddPlaneLogComponent } from './add-plane-log/add-plane-log.component';
import { EditPlaneLogComponent } from "./edit-plane-log/edit-plane-log.component";
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-plane-log',
  templateUrl: './plane-log.component.html',
  styleUrls: ['./plane-log.component.css'],
})
export class PlaneLogComponent implements OnInit {

  plane: Plane;
  planeLog: PlaneLog;
  allowedToEditPlaneLog

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource: any;
  static editPlaneLog: any;

  constructor(
    public planeLogService: PlaneLogService,
    public planeService: PlaneService,
    public activatedRoute: ActivatedRoute,
    public addLogDialog: MatDialog,
    public authService: AuthService,
    public editPlaneLogDialog: MatDialog,
    public snackBar: MatSnackBar) {
    this.displayedColumns = ['nameofplane', 'id', 'refuelDateTime', 'memberId', 'location', 'startCount', 'endCount', 'fuelPrice'];
    this.allowedToEditPlaneLog = Boolean;
  }

  ngOnInit() {
    this.allowedToEditPlaneLog = this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER') || this.authService.memberHasAuthorization('SYSTEMADMINISTRATOR');
    this.activatedRoute.params.subscribe(
      params => {
        this.planeService.getPlaneData(params['id']).subscribe(
          (planedata: Plane) => {
            this.plane = planedata;
            this.planeLogService.getPlaneLogData(this.plane.id).subscribe(
              (planelog: PlaneLog[]) => {
                this.dataSource = new MatTableDataSource(planelog);
                this.sort.sort(<MatSortable>({ id: 'refuelDateTime', start: 'desc' }));
                this.dataSource.sort = this.sort;
              }
            );
          });

      });
  }

  public getId(rowId: number, location: string, startCount: string, endCount: string, fuelPrice: string): void {
    const dialogRef = this.editPlaneLogDialog.open(EditPlaneLogComponent, {
    });
    PlaneLogComponent.editPlaneLog = [rowId, location, startCount, endCount, fuelPrice];
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.updatePlaneLogEntry(result);
      }
    });
  }

  static getEditPlaneLog() {
    return this.editPlaneLog;
  }

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
          const newPlaneLog = new PlaneLog(
            response.body.planeNumber,
            response.body.refuelDateTime,
            response.body.memberId,
            response.body.location,
            response.body.startCount,
            response.body.endCount,
            response.body.fuelPrice
          );
          this.dataSource.data.push(newPlaneLog);
          this.activatedRoute.params.subscribe(
            params => {
              this.planeService.getPlaneData(params['id']).subscribe(
                (planedata: Plane) => {
                  this.plane = planedata;
                  this.planeLogService.getPlaneLogData(this.plane.id).subscribe(
                    (planelog: PlaneLog[]) => {
                      this.dataSource = new MatTableDataSource(planelog);
                      this.sort.sort(<MatSortable>({ id: 'refuelDateTime', start: 'desc' }));
                      this.dataSource.sort = this.sort;
                    }
                  );
                });
            });
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Pflichtfelder falsch oder nicht ausgefüllt', 'Schließen',
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

  public updatePlaneLogEntry(planelog: PlaneLog): void {
    if (this.allowedToEditPlaneLog == true) {
      this.planeLogService.updatePlaneLogEntry(planelog, this.plane.id, PlaneLogComponent.editPlaneLog[0]).subscribe(
        (response) => {
          if (response.status === 204) {
            this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
              {
                duration: 3000,
              }
            );
            this.activatedRoute.params.subscribe(
              params => {
                this.planeService.getPlaneData(params['id']).subscribe(
                  (planedata: Plane) => {
                    this.plane = planedata;
                    this.planeLogService.getPlaneLogData(this.plane.id).subscribe(
                      (planelog: PlaneLog[]) => {
                        this.dataSource = new MatTableDataSource(planelog);
                        this.sort.sort(<MatSortable>({ id: 'refuelDateTime', start: 'desc' }));
                        this.dataSource.sort = this.sort;
                      }
                    );
                  });
              });
          }
        },
        error => {
          if (error.status === 400) {
            this.snackBar.open('Pflichtfelder falsch oder nicht ausgefüllt', 'Schließen',
              {
                duration: 4000,
              }
            );
          } else if (error.status === 404) {
            this.snackBar.open('Tank-ID oder Flugzeug wurde nicht gefunden', 'Schließen',
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
    else {
      this.snackBar.open('Sie sind für diese Aktion nicht berechtigt.', 'Schließen',
      {
        duration: 3000,
      }
    );
    }
  }

}

