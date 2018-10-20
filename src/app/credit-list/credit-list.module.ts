import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditListComponent } from './credit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatSortModule, MatButtonModule } from '@angular/material';
import { CreditListService } from './../services/creditlist.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  declarations: [
    CreditListComponent
  ],
  exports: [
    CreditListComponent
  ],
  providers: [
    CreditListService
  ]
})
export class CreditListModule { }
