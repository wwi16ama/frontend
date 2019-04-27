import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPlaneLogComponent } from './edit-plane-log.component';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditPlaneLogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class EditPlaneLogModule { }
