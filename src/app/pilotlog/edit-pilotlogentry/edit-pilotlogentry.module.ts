import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule,
  MatInputModule, MatCheckboxModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPilotlogentryComponent } from './edit-pilotlogentry.component';

@NgModule({
  declarations: [EditPilotlogentryComponent],
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
  exports: [EditPilotlogentryComponent]
})
export class EditPilotlogentryModule { }
