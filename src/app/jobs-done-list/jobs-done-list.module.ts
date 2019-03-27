import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsDoneListComponent } from './jobs-done-list.component';
import { MatTableModule, MatListModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [JobsDoneListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ]
})
export class JobsDoneListModule { }
