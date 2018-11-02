import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import {MatListModule, MatDividerModule, MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
