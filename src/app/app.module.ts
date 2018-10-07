import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { EditMemberDialogComponent } from './member-view/edit-member-dialog/edit-member-dialog.component';
import { PlaneListModule } from './plane-list/plane-list.module';
import { EditPlaneDialogComponent } from './plane-list/edit-plane-dialog/edit-plane-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule,
    PlaneListModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditMemberDialogComponent,
    EditPlaneDialogComponent
  ]
})
export class AppModule { }
