import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  pass: string;

  constructor(public loginService: LoginService, public snackBar: MatSnackBar, public router: Router) {
    this.username = '';
    this.pass = '';
  }

  ngOnInit() {
  }

  public sendLogin(): void {
    this.loginService.loginRequest(this.username, this.pass).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Login erfolgreich', 'Schließen',
            {
              duration: 3000,
            }
          );
        }
        this.loginService.logIn(this.username, this.pass, response.body.memberID);
        this.router.navigateByUrl('/account');
      },
      error => {
        if (error.status === 401) {
          this.snackBar.open('Login fehlgeschlagen', 'Schließen',
            {
              duration: 4000,
            }
          );
        }
      }
    );
  }

  public checkEnter(event): void {
    if (event.key === 'Enter') {
      this.sendLogin();
    }
  }

}
