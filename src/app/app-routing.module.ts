import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { ExpensingBillListComponent } from './expensing-bill-list/expensing-bill-list.component';
import { FeeListComponent } from './fee-list/fee-list.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { PilotLogComponent } from './pilotlog/pilotlog.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PlaneLogComponent } from './plane-log/plane-log.component';
import { FinanceComponent } from './finance/finance.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'memberlist', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'member/:id', component: MemberViewComponent, canActivate: [AuthGuard] },
  { path: 'planelist', component: PlaneListComponent, canActivate: [AuthGuard] },
  { path: 'expensingbilllist', component: ExpensingBillListComponent, canActivate: [AuthGuard] },
  { path: 'planelist', component: PlaneListComponent, canActivate: [AuthGuard] },
  { path: 'feelist', component: FeeListComponent, canActivate: [AuthGuard] },
  { path: 'creditlist', component: CreditListComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'expensingbilllist', component: ExpensingBillListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pilotlog', component: PilotLogComponent, canActivate: [AuthGuard] },
  { path: 'planeLog/:id', component: PlaneLogComponent },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] }
  { path: 'finance', component: FinanceComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {
}
