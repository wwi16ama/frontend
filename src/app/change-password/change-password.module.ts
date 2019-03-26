import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChangePasswordComponent
  ]
})
export class ChangePasswordModule { }
