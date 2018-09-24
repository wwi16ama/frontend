import { Component, Inject } from '@angular/core';
import { Member } from './../../models/member.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-member-dialog',
  templateUrl: './edit-member-dialog.component.html',
  styleUrls: ['./edit-member-dialog.component.css']
})
export class EditMemberDialogComponent {

  dateOfBirth: FormControl;

  constructor(
    public editMemberDialogRef: MatDialogRef<EditMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public member: Member
    ) {
      this.dateOfBirth = new FormControl(new Date(member.dateOfBirth));
    }

    public onNoClick(): void {
      this.editMemberDialogRef.close();
    }

    public saveMemberData(): void {
      this.member.dateOfBirth = this.dateOfBirth.value;
      this.editMemberDialogRef.close(this.member);
    }

}
