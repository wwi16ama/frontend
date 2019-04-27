import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddJobsDialogComponent } from './add-jobs-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatStepperModule,
    MatCardModule, MatTooltipModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule, MatTabsModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AddJobsDialogComponent],

  exports: [AddJobsDialogComponent]
})
export class AddJobsDialogModule { }
