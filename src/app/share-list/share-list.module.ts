import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShareListComponent } from './share-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatButtonModule } from '@angular/material';
import { ShareListService } from './../services/sharelist.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    ShareListComponent
  ],
  exports: [
    ShareListComponent
  ],
  providers: [
    ShareListService
  ]
})
export class ShareListModule { }
