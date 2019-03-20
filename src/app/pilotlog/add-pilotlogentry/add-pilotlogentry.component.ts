import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-pilotlogentry',
  templateUrl: './add-pilotlogentry.component.html',
  styleUrls: ['./add-pilotlogentry.component.css']
})
export class AddPilotlogentryComponent implements OnInit {

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

  
  constructor( public addPilotLogEntryDialogRef: MatDialogRef<AddPilotlogentryComponent>) { 
    /*jedes Flugzeug auch bei neu hinzugefügten?!*/
    this.planeNumber = ['D-ERFI', 'D-EJEK'];
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

  ngOnInit() {
  }

}
