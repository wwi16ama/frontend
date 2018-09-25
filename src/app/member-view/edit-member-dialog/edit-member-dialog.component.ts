import { Component, Inject } from '@angular/core';
import { Member, Office, OfficeEnum, Authorization, AuthorizationEnum } from './../../models/member.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-member-dialog',
  templateUrl: './edit-member-dialog.component.html',
  styleUrls: ['./edit-member-dialog.component.css']
})
export class EditMemberDialogComponent {

  dateOfBirth: FormControl;
  possibleOffices: Office[];
  flightAuthorizations: any[];
  addAuthorization: boolean;
  possibleFlightAuthorizationNames: AuthorizationEnum[];

  constructor(
    public editMemberDialogRef: MatDialogRef<EditMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public member: Member
  ) {
    this.dateOfBirth = new FormControl(new Date(member.dateOfBirth));
    this.possibleOffices = [
      new Office(OfficeEnum.FLUGWART),
      new Office(OfficeEnum.IMBETRIEBSKONTROLLTURMARBEITEND),
      new Office(OfficeEnum.KASSIERER),
      new Office(OfficeEnum.SYSTEMADMINISTRATOR),
      new Office(OfficeEnum.VORSTANDSVORSITZENDER)
    ];
    this.flightAuthorizations = this.member.flightAuthorization.splice(0);
    for (let i = 0; i < this.flightAuthorizations.length; i++) {
      this.flightAuthorizations[i].expires = new FormControl(new Date(this.flightAuthorizations[i].expires));
    }
    this.addAuthorization = false;
    this.possibleFlightAuthorizationNames = [
      AuthorizationEnum.PPLA, AuthorizationEnum.PPLB, AuthorizationEnum.BZFI,
      AuthorizationEnum.BZFII, AuthorizationEnum.LEHRBEFUGNIS
    ];
    this.updatePossibleAuthorizations();
  }

  public onNoClick(): void {
    this.editMemberDialogRef.close();
  }

  public saveMemberData(): void {
    this.member.dateOfBirth = this.formatDate(this.dateOfBirth.value.toString());
    this.member.flightAuthorization = [];
    for (let i = 0; i < this.flightAuthorizations.length; i++) {
      this.member.flightAuthorization.push(
        new Authorization(
          this.flightAuthorizations[i].authorization,
          this.flightAuthorizations[i].dateOfIssue,
          this.formatDate(this.flightAuthorizations[i].expires.value.toString())
        )
      );
    }
    this.editMemberDialogRef.close(this.member);
  }

  public compareOffices(a, b): boolean {
    return a.title === b.title;
  }

  public toggleAddNewAuthorization(): void {
    this.addAuthorization = !this.addAuthorization;
  }

  public updatePossibleAuthorizations(): void {

  }

  public formatDate(date: string): string {
    return new Date(date).toISOString().slice(0, 10);
  }
}
