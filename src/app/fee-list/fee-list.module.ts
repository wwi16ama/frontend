import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeeListComponent } from './fee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatButtonModule } from '@angular/material';
import { FeeListService } from '../services/feelist.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    FeeListComponent
  ],
  exports: [
    FeeListComponent
  ],
  providers: [
    FeeListService
  ]
})
export class FeeListModule { }
