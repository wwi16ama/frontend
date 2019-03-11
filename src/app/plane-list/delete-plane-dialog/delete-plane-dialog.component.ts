import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Plane } from './../../models/plane.model';

@Component({
  selector: 'app-delete-plane-dialog',
  templateUrl: './delete-plane-dialog.component.html',
  styleUrls: ['./delete-plane-dialog.component.css']
})
export class DeletePlaneDialogComponent {

  constructor(public deletePlaneDialogRef: MatDialogRef<DeletePlaneDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public plane: Plane) {
  }

  public onNoClick(): void {
    this.deletePlaneDialogRef.close();
  }

  public deletePlaneData(): void {
    this.deletePlaneDialogRef.close(this.plane);
  }
}

