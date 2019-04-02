import { Component, OnInit } from '@angular/core';
import { PlaneService } from './../services/plane.service';
import { Plane, neededAuthorizationEnum } from './../models/plane.model';

import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditPlaneDialogComponent } from './edit-plane-dialog/edit-plane-dialog.component';
import { DeletePlaneDialogComponent } from './delete-plane-dialog/delete-plane-dialog.component';
import { AddPlaneDialogComponent } from './add-plane-dialog/add-plane-dialog.component';


@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[];

  constructor(public router: Router, public planeService: PlaneService, public editPlaneDialog: MatDialog, public addPlaneDialog: MatDialog,
    public deletePlaneDialog: MatDialog, public snackBar: MatSnackBar) {

    this.planes = [];
  }

  ngOnInit() {
    this.planeService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
        for (let i = 0; i < this.planes.length; i++) {
          this.planes[i].neededAuthorization = neededAuthorizationEnum[this.planes[i].neededAuthorization];
        }
      }
    );
  }

  public formatStringToEnum(plane: any): Plane {
    plane.neededAuthorization = neededAuthorizationEnum.getEnumString(plane.neededAuthorization);
    return plane;
  }

  public openEditPlaneDialog(plane: Plane): void {
    const dialogRef = this.editPlaneDialog.open(EditPlaneDialogComponent, {
      maxWidth: '100vw',
      minWidth: '0px',
      maxHeight: '90vh',
      disableClose: true,
      data: JSON.parse(JSON.stringify(plane))
    });
    dialogRef.afterClosed().subscribe(changedPlane => {
      if (changedPlane != null) {
        this.savePlane(changedPlane);
      }
    });
  }

  public savePlane(plane: Plane): void {
    const newPlaneData = JSON.parse(JSON.stringify(plane));
    const planeId = plane.id;
    plane = this.formatStringToEnum(plane);
    this.planeService.updatePlaneData(plane).subscribe(
      (response) => {
        if (response.status === 204) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          const planeIndex = this.findPlaneIndex(planeId);
          if (planeIndex !== -1) {
            this.planes[planeIndex] = newPlaneData;
          }
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
          this.snackBar.open('Flugzeug nicht gefunden.', 'Schließen',
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

  public openDeletePlaneDialog(plane: Plane): void {
    const dialogRef = this.deletePlaneDialog.open(DeletePlaneDialogComponent, {
      maxWidth: '100vw',
      minWidth: '0px',
      maxHeight: '90vh',
      disableClose: true,
      data: JSON.parse(JSON.stringify(plane))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.deletePlane(plane.id);
      }
    });
  }
  public findPlaneIndex(planeId: number): number {
    for (let i = 0; i < this.planes.length; i++) {
      if (this.planes[i].id === planeId) {
        return i;
      }
    }
    return -1;
  }
  public deletePlane(planeId: number): void {
    this.planeService.deletePlaneData(planeId).subscribe(
      (response) => {
        if (response.status === 204) {
          this.snackBar.open('Löschen erfolgreich', 'Schließen',
            {
              duration: 3000,
            }
          );
          const planeIndex = this.findPlaneIndex(planeId);
          if (planeIndex !== -1) {
            this.planes.splice(planeIndex, 1);
          }
        }
      },
      error => {
        if (error.status === 404) {
          this.snackBar.open('Flugzeug nicht gefunden.', 'Schließen',
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

  openAddPlaneDialog(): void {
    const dialogRef = this.addPlaneDialog.open(AddPlaneDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.savePlaneData(result);
      }
    });
  }

  public savePlaneData(plane: Plane): void {
    plane = this.formatStringToEnum(plane);
    this.planeService.addPlaneData(plane).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          const newPlane = new Plane(
            response.body.number,
            response.body.name,
            response.body.position,
            response.body.neededAuthorization,
            response.body.pricePerBookedHour,
            response.body.pricePerFlightMinute,
            response.body.id
          );
          newPlane.neededAuthorization = neededAuthorizationEnum[newPlane.neededAuthorization];
          this.planes.push(newPlane);
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
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
  public navigateToPlaneLog(planeId): void {
    this.router.navigate(['../planeLog', planeId]);
    // console.log('Plane ID: ', planeId);
  }
}

