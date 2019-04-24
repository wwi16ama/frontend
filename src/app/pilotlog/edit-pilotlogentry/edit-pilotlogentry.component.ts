import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Plane } from '../../models/plane.model';
import { PlaneService } from '../../services/plane.service';
import { Pilotlog } from '../../models/pilotlog.model';

@Component({
  selector: 'app-edit-pilotlogentry',
  templateUrl: './edit-pilotlogentry.component.html',
  styleUrls: ['./edit-pilotlogentry.component.css']
})
export class EditPilotlogentryComponent implements OnInit {
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


  constructor( public editPilotLogEntryDialogRef: MatDialogRef<EditPilotlogentryComponent>, public snackBar: MatSnackBar,
    public planeService: PlaneService,
    @Inject(MAT_DIALOG_DATA) public pilotlog: Pilotlog
    ) {
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
    this.planeNumberFormControl.setValue(pilotlog.planeNumber);
    this.departureDayFormControl.setValue(pilotlog.departureTime.substring(0, 10));
    // Einfügen: FormalCheck für Input
    this.departureDayFormControl.
    this.departureTimeFormControl.setValue(pilotlog.departureTime.substring(11, 16));
    this.arrivalDayFormControl.setValue(pilotlog.arrivalTime);
    this.arrivalTimeFormControl.setValue(pilotlog.arrivalTime.substring(11, 16));
    this.departureLocationFormControl.setValue(pilotlog.departureLocation);
    this.arrivalLocationFormControl.setValue(pilotlog.arrivalLocation);
    this.usageTimeFormControl.setValue(pilotlog.usageTime);

    if (this.pilotlog.flightWithGuests) {
      this.flightWithGuests = true;
    }
  }

  public onNoClick(): void {
    this.editPilotLogEntryDialogRef.close();
  }

  public savePilotLogData(): void {

    if (this.checkRequiredFields()) {
      console.log(this.departureDayFormControl.value + 'T' + this.departureTimeFormControl.value + ':00');

      const newPilotLog = {
        planeNumber: this.planeNumberFormControl.value,
        departureLocation: this.departureLocationFormControl.value,

        departureTime: this.formatDate(new Date(
          this.departureDayFormControl.value.getFullYear(),
          this.departureDayFormControl.value.getMonth(),
          this.departureDayFormControl.value.getDate(),
          parseInt(this.departureTimeFormControl.value.substring(0, 2), 10),
          parseInt(this.departureTimeFormControl.value.substring(2, 2), 10)
        ).toString()),

        arrivalTime: this.formatDate(new Date(
          this.arrivalDayFormControl.value.getFullYear(),
          this.arrivalDayFormControl.value.getMonth(),
          this.arrivalDayFormControl.value.getDate(),
          parseInt(this.arrivalTimeFormControl.value.slice(0, 2), 10),
          parseInt(this.arrivalTimeFormControl.value.slice(3, 5), 10)
        ).toString()),

        arrivalLocation: this.arrivalLocationFormControl.value,
        usageTime: this.usageTimeFormControl.value,
        flightWithGuests: this.flightWithGuests
      };
      this.editPilotLogEntryDialogRef.close(newPilotLog);
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
