import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteNavigationComponent } from './site-navigation.component';
import {
  MatSidenavModule, MatToolbarModule, MatButtonModule,
  MatIconModule, MatListModule, MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule
  ],
  declarations: [
    SiteNavigationComponent
  ],
  exports: [
    SiteNavigationComponent
  ]
})
export class SiteNavigationModule { }
