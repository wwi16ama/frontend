import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsDoneListComponent } from './jobs-done-list.component';
import { MatTableModule, MatListModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { AddJobsDialogModule } from './add-jobs-dialog/add-jobs-dialog.module';

@NgModule({
  declarations: [JobsDoneListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    AddJobsDialogModule,
  ]
})
export class JobsDoneListModule { }
