import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
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

  
  constructor( public addPilotLogEntryDialogRef: MatDialogRef<AddPilotlogentryComponent>) { 
    /*jedes Flugzeug auch bei neu hinzugefügten?!*/
    this.planeNumber = ['D-ERFI', 'D-EJEK'];
    this.departureLocation = '';
    this.departureTime= '';
    this.arrivalLocation = '';
    this.arrivalTime = '';
    this.flightWithGuests = false;
  }

  public onNoClick(): void {
    this.addPilotLogEntryDialogRef.close();
  }

  ngOnInit() {
  }

}
