import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Plane, neededAuthorizationEnum } from './../../models/plane.model';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-delete-member-dialog',
  templateUrl: './delete-member-dialog.component.html',
  styleUrls: ['./delete-member-dialog.component.css']
})
export class DeleteMemberDialogComponent implements OnInit {

  constructor(public deleteMemberDialogRef: MatDialogRef<DeleteMemberDialogComponent>, public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public member: Member) {
   }

  ngOnInit() {
  }

  public onNoClick(): void {
    this.deleteMemberDialogRef.close();
  }

  public deleteMemberData(): void {
      this.deleteMemberDialogRef.close(this.member);
  }
}
