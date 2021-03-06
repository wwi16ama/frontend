import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule,
  MatInputModule, MatCheckboxModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPilotlogentryComponent } from './add-pilotlogentry.component';

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
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [AddPilotlogentryComponent]
})
export class AddPilotlogentryModule { }
