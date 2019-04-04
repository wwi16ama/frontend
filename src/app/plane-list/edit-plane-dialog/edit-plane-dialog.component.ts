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
  pictureUrlFormControl: FormControl;


  constructor(
    public editPlaneDialogRef: MatDialogRef<EditPlaneDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public plane: Plane
  ) {
    this.initializeFormControls();
  }


  public onNoClick(): void {
    this.editPlaneDialogRef.close();
  }

  public savePlaneData(): void {
    if (this.checkRequiredFields()) {
      this.plane.number = this.numberFormControl.value;
      this.plane.name = this.nameFormControl.value;
      this.plane.position = this.positionFormControl.value;
      this.plane.pictureUrl = this.pictureUrlFormControl.value;
      this.editPlaneDialogRef.close(this.plane);
    }
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

    this.pictureUrlFormControl = new FormControl(this.plane.pictureUrl, []);
  }

  public checkRequiredFields(): boolean {
    if (this.numberFormControl.invalid) {
      this.snackBar.open('Keine korrekte Kennung.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.nameFormControl.invalid) {
      this.snackBar.open('Kein korrekter Name.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.positionFormControl.invalid) {
      this.snackBar.open('Keine Position angegeben.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.pictureUrlFormControl.invalid) {
      this.snackBar.open('Kein passender Bidlink.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    }
    return true;
  }

}
