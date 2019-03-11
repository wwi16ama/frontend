import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-delete-member-dialog',
  templateUrl: './delete-member-dialog.component.html',
  styleUrls: ['./delete-member-dialog.component.css']
})
export class DeleteMemberDialogComponent implements OnInit {

  constructor(public deleteMemberDialogRef: MatDialogRef<DeleteMemberDialogComponent>,
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
