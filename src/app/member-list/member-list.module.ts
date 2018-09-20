import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatSortModule } from '@angular/material';
import { MemberListService } from './../services/memberlist.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    MemberListComponent
  ],
  exports: [
    MemberListComponent
  ],
  providers: [
    MemberListService
  ]
})
export class MemberListModule { }
