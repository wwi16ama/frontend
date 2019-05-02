import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { Member, Status, Gender, OfficeEnum, AuthorizationEnum } from './../models/member.model';
import { JobsDoneList } from '../models/jobsdonelist.model';
import { JobsdonelistService } from '../services/jobsdonelist.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  sort: any;
  displayedColumns: string[];
  dataSource: any;
  allowedToAddNewMember: boolean;
  allowedToSeeServices: boolean;
  memberList: ListMember;

  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;

    }
  }

  constructor(public router: Router, public addUserDialog: MatDialog, public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute,
    public memberService: MemberService, public jobsdonelistService: JobsdonelistService, public authService: AuthService) {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'offices', 'sumCredits'];
    this.allowedToAddNewMember = false;
    this.allowedToSeeServices = false;
  }

  ngOnInit() {
    this.allowedToAddNewMember = this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER') || this.authService.memberHasAuthorization('SYSTEMADMINISTRATOR');
    this.allowedToSeeServices = this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER');
    if (!this.allowedToSeeServices) {
      this.displayedColumns = ['id', 'firstName', 'lastName', 'offices'];
    }
    this.memberService.getMemberListData().subscribe(
      (data: ListMember[]) => {
        for (let i = 0; i < data.length; i++) {
          this.memberList = data[i]
          for (let k = 0; k < this.memberList.offices.length; k++) {
            this.memberList.offices[k] = OfficeEnum[this.memberList.offices[k].title]
          }
        }
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

  public navigateTo(rowId: number, kennzeichen: string): void {
    if (kennzeichen == 'A') {
      if (this.allowedToSeeServices) {
        this.router.navigate(['/jobsdonelist', rowId]);
      }
    }
    else {
      this.router.navigate(['/member', rowId]);
    }
  }

  openAddUserDialog(): any {
    const dialogRef = this.addUserDialog.open(AddUserFormComponent, {
    });

    dialogRef.afterClosed().subscribe(newMember => {
      if (newMember !== undefined) {
        this.saveMember(newMember);
      }
    });
  }

  public saveMember(member: Member): void {
    member = this.formatStringToEnum(member);
    this.memberService.addMemberData(member).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          this.dataSource.data.push(response.body);
          window.location.reload();
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

  public formatStringToEnum(member: any): any {
    member.gender = Gender.getEnumString(member.gender);
    member.status = Status.getEnumString(member.status);
    for (let i = 0; i < member.offices.length; i++) {
      member.offices[i].title = OfficeEnum.getEnumString(member.offices[i].title);
    }
    for (let i = 0; i < member.flightAuthorization.length; i++) {
      member.flightAuthorization[i].authorization = AuthorizationEnum.getEnumString(member.flightAuthorization[i].authorization);
    }
    return member;
  }

}
