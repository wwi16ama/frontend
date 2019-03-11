import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import {MatButtonModule, MatListModule, MatDividerModule, MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {EditMemberProfileDialogModule} from './edit-memberprofile-dialog/edit-memberprofile-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    EditMemberProfileDialogModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
