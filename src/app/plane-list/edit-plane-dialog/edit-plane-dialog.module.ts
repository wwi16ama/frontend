import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPlaneDialogComponent } from './edit-plane-dialog.component';

import {
  MatDialogModule, MatInputModule, MatButtonModule,
  MatExpansionModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatCheckboxModule,
  DateAdapter, MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DateAdapterService } from './../../services/date-adapter.service';


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
    MatCheckboxModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditPlaneDialogComponent
  ],
  exports: [
    EditPlaneDialogComponent
  ],
  providers: [
    { provide: DateAdapter, useClass: DateAdapterService },
  ]
})
export class EditPlaneDialogModule { }
