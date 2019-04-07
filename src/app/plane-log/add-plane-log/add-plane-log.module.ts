import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlaneLogComponent } from './add-plane-log.component';
import { MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPlaneLogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class AddPlaneLogModule { }
