import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  memberID: string;
  pass: string;

  constructor(public authService: AuthService, public snackBar: MatSnackBar, public router: Router) {
    this.memberID = '';
    this.pass = '';
  }

  ngOnInit() {
  }

  public sendLogin(): void {
    this.authService.loginRequest(this.memberID, this.pass).subscribe(
      (response) => {
        if (response.status === 200) {
          this.snackBar.open('Login erfolgreich', 'Schließen',
            {
              duration: 3000,
            }
          );
          this.authService.logIn(this.memberID, this.pass);
          this.router.navigateByUrl('/account');
        }
        this.authService.logIn(this.memberID, this.pass);
        this.router.navigateByUrl('/account');
      },
      (error) => {
        this.snackBar.open('Login fehlgeschlagen', 'Schließen',
          {
            duration: 4000,
          }
        );
      }
    );
  }

  public checkEnter(event): void {
    if (event.key === 'Enter') {
      this.sendLogin();
    }
  }

  public returnToLandingPage(): void {
    document.location.href = 'https://flugsportvereinreilingen.jimdofree.com';
  }

}
