import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MatTableDataSource, MatDialog, MatSnackBar, MatSort } from '@angular/material';
import { ListMember } from './../models/list-member.model';
import { MemberService } from './../services/member.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { Member, Status, Gender, OfficeEnum, AuthorizationEnum } from './../models/member.model';
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

  @ViewChild(MatSort) set content(sort: ElementRef) {
    this.sort = sort;
    if (this.sort) {
      this.dataSource.sort = this.sort;

    }
  }

  constructor(public router: Router, public addUserDialog: MatDialog, public snackBar: MatSnackBar, public activatedRoute: ActivatedRoute,
    public memberService: MemberService, public authService: AuthService) {
    this.displayedColumns = ['id', 'firstName', 'lastName'];
    this.allowedToAddNewMember = false;
  }

  ngOnInit() {
    this.allowedToAddNewMember = this.authService.memberHasAuthorization('VV') || this.authService.memberHasAuthorization('SYSADMIN');
    this.memberService.getMemberListData().subscribe(
      (data: ListMember[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

  public navigateTo(rowId): void {
    this.router.navigate(['/member', rowId]);
  }

  openAddUserDialog(): void {
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
