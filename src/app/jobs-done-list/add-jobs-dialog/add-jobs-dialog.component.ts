import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add-jobs-dialog',
  templateUrl: './add-jobs-dialog.component.html',
  styleUrls: ['./add-jobs-dialog.component.css']
})
export class AddJobsDialogComponent implements OnInit {
  id: number;
  name: string;
  gutschrift: number;
  startDate: string;
  endDate: string;
  possibleNames: string[];

  idFormControl: FormControl;
  nameFormControl: FormControl;
  gutschriftFormControl: FormControl;
  startDateFormControl: FormControl;
  endDateFormControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor(
    public addJobsDialogRef: MatDialogRef<AddJobsDialogComponent>
  ) 
  { 
    this.possibleNames = ['Test1', 'Test2', 'Test3', 'Test4'];

    this.initializeFormControls();
  }

  ngOnInit() {
  }

  public onNoClick(): void {
    this.addJobsDialogRef.close();
  }

  public initializeFormControls(): void {
    this.nameFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.matcher = new MyErrorStateMatcher();
  }
}
