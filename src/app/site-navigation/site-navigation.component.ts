import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  opened: boolean;
  loggedIn: boolean;

  constructor(public router: Router, public authService: AuthService) {
    this.opened = false;
    this.loggedIn = false;
  }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
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
    this.authService.logOut();
    this.navigateTo('/login');
  }

}
