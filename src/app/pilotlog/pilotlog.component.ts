import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSnackBar, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Member } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { Pilotlog } from './../models/pilotlog.model';
import { PilotlogService } from './../services/pilotlog.service';
import { AuthService } from './../services/auth.service';
import { AddPilotlogentryComponent } from './add-pilotlogentry/add-pilotlogentry.component';

@Component({
  selector: 'app-pilotlog',
  templateUrl: './pilotlog.component.html',
  styleUrls: ['./pilotlog.component.css']
})
export class PilotLogComponent implements OnInit {

  member: Member;
  pilotlog: Pilotlog[];
  dataSource: any;
  displayedColumns: string[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public memberService: MemberService,
    public pilotLogService: PilotlogService,
    public authService: AuthService,
    public addPilotLogEntryDialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
    this.displayedColumns = ['flightId', 'planeNumber', 'departureLocation', 'departureTime',
      'arrivalLocation', 'arrivalTime', 'flightDuration', 'flightWithGuests'];
  }

  ngOnInit() {
    this.memberService.getMemberData(this.authService.getMemberID()).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
        this.pilotLogService.getPilotLogData(this.member.id).subscribe(
          (data: Pilotlog[]) => {
            this.pilotlog = data;
            this.addFlightDuration();
            this.dataSource = new MatTableDataSource(this.pilotlog);
            this.dataSource.sort = this.sort;
          }
        );
      }
    );
  }

  public calculateTimeDifference(start: string, end: string): string {
    const startSeconds = new Date(start).getTime();
    const endSeconds = new Date(end).getTime();
    const timeDifference = endSeconds - startSeconds;
    const hours = Math.floor(timeDifference / 1000 / 60 / 60);
    const minutes = (timeDifference - (hours * 60 * 60 * 1000)) / 1000 / 60;
    let returnString = '';
    if (hours > 9) {
      returnString += hours + ':';
    }
    if (hours <= 9) {
      returnString += '0' + hours + ':';
    }
    if (minutes > 9) {
      returnString += minutes;
    }
    if (minutes <= 9) {
      returnString += '0' + minutes;
    }
    return returnString;
  }

  public addFlightDuration(): void {
    for (let i = 0; i < this.pilotlog.length; i++) {
      const newPilotLog = new Pilotlog(
        this.pilotlog[i].flightId,
        this.pilotlog[i].planeNumber,
        this.pilotlog[i].departureLocation,
        this.pilotlog[i].departureTime,
        this.pilotlog[i].arrivalLocation,
        this.pilotlog[i].arrivalTime,
        this.pilotlog[i].flightWithGuests,
        this.calculateTimeDifference(this.pilotlog[i].departureTime, this.pilotlog[i].arrivalTime)
      );
      this.pilotlog[i] = newPilotLog;
    }
  }

  openAddPilotLogEntryDialog(): void {
    const dialogRef = this.addPilotLogEntryDialog.open(AddPilotlogentryComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.savePilotLogEntry(result);
      }
    });
  }

  public savePilotLogEntry(pilotlog: Pilotlog): void {
    this.pilotLogService.addPilotLogEntry(pilotlog).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          const newPilotLog = new Pilotlog (
            response.body.flightId,
            response.body.planeNumber,
            response.body.departureLocation,
            response.body.departureTime,
            response.body.arrivalLocation,
            response.body.arrivalTime,
            response.body.flightWithGuests
          );
          console.log(newPilotLog);
          this.pilotlog.push(newPilotLog);
          this.dataSource.sort = this.sort;
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
            {
              duration: 4000,
            }
          );
        } else if (error.status === 0) {
          this.snackBar.open('Es konnte keine Verbindung zum Server aufgebaut werden', 'Schließen',
            {
              duration: 4000,
            }
          );
        }
      }
    );
  }
}
