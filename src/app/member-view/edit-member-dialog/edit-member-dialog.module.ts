import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditMemberDialogComponent } from './edit-member-dialog.component';

import {
  MatDialogModule, MatInputModule, MatButtonModule,
  MatExpansionModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  declarations: [
    EditMemberDialogComponent
  ],
  exports: [
    EditMemberDialogComponent
  ]
})
export class EditMemberDialogModule { }
