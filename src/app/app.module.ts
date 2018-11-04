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
import { FeeListModule } from './fee-list/fee-list.module';
import { SiteNavigationModule } from './site-navigation/site-navigation.module';
import { CreditListModule } from './credit-list/credit-list.module';
<<<<<<< HEAD
import { DeleteMemberDialogComponent } from './member-view/delete-member-dialog/delete-member-dialog.component';
=======
import { AccountModule } from './account/account.module';
import { DeletePlaneDialogComponent } from './plane-list/delete-plane-dialog/delete-plane-dialog.component';
>>>>>>> d4dd5027c837344240192043c4400b49667d8f8c

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule,
    PlaneListModule,
    FeeListModule,
    SiteNavigationModule,
    CreditListModule,
    AccountModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditMemberDialogComponent,
    EditPlaneDialogComponent,
    DeleteMemberDialogComponent,
    DeletePlaneDialogComponent
  ]
})
export class AppModule { }
