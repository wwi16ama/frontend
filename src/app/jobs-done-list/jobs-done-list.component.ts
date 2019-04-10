import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from './../models/member.model';
import { JobsDoneList, Name } from './../models/jobsdonelist.model';
import { MemberService } from './../services/member.service';
import { JobsdonelistService } from './../services/jobsdonelist.service';
import { AuthService } from './../services/auth.service';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog} from '@angular/material';
import {AddJobsdonelistentryComponent} from "./add-jobsdonelistentry/add-jobsdonelistentry/add-jobsdonelistentry.component";


@Component({
  selector: 'app-jobs-done-list',
  templateUrl: './jobs-done-list.component.html',
  styleUrls: ['./jobs-done-list.component.css']
})
export class JobsDoneListComponent implements OnInit {
  private sub: any;
  id: number;
  member: Member;
  jobs : any;
  sort: any;
  gutschriftSumme : any;
  displayedColumns: string[];

  constructor(public authService: AuthService, 
              public memberService: MemberService, 
              public jobsdonelistService: JobsdonelistService, 
              private route: ActivatedRoute, 
              public snackBar: MatSnackBar, 
              public AddJobDialog: MatDialog) 
  { 
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; 
    });
    this.displayedColumns = ['startTime', 'endTime', 'name', 'gutschrift']; 
    this.jobs = [];
    this.gutschriftSumme = 0;
  }

  ngOnInit() {
    this.memberService.getMemberData(this.id).subscribe(
      (memberdata: Member) => {
        this.member = memberdata;
      }
    );
    this.jobsdonelistService.getJobsDoneListData(this.id).subscribe(
      (jobsdata: JobsDoneList[]) => {
        this.jobs = jobsdata;
        for (let i = 0; i < this.jobs.length; i++) {
          this.gutschriftSumme += this.jobs[i].gutschrift;
          this.jobs[i].name = this.jobs[i].name.substring(2).charAt(0).toUpperCase() + this.jobs[i].name.toLowerCase().substring(2).slice(1);
          if (this.jobs[i].year) {
            var year = this.jobs[i].year;
            this.jobs[i].startTime = '01.02.'+year;
            this.jobs[i].endTime = '01.02.'+(++year);
          }
        }
      }
    );
  }

  public getServiceSum(): number {
    var sum = 0;
    sum = this.gutschriftSumme;
    return sum;
  }

  public getUsr(): string {
    var erg: any;
      erg = this.member.firstName + ' ' + this.member.lastName + ' (' + this.member.id + ')';
    return erg
  }

  openAddJobDialog(): void {
    const dialogRef = this.AddJobDialog.open(AddJobsdonelistentryComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.savePilotLogEntry(result);
      }
    });
  }

  public savePilotLogEntry(jobsdone: JobsDoneList): void {
    this.jobsdonelistService.addJobsDoneListEntry(jobsdone).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
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
