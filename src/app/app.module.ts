import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'
import { MemberListModule } from './member-list/member-list.module';
import { MemberViewModule } from './member-view/member-view.module';
import { PlaneListComponent } from './plane-list/plane-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberListModule,
    MemberViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
