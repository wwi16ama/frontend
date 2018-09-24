import { Component, Inject } from '@angular/core';
import { Member, Office, OfficeEnum, AuthorizationEnum } from './../../models/member.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-member-dialog',
  templateUrl: './edit-member-dialog.component.html',
  styleUrls: ['./edit-member-dialog.component.css']
})
export class EditMemberDialogComponent {

  dateOfBirth: Date;
  possibleOffices: Office[];
  flightAuthorizations: any[];

  constructor(
    public editMemberDialogRef: MatDialogRef<EditMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public member: Member
  ) {
    this.dateOfBirth = new Date(member.dateOfBirth);
    this.possibleOffices = [
      new Office(OfficeEnum.FLUGWART),
      new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND),
      new Office(OfficeEnum.KASSIERER),
      new Office(OfficeEnum.SYSTEMADMINISTRATOR),
      new Office(OfficeEnum.VORSTANDSVORSITZENDER)
    ];
    this.flightAuthorizations = this.member.flightAuthorization;
    for (let i = 0; i < this.flightAuthorizations.length; i++) {
      this.flightAuthorizations[i].expires = new Date(this.flightAuthorizations[i].expires);
    }
  }

  public onNoClick(): void {
    this.editMemberDialogRef.close();
  }

  public saveMemberData(): void {
    this.member.dateOfBirth = this.dateOfBirth.toString();
    for (let i = 0; i < this.flightAuthorizations.length; i++) {
      this.flightAuthorizations[i].expires = this.flightAuthorizations[i].expires.toString();
    }
    this.member.flightAuthorization = this.flightAuthorizations;
    this.editMemberDialogRef.close(this.member);
  }

  public compareOffices(a, b): boolean {
    return a.title === b.title;
  }
}
