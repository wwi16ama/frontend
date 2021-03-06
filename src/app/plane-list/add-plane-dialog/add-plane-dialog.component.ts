import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Plane, neededAuthorizationEnum } from './../../models/plane.model';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-plane-dialog',
  templateUrl: './add-plane-dialog.component.html',
  styleUrls: ['./add-plane-dialog.component.css']
})

export class AddPlaneDialogComponent {

  number: string;
  name: string;
  neededAuthorization: string;
  position: string[];
  submitted: boolean;
  possibleAuthorizations: string[];
  pricePerBookedHour: number;
  pricePerFlightMinute: number;

  numberFormControl: FormControl;
  nameFormControl: FormControl;
  neededAuthorizationFormControl: FormControl;
  positionFormControl: FormControl;
  matcher: ErrorStateMatcher;
  pricePerFlightMinuteFormControl: FormControl;
  pricePerBookedHourFormControl: FormControl;
  pictureUrlFormControl: FormControl;

  constructor(public addPlaneDialogRef: MatDialogRef<AddPlaneDialogComponent>, public snackBar: MatSnackBar) {
    this.number = '';
    this.name = '';
    this.possibleAuthorizations = ['PPL-A', 'PPL-B', 'BZF-I', 'BZF-II'];
    this.position = ['Halle 1', 'Halle 2'];
    this.submitted = false;

    this.initializeFormControls();
  }

  public onNoClick(): void {
    this.addPlaneDialogRef.close();
  }

  public onSubmit(): void {
    this.submitted = true;
  }

  public initializeFormControls(): void {
    this.pricePerBookedHourFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.pricePerFlightMinuteFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.numberFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.nameFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.neededAuthorizationFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.positionFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.pictureUrlFormControl = new FormControl('', []);

    this.matcher = new MyErrorStateMatcher();
  }

  public savePlaneData(): void {
    if (this.checkRequiredFields()) {
      const newPlane = new Plane(
        this.numberFormControl.value,
        this.nameFormControl.value,
        this.positionFormControl.value,
        this.pictureUrlFormControl.value,
        neededAuthorizationEnum[neededAuthorizationEnum.getEnumString(this.neededAuthorization)],
        this.pricePerBookedHourFormControl.value,
        this.pricePerFlightMinuteFormControl.value
        );
      this.addPlaneDialogRef.close(newPlane);
    }
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
    } else if (this.pricePerBookedHourFormControl.invalid) {
      this.snackBar.open('Keine korrekte Nutzungsgebühr.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.pricePerFlightMinuteFormControl.invalid) {
      this.snackBar.open('Keine korrekte Fluggebühr.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.neededAuthorization === undefined) {
      this.snackBar.open('Keine Lizenz angegeben.', 'Schließen',
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
