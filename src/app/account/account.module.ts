import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';

import {MatListModule, MatDividerModule, MatTableModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
