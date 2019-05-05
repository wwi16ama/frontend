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
import { FeeListModule } from './fee-list/fee-list.module';
import { AddPlaneDialogComponent } from './plane-list/add-plane-dialog/add-plane-dialog.component';
import { SiteNavigationModule } from './site-navigation/site-navigation.module';
import { CreditListModule } from './credit-list/credit-list.module';
import { DeleteMemberDialogComponent } from './member-view/delete-member-dialog/delete-member-dialog.component';
import { EditMemberProfileDialogComponent } from './account/edit-memberprofile-dialog/edit-memberprofile-dialog.component';
import { AccountModule } from './account/account.module';
import { DeletePlaneDialogComponent } from './plane-list/delete-plane-dialog/delete-plane-dialog.component';
import { ExpensingBillListModule } from './expensing-bill-list/expensing-bill-list.module';
import { LoginModule } from './login/login.module';
import { PlaneLogModule } from './plane-log/plane-log.module';
import { PilotLogModule } from './pilotlog/pilotlog.module';
import { AddPilotlogentryModule } from './pilotlog/add-pilotlogentry/add-pilotlogentry.module';
import { AddPilotlogentryComponent } from './pilotlog/add-pilotlogentry/add-pilotlogentry.component';
import { FinanceModule } from './finance/finance.module';
import { ExternalTransactionComponent } from './finance/external-transaction/external-transaction.component';

// Spracheinstellung
import { LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { ChangePasswordModule } from './change-password/change-password.module';
import { JobsDoneListModule } from './jobs-done-list/jobs-done-list.module';
import { AddPlaneLogModule } from './plane-log/add-plane-log/add-plane-log.module';
import { AddPlaneLogComponent } from './plane-log/add-plane-log/add-plane-log.component';
import { EditBalanceModule } from './finance/edit-balance/edit-balance.module';
import { EditBalanceComponent } from './finance/edit-balance/edit-balance.component';
import { EditPlaneLogComponent } from './plane-log/edit-plane-log/edit-plane-log.component';
import { EditPlaneLogModule } from './plane-log/edit-plane-log/edit-plane-log.module';

import { AddJobsDialogModule } from './jobs-done-list/add-jobs-dialog/add-jobs-dialog.module';
import { AddJobsDialogComponent } from './jobs-done-list/add-jobs-dialog/add-jobs-dialog.component';
import { ExternalTransactionModule } from './finance/external-transaction/external-transaction.module';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
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
    AccountModule,
    ExpensingBillListModule,
    LoginModule,
    AddPilotlogentryModule,
    PlaneLogModule,
    PilotLogModule,
    ChangePasswordModule,
    JobsDoneListModule,
    AddPlaneLogModule,
    FinanceModule,
    EditBalanceModule,
    EditPlaneLogModule,
    AddJobsDialogModule,
    ExternalTransactionModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ger' },
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPlaneDialogComponent,
    AddUserFormComponent,
    EditMemberDialogComponent,
    EditPlaneDialogComponent,
    DeleteMemberDialogComponent,
    DeletePlaneDialogComponent,
    AddPilotlogentryComponent,
    EditMemberProfileDialogComponent,
    AddPilotlogentryComponent,
    AddPlaneLogComponent,
    EditBalanceComponent,
    EditPlaneLogComponent,
    AddJobsDialogComponent,
    ExternalTransactionComponent
  ]
})
export class AppModule {
}
