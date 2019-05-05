import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from './../models/member.model';
import { JobsDoneList, Name } from './../models/jobsdonelist.model';
import { MemberService } from './../services/member.service';
import { JobsdonelistService } from './../services/jobsdonelist.service';
import { AuthService } from './../services/auth.service';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MatDialog} from '@angular/material';
import { AddJobsDialogComponent } from './add-jobs-dialog/add-jobs-dialog.component';


@Component({
  selector: 'app-jobs-done-list',
  templateUrl: './jobs-done-list.component.html',
  styleUrls: ['./jobs-done-list.component.css']
})
export class JobsDoneListComponent implements OnInit {
  private sub: any;
  id: number;
  member: Member;
  jobs: any;
  sort: any;
  gutschriftSumme: any;
  displayedColumns: string[];
  canAddService: boolean;

  constructor(public authService: AuthService,
              public memberService: MemberService,
              public jobsdonelistService: JobsdonelistService,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar,
              public addJobsDialog: MatDialog
              ) {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    });
    this.displayedColumns = ['startDate', 'endDate', 'name', 'gutschrift'];
    this.jobs = [];
    this.gutschriftSumme = 0;
    this.canAddService = this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER');
  }

  openAddJobsDialog(): void {
    const dialogRef = this.addJobsDialog.open(AddJobsDialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        result.id = this.member.id;
        this.saveService(result);
      }
    });
  }

  public saveService(jobsdonelist: JobsDoneList): void {
    this.jobsdonelistService.addJobsDoneListData(jobsdonelist).subscribe(
      (response) => {
        if (response.status === 204) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          this.jobsdonelistService.getJobsDoneListData(this.id).subscribe(
            (jobsdata: JobsDoneList[]) => {
              this.jobs = jobsdata;
              this.gutschriftSumme = 0;
              for (let i = 0; i < this.jobs.length; i++) {
                this.jobs[i].name = this.jobs[i].name.substring(2).charAt(0).toUpperCase() +
                this.jobs[i].name.toLowerCase().substring(2).slice(1);
                this.gutschriftSumme += this.jobs[i].gutschrift;
                if (this.jobs[i].name == 'Tageseinsatz') {
                  this.jobs[i].name = 'Kontrollturmdienst';
                }
                if (this.jobs[i].year) {
                  const year = this.jobs[i].year;
                  this.jobs[i].startDate = '01.02.' + year;
                  this.jobs[i].endDate = '01.02.' + (year + 1);
                }
              }
            }
          );
          this.jobs.sort = this.sort;
          this.gutschriftSumme += jobsdonelist.gutschrift;
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Dienstart bereits vorhanden oder für den gewählten Benutzer ungültig.', 'Schließen',
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

  public getServiceSum(): number {
    const sum = this.gutschriftSumme;
    return sum;
  }

  public getUsr(): string {
    const erg = this.member.firstName + ' ' + this.member.lastName + ' (' + this.member.id + ')';
    return erg;
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
          this.jobs[i].name = this.jobs[i].name.substring(2).charAt(0).toUpperCase() +
          this.jobs[i].name.toLowerCase().substring(2).slice(1);
          if (this.jobs[i].year) {
            const year = this.jobs[i].year;
            this.jobs[i].startDate = '01.02.' + year;
            this.jobs[i].endDate = '01.02.' + (year + 1);
          }
          if (this.jobs[i].name == 'Tageseinsatz') {
            this.jobs[i].name = 'Kontrollturmdienst';
          }
        }
      }
    );
  }

}
