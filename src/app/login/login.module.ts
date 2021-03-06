import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthService } from './../services/auth.service';
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
    AuthService
  ]
})
export class LoginModule { }
