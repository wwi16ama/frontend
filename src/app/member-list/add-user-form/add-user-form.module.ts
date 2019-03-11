import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserFormComponent } from './add-user-form.component';
import { SharedDirectivesModule } from './../../directives/shared-directives.module';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatStepperModule,
  MatCardModule, MatTooltipModule, MatDatepickerModule,
  MatNativeDateModule, MatDialogModule, MatTabsModule, MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule
  ],
  declarations: [
    AddUserFormComponent
  ],
  exports: [
    AddUserFormComponent
  ]
})
export class AddUserFormModule { }
