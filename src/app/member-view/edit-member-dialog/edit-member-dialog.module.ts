import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditMemberDialogComponent } from './edit-member-dialog.component';
import { SharedDirectivesModule } from './../../directives/shared-directives.module';

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
    SharedDirectivesModule,
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
    EditMemberDialogComponent
  ],
  exports: [
    EditMemberDialogComponent
  ],
  providers: [
    { provide: DateAdapter, useClass: DateAdapterService },
  ]
})
export class EditMemberDialogModule { }
