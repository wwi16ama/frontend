import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePlaneDialogComponent } from './delete-plane-dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [DeletePlaneDialogComponent],
  exports: [
    DeletePlaneDialogComponent
  ]
})
export class DeletePlaneDialogModule { }
