import { Component, Inject } from '@angular/core';
import { Member, Office, OfficeEnum } from './../../models/member.model';
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
  }

  public onNoClick(): void {
    this.editMemberDialogRef.close();
  }

  public saveMemberData(): void {
    this.member.dateOfBirth = this.dateOfBirth.value;
    this.editMemberDialogRef.close(this.member);
  }

  public compareOffices(a, b): boolean {
    return a.title === b.title;
  }

}
