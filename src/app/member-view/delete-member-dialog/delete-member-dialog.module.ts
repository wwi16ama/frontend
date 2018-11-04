import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteMemberDialogComponent } from './delete-member-dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [DeleteMemberDialogComponent]
})
export class DeleteMemberDialogModule { }
