import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './../../services/login.service';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
