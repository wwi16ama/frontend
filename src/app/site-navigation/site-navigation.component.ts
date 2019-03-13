import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  opened: boolean;
  loggedIn: boolean;

  constructor(public router: Router, public loginService: LoginService) {
    this.opened = false;
    this.loggedIn = false;
  }

  ngOnInit() {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
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
    this.loginService.logOut();
    this.navigateTo('/login');
  }

}
