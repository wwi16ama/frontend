import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneLogComponent } from './plane-log.component';
import { MatTableModule, MatButtonModule, MatSortModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [PlaneLogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [
    PlaneLogComponent
  ]
})
export class PlaneLogModule { }
