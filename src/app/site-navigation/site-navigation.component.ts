import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-navigation',
  templateUrl: './site-navigation.component.html',
  styleUrls: ['./site-navigation.component.css']
})
export class SiteNavigationComponent implements OnInit {

  opened: boolean;

  constructor(public router: Router) {
    this.opened = true;
  }

  ngOnInit() {
  }

  public toggleOpened(): void {
    this.opened = !this.opened;
  }

  public navigateTo(link: string): void {
    this.router.navigateByUrl(link);
    this.opened = false;
  }

}
