import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsDoneListComponent } from './jobs-done-list.component';
import { MatTableModule, MatListModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AddJobsDialogComponent } from './add-jobs-dialog/add-jobs-dialog.component';

@NgModule({
  declarations: [JobsDoneListComponent, AddJobsDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class JobsDoneListModule { }
