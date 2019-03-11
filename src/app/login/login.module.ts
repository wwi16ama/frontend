import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './../services/login.service';
import { MatButtonModule, MatSnackBarModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
