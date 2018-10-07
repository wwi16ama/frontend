import { Component, Inject } from '@angular/core';
import { Plane, neededAuthorizationEnum } from './../../models/plane.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-plane-dialog',
  templateUrl: './edit-plane-dialog.component.html',
  styleUrls: ['./edit-plane-dialog.component.css']
})
export class EditPlaneDialogComponent {

  constructor(
    public editPlaneDialogRef: MatDialogRef<EditPlaneDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public plane: Plane
  ) {  }


  public onNoClick(): void {
    this.editPlaneDialogRef.close();
  }

  public saveMemberData(): void {
      this.editPlaneDialogRef.close(this.plane);
  }

}
