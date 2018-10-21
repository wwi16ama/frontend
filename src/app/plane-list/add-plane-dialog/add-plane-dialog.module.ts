import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlaneDialogComponent } from './add-plane-dialog.component';
import { MatTabsModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatStepperModule, MatCardModule, MatTooltipModule,
  MatDatepickerModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatStepperModule,
    MatCardModule, MatTooltipModule, MatDatepickerModule,
    MatNativeDateModule, MatDialogModule, MatTabsModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AddPlaneDialogComponent],

  exports: [AddPlaneDialogComponent]
})
export class AddPlaneDialogModule { }
