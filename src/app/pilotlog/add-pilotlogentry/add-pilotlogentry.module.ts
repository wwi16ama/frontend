import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPilotlogentryComponent }from './add-pilotlogentry.component';
import { MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPilotlogentryComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [AddPilotlogentryComponent]
})
export class AddPilotlogentryModule { }
