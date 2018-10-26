import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';


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

  numberFormControl: FormControl;
  nameFormControl: FormControl;
  neededAuthorizationFormControl: FormControl;
  positionFormControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor(public addPlaneDialogRef: MatDialogRef<AddPlaneDialogComponent>, public snackBar: MatSnackBar) {
    this.number = '';
    this.name = '';
    this.possibleAuthorizations = ['PPL-A', 'PPL-B', 'BZF-I', 'BZF-II'];
    this.position = ['Halle 1', 'Halle 2'];
    this.submitted = false;

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

    this.matcher = new MyErrorStateMatcher();
  }
  public onNoClick(): void {
    this.addPlaneDialogRef.close();
  }
  public onSubmit(): void {
    this.submitted = true;
  }

  public onFileChanged(event): void {
    const file = event.target.files[0];
  }

  public savePlaneData(): void {
    const newPlane = {
      number: this.numberFormControl.value,
      name: this.nameFormControl.value,
      position: this.positionFormControl.value,
      neededAuthorization: this.neededAuthorization
    };
    this.addPlaneDialogRef.close(newPlane);
  }

}
