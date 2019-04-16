import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  opened: boolean;
  loggedIn: boolean;
  hasAuthorization: boolean;
  isPassive: boolean;

  constructor(public router: Router, public snackBar: MatSnackBar, public authService: AuthService) {
    this.opened = false;
    this.loggedIn = false;
    this.hasAuthorization = false;
    this.isPassive = false;
  }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
      this.hasAuthorization = this.authService.memberHasAuthorization('VORSTANDSVORSITZENDER') ||
      this.authService.memberHasAuthorization('SYSTEMADMINISTRATOR') ||
      this.authService.memberHasAuthorization('KASSIERER');
      this.isPassive = this.authService.memberHasAuthorization('PASSIVE');
    });
  }

  public toggleOpened(): void {
    this.opened = !this.opened;
  }

  public navigateTo(link: string): void {
    this.router.navigateByUrl(link);
    this.opened = false;
  }

  public logOut(): void {

    this.authService.logOut().subscribe(
      (response) => {
        if (response.status === 204) {
          this.snackBar.open('Logout erfolgreich', 'Schließen',
            {
              duration: 3000,
            }
          );
          this.navigateTo('/login');
        } else {
          this.snackBar.open('Logout nicht vollständig erfolgreich', 'Schließen',
            {
              duration: 3000,
            }
          );
          this.navigateTo('/login');
        }
      },
      (error) => {
        this.snackBar.open('Logout nicht vollständig erfolgreich. Besteht eine Internetverbindung?', 'Schließen',
          {
            duration: 3000,
          }
        );
        this.navigateTo('/login');
      }
    );
  }

}
