import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { MemberListComponent } from './member-list/member-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/memberlist', pathMatch: 'full' },
  { path: 'memberlist', component: MemberListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
