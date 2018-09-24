import { Component, OnInit } from '@angular/core';
import { Member, Status, Gender, OfficeEnum, AuthorizationEnum } from './../models/member.model';
import { MemberService } from './../services/member.service';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material';
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

  constructor(public memberService: MemberService, public activatedRoute: ActivatedRoute, public editMemberDialog: MatDialog) {
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
      this.saveMember();
      this.editButtonText = 'Ändern';
    } else {
      this.editButtonText = 'Speichern';
    }
    this.editMode = !this.editMode;
  }

  public saveMember(): void {
    console.log(this.member);
  }

  public openEditMemberDialog(): void {
    const dialogRef = this.editMemberDialog.open(EditMemberDialogComponent, {
        maxWidth: '100vw',
        data: this.member
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          console.log(result);
        }
    });
}

}
