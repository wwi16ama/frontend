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

  numberFormControl: FormControl;
  nameFormControl: FormControl;
  positionFormControl: FormControl;


  constructor(
    public editPlaneDialogRef: MatDialogRef<EditPlaneDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public plane: Plane
  ) {
    this.initializeFormControls();
  }


  public onNoClick(): void {
    this.editPlaneDialogRef.close();
  }

  public saveMemberData(): void {
      this.editPlaneDialogRef.close(this.plane);
  }

  public initializeFormControls(): void {
    this.numberFormControl = new FormControl(this.plane.number, [
      Validators.required
    ]);

    this.nameFormControl = new FormControl(this.plane.name, [
      Validators.required
    ]);

    this.positionFormControl = new FormControl(this.plane.position, [
      Validators.required
    ]);
  }


}
