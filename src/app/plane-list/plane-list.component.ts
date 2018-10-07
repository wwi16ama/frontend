import { Component, OnInit } from '@angular/core';
import { PlaneListService } from './../services/planelist.service';
import { Plane, neededAuthorizationEnum } from './../models/plane.model';

import { MatDialog, MatSnackBar } from '@angular/material';
import { EditPlaneDialogComponent } from './edit-plane-dialog/edit-plane-dialog.component';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrls: ['./plane-list.component.css']
})
export class PlaneListComponent implements OnInit {

  planes: Plane[];

  constructor(public planelistService: PlaneListService, public editPlaneDialog: MatDialog) {
    this.planes = [];
  }

  ngOnInit() {
    this.planelistService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
        for (let i = 0; i < this.planes.length; i++) {
          this.planes[i].neededAuthorization = neededAuthorizationEnum[this.planes[i].neededAuthorization];
        }
      }
    );
  }

  public openEditPlaneDialog(plane: Plane): void {
    const dialogRef = this.editPlaneDialog.open(EditPlaneDialogComponent, {
      maxWidth: '100vw',
      minWidth: '0px',
      maxHeight: '90vh',
      disableClose: true,
      data: JSON.parse(JSON.stringify(plane))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.savePlane(result);
      }
    });
  }

  public savePlane(plane: Plane): void {

  }

}
