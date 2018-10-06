import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberViewComponent } from './member-view.component';

import {
  MatDividerModule, MatListModule, MatCheckboxModule,
   MatButtonModule, MatSelectModule, MatInputModule, MatSnackBarModule
  } from '@angular/material';

import { MemberService } from './../services/member.service';
import { MemberUpdateService } from './../services/member-update.service';
import { EditMemberDialogModule } from './edit-member-dialog/edit-member-dialog.module';

@NgModule({
  imports: [
    EditMemberDialogModule,
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: [
    MemberViewComponent
  ],
  exports: [
    MemberViewComponent
  ],
  providers: [
    MemberService,
    MemberUpdateService
  ]
})
export class MemberViewModule { }
