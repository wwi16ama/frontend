import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreditListComponent } from './credit-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatSortModule, MatButtonModule } from '@angular/material';
import { CreditListService } from './../services/creditlist.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
