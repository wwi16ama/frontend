import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AppComponent } from './app.component';
import { AddUserFormComponent } from './member-list/add-user-form/add-user-form.component';

import { AppRoutingModule } from './app-routing.module';
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { EditMemberDialogComponent } from './member-view/edit-member-dialog/edit-member-dialog.component';
import { PlaneListModule } from './plane-list/plane-list.module';
import { EditPlaneDialogComponent } from './plane-list/edit-plane-dialog/edit-plane-dialog.component';
import { CreditListModule } from './credit-list/credit-list.module';

// Spracheinstellung
import { LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe);

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
    CreditListModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' },
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserFormComponent,
    EditMemberDialogComponent,
    EditPlaneDialogComponent
  ]
})
export class AppModule {
}
