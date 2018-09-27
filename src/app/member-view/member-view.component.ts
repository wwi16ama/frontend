import { Component, OnInit } from '@angular/core';
import { Member, Status, Gender, OfficeEnum, AuthorizationEnum } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { MemberUpdateService } from './../services/member-update.service';

import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatSnackBar } from '@angular/material';
import { EditMemberDialogComponent } from './edit-member-dialog/edit-member-dialog.component';


@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {
  member: Member;
  editMode: boolean;
  editButtonText: string;

  constructor(
    public memberService: MemberService, public memberUpdateService: MemberUpdateService,
    public activatedRoute: ActivatedRoute, public editMemberDialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
    this.editMode = false;
    this.editButtonText = 'Ändern';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.memberService.getMemberData(params['id']).subscribe(
          (data: Member) => {
            this.member = data;
            this.member.gender = Gender[this.member.gender];
            this.member.status = Status[this.member.status];
            for (let i = 0; i < this.member.offices.length; i++) {
              this.member.offices[i].title = OfficeEnum[this.member.offices[i].title];
            }
            for (let i = 0; i < this.member.flightAuthorization.length; i++) {
              this.member.flightAuthorization[i].authorization = AuthorizationEnum[this.member.flightAuthorization[i].authorization];
            }
          }
        );
      }
    );
  }

  public toggleEditMode(): void {
    if (this.editMode) {
      // this.saveMember();
      this.editButtonText = 'Ändern';
    } else {
      this.editButtonText = 'Speichern';
    }
    this.editMode = !this.editMode;
  }

  public saveMember(member: Member): void {
    const newMemberData = JSON.parse(JSON.stringify(member));
    member = this.formatStringToEnum(member);
    this.memberUpdateService.updateMemberData(member).subscribe(
      (response) => {
        if (response.status === 204) {
          this.snackBar.open('Änderungen erfolgreich gespeichert.', 'Schließen',
            {
              duration: 3000,
            }
          );
          this.member = newMemberData;
        }
      },
      error => {
        if (error.status === 400) {
          this.snackBar.open('Pflichtfelder nicht ausgefüllt', 'Schließen',
            {
              duration: 4000,
            }
          );
        } else if (error.status === 404) {
          this.snackBar.open('Mitglied nicht gefunden.', 'Schließen',
            {
              duration: 4000,
            }
          );
        }
      }
    );
  }

  public openEditMemberDialog(): void {
    const dialogRef = this.editMemberDialog.open(EditMemberDialogComponent, {
      maxWidth: '100vw',
      minWidth: '0px',
      maxHeight: '90vh',
      disableClose: true,
      data: JSON.parse(JSON.stringify(this.member))
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.saveMember(result);
      }
    });
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
