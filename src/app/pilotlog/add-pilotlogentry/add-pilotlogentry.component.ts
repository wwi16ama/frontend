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

    planeNumber: string[];
    departureLocation: string;
    departureTime: string;
    arrivalLocation: string;
    arrivalTime: string;
    flightWithGuests: boolean;
    flightWithGuestsSelection: string[]; 

    planeNumberFormControl: FormControl;
    departureTimeFormControl: FormControl;
    arrivalTimeFormControl: FormControl;
    flightWithGuestsSelectionFormControl: FormControl;
    departureLocationFormControl: FormControl;
    arrivalLocationFormControl: FormControl;

  
  constructor( public addPilotLogEntryDialogRef: MatDialogRef<AddPilotlogentryComponent>, public snackBar: MatSnackBar, public planeService: PlaneService) { 
    /*jedes Flugzeug auch bei neu hinzugefügten?!*/
    //this.planeNumber = planes.number;
    this.planes = [];
    this.departureLocation = '';
    this.departureTime= '';
    this.arrivalLocation = '';
    this.arrivalTime = '';
    this.flightWithGuests = false;
    this.flightWithGuestsSelection = ['ja', 'nein'];

    this.planeNumberFormControl = new FormControl ('', [
      Validators.required,
    ]);

    this.departureTimeFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.arrivalTimeFormControl = new FormControl('', [
      Validators.required,
    ]);

    this.flightWithGuestsSelectionFormControl = new FormControl('', [
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

  public savePlaneData(): void {
    if (this.checkRequiredFields()) {
      const newPilotLog = {
        planeNumber: this.planeNumberFormControl.value,
        departureLocation: this.departureLocationFormControl.value,
        departureTime: this.departureTimeFormControl.value,
        arrivalLocation: this.arrivalLocationFormControl,
        arrivalLocationFormControl: this.arrivalLocationFormControl,
        flightWithGuestsSelection: this.flightWithGuestsSelection,
      };
      this.addPilotLogEntryDialogRef.close(newPilotLog);
  }}

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
    } else if (this.flightWithGuestsSelectionFormControl.invalid) {
      this.snackBar.open('Keine gültige Angabe', 'Schließen',
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
