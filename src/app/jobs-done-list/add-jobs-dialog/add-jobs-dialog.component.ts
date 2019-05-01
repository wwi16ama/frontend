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

  minDate = new Date(2000, 0, 1);
  maxDate: Date;

  id: number;
  name: string;
  gutschrift: number;
  startDate: string;
  endDate: string;
  possibleNames: string[];
  hideDate: boolean;

  idFormControl: FormControl;
  nameFormControl: FormControl;
  gutschriftFormControl: FormControl;
  startDateFormControl: FormControl;
  endDateFormControl: FormControl;
  matcher: ErrorStateMatcher;

  constructor(
    public addJobsDialogRef: MatDialogRef<AddJobsDialogComponent>,
    public snackBar: MatSnackBar
  ) {
    this.possibleNames = ['Vorstandsmitglied', 'Fluglehrer', 'Flugwart', 'Tageseinsatz', 'Pilot'];
    this.name = '';
    this.hideDate = true;

    this.initializeFormControls();
  }

  public getCurrentDate(): Date {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    this.maxDate = new Date(year, month, day);
    return this.maxDate;
  }

  public getServiceName(serviceNameAnzeige): string {
    let serviceName = '';
    switch ( serviceNameAnzeige) {
      case 'Vorstandsmitglied': {
         serviceName = 'J_VORSTANDSMITGLIED';
         break;
      }
      case 'Fluglehrer': {
         serviceName = 'J_FLUGLEHRER';
         break;
      }
      case 'Flugwart': {
         serviceName = 'J_FLUGWART';
         break;
      }
      case 'Tageseinsatz': {
         serviceName = 'T_TAGESEINSATZ';
         break;
      }
      case 'Pilot': {
         serviceName = 'T_PILOT';
         break;
      }
   }
    return serviceName;
  }

  public onNoClick(): void {
    this.addJobsDialogRef.close();
  }

  public initializeFormControls(): void {
    this.startDateFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.endDateFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.matcher = new MyErrorStateMatcher();
  }

  public checkRequiredFields(): boolean {
    if (!this.name) {
      this.snackBar.open('Keine gültige Dienstart.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.startDateFormControl.invalid && !this.hideDate) {
      this.snackBar.open('Kein gültiges Startdatum.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.endDateFormControl.invalid && !this.hideDate) {
      this.snackBar.open('Kein gültiges Enddatum', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if ((!this.hideDate) && (!this.checkDate())) {
      this.snackBar.open('Das Startdatum muss vor dem Enddatum liegen', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    }
    return true;
  }

  public checkDate(): boolean {
    const diff = (this.endDateFormControl.value.getTime() - this.startDateFormControl.value.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays >= 0) {
      return true;
    } else {
      return false;
    }
  }

  public saveServiceData(): void {
    if (this.checkRequiredFields()) {
      if (!this.hideDate) {
      const newJobsDoneList = {
        'id': '',
        'name': this.getServiceName(this.name),
        'gutschrift': 0,
        'startDate': this.getDateString(this.startDateFormControl.value),
        'endDate':  this.getDateString(this.endDateFormControl.value)
      };
      this.addJobsDialogRef.close(newJobsDoneList);
    } else {
      const newJobsDoneList = {
        'id': '',
        'name': this.getServiceName(this.name),
        'gutschrift': 0,
        'startDate': (new Date().getFullYear()).toString() + '-02-01',
        'endDate': (new Date().getFullYear() + 1).toString() + '-01-31'
      };
      this.addJobsDialogRef.close(newJobsDoneList);
    }
    }
  }

  public getDateString(date: any): string {
    const year = date.getFullYear();
    let month = (date.getMonth() + 1);
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  }

  public formatDate(date: string): string {
    const parseDate = new Date(date);
    return new Date(parseDate.getTime() - parseDate.getTimezoneOffset() * 60000).toISOString();
  }

  public setHideDate(): void {
    switch (this.name) {
      case 'Vorstandsmitglied': {
         this.hideDate = true;
         break;
      }
      case 'Fluglehrer': {
         this.hideDate = true;
         break;
      }
      case 'Flugwart': {
        this.hideDate = true;
         break;
      }
      case 'Tageseinsatz': {
        this.hideDate = false;
         break;
      }
      case 'Pilot': {
        this.hideDate = false;
         break;
      }
   }
  }
  ngOnInit() {
    this.getCurrentDate();
  }
}
