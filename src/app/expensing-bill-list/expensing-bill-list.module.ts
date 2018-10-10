import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensingBillListComponent } from './expensing-bill-list.component';
import {MatTableModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [ExpensingBillListComponent]
})
export class ExpensingBillListModule { }
