import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { Plane } from '../../models/plane.model';
import { PlaneService } from '../../services/plane.service';

@Component({
  selector: 'app-add-pilotlogentry',
  templateUrl: './add-pilotlogentry.component.html',
  styleUrls: ['./add-pilotlogentry.component.css']
})
export class AddPilotlogentryComponent implements OnInit {
    planes: Plane[];

    planeNumber: string;
    departureLocation: string;
    departureDay: string;
    departureTime: string;
    arrivalLocation: string;
    arrivalDay: string;
    arrivalTime: string;
    usageTime: number;
    flightWithGuests: boolean;

    planeNumberFormControl: FormControl;
    departureTimeFormControl: FormControl;
    departureDayFormControl: FormControl;
    arrivalTimeFormControl: FormControl;
    arrivalDayFormControl: FormControl;
    departureLocationFormControl: FormControl;
    arrivalLocationFormControl: FormControl;
    usageTimeFormControl: FormControl;


  constructor( public addPilotLogEntryDialogRef: MatDialogRef<AddPilotlogentryComponent>, public snackBar: MatSnackBar,
    public planeService: PlaneService) {
    this.planes = [];
    this.departureLocation = '';
    this.departureTime = '';
    this.departureDay = '';
    this.arrivalLocation = '';
    this.arrivalTime = '';
    this.arrivalDay = '';
    this.usageTime = 0;
    this.flightWithGuests = false;

    this.usageTimeFormControl = new FormControl ('', [
      Validators.required,
    ]);

    this.departureDayFormControl = new FormControl ('', [
      Validators.required,
    ]);

    this.arrivalDayFormControl = new FormControl ('', [
      Validators.required,
    ]);

    this.planeNumberFormControl = new FormControl ('', [
      Validators.required,
    ]);

    this.departureTimeFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.arrivalTimeFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.departureLocationFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.arrivalLocationFormControl = new FormControl('', [
      Validators.required,
    ]);
  }

  public onNoClick(): void {
    this.addPilotLogEntryDialogRef.close();
  }

  public savePilotLogData(): void {
    if (this.checkRequiredFields()) {
      const newPilotLog = {
        planeNumber: this.planeNumberFormControl.value,
        departureLocation: this.departureLocationFormControl.value,
        departureTime: this.formatDate(new Date(
          this.departureDayFormControl.value.getFullYear(),
          this.departureDayFormControl.value.getMonth(),
          this.departureDayFormControl.value.getDate(),
          parseInt(this.departureTimeFormControl.value.slice(0, 2), 10),
          parseInt(this.departureTimeFormControl.value.slice(3, 5), 10)
        ).toString()),
        arrivalTime: this.formatDate(new Date(
          this.arrivalDayFormControl.value.getFullYear(),
          this.arrivalDayFormControl.value.getMonth(),
          this.arrivalDayFormControl.value.getDate(),
          parseInt(this.arrivalTimeFormControl.value.slice(0, 2), 10),
          parseInt(this.arrivalTimeFormControl.value.slice(3, 5), 10)
        ).toString()),
        arrivalLocation: this.arrivalLocationFormControl.value,
        useDuration: this.usageTimeFormControl.value,
        flightWithGuests: this.flightWithGuests
      };
      this.addPilotLogEntryDialogRef.close(newPilotLog);
  }}

  public formatDate(date: string): string {
    const parseDate = new Date(date);
    return new Date(parseDate.getTime() - parseDate.getTimezoneOffset() * 60000).toISOString();
  }

  public checkRequiredFields(): boolean {
    if (this.planeNumberFormControl.invalid ) {
      this.snackBar.open('Kein gültiges Luftfahrzeug.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.departureLocationFormControl.invalid) {
      this.snackBar.open('Kein gültiger Abflugsort.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.departureTimeFormControl.invalid) {
      this.snackBar.open('Keine gültige Abflugszeit', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.departureLocationFormControl.invalid) {
      this.snackBar.open('Kein gültiger Landungsort.', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.arrivalTimeFormControl.invalid) {
      this.snackBar.open('Keine gültige Landungszeit', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.arrivalDayFormControl.invalid) {
      this.snackBar.open('Kein gültiger Ankunftstag', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.departureDayFormControl.invalid) {
      this.snackBar.open('Kein gültiger Abflugtag', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    } else if (this.usageTimeFormControl.invalid) {
      this.snackBar.open('Keine gültige Nutzungsdauer', 'Schließen',
        {
          duration: 3000,
        }
      );
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.planeService.getPlaneListData().subscribe(
      (planedata: Plane[]) => {
        this.planes = planedata;
      }
    );
  }

}
