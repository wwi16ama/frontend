import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Plane, neededAuthorizationEnum } from './../../models/plane.model';

@Component({
  selector: 'app-delete-plane-dialog',
  templateUrl: './delete-plane-dialog.component.html',
  styleUrls: ['./delete-plane-dialog.component.css']
})
export class DeletePlaneDialogComponent implements OnInit {

  constructor(public deletePlaneDialogRef: MatDialogRef<DeletePlaneDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public plane: Plane) {
   }

  ngOnInit() {
  }

  public onNoClick(): void {
    this.deletePlaneDialogRef.close();
  }

  public deletePlaneData(): void {
      this.deletePlaneDialogRef.close(this.plane);
  }
}

